---
title: Internal progress
date: 2026-10-06
tags: [dev-log, logic]
---
## Summary
Area charts are in the registry as `@aura/chart` and `@aura/area-chart` (Recharts 2.15.4). Series tokens `--chart-1`–`--chart-5` alias accent and status contrast. Docs previews live at `/docs/components/area-chart`. The data-visualization foundation page now records those tokens.

## Context
- Related: [[Area charts]] [[Foundations docs]] [[Design md]]
- Implementation Path: `packages/registry/registry/default/components/ui/AreaChart.tsx`, `apps/www/content/docs/components/area-chart.mdx`
- Next: other chart families (bar, line, pie, radar, radial) only when we add them the same way.
