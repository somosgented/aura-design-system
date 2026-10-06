---
title: Internal progress
date: 2026-10-06
tags: [dev-log, logic]
---
## Summary
Area charts are in the registry as `@aura/chart` and `@aura/area-chart` (Recharts 2.15.4). `ChartArea` must expose Recharts’ `displayName`, `defaultProps`, and `getComposedData`, or the plot draws axes and skips the series. Docs previews live at `/docs/components/area-chart`.

## Context
- Related: [[Area charts]] [[Foundations docs]] [[Design md]]
- Implementation Path: `packages/registry/registry/default/components/ui/AreaChart.tsx`, `apps/www/content/docs/components/area-chart.mdx`
- Next: other chart families (bar, line, pie, radar, radial) only when we add them the same way.
