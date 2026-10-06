---
title: Audit Expressive Carousel
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. Previous and Next move the row. Slide fills use background steps 3 to 5 and gray, not border steps 6 to 8.

## Findings
- Fixed. `ExpressiveCarousel.tsx` is a scroll region with snap, `gap-1`, `py-2`, and arrow keys. Nothing in the control or the demo says the row scrolls.
- Fixed. `expressive-carousel-demo.tsx` uses `bg-accent-4` through `bg-accent-8`. Steps 6 to 8 are border roles, not large fills.
- Pass. `aria-roledescription="carousel"`, a focus ring, `motion-reduce:transition-none`, and `behavior: "auto"` when reduced motion matches. Item width is `w-16`.

## Context
- Related: [[Recent-Components-Audit]]
- Implementation Path: `packages/registry/registry/default/components/ui/ExpressiveCarousel.tsx`
- Docs page: `apps/www/content/docs/components/expressive-carousel.mdx`
