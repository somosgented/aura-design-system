---
title: Audit Breadcrumb
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. A nav named Breadcrumb, `text-sm` on the trail, gray-11 links, gray-12 current page, Radix chevron with `className="icon"`.

## Findings
- Pass. `Breadcrumb.tsx` sets `aria-label="Breadcrumb"`. Current page is `aria-current="page"`. List gap is `gap-0.5`. Focus uses `outline-accent-8`.
- Pass. `text-sm` is on the list, not on an input. That matches the type rule for utility text.

## Context
- Related: [[Recent-Components-Audit]] [[Shadcn-gaps]]
- Implementation Path: `packages/registry/registry/default/components/ui/Breadcrumb.tsx`
- Docs page: `apps/www/content/docs/components/breadcrumb.mdx`
