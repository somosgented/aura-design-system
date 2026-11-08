import { existsSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

export const AGENTS_BLOCK_START = "<!-- aura:agents:start -->";
export const AGENTS_BLOCK_END = "<!-- aura:agents:end -->";
const CLAUDE_IMPORT = "@AGENTS.md";

function agentsBlock(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  const body = readFileSync(join(here, "..", "templates", "agents", "AGENTS.block.md"), "utf-8");
  return `${AGENTS_BLOCK_START}\n${body.trimEnd()}\n${AGENTS_BLOCK_END}\n`;
}

export function upsertAgentsBlock(current: string | null): string {
  const block = agentsBlock();
  if (current === null) return `# AGENTS.md\n\n${block}`;
  const start = current.indexOf(AGENTS_BLOCK_START);
  const end = current.indexOf(AGENTS_BLOCK_END);
  if (start !== -1 && end > start) {
    return current.slice(0, start) + block + current.slice(end + AGENTS_BLOCK_END.length).replace(/^\n/, "");
  }
  const separator = current.endsWith("\n") ? "\n" : "\n\n";
  return current + separator + block;
}

export function ensureAgentsEntry(projectRoot: string): void {
  const agentsPath = join(projectRoot, "AGENTS.md");
  const current = existsSync(agentsPath) ? readFileSync(agentsPath, "utf-8") : null;
  const next = upsertAgentsBlock(current);
  if (current === next) {
    console.log("  AGENTS.md: agent files block up to date");
  } else {
    writeFileSync(agentsPath, next, "utf-8");
    console.log(`  ${current === null ? "write" : "patch"}: AGENTS.md (agent files block)`);
  }

  const claudePath = join(projectRoot, "CLAUDE.md");
  if (!existsSync(claudePath)) {
    writeFileSync(claudePath, `${CLAUDE_IMPORT}\n`, "utf-8");
    console.log("  write: CLAUDE.md (@AGENTS.md)");
    return;
  }
  const claude = readFileSync(claudePath, "utf-8");
  if (claude.split(/\r?\n/).some((line) => line.trim() === CLAUDE_IMPORT)) {
    console.log("  CLAUDE.md: already imports AGENTS.md");
    return;
  }
  writeFileSync(claudePath, `${CLAUDE_IMPORT}\n\n${claude}`, "utf-8");
  console.log("  patch: CLAUDE.md (@AGENTS.md)");
}
