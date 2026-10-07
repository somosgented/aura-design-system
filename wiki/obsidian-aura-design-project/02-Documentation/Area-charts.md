---
title: Area charts
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Aura charts use Recharts, the same library as shadcn’s chart blocks (`recharts@2.15.4`). There was no chart package in the repo. `@aura/chart` is the container, tooltip, and legend. `@aura/area-chart` renders the area family through a `variant` prop. Series colors are `--chart-1` through `--chart-5`, aliased to accent and status contrast.

## Context
- Related: [[Foundations docs]] [[Design md]] [[Registry]]
- Implementation Path: `packages/registry/registry/default/components/ui/Chart.tsx`, `packages/registry/registry/default/components/ui/AreaChart.tsx`, `packages/registry/registry/default/styles/chart.css`

## Why this shape
One installable component with variants matches Aura’s registry better than ten copy-paste blocks. Shadcn’s `--chart-1` hex scale is not used. Motion is 250ms and `prefers-reduced-motion` disables series animation. Recharts only paints a series whose child type is named `Area` and implements `getComposedData`, so `ChartArea` forwards those statics. The same binding covers bar, line, pie, radar, and radial series. See [[Charts]].
