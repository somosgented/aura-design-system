---
title: Audit Rating
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. Five radio buttons, 39px each, Radix stars with `className="icon"`, and an accent-9 glyph. The group name is exposed to assistive tech.

## Findings
- Pass. `Rating.tsx` is `role="radiogroup"` with `aria-label="Rating"`. Each star is `role="radio"`, `size-3`, `aria-label={`${score} of ${max}`}`, `ring-accent-8`. Gap is `gap-0.5`.
- Note. The demo does not repeat the word Rating next to the stars. The pattern is recognizable. Arrow keys live on the group, which is correct. From 0, ArrowLeft still resolves to 1 because of `Math.max(1, current - 1)`.

## Context
- Related: [[Recent-Components-Audit]] [[Input-Controls]]
- Implementation Path: `packages/registry/registry/default/components/ui/Rating.tsx`
- Docs page: `apps/www/content/docs/components/rating.mdx`
