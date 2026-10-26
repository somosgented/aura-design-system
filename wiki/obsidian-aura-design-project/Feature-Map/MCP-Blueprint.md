---
feature: MCP and agent blueprint
status: shipped
area: agents
routes: [/docs/mcp, /docs/mcp-agent-blueprint, /docs/audits, /docs/rules]
components: [packages/cli/commands/blueprint.ts, packages/cli/commands/forms-stack.ts, packages/cli/commands/rules-link.ts, .agents/skills/aura/, .agents/rules/, .cursor/skills/, AGENTS.md]
pr: https://github.com/somosgented/aura-design-system/pull/174
updated: 2026-10-26
---
`aura blueprint`, which `init` and `setup` also run, installs the agent surface: the Aura design skill at `.agents/skills/aura/` (forms guardrail, `aura-forms`, and the ajv form components), always-on process rules in `.agents/rules/` (`.cursor/rules` is a symlink to that directory), shadcn skills, gdp-ts, image identity, and this feature map. Design guardrails load with the Aura skill, the same layout as `.agents/skills/shadcn/` (`SKILL.md` plus `rules/*.md`). Emil, Vercel, and WorkOS skills are not part of Aura. Blueprint deletes the Emil and Vercel copies an older CLI wrote. Forms validate with ajv through `validateFormData`, and server actions re-validate with the same schema. Zod is not used. The feature map is the only project documentation. It has one note per feature and is updated in the PR that changes the feature.
