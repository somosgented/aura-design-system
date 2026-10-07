---
title: Segmented Input
date: 2026-10-06
tags: [dev-log, architecture, component]
---
## Summary
Connected multi-field input group ported from Dice UI (`@diceui/segmented-input`) into Aura. Install via `pnpm dlx shadcn@latest add @aura/segmented-input`.

## Context
- Related: [[Internal-Progress]]
- Implementation Path: `packages/registry/registry/default/components/ui/SegmentedInput.tsx`
- Why: reuse Dice UI compound Root/Item API with Aura tokens (`--gray-*`, 13px sizes `h-2.5`/`h-3`/`h-4`) instead of default Tailwind `h-8`/`h-9`/`h-11`.

## Borders & legacy CSS
Middle/last items keep full side borders and overlap with `-ms-px` (no `border-l-0`) so the center cell never looks open on the sides when focused. Items also use class `default` plus `py-0 leading-none` to skip `main.css` `input:not(.default)` padding.
