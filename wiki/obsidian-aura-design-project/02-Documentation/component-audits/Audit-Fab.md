---
title: Audit Fab
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. The button is accent-9 on accent contrast, 52px by default, with a focus ring and a reduced-motion transition.

## Findings
- Pass. `Fab.tsx` sizes are `size-4`, `size-3`, and extended `h-5 min-w-5 px-1.5`. Hover is `bg-accent-10`. Gap is `gap-0.5`. `motion-reduce:transition-none` is present.
- Pass. The demo sets `position="absolute"` and `aria-label="Create"` for the icon-only button, and `label="Create"` for the extended one. `PlusIcon` uses `className="icon"`.
- Note. The component default position is `fixed`. An icon-only call without `aria-label` would have no name. The docs demo does pass one.

## Context
- Related: [[Recent-Components-Audit]]
- Implementation Path: `packages/registry/registry/default/components/ui/Fab.tsx`
- Docs page: `apps/www/content/docs/components/fab.mdx`
