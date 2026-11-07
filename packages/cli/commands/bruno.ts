import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { ensureAgentsRules } from "./rules-link.js";
import type { Stack } from "../utils/stack.js";

export const BRUNO_DIR = "bruno";

export const BRUNO_GITIGNORE_LINES = ["bruno/.env"];

const DEFAULT_PORTS: Record<Stack, number> = {
  next: 3000,
  node: 3000,
  python: 8000,
  go: 8080,
  jvm: 8080,
  dotnet: 5000,
  php: 8000,
  ruby: 3000,
  rust: 8080,
  generic: 8080,
};

function templatesRoot(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  return join(here, "..", "templates");
}

function fill(rel: string, vars: Record<string, string>): string {
  let out = readFileSync(join(templatesRoot(), rel), "utf-8");
  for (const [key, value] of Object.entries(vars)) {
    out = out.split(`{{${key}}}`).join(value);
  }
  return out;
}

function write(path: string, content: string, label: string, force: boolean): void {
  if (existsSync(path) && !force) {
    console.log(`  skip (exists): ${label}`);
    return;
  }
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content, "utf-8");
  console.log(`  write: ${label}`);
}

export function scaffoldBruno(
  root: string,
  stack: Stack,
  name: string,
  force: boolean,
): void {
  const collection = join(root, BRUNO_DIR);
  write(
    join(collection, "bruno.json"),
    fill("bruno/bruno.json", { NAME: name }),
    "bruno/bruno.json",
    false,
  );
  write(
    join(collection, "environments", "local.bru"),
    fill("bruno/environments/local.bru", { PORT: String(DEFAULT_PORTS[stack]) }),
    "bruno/environments/local.bru",
    false,
  );
  write(
    join(collection, "health.bru"),
    fill("bruno/health.bru", { HEALTH_PATH: stack === "next" ? "/api/health" : "/health" }),
    "bruno/health.bru",
    false,
  );

  ensureAgentsRules(root);
  write(
    join(root, ".agents", "rules", "bruno.mdc"),
    readFileSync(join(templatesRoot(), "agents/rules/bruno.mdc"), "utf-8"),
    ".agents/rules/bruno.mdc",
    force,
  );
}
