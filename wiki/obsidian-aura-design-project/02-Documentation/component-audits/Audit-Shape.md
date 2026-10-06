---
title: Audit Shape
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. Shapes are accent-9 clips at `size-3`, `size-8`, and `size-12`. The morph timer stops under reduced motion.

## Findings
- Pass. `Shape.tsx` uses `bg-accent-9` and clip paths. Transition is opacity-free transform via clip, with `motion-reduce:transition-none`.
- Note. The transition duration is `duration-300`. The motion rule prefers a 250ms step. `ShapeMorph` autoplays at 900ms unless reduced motion matches.

## Context
- Related: [[Recent-Components-Audit]]
- Implementation Path: `packages/registry/registry/default/components/ui/Shape.tsx`
- Docs page: `apps/www/content/docs/components/shape.mdx`
