---
feature: MCP and agent blueprint
status: shipped
area: agents
routes: [/docs/mcp, /docs/mcp-agent-blueprint, /docs/audits, /docs/rules]
components: [packages/cli/commands/blueprint.ts, packages/cli/commands/forms-stack.ts, .cursor/rules/, .cursor/skills/, AGENTS.md, wiki/obsidian-aura-design-project/Feature-Map/]
pr: https://github.com/somosgented/aura-design-system/pull/159
updated: 2026-10-25
---
`aura blueprint`, also run by `init` and `setup`, installs Aura rules and skills, the ajv forms stack, shadcn skills, gdp-ts, image identity, and this feature map. Emil, Vercel, and WorkOS skills are not part of Aura; a re-run deletes Emil and Vercel copies an older CLI wrote. Forms validate with ajv through `validateFormData` (not Zod), and server actions re-validate with the same schema. Aura's vault keeps only `wiki/obsidian-aura-design-project/Feature-Map/`, one note per feature, updated in the PR that changes it.
