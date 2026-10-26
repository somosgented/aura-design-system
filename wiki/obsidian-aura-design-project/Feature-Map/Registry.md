---
feature: Registry
status: shipped
area: registry
routes: [/r/registry.json, /r/{name}.json]
components: [packages/registry/registry/default/, packages/registry/scripts/build-registry.ts, packages/registry/src/]
pr: https://github.com/somosgented/aura-design-system/pull/174
updated: 2026-10-26
---
The shadcn-style `@aura/*` registry: component sources, agent rules installed to `.agents/rules/`, skills, and theme files. `pnpm registry:generate` syncs rules from `.agents/rules`, skills, and DESIGN.md, then `registry:build` writes `apps/www/public/r`. Ladle stories in `packages/registry/src/` are the component dev loop.
