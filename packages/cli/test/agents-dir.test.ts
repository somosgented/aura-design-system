import assert from "node:assert/strict";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { describe, it } from "node:test";
import {
  AGENTS_BLOCK_END,
  AGENTS_BLOCK_START,
  ensureAgentsEntry,
  upsertAgentsBlock,
} from "../commands/agents-entry.js";
import { migrateCursorSkills } from "../commands/rules-link.js";

const quiet = { log: console.log, warn: console.warn };

function withRoot(files: Record<string, string>, run: (root: string) => void) {
  return () => {
    const root = mkdtempSync(join(tmpdir(), "aura-agents-"));
    console.log = () => {};
    console.warn = () => {};
    try {
      for (const [rel, content] of Object.entries(files)) {
        mkdirSync(dirname(join(root, rel)), { recursive: true });
        writeFileSync(join(root, rel), content);
      }
      run(root);
    } finally {
      console.log = quiet.log;
      console.warn = quiet.warn;
      rmSync(root, { recursive: true, force: true });
    }
  };
}

const read = (root: string, rel: string) => readFileSync(join(root, rel), "utf8");
const exists = (root: string, rel: string) => existsSync(join(root, rel));

describe(".cursor skills move to .agents", () => {
  it(
    "moves every skill, drops identical copies, keeps differing ones, and removes an empty .cursor",
    withRoot(
      {
        ".cursor/skills/team-review/SKILL.md": "team\n",
        ".cursor/skills/team-review/refs/a.md": "ref\n",
        ".cursor/skills/same/SKILL.md": "same\n",
        ".agents/skills/same/SKILL.md": "same\n",
        ".cursor/skills/drift/SKILL.md": "cursor copy\n",
        ".agents/skills/drift/SKILL.md": "agents copy\n",
      },
      (root) => {
        const kept = migrateCursorSkills(root);
        assert.deepEqual(kept, ["drift"]);
        assert.equal(read(root, ".agents/skills/team-review/SKILL.md"), "team\n");
        assert.equal(read(root, ".agents/skills/team-review/refs/a.md"), "ref\n");
        assert.equal(exists(root, ".cursor/skills/same"), false);
        assert.equal(read(root, ".agents/skills/drift/SKILL.md"), "agents copy\n");
        assert.equal(read(root, ".cursor/skills/drift/SKILL.md"), "cursor copy\n");

        rmSync(join(root, ".cursor/skills/drift"), { recursive: true });
        migrateCursorSkills(root);
        assert.equal(exists(root, ".cursor"), false);
      },
    ),
  );

  it(
    "removes a .cursor/skills symlink and keeps other .cursor files",
    withRoot({ ".agents/skills/x/SKILL.md": "x\n", ".cursor/mcp.json": "{}" }, (root) => {
      symlinkSync("../.agents/skills", join(root, ".cursor/skills"));
      migrateCursorSkills(root);
      assert.equal(exists(root, ".cursor/skills"), false);
      assert.ok(exists(root, ".cursor/mcp.json"));
      assert.ok(exists(root, ".agents/skills/x/SKILL.md"));
    }),
  );
});

describe("AGENTS.md entry", () => {
  it(
    "writes AGENTS.md and CLAUDE.md for a project with neither",
    withRoot({}, (root) => {
      ensureAgentsEntry(root);
      const agents = read(root, "AGENTS.md");
      assert.ok(agents.startsWith("# AGENTS.md\n"));
      assert.ok(agents.includes(AGENTS_BLOCK_START));
      assert.ok(agents.includes("`.agents/rules/*.mdc`"));
      assert.equal(read(root, "CLAUDE.md"), "@AGENTS.md\n");
    }),
  );

  it(
    "appends to a team AGENTS.md once and prepends the import to a team CLAUDE.md",
    withRoot({ "AGENTS.md": "# Team\n\nOur policy.\n", "CLAUDE.md": "Use pnpm.\n" }, (root) => {
      ensureAgentsEntry(root);
      ensureAgentsEntry(root);
      const agents = read(root, "AGENTS.md");
      assert.ok(agents.startsWith("# Team\n\nOur policy.\n\n"));
      assert.equal(agents.split(AGENTS_BLOCK_START).length, 2);
      assert.equal(read(root, "CLAUDE.md"), "@AGENTS.md\n\nUse pnpm.\n");
    }),
  );

  it("replaces only the managed block and keeps text around it", () => {
    const stale = `# Team\n\n${AGENTS_BLOCK_START}\nold\n${AGENTS_BLOCK_END}\n\n## After\n`;
    const next = upsertAgentsBlock(stale);
    assert.ok(next.startsWith("# Team\n\n"));
    assert.ok(next.endsWith("\n## After\n"));
    assert.equal(next.includes("\nold\n"), false);
    assert.equal(upsertAgentsBlock(next), next);
  });
});
