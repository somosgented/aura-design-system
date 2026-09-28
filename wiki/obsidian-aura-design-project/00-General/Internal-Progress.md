---
title: Internal progress
date: 2026-09-28
tags: [dev-log, agents]
---
## Summary
Docs mobile navigation opens the same sidebar tree as desktop. The separate mobile menu in `components/layout/docs/index.tsx` is gone; `SidebarContent` presents that tree in a dialog below 768px.

## Context
- Related: [[Site and docs app]]
- Implementation Path: `apps/www/components/Sidebar.tsx`
- Next: Review the draft PR. The home header still uses its own menu.
