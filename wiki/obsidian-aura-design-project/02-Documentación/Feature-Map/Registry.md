---
feature: Registry
status: shipped
area: registry
routes: [/r/registry.json, /r/{name}.json]
components: [packages/registry/registry/default/, packages/registry/scripts/build-registry.ts, packages/registry/src/]
pr: https://github.com/somosgented/aura-design-system/pull/185
updated: 2026-10-26
---
The shadcn-style `@aura/*` registry: component sources, the Aura design skill (`@aura/skill-aura` → `.agents/skills/aura/`), always-on process rules (`@aura/rules` → `.agents/rules/`), and procedure skills (`@aura/skills` → `.agents/skills/`). `pnpm registry:generate` syncs those from `.agents/skills`, `.agents/rules`, and DESIGN.md, then `registry:build` writes `apps/www/public/r`. Ladle stories in `packages/registry/src/` are the component dev loop.
