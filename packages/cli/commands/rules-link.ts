import {
  existsSync,
  lstatSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  renameSync,
  rmSync,
  rmdirSync,
  unlinkSync,
} from "fs";
import { dirname, join, relative } from "path";

export const AGENTS_RULES_DIR = join(".agents", "rules");
export const AGENTS_SKILLS_DIR = join(".agents", "skills");
const LEGACY_CURSOR_DIR = ".cursor";
const LEGACY_CURSOR_RULES = join(LEGACY_CURSOR_DIR, "rules");
const LEGACY_CURSOR_SKILLS = join(LEGACY_CURSOR_DIR, "skills");

function pathExists(path: string): boolean {
  try {
    lstatSync(path);
    return true;
  } catch {
    return false;
  }
}

export function ensureAgentsRules(projectRoot: string): void {
  const agentsDir = join(projectRoot, AGENTS_RULES_DIR);
  const legacyDir = join(projectRoot, LEGACY_CURSOR_RULES);
  mkdirSync(agentsDir, { recursive: true });

  if (!pathExists(legacyDir)) return;

  const stat = lstatSync(legacyDir);
  if (stat.isSymbolicLink()) {
    unlinkSync(legacyDir);
    console.log("  remove: .cursor/rules symlink (agent rules live in .agents/rules)");
    return;
  }

  if (!stat.isDirectory()) {
    throw new Error(`${LEGACY_CURSOR_RULES} exists and is not a directory`);
  }

  for (const name of readdirSync(legacyDir)) {
    const from = join(legacyDir, name);
    const to = join(agentsDir, name);
    if (!existsSync(to)) {
      renameSync(from, to);
      console.log(`  move: .cursor/rules/${name} -> .agents/rules/${name}`);
    } else {
      rmSync(from, { recursive: true, force: true });
      console.log(
        `  drop duplicate .cursor/rules/${name} (.agents/rules/${name} already exists)`,
      );
    }
  }
  rmSync(legacyDir, { recursive: true, force: true });
}

export function migrateLegacySkill(projectRoot: string, name: string): void {
  const from = join(projectRoot, ".cursor", "skills", name);
  const to = join(projectRoot, ".agents", "skills", name);
  if (!existsSync(from) || existsSync(to)) return;
  mkdirSync(dirname(to), { recursive: true });
  renameSync(from, to);
  console.log(`  move: .cursor/skills/${name} -> .agents/skills/${name}`);
}

function filesUnder(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const abs = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...filesUnder(abs));
    else out.push(abs);
  }
  return out;
}

function sameTree(a: string, b: string): boolean {
  if (lstatSync(a).isDirectory() !== lstatSync(b).isDirectory()) return false;
  if (!lstatSync(a).isDirectory()) return readFileSync(a).equals(readFileSync(b));
  const left = filesUnder(a).map((f) => relative(a, f)).sort();
  const right = filesUnder(b).map((f) => relative(b, f)).sort();
  if (left.join("\n") !== right.join("\n")) return false;
  return left.every((rel) => readFileSync(join(a, rel)).equals(readFileSync(join(b, rel))));
}

function removeIfEmpty(dir: string): void {
  if (pathExists(dir) && lstatSync(dir).isDirectory() && readdirSync(dir).length === 0) {
    rmdirSync(dir);
  }
}

export function migrateCursorSkills(projectRoot: string): string[] {
  const legacyDir = join(projectRoot, LEGACY_CURSOR_SKILLS);
  const kept: string[] = [];
  if (!pathExists(legacyDir)) return kept;

  if (lstatSync(legacyDir).isSymbolicLink()) {
    unlinkSync(legacyDir);
    console.log("  remove: .cursor/skills symlink (agent skills live in .agents/skills)");
  } else {
    const agentsDir = join(projectRoot, AGENTS_SKILLS_DIR);
    mkdirSync(agentsDir, { recursive: true });
    for (const name of readdirSync(legacyDir)) {
      const from = join(legacyDir, name);
      const to = join(agentsDir, name);
      if (!pathExists(to)) {
        renameSync(from, to);
        console.log(`  move: .cursor/skills/${name} -> .agents/skills/${name}`);
      } else if (sameTree(from, to)) {
        rmSync(from, { recursive: true, force: true });
        console.log(`  drop duplicate .cursor/skills/${name} (same as .agents/skills/${name})`);
      } else {
        kept.push(name);
        console.warn(
          `  keep: .cursor/skills/${name} differs from .agents/skills/${name}; merge it by hand, then delete it`,
        );
      }
    }
    removeIfEmpty(legacyDir);
  }
  removeIfEmpty(join(projectRoot, LEGACY_CURSOR_DIR));
  return kept;
}
