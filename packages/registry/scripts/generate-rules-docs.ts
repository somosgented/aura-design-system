import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RULES_PATH = path.join(__dirname, "../registry/default/rules");
const METADATA_PATH = path.join(__dirname, "../metadata");
const DOCS_RULES_PATH = path.join(__dirname, "../../../apps/www/content/docs/rules");

function humanize(name: string): string {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function parseFrontmatter(raw: string): { title?: string; description?: string; body: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n?/;
  const match = raw.match(frontmatterRegex);
  let body = raw;
  const result: { title?: string; description?: string; body: string } = { body: raw };

  if (match) {
    body = raw.slice(match[0].length);
    result.body = body;
    const yaml = match[1];
    const titleMatch = yaml.match(/^title:\s*(.+)$/m);
    const descMatch = yaml.match(/^description:\s*(.+)$/m);
    if (titleMatch) result.title = titleMatch[1].trim().replace(/^["']|["']$/g, "");
    if (descMatch) result.description = descMatch[1].trim().replace(/^["']|["']$/g, "");
  }

  return result;
}

function getFirstH1(body: string): string | null {
  const match = body.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : null;
}

function getFirstParagraph(body: string): string | null {
  const trimmed = body.trim();
  const lines: string[] = [];
  for (const line of trimmed.split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    if (t.startsWith("-") || t.startsWith("*")) break;
    lines.push(t);
    if (t.endsWith(".")) break;
  }
  const text = lines.join(" ").trim();
  return text.length > 0 ? text : null;
}

function getFirstLine(body: string): string {
  const line = body.trim().split("\n").find((l) => l.trim().length > 0);
  const raw = line ? line.trim().slice(0, 160) : "Aura design system rule.";
  if (raw.startsWith("#")) return raw.replace(/^#+\s*/, "").trim() || "Aura design system rule.";
  return raw;
}

interface RuleDoc {
  name: string;
  title: string;
  description: string;
  body: string;
}

function loadRuleMetadata(name: string): { title?: string; description?: string } {
  const ymlPath = path.join(METADATA_PATH, `${name}.rule.yml`);
  if (!fs.existsSync(ymlPath)) return {};
  try {
    const content = fs.readFileSync(ymlPath, "utf-8");
    const titleMatch = content.match(/^header:\s*\n\s+title:\s*(.+)$/m);
    const descMatch = content.match(/^header:\s*\n(?:\s+title:.*\n)?\s+description:\s*(.+)$/m);
    const out: { title?: string; description?: string } = {};
    if (titleMatch) out.title = titleMatch[1].trim().replace(/^["']|["']$/g, "");
    if (descMatch) out.description = descMatch[1].trim().replace(/^["']|["']$/g, "");
    return out;
  } catch {
    return {};
  }
}

function processRuleFile(file: string): RuleDoc | null {
  const filePath = path.join(RULES_PATH, file);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { title: fmTitle, description: fmDesc, body } = parseFrontmatter(raw);
  const name = file.replace(".mdc", "");
  const meta = loadRuleMetadata(name);
  const title =
    meta.title ?? fmTitle ?? getFirstH1(body) ?? humanize(name);
  const description =
    meta.description ?? fmDesc ?? getFirstParagraph(body) ?? getFirstLine(body);

  return { name, title, description, body };
}

function stripExistingInstallation(body: string): string {
  return body.replace(/\n## Installation\n\n```bash\n[^\n]+\n```\s*/s, "\n").trim();
}

function injectInstallation(body: string, ruleName: string): string {
  const installationBlock = `

## Installation
\`\`\`bash
pnpm dlx shadcn@latest add @aura/rule-${ruleName}
\`\`\`
`;
  const stripped = stripExistingInstallation(body);
  const firstH1 = stripped.match(/^# .+$/m);
  if (firstH1) {
    const idx = stripped.indexOf(firstH1[0]) + firstH1[0].length;
    return stripped.slice(0, idx) + installationBlock + stripped.slice(idx).trimStart();
  }
  return installationBlock.trim() + "\n\n" + stripped;
}

function yamlScalar(value: string): string {
  return JSON.stringify(value);
}

function generateRuleMdx(rule: RuleDoc): string {
  const bodyWithInstallation = injectInstallation(rule.body, rule.name);
  return `---
title: ${yamlScalar(rule.title)}
description: ${yamlScalar(rule.description)}
---

${bodyWithInstallation}
`;
}

const RULES_INDEX_INTRO = `---
title: Rules & skills
description: What an agent loads in an Aura project, when it loads it, and which file wins when two disagree.
---

## How an agent reads an Aura project

\`.agents/\` is the one home for agent files, whatever the tool. \`aura blueprint\` writes a managed block into the root \`AGENTS.md\` that tells every agent to apply \`.agents/rules/\` and load skills from \`.agents/skills/\`, and a \`CLAUDE.md\` that imports it. Leftover \`.cursor/rules\` and \`.cursor/skills\` move into \`.agents/\`.

Three kinds of files steer an agent. A rule is a limit that always applies. A skill is a procedure the agent loads when the task matches its description. \`DESIGN.md\` is the narrative spec both point to.

| Layer | Path | Loaded | Holds |
| --- | --- | --- | --- |
| Always-on rules | \`.agents/rules/*.mdc\` | Every turn. The root \`AGENTS.md\` points every agent at it | Process policy: feature map, no comments, the \`DESIGN.md\` pointer, and Bruno on backends |
| Aura skill | \`.agents/skills/aura/\` | When the task is UI | Design guardrails: color, type, 13px spacing, icons, motion, forms, lint |
| Procedure skills | \`.agents/skills/<name>/\` | When the task matches the skill description | Steps: forms, UI verify, porting, feature map, brand images |
| Narrative spec | \`DESIGN.md\` | When reasoning about tokens or brand | Theme, color roles, the grid, motion, product principles |

The full skill catalog, with triggers and install commands, is on [Skills](/docs/rules/skills). Design guardrails are on [Aura skill](/docs/rules/aura-skill).

## Which file wins

1. The user's explicit instruction for the task.
2. Always-on rules in \`.agents/rules/\`.
3. The Aura skill and \`DESIGN.md\`.
4. Upstream skills: \`shadcn\`, \`gdp-ts\`.
5. Third-party [audits](/docs/audits). They return findings and never override Aura.

## Install

| Project | Command | What it writes |
| --- | --- | --- |
| Next.js or React app | \`pnpm dlx shadcn@latest add @aura/rules\` | \`feature-map\`, \`no-comments\`, \`design-md\` and root \`DESIGN.md\` |
| Any project, any language | \`npx @aura-design/cli@latest blueprint .\` | \`feature-map\`, \`no-comments\`, the feature map vault, and per stack Sonar, Bruno, and image generation. See [CLI](/docs/cli#blueprint-projectdir) |

Install a single rule with \`pnpm dlx shadcn@latest add @aura/rule-<name>\`.

## Rules in the registry

`;

const CLI_RULES_SECTION = `## Rules the CLI adds by stack

### [Bruno collection](/docs/rules/bruno)

Written by \`aura blueprint\` on backend projects. Each PR that changes an HTTP endpoint updates its \`.bru\` request in \`bruno/\`. Not in the registry.
`;

function generateRulesIndex(rules: RuleDoc[]): string {
  let content = RULES_INDEX_INTRO;
  for (const rule of rules) {
    content += `### [${rule.title}](/docs/rules/${rule.name})\n\n`;
    content += `${rule.description}\n\n`;
  }
  return content + CLI_RULES_SECTION;
}

function generateRulesDocs() {
  if (!fs.existsSync(RULES_PATH)) {
    console.error(`[generate-rules-docs] Rules path not found: ${RULES_PATH}`);
    process.exit(1);
  }

  if (!fs.existsSync(DOCS_RULES_PATH)) {
    fs.mkdirSync(DOCS_RULES_PATH, { recursive: true });
    console.log(`[generate-rules-docs] Created ${DOCS_RULES_PATH}`);
  }

  const files = fs.readdirSync(RULES_PATH).filter((f) => f.endsWith(".mdc"));
  const rules: RuleDoc[] = [];

  for (const file of files) {
    const rule = processRuleFile(file);
    if (rule) {
      rules.push(rule);
      const mdxPath = path.join(DOCS_RULES_PATH, `${rule.name}.mdx`);
      fs.writeFileSync(mdxPath, generateRuleMdx(rule));
      console.log(`[generate-rules-docs] ${rule.name}.mdx`);
    }
  }

  rules.sort((a, b) => a.title.localeCompare(b.title));

  const indexPath = path.join(DOCS_RULES_PATH, "index.mdx");
  fs.writeFileSync(indexPath, generateRulesIndex(rules));
  console.log(`[generate-rules-docs] index.mdx`);

  console.log(`\n[generate-rules-docs] Generated ${rules.length} rule docs.\n`);
}

generateRulesDocs();
