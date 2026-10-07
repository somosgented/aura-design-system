---
title: Audit Stack
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. Card offset is half of `--aura` (6.5px), then 13px. Both steps sit on the spacing grid.

## Findings
- Fixed. `Stack.tsx` sets `transform: translate(${index * 8}px, ${index * 8}px)`. The nearest grid steps are 6.5px (`0.5`) and 13px (`1`).
- Pass. The frame is `h-16 w-16`. Cards use `border-gray-6 bg-gray-1 p-1`. Later cards cover earlier ones, which is the stack model, but the 8px peek is also off the grid.

## Context
- Related: [[Recent-Components-Audit]] [[Collection-Display]]
- Implementation Path: `packages/registry/registry/default/components/ui/Stack.tsx`
- Docs page: `apps/www/content/docs/components/stack.mdx`
