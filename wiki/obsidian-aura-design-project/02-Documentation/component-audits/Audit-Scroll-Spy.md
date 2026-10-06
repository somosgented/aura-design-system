---
title: Audit Scroll Spy
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. Links have visible names, a focus ring, and a filled current state. The current item uses accent step 3, not color alone.

## Findings
- Pass. `ScrollSpy.tsx` is a `<nav>` with `aria-label`. Links use `px-1 py-0.5 text-gray-11`, `hover:bg-gray-3`, `focus-visible:ring-accent-8`, and `aria-[current=true]:bg-accent-3` plus `text-accent-11`.
- Pass. The demo sections are `h-16` with `bg-gray-3` and `bg-accent-3`, `gap-1`. `aria-current="true"` is a valid token for the current item.

## Context
- Related: [[Recent-Components-Audit]] [[Collection-Display]]
- Implementation Path: `packages/registry/registry/default/components/ui/ScrollSpy.tsx`
- Docs page: `apps/www/content/docs/components/scroll-spy.mdx`
