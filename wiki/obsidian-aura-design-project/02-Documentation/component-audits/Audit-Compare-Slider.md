---
title: Audit Compare Slider
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. The range is the seam. Its thumb is the divider, and `type="range"` no longer inherits text-field height or padding.

## Findings
- Fixed. `CompareSlider.tsx` paints the divider with `aria-hidden` and `w-0.5 bg-gray-12`. The range is `absolute inset-x-1 bottom-1`. The hit target and the visual seam are different objects.
- Fixed. `apps/www/styles/main.css` styles `input:not(.default)` with height `calc(var(--aura) * 4)` (52px) and padding `calc(var(--aura) * 2)` (26px). `type="range"` is not excluded, so the seek control inherits text-field chrome. Fix Root Causes.
- Pass. Frame is `h-16` (208px) and `rounded-sm`. Before/after demo fills use `bg-accent-9 text-accent-contrast` and `bg-gray-4`. The range has `aria-label="Compare"`.

## Context
- Related: [[Recent-Components-Audit]] [[Media-Utilities]]
- Implementation Path: `packages/registry/registry/default/components/ui/CompareSlider.tsx`
- Docs page: `apps/www/content/docs/components/compare-slider.mdx`
