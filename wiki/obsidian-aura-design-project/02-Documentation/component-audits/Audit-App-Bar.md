---
title: Audit App Bar
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. Heights are `h-4`, `h-6`, and `h-8` (52, 78, 104px). Titles use `.h6` or `.h5` instead of Tailwind display sizes.

## Findings
- Pass. `AppBar.tsx` is a `<header>` with `bg-gray-1 px-1.5 gap-1`. Actions sit in `ml-auto`, which is layout, not an icon margin. Elevated state adds `shadow-md`.
- Note. The small demo's notification button is `size-3` with `aria-label` and a Radix icon, and it has no `focus-visible` ring. The bar component itself does not own that button.

## Context
- Related: [[Recent-Components-Audit]]
- Implementation Path: `packages/registry/registry/default/components/ui/AppBar.tsx`
- Docs page: `apps/www/content/docs/components/app-bar.mdx`
