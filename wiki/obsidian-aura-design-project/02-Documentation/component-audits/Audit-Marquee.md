---
title: Audit Marquee
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. Keyframes live in `marquee.animation.css` as a theme token. The track moves on hover or focus, and reduced motion disables it.

## Findings
- Fixed. `Marquee.tsx` injects `@keyframes aura-marquee` and a 12s linear infinite animation. The animation rule requires `@theme` tokens and keyframes in `@layer components`, and it asks that motion be input-driven.
- Pass. `useReduced` removes `data-animate` when `prefers-reduced-motion` matches. Spacing `gap-2` is 26px, which is on the 13px scale. Demo chips use `bg-accent-3` and `bg-gray-3` with `px-1 py-0.5`.

## Context
- Related: [[Recent-Components-Audit]] [[Collection-Display]]
- Implementation Path: `packages/registry/registry/default/components/ui/Marquee.tsx`
- Docs page: `apps/www/content/docs/components/marquee.mdx`
