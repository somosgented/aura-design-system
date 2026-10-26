import assert from "node:assert/strict";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import { patchEslintSource, scaffoldProofs } from "../commands/gdp.js";
import { installerOptions } from "../utils/run.js";

const templates = fileURLToPath(new URL("../templates/", import.meta.url));

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const abs = join(dir, entry);
    return statSync(abs).isDirectory() ? walk(abs) : [abs];
  });
}

describe("gdp-ts blueprint", () => {
  it("patches export default defineConfig(...)", () => {
    const src = `import { defineConfig } from "eslint/config";
import next from "eslint-config-next";

export default defineConfig([
  ...next,
]);
`;
    const patched = patchEslintSource(src);
    assert.ok(patched);
    assert.match(patched, /^import gdp from "@gdp-ts\/core\/lint\/eslint";/);
    assert.match(patched, /\.\.\.gdp\(\{\s*proofs: \["\*\*\/proofs\/\*\*"\],\s*\}\),\n\);\n$/);
  });

  it("patches defineConfig assigned to a const and tseslint.config", () => {
    const assigned = patchEslintSource(`const eslintConfig = defineConfig(base);\nexport default eslintConfig;\n`);
    assert.ok(assigned?.includes("...gdp("));
    const tseslintCall = patchEslintSource(`export default tseslint.config(a, b);\n`);
    assert.ok(tseslintCall?.includes("...gdp("));
  });

  it("still patches plain arrays and is idempotent", () => {
    const patched = patchEslintSource(`export default [\n  a,\n];\n`);
    assert.ok(patched?.includes("...gdp("));
    assert.equal(patchEslintSource(patched as string), patched);
  });

  it("returns null for shapes it cannot patch safely", () => {
    assert.equal(patchEslintSource(`export default buildConfig();\n`), null);
    assert.equal(patchEslintSource(`export default defineConfig([\n  a,\n`), null);
  });

  it("ships samples without documentation comments", () => {
    for (const file of walk(join(templates, "gdp"))) {
      const comments = readFileSync(file, "utf8")
        .split("\n")
        .filter((line) => /^\s*(\/\/|\/\*|\*)/.test(line))
        .filter((line) => !/@ts-expect-error|eslint-disable/.test(line));
      assert.deepEqual(comments, [], file);
    }
  });

  it("never overwrites existing proofs", () => {
    const root = mkdtempSync(join(tmpdir(), "aura-gdp-"));
    try {
      writeFileSync(join(root, "package.json"), JSON.stringify({ name: "acme-shop" }));
      mkdirSync(join(root, "proofs"), { recursive: true });
      writeFileSync(join(root, "proofs/session-is-valid.ts"), "team proof\n");
      scaffoldProofs(root);
      assert.equal(readFileSync(join(root, "proofs/session-is-valid.ts"), "utf8"), "team proof\n");
      assert.ok(existsSync(join(root, "proofs/user-has-org-role.ts")));
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  it("runs installers without stdin when there is no TTY", () => {
    const original = Object.getOwnPropertyDescriptor(process.stdin, "isTTY");
    Object.defineProperty(process.stdin, "isTTY", { value: false, configurable: true });
    try {
      const options = installerOptions("/tmp/x");
      assert.deepEqual(options.stdio, ["ignore", "inherit", "inherit"]);
      assert.equal((options.env as Record<string, string>).CI, "1");
      assert.ok(typeof options.timeout === "number");
    } finally {
      if (original) Object.defineProperty(process.stdin, "isTTY", original);
      else delete (process.stdin as { isTTY?: boolean }).isTTY;
    }
  });
});
