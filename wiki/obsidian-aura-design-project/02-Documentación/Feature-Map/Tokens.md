---
feature: Tokens and theme
status: shipped
area: tokens
routes: [/docs/foundations]
components: [packages/registry/registry/default/styles/main.css, packages/registry/registry/default/theme/presets.ts, packages/registry/registry/default/hooks/use-aura-theme-colors.ts, packages/cli/commands/colors.ts, packages/styled-system/, packages/system/main.css]
pr: https://github.com/somosgented/aura-design-system/pull/163
updated: 2026-10-25
---
The 12-step `--accent-*` and `--gray-*` scales, fluid type with the 17px input floor, and the 13px spacing base. `aura colors` regenerates theme CSS from accent and gray seeds and derives the light and dark canvases. Each named preset stores that accent and gray for both modes. Editing gray in the docs mixer derives the active canvas the same way, and Light and Dark still switch without dropping the other mode. `packages/styled-system` compiles the legacy Stylus artifact in `packages/system`.
