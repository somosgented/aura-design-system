---
title: Table docs preview
date: 2026-09-28
tags: [dev-log, logic, architecture]
---
## Summary
`Table` renders the `<table>` with `hidden md:table`, and the mobile layout is the exported `ResponsiveTableCard` (`md:hidden`). The docs demo only mounted `Table`, so the preview frame was empty below the `md` breakpoint.

## Context
- Related: [[Site and docs app]]
- Implementation Path: `apps/www/components/demos/table-demo.tsx`
- Story: `packages/registry/src/table.stories.tsx`
- Docs: `apps/www/content/docs/components/table.mdx`
