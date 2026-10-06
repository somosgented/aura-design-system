---
title: Collection Display
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Timeline, status, gauge, relative time, banner, scroller, scroll spy, masonry, kanban, stack, marquee, and QR code are registry components under `packages/registry/registry/default/components/ui`. The QR component encodes version 1 byte mode, up to 17 bytes, and picks a mask inside the component. Kanban moves cards with Back and Next rather than a drag library.

## Context
- Related: [[Bootstrap]]
- Implementation Path: `packages/registry/registry/default/components/ui/QrCode.tsx`
