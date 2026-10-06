---
title: Audit Loading Indicator
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. A status with a shape and an sr-only "Loading". Reduced motion stops the morph on the first frame.

## Findings
- Pass. `LoadingIndicator.tsx` is `role="status"` with `gap-0.5` and `<span className="sr-only">{label}</span>`.
- Pass. `ShapeMorph` returns early when `prefers-reduced-motion` matches, so the interval never starts. The shape uses `bg-accent-9` and `size-3`.

## Context
- Related: [[Recent-Components-Audit]] [[Audit-Shape]]
- Implementation Path: `packages/registry/registry/default/components/ui/LoadingIndicator.tsx`
- Docs page: `apps/www/content/docs/components/loading-indicator.mdx`
