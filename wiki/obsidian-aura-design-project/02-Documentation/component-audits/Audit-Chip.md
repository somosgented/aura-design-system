---
title: Audit Chip
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. Assist, filter, and input chips use gray and accent-adjacent steps, `gap-0.5`, and a focus ring. Filter selection is a fill, not color alone.

## Findings
- Pass. Selected filter is `bg-gray-12 text-gray-1` with a Radix check `className="icon"`. `aria-pressed` is set for filter chips.
- Note. The input-chip remove button is `size-2` (26px). It clears the 24px floor and remains a small target.

## Context
- Related: [[Recent-Components-Audit]]
- Implementation Path: `packages/registry/registry/default/components/ui/Chip.tsx`
- Docs page: `apps/www/content/docs/components/chip.mdx`
