---
feature: MCP and agent blueprint
status: shipped
area: agents
routes: [/docs/mcp, /docs/mcp-agent-blueprint, /docs/audits, /docs/rules]
components: [packages/cli/commands/blueprint.ts, packages/cli/commands/forms-stack.ts, packages/cli/commands/rules-link.ts, .agents/skills/, .agents/rules/, AGENTS.md]
pr: https://github.com/somosgented/aura-design-system/pull/185
updated: 2026-10-26
---
`aura blueprint`, which `init` and `setup` also run, installs the agent surface under `.agents/`: the Aura design skill, procedure skills, and always-on process rules. Cursor reads `.agents/rules` directly. Blueprint removes a legacy `.cursor/rules` symlink and moves a real rules directory or leftover procedure skill into `.agents` when the destination is missing. Design guardrails load with the Aura skill, the same layout as `.agents/skills/shadcn/` (`SKILL.md` plus `rules/*.md`). Emil, Vercel, and WorkOS skills are not part of Aura. Blueprint deletes the Emil and Vercel copies an older CLI wrote. Forms validate with ajv through `validateFormData`, and server actions re-validate with the same schema. Zod is not used. The feature map is the only project documentation. It has one note per feature and is updated in the PR that changes the feature.
