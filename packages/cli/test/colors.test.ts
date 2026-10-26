import assert from "node:assert/strict";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, it } from "node:test";
import { Command } from "commander";
import { registerColorsCommand, writeGlobalsCss } from "../commands/colors.js";
import {
  createAuraColorTheme,
  executeColors,
  generateGlobalsCss,
  type AuraColorTheme,
  type ColorCommandIO,
  type ColorFlags,
} from "../utils/color-theme.js";

type Capture = {
  writes: { filePath: string; contents: string }[];
  logs: string[];
  asks: string[];
  io: ColorCommandIO;
};

function captureIo(ask?: (message: string) => Promise<string>): Capture {
  const writes: Capture["writes"] = [];
  const logs: string[] = [];
  const asks: string[] = [];
  const io: ColorCommandIO = {
    cwd: "/tmp/project",
    isFile: () => false,
    writeFile(filePath, contents) {
      writes.push({ filePath, contents });
    },
    async ask(message) {
      asks.push(message);
      if (!ask) throw new Error("did not expect a prompt");
      return ask(message);
    },
    log(line) {
      logs.push(line);
    },
  };
  return { writes, logs, asks, io };
}

async function runColors(flags: ColorFlags, ask?: (message: string) => Promise<string>) {
  const captured = captureIo(ask);
  const result = await executeColors(flags, captured.io);
  return { ...captured, result };
}

function pairStatus(theme: AuraColorTheme, scope: string, id: string) {
  const pair = theme.report.pairs.find((item) => item.scope === scope && item.id === id);
  assert.ok(pair, `${scope} ${id}`);
  return pair.status;
}

function selectorBody(css: string, header: string): string {
  const start = css.indexOf(header);
  assert.ok(start >= 0, header);
  const open = css.indexOf("{", start);
  let depth = 0;
  for (let index = open; index < css.length; index += 1) {
    const char = css[index];
    if (char === "{") depth += 1;
    else if (char === "}") {
      depth -= 1;
      if (depth === 0) return css.slice(open + 1, index);
    }
  }
  assert.fail(`unclosed ${header}`);
}

function assertStylesheet(css: string) {
  assert.ok(css.includes("@media (prefers-color-scheme: dark)"));
  assert.ok(css.includes(":root:not(.light)"));
  assert.ok(css.includes(".dark"));
  const mediaBody = selectorBody(css, ":root:not(.light)");
  const classBody = selectorBody(css, "\n.dark");
  assert.equal(mediaBody, classBody);
  assert.match(mediaBody, /--chart-1: var\(--accent-11\);/);
  assert.match(mediaBody, /--info: #0d2157;/);
  assert.match(mediaBody, /--info-contrast: #8cb4ff;/);
  assert.match(mediaBody, /--success: #0b2e1e;/);
  assert.match(mediaBody, /--success-contrast: #67cf9d;/);
  assert.match(mediaBody, /--danger: #3c1405;/);
  assert.match(mediaBody, /--danger-contrast: #ff9469;/);
  assert.match(mediaBody, /--warning: #2a2402;/);
  assert.match(mediaBody, /--warning-contrast: #efe08e;/);
  const lightRegion = css.slice(0, css.indexOf("@media (prefers-color-scheme: dark)"));
  assert.match(lightRegion, /--chart-1: var\(--accent-9\);/);
  assert.match(lightRegion, /--aura-button-hover: var\(--accent-10\);/);
  assert.doesNotMatch(lightRegion, /--aura-button-hover: var\(--accent-11\)/);
  assert.match(lightRegion, /--info: #e8ebfe;/);
  assert.match(lightRegion, /--info-contrast: #0927ec;/);
  assert.equal(lightRegion.includes("#0d2157"), false);
  assert.doesNotMatch(css, /Chart graphics need/);
}

describe("aura colors", () => {
  it("accepts coral, warns on light accent-9, and writes once", async () => {
    const coral = createAuraColorTheme({ accent: "#f84657", gray: "#8c7375" });
    assert.equal(coral.canvases.light, "#fcf9f9");
    assert.equal(coral.canvases.dark, "#141011");
    assert.equal(coral.light.accentContrast, "#000000");
    assert.equal(coral.dark.accentContrast, "#000000");
    assert.equal(coral.light.grayContrast, "#000000");
    assert.equal(coral.dark.grayContrast, "#ffffff");
    assert.equal(pairStatus(coral, "light", "accent-9/gray-1"), "warn");
    assert.equal(pairStatus(coral, "dark", "accent-9/gray-1"), "pass");

    const { writes, logs, asks, result } = await runColors({
      accent: "#f84657",
      gray: "#8c7375",
    });
    assert.equal(result.exitCode, 0);
    assert.equal(asks.length, 0);
    assert.equal(writes.length, 1);
    assert.equal(writes[0].filePath, "/tmp/project/app/globals.css");
    assert.equal(writes[0].contents, generateGlobalsCss(coral));
    assert.deepEqual(logs.slice(0, 4), [
      "accent #f84657",
      "gray #8c7375",
      "light #fcf9f9",
      "dark #141011",
    ]);
    assert.ok(logs.includes("pass light accent-contrast/accent-9 6.01 min 4.5"));
    assert.ok(logs.includes("warn light accent-9/gray-1 3.25 min 3"));
    assert.ok(logs.includes("pass light info-contrast/info 7.06 min 4.5"));
    assert.ok(logs.includes("pass dark info-contrast/info 7.35 min 4.5"));
    assert.equal(logs.at(-1), "/tmp/project/app/globals.css");
    assertStylesheet(writes[0].contents);
  });

  it("accepts indigo and warns on dark accent-9", async () => {
    const indigo = createAuraColorTheme({ accent: "#4015ca", gray: "#7254cb" });
    assert.equal(indigo.canvases.light, "#faf9ff");
    assert.equal(indigo.canvases.dark, "#120e20");
    assert.equal(indigo.light.accentContrast, "#ffffff");
    assert.equal(indigo.dark.accentContrast, "#ffffff");
    assert.equal(indigo.light.grayContrast, "#000000");
    assert.equal(indigo.dark.grayContrast, "#ffffff");
    assert.equal(pairStatus(indigo, "light", "accent-9/gray-1"), "pass");
    assert.equal(pairStatus(indigo, "dark", "accent-9/gray-1"), "warn");

    const { writes, logs, asks, result } = await runColors({
      accent: "#4015ca",
      gray: "#7254cb",
    });
    assert.equal(result.exitCode, 0);
    assert.equal(asks.length, 0);
    assert.equal(writes.length, 1);
    assert.ok(logs.includes("warn dark accent-9/gray-1 1.97 min 3"));
    assert.equal(logs.at(-1), writes[0].filePath);
    assertStylesheet(generateGlobalsCss(indigo));
  });

  it("rejects yellow and leaves globals.css unchanged", async () => {
    const { writes, logs, asks, result } = await runColors({
      accent: "#ffe566",
      gray: "#c2b48a",
    });
    assert.equal(result.exitCode, 1);
    assert.equal(asks.length, 0);
    assert.equal(writes.length, 0);
    assert.ok(logs.includes("fail light accent-11/gray-1 4.49 min 4.5"));
    assert.ok(logs.includes("fail light accent-9/gray-1 1.27 min 3"));
    assert.equal(logs.at(-1), "globals.css was not changed");
  });

  it("rejects a light canvas override and keeps the derived dark canvas", async () => {
    const crushed = createAuraColorTheme({
      accent: "#f84657",
      gray: "#8c7375",
      lightBackground: "#8c7375",
    });
    assert.equal(crushed.canvases.light, "#8c7375");
    assert.equal(crushed.canvases.dark, "#141011");
    assert.equal(pairStatus(crushed, "light", "gray-12/gray-1"), "fail");

    const { writes, logs, asks, result } = await runColors({
      accent: "#f84657",
      gray: "#8c7375",
      background: "#8c7375",
    });
    assert.equal(result.exitCode, 1);
    assert.equal(asks.length, 0);
    assert.equal(writes.length, 0);
    assert.ok(logs.some((line) => line.startsWith("fail ")));
    assert.equal(logs.at(-1), "globals.css was not changed");
    assert.ok(logs.includes("dark #141011"));
  });

  it("rejects a bad accent flag without asking", async () => {
    const { writes, asks, logs, result } = await runColors({
      accent: "#nope",
      gray: "#8c7375",
    });
    assert.equal(result.exitCode, 1);
    assert.equal(asks.length, 0);
    assert.equal(writes.length, 0);
    assert.equal(logs.includes("globals.css was not changed"), false);
  });

  it("asks again when the gray prompt is not hex", async () => {
    const answers = ["nope", "#8c7375"];
    const { writes, asks, result } = await runColors({ accent: "#f84657" }, async () => {
      const next = answers.shift();
      assert.ok(next);
      return next;
    });
    assert.deepEqual(asks, ["Gray color (hex):", "Gray color (hex):"]);
    assert.equal(result.exitCode, 0);
    assert.equal(writes.length, 1);
  });

  it("creates a missing parent directory and writes the stylesheet", () => {
    const root = mkdtempSync(join(tmpdir(), "aura-colors-"));
    try {
      const theme = createAuraColorTheme({ accent: "#4015ca", gray: "#7254cb" });
      const css = generateGlobalsCss(theme);
      const written = writeGlobalsCss(root, css);
      assert.equal(written, join(root, "app/globals.css"));
      assert.equal(readFileSync(written, "utf8"), css);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  it("prefers an existing globals.css candidate", () => {
    const root = mkdtempSync(join(tmpdir(), "aura-colors-"));
    try {
      mkdirSync(join(root, "styles"));
      const existing = join(root, "styles/globals.css");
      writeFileSync(existing, "old\n");
      const theme = createAuraColorTheme({ accent: "#4015ca", gray: "#7254cb" });
      const written = writeGlobalsCss(root, generateGlobalsCss(theme));
      assert.equal(written, existing);
      assert.equal(existsSync(join(root, "app/globals.css")), false);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  it("sets process.exitCode from a bad flag and does not exit", async () => {
    const root = mkdtempSync(join(tmpdir(), "aura-colors-"));
    const previousDir = process.cwd();
    const previousCode = process.exitCode;
    process.chdir(root);
    try {
      const program = new Command();
      program.exitOverride();
      registerColorsCommand(program);
      await program.parseAsync(["node", "aura", "colors", "--accent", "#nope", "--gray", "#8c7375"]);
      assert.equal(process.exitCode, 1);
      assert.equal(existsSync(join(root, "app/globals.css")), false);
    } finally {
      process.chdir(previousDir);
      process.exitCode = previousCode;
    }
  });
});
