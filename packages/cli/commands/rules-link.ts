import {
  existsSync,
  lstatSync,
  mkdirSync,
  readdirSync,
  renameSync,
  rmSync,
  unlinkSync,
} from "fs";
import { dirname, join } from "path";

export const AGENTS_RULES_DIR = join(".agents", "rules");
const LEGACY_CURSOR_RULES = join(".cursor", "rules");

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
    console.log("  remove: .cursor/rules (Cursor reads .agents/rules)");
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
