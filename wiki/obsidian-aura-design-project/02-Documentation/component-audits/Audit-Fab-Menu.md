---
title: Audit Fab Menu
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass with a keyboard gap. The trigger exposes `aria-expanded` and a close label, and items are named. Escape does not close the menu. Model the Domain.

## Findings
- Pass. `FabMenuTrigger` uses `Fab`, `aria-expanded`, and swaps to `Cross2Icon` with `className="icon"`. Items are `gap-0.5 rounded-full bg-gray-2 px-1.5 py-0.5` with a visible label.
- Note. The demo uses `position="absolute"` inside `h-24` so the menu stays in the preview. The component default is `fixed`. No Escape handler.
- Pass. `motion-reduce:transition-none` is set on the trigger class.

## Context
- Related: [[Recent-Components-Audit]] [[Audit-Fab]]
- Implementation Path: `packages/registry/registry/default/components/ui/FabMenu.tsx`
- Docs page: `apps/www/content/docs/components/fab-menu.mdx`
