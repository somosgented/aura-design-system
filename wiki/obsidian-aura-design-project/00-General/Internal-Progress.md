---
title: Internal progress
date: 2026-10-08
tags: [dev-log, logic]
---
## Summary
The shipped theme now uses the Somos Gente Digital dark ramp, with light mode generated from accent `#4015ca` and gray `#7254cb`. See [[Sgd-palette]]. The header Aura mark swaps `aura-mark-light.svg` and `aura-mark-dark.svg` with the `.dark` class. See [[Sgd-cobrand]]. `public/favicon.ico` and `public/favicon.svg` now use that dark tile (same artwork as `aura-mark.png`), including the stories and design-md sites. The Made by Somos Gente lockup is unchanged aside from that mark.

Chart families (bar, line, pie, radar, radial, tooltips) plus the existing area chart are a separate **Charts** docs section (`/docs/charts`). Metadata `group: charts` drives generate-docs. The Chart primitive stays under Components.

The 21 recent-component audit fails are fixed in registry components, docs demos, and the legacy field rule. Notes live in [[Recent-Components-Audit]]. SegmentedInput keeps full side borders and `py-0 leading-none` so the caret stays inside the cells.

## Context
- Related: [[Charts]] [[Area-charts]] [[Recent-Components-Audit]] [[Segmented-Input]] [[Media-Utilities]] [[Collection-Display]] [[Input-Controls]]
- Implementation Path: `packages/registry/registry/default/components/ui/`
- Next: confirm the Charts sidebar and a couple chart pages in the docs site.
- Next: keep the input rule limited to text fields. Do not put text-field height back on range or color inputs.

Docs sidebar `status: new` (accent dot in `apps/www/utils/source.tsx`) now covers only component, chart, and util pages whose docs were added 2026-09-29 through 2026-10-07. September pages such as Bubble, Stat, and Visually Hidden Input no longer carry the flag. Section index pages stay unmarked.
