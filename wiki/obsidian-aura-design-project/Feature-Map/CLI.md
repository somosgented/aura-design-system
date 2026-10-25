---
feature: CLI
status: shipped
area: cli
routes: []
components: [packages/cli/index.ts, packages/cli/commands/, packages/cli/utils/color-theme.ts, packages/cli/templates/]
pr: https://github.com/somosgented/aura-design-system/pull/160
updated: 2026-10-25
---
`@aura-design/cli` (binary `aura`) runs `init`, `setup`, `link`, `blueprint`, `colors`, `spacing`, and `typography`. It bootstraps Next.js apps with Aura registries and tokens, then runs the blueprint. `aura colors` takes an accent and a gray seed, derives the light and dark canvases, and writes `globals.css` with both `prefers-color-scheme` and `.dark`. It prints a WCAG report and exits 1 without writing the file when a required pair fails.
