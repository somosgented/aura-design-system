---
title: Audit Fps
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass with a meter gap. The readout uses the 13px scale, a gray surface, and an accent dot. The meter role never sets a maximum, so assistive tech cannot scale the number.

## Findings
- Pass. `Fps.tsx` uses `gap-0.5`, `border-gray-6`, `bg-gray-2`, `px-1 py-0.5`, and `size-1 bg-accent-9`. Visible text is `{fps} fps`.
- Note. `role="meter"` sets `aria-valuemin={0}` and `aria-valuenow` but no `aria-valuemax`. Model the Domain.
- Note. The sampler runs `requestAnimationFrame` for the life of the component. That is the measurement, not a decorative autoplay loop.

## Context
- Related: [[Recent-Components-Audit]] [[Media-Utilities]]
- Implementation Path: `packages/registry/registry/default/components/ui/Fps.tsx`
- Docs page: `apps/www/content/docs/components/fps.mdx`
