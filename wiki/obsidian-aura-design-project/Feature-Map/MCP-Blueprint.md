---
feature: MCP and agent blueprint
status: shipped
area: agents
routes: [/docs/mcp, /docs/mcp-agent-blueprint, /docs/audits, /docs/rules, /docs/rules/skills, /docs/rules/bruno]
components: [packages/cli/commands/blueprint.ts, packages/cli/commands/forms-stack.ts, packages/cli/commands/rules-link.ts, packages/cli/commands/sonar.ts, packages/cli/commands/bruno.ts, .agents/skills/, .agents/rules/, AGENTS.md]
pr: https://github.com/somosgented/aura-design-system/pull/192
updated: 2026-11-07
---
Pasting `Ejecuta https://auradesignsystem.com/docs/mcp-agent-blueprint` makes an agent audit a project and install what is missing. Existing projects take the update path: never `init` or `setup`, only `npx @aura-design/cli@latest blueprint .`, which keeps team-owned files and deletes retired ones (Project Brain, older Emil and Vercel copies, `.cursor/rules`). Blueprint installs the agent surface under `.agents/` on every stack, Sonar where it can scan, and the Bruno rule and collection on backends. Rules & Skills docs map what an agent loads and which file wins, and Audits pairs each kind of change with its audit and one findings format. Emil, Vercel, and WorkOS skills stay third-party audits that are never committed.
