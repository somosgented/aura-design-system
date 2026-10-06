---
title: Audit Swap
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. The swap is a labeled button plus an opacity crossfade. Hidden panes are `aria-hidden` and `pointer-events-none`. Motion honors `motion-reduce`.

## Findings
- Pass. `Swap.tsx` uses `Button` `variant="pill"` `size="sm"` and `aria-label`. Spacing is `gap-0.5` and `min-h-8` (104px) on the stage.
- Note. The fade is `duration-300`. The animation rule asks for a 250ms step. Compositor properties are opacity only. Laziness Protocol: change the duration token, do not add a library.
- Pass. Demo panes are `h-8` with `bg-accent-3` and `bg-gray-3`.

## Context
- Related: [[Recent-Components-Audit]] [[Media-Utilities]]
- Implementation Path: `packages/registry/registry/default/components/ui/Swap.tsx`
- Docs page: `apps/www/content/docs/components/swap.mdx`
