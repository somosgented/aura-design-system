---
title: Audit Color Swatch
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. A 39px round button, gray-7 border, accent ring when pressed, and the color passed as a background so any hex can show.

## Findings
- Pass. `ColorSwatch.tsx` is `size-3` (39px), `border-gray-7`, `focus-visible:ring-accent-8`, `aria-pressed:ring-accent-9`. `aria-label` is required.
- Pass. The demo row is `flex gap-0.5`. Inline `backgroundColor` is the documented way to show a color that is not an accent step.

## Context
- Related: [[Recent-Components-Audit]] [[Input-Controls]]
- Implementation Path: `packages/registry/registry/default/components/ui/ColorSwatch.tsx`
- Docs page: `apps/www/content/docs/components/color-swatch.mdx`
