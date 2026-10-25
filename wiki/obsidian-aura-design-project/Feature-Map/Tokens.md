---
feature: Tokens and theme
status: shipped
area: tokens
routes: [/docs/foundations]
components: [packages/registry/registry/default/styles/main.css, packages/registry/registry/default/theme/presets.ts, packages/registry/registry/default/hooks/use-aura-theme-colors.ts, packages/cli/commands/colors.ts, packages/styled-system/, packages/system/main.css]
pr: https://github.com/somosgented/aura-design-system/pull/161
updated: 2026-10-25
---
The 12-step `--accent-*` and `--gray-*` scales, fluid type with the 17px input floor, and the 13px spacing base. `aura colors` regenerates theme CSS from accent and gray seeds and derives the light and dark canvases. Each named preset stores that accent and gray for both modes, and applying it writes both halves so Light and Dark can switch without dropping the other. `packages/styled-system` compiles the legacy Stylus artifact in `packages/system`.
