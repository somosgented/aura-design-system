import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WORKSPACE_ROOT = path.resolve(__dirname, "../../..");
const AGENTS_SKILLS_PATH = path.join(WORKSPACE_ROOT, ".agents/skills");
const AURA_SKILL_PATH = path.join(WORKSPACE_ROOT, ".agents/skills/aura");
const REGISTRY_SKILLS_PATH = path.join(__dirname, "../registry/default/skills");

const SKILL_DIRS = [
  "aura-forms",
  "generate-brand-images",
  "port-component-to-aura",
  "update-feature-map",
  "verify-aura-ui",
];

function copyDir(src: string, dest: string) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(from, to);
    } else {
      fs.copyFileSync(from, to);
    }
  }
}

function syncSkills() {
  if (!fs.existsSync(AGENTS_SKILLS_PATH)) {
    console.warn(`[sync-skills] Source not found: ${AGENTS_SKILLS_PATH}`);
    return;
  }

  if (!fs.existsSync(REGISTRY_SKILLS_PATH)) {
    fs.mkdirSync(REGISTRY_SKILLS_PATH, { recursive: true });
    console.log(`[sync-skills] Created ${REGISTRY_SKILLS_PATH}`);
  }

  const auraDest = path.join(REGISTRY_SKILLS_PATH, "aura");
  if (fs.existsSync(path.join(AURA_SKILL_PATH, "SKILL.md"))) {
    if (fs.existsSync(auraDest)) {
      fs.rmSync(auraDest, { recursive: true, force: true });
    }
    copyDir(AURA_SKILL_PATH, auraDest);
    console.log(`[sync-skills] aura (.agents/skills/aura)`);
  } else {
    console.warn(`[sync-skills] Skip (missing SKILL.md): .agents/skills/aura`);
  }

  let synced = 0;
  for (const dir of SKILL_DIRS) {
    const src = path.join(AGENTS_SKILLS_PATH, dir);
    const dest = path.join(REGISTRY_SKILLS_PATH, dir);
    const skillMd = path.join(src, "SKILL.md");
    if (fs.existsSync(skillMd)) {
      if (fs.existsSync(dest)) {
        fs.rmSync(dest, { recursive: true, force: true });
      }
      copyDir(src, dest);
      synced++;
      console.log(`[sync-skills] ${dir}`);
    } else {
      console.warn(`[sync-skills] Skip (missing SKILL.md): ${dir}`);
    }
  }
  console.log(`[sync-skills] Synced aura + ${synced}/${SKILL_DIRS.length} procedure skills.\n`);
}

syncSkills();
