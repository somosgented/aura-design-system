import {
  existsSync,
  lstatSync,
  mkdirSync,
  readdirSync,
  readlinkSync,
  renameSync,
  rmSync,
  symlinkSync,
} from "fs";
import { join } from "path";

export const AGENTS_RULES_DIR = join(".agents", "rules");
export const CURSOR_RULES_LINK = join(".cursor", "rules");
const CURSOR_RULES_LINK_TARGET = "../.agents/rules";

function pathExists(path: string): boolean {
  try {
    lstatSync(path);
    return true;
  } catch {
    return false;
  }
}

export function linkCursorRulesToAgents(projectRoot: string): void {
  const agentsDir = join(projectRoot, AGENTS_RULES_DIR);
  const cursorDir = join(projectRoot, CURSOR_RULES_LINK);
  mkdirSync(agentsDir, { recursive: true });
  mkdirSync(join(projectRoot, ".cursor"), { recursive: true });

  if (pathExists(cursorDir)) {
    const stat = lstatSync(cursorDir);
    if (stat.isSymbolicLink()) {
      if (readlinkSync(cursorDir) === CURSOR_RULES_LINK_TARGET) return;
      rmSync(cursorDir);
    } else if (stat.isDirectory()) {
      for (const name of readdirSync(cursorDir)) {
        const from = join(cursorDir, name);
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
      rmSync(cursorDir, { recursive: true, force: true });
    } else {
      throw new Error(`${CURSOR_RULES_LINK} exists and is not a directory`);
    }
  }

  if (process.platform === "win32") {
    symlinkSync(agentsDir, cursorDir, "junction");
  } else {
    symlinkSync(CURSOR_RULES_LINK_TARGET, cursorDir);
  }
  console.log(`  link: .cursor/rules -> ${CURSOR_RULES_LINK_TARGET}`);
}
