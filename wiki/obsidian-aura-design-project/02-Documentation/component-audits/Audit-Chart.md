---
title: Audit Chart
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. The container, tooltip, and legend use gray surfaces and `text-xs` for chart chrome. `text-xs` is allowed on non-editable labels.

## Findings
- Pass. `Chart.tsx` tooltip is `border-gray-6 bg-gray-1 px-1 py-0.5 text-xs text-gray-12`. Legend gap is `gap-0.5` and `gap-1`. The container sets `text-xs text-gray-11`.
- Pass. Reduced motion is referenced in the chart styles path documented by [[Area-charts]]. Swatch dots use `size-0.5`. No `text-xl` display utilities.

## Context
- Related: [[Recent-Components-Audit]] [[Area-charts]]
- Implementation Path: `packages/registry/registry/default/components/ui/Chart.tsx`
- Docs page: `apps/www/content/docs/components/chart.mdx`
