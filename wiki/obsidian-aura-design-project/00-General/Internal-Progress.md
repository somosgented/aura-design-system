---
title: Internal progress
date: 2026-10-07
tags: [dev-log, logic]
---
## Summary
Chart families (bar, line, pie, radar, radial, tooltips) plus the existing area chart are a separate **Charts** docs section (`/docs/charts`). Metadata `group: charts` drives generate-docs. The Chart primitive stays under Components.

The 21 recent-component audit fails are fixed in registry components, docs demos, and the legacy field rule. Notes live in [[Recent-Components-Audit]]. SegmentedInput keeps full side borders and `py-0 leading-none` so the caret stays inside the cells.

## Context
- Related: [[Charts]] [[Area-charts]] [[Recent-Components-Audit]] [[Segmented-Input]] [[Media-Utilities]] [[Collection-Display]] [[Input-Controls]]
- Implementation Path: `packages/registry/registry/default/components/ui/`
- Next: confirm the Charts sidebar and a couple chart pages in the docs site.
- Next: keep the input rule limited to text fields. Do not put text-field height back on range or color inputs.
