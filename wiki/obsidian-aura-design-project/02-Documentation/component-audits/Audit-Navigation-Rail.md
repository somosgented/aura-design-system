---
title: Audit Navigation Rail
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. Collapsed width is `w-5` (65px) and labels become `sr-only`. The current item gets `bg-accent-3` and `text-accent-11`.

## Findings
- Pass. `NavigationRail.tsx` uses `border-e border-gray-6 bg-gray-1 p-0.5`. Expanded width is `w-16`. Items have `gap-0.5`, `px-1 py-0.5`, and `ring-accent-8`.
- Pass. Demo icons use `className="icon"`. `aria-current="page"` is set from the `active` prop.

## Context
- Related: [[Recent-Components-Audit]]
- Implementation Path: `packages/registry/registry/default/components/ui/NavigationRail.tsx`
- Docs page: `apps/www/content/docs/components/navigation-rail.mdx`
