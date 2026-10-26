import assert from "node:assert/strict";
import {
  existsSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import {
  retireProjectBrain,
  scaffoldFeatureMap,
  scaffoldFeatureMapAgentFiles,
} from "../commands/blueprint.js";

const templates = fileURLToPath(new URL("../templates/", import.meta.url));
const repoRoot = fileURLToPath(new URL("../../../", import.meta.url));

function withProject(run: (root: string) => void): void {
  const root = mkdtempSync(join(tmpdir(), "aura-feature-map-"));
  try {
    writeFileSync(
      join(root, "package.json"),
      JSON.stringify({ name: "acme-shop", scripts: {} }, null, 2),
    );
    run(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
}

describe("feature map blueprint", () => {
  it("keeps the template rule and skill identical to the monorepo copies", () => {
    assert.equal(
      readFileSync(join(templates, "agents/rules/feature-map.mdc"), "utf8"),
      readFileSync(join(repoRoot, ".agents/rules/feature-map.mdc"), "utf8"),
    );
    assert.equal(
      readFileSync(join(templates, "agents/skills/update-feature-map/SKILL.md"), "utf8"),
      readFileSync(join(repoRoot, ".agents/skills/update-feature-map/SKILL.md"), "utf8"),
    );
  });

  it("scaffolds an empty feature map with its base and no progress log", () => {
    withProject((root) => {
      scaffoldFeatureMap(root, "shop", false);
      scaffoldFeatureMapAgentFiles(root, false);
      const vault = join(root, "wiki", "obsidian-shop");
      const base = readFileSync(join(vault, "Feature-Map", "Feature-Map.base"), "utf8");
      assert.match(base, /file\.inFolder\("Feature-Map"\)/);
      assert.match(base, /type: table/);
      assert.ok(existsSync(join(vault, "01-Identity", "Image-Identity.md")));
      assert.ok(existsSync(join(root, ".agents/rules/feature-map.mdc")));
      assert.equal(existsSync(join(root, ".cursor/rules")), false);
      assert.ok(existsSync(join(root, ".agents/skills/update-feature-map/SKILL.md")));
      assert.equal(existsSync(join(vault, "00-General", "Internal-Progress.md")), false);
      assert.equal(existsSync(join(root, "wiki", "bruno-shop")), false);
      assert.equal(existsSync(join(root, "scripts", "brain-progress.ts")), false);
      const plugins = JSON.parse(readFileSync(join(vault, ".obsidian", "core-plugins.json"), "utf8"));
      assert.equal(plugins.bases, true);
    });
  });

  it("moves a legacy .cursor/rules directory into .agents/rules and removes a symlink", () => {
    withProject((root) => {
      mkdirSync(join(root, ".agents/rules"), { recursive: true });
      writeFileSync(join(root, ".agents/rules/feature-map.mdc"), "kept\n");
      mkdirSync(join(root, ".cursor/rules"), { recursive: true });
      writeFileSync(join(root, ".cursor/rules/team.mdc"), "team\n");
      scaffoldFeatureMapAgentFiles(root, false);
      assert.equal(existsSync(join(root, ".cursor/rules")), false);
      assert.equal(readFileSync(join(root, ".agents/rules/team.mdc"), "utf8"), "team\n");
      assert.equal(readFileSync(join(root, ".agents/rules/feature-map.mdc"), "utf8"), "kept\n");

      mkdirSync(join(root, ".cursor"), { recursive: true });
      symlinkSync("../.agents/rules", join(root, ".cursor/rules"));
      scaffoldFeatureMapAgentFiles(root, false);
      assert.equal(existsSync(join(root, ".cursor/rules")), false);
      assert.equal(lstatSync(join(root, ".agents/rules")).isDirectory(), true);
    });
  });

  it("removes the retired Project Brain files and keeps wiki notes", () => {
    withProject((root) => {
      mkdirSync(join(root, ".cursor/rules"), { recursive: true });
      mkdirSync(join(root, ".cursor/skills/update-project-brain"), { recursive: true });
      mkdirSync(join(root, "scripts"), { recursive: true });
      mkdirSync(join(root, "wiki/obsidian-shop/00-General"), { recursive: true });
      writeFileSync(join(root, ".cursor/rules/self-documenting-system.mdc"), "x");
      mkdirSync(join(root, ".agents/rules"), { recursive: true });
      writeFileSync(join(root, ".agents/rules/self-documenting-system.mdc"), "y");
      writeFileSync(join(root, ".cursor/skills/update-project-brain/SKILL.md"), "x");
      writeFileSync(join(root, "scripts/brain-progress.ts"), "x");
      writeFileSync(join(root, "wiki/obsidian-shop/00-General/Internal-Progress.md"), "kept");
      writeFileSync(
        join(root, "package.json"),
        JSON.stringify({
          name: "acme-shop",
          scripts: { "brain:progress": "tsx scripts/brain-progress.ts", dev: "next dev" },
        }),
      );

      retireProjectBrain(root);

      assert.equal(existsSync(join(root, ".cursor/rules/self-documenting-system.mdc")), false);
      assert.equal(existsSync(join(root, ".agents/rules/self-documenting-system.mdc")), false);
      assert.equal(existsSync(join(root, ".cursor/skills/update-project-brain")), false);
      assert.equal(existsSync(join(root, "scripts/brain-progress.ts")), false);
      assert.ok(existsSync(join(root, "wiki/obsidian-shop/00-General/Internal-Progress.md")));
      const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
      assert.deepEqual(pkg.scripts, { dev: "next dev" });
    });
  });

  it("leaves a customized brain:progress script alone", () => {
    withProject((root) => {
      writeFileSync(
        join(root, "package.json"),
        JSON.stringify({ name: "acme-shop", scripts: { "brain:progress": "node custom.js" } }),
      );
      retireProjectBrain(root);
      const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
      assert.equal(pkg.scripts["brain:progress"], "node custom.js");
    });
  });
});
