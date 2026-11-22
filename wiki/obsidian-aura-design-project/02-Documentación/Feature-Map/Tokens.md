---
feature: Tokens and theme
status: shipped
area: tokens
routes: [/docs/foundations]
components: [packages/registry/styles/globals.css, apps/www/app/globals.css, apps/www/styles/theme-color-transition.css, packages/registry/registry/default/theme/presets.ts, packages/registry/registry/default/hooks/use-aura-theme-colors.ts, packages/cli/commands/colors.ts, packages/styled-system/, packages/system/main.css]
pr:
updated: 2026-11-22
---
The 12-step `--accent-*` and `--gray-*` scales (Galaxy palette as the default theme), fluid type with the 17px input floor, and the 13px spacing base. `aura colors` regenerates theme CSS from accent and gray seeds and derives the light and dark canvases. Each named preset stores that accent and gray for both modes. Editing gray in the docs mixer derives the active canvas the same way, and Light and Dark still switch without dropping the other mode. `packages/styled-system` compiles the legacy Stylus artifact in `packages/system`.
