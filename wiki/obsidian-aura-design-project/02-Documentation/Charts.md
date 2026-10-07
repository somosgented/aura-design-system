---
title: Charts
date: 2026-10-07
tags: [dev-log, logic, architecture]
---
## Summary
Chart families (area, bar, line, pie, radar, radial, tooltips) are registry components with a `variant` prop. They reuse `@aura/chart` series wrappers. Docs live under `/docs/charts` because metadata `group: charts` sends `generate-docs` output to `apps/www/content/docs/charts/`, separate from Components.

## Context
- Related: [[Area-charts]] [[Foundations]]
- Implementation Path: `packages/registry/registry/default/components/ui/Chart.tsx`, `apps/www/content/docs/meta.json`
