---
title: Audit Navigation Bar
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. The current item uses `bg-accent-3` and accent text, the same selected fill as the rail.

## Findings
- Fixed. `NavigationBarItem` sets `aria-current="page"` and `aria-[current=page]:text-accent-11` only. Hover does use `bg-gray-3`.
- Pass. Demo labels are Home, People, and Settings with Radix icons `className="icon"` and `gap-0.5`. Bar chrome is `border-t border-gray-6 bg-gray-1`. Focus ring is `ring-accent-8`. Padding `py-0.5` makes the target depend on the icon plus the label.

## Context
- Related: [[Recent-Components-Audit]]
- Implementation Path: `packages/registry/registry/default/components/ui/NavigationBar.tsx`
- Docs page: `apps/www/content/docs/components/navigation-bar.mdx`
