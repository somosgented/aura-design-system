---
title: Audit Speed Dial
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass as an alias. The docs page installs the same controls as the fab menu. The same Escape gap applies.

## Findings
- Pass. `SpeedDial.tsx` re-exports `FabMenu`, `FabMenuList`, `FabMenuItem`, and `FabMenuTrigger`. Spacing, icons, and color findings match [[Audit-Fab-Menu]].
- Note. Two names for one control means a consumer can install either page and get the same behavior. Minimize Reader Load: the page should say it is the fab menu.

## Context
- Related: [[Recent-Components-Audit]] [[Audit-Fab-Menu]]
- Implementation Path: `packages/registry/registry/default/components/ui/SpeedDial.tsx`
- Docs page: `apps/www/content/docs/components/speed-dial.mdx`
