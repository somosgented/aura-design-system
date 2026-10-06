---
title: Audit Scroller
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. Back and forward are 39px icon buttons with names. The region is keyboard focusable and checks reduced motion before smooth scrolling.

## Findings
- Pass. `Scroller.tsx` buttons are `size-3`, `border-gray-6`, Radix chevrons with `className="icon"`, labels "Scroll back" and "Scroll forward".
- Pass. The scroller is `role="region"` `tabIndex={0}` with `gap-0.5`. Arrow keys call `scrollBy` with `behavior: "auto"` when reduced motion matches.
- Note. Arrow handlers do not call `preventDefault`, so the page can scroll as well.

## Context
- Related: [[Recent-Components-Audit]] [[Collection-Display]]
- Implementation Path: `packages/registry/registry/default/components/ui/Scroller.tsx`
- Docs page: `apps/www/content/docs/components/scroller.mdx`
