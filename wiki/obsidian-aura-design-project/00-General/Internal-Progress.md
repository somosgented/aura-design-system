---
title: Internal progress
date: 2026-09-28
tags: [dev-log, agents]
---
## Summary
The Table docs preview pairs `Table` (`hidden md:table`) with `ResponsiveTableCard` (`md:hidden`). Below `md` the page was an empty preview frame because the demo rendered only the table. Desktop still shows the table; small screens now show the card layout.

## Context
- Related: [[Table]], [[Site and docs app]]
- Implementation Path: `apps/www/components/demos/table-demo.tsx`
- Next: Confirm the `/docs/components/table` preview on a viewport under 768px.
