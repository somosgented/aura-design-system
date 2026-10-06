---
title: Audit Relative Time
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. The control shows a `<time>` relative phrase and the absolute string in a gray-2 chip. Both stay on the contrast steps for text.

## Findings
- Pass. `RelativeTimeCard.tsx` uses `Intl.RelativeTimeFormat`, `dateTime` set to an ISO string, `gap-0.5`, and `border-gray-6 bg-gray-2 px-1 py-0.5 text-gray-11` for the absolute line.
- Note. The absolute value is always visible. The name says card, and the docs render both lines at once, so there is no hidden hover state to miss.

## Context
- Related: [[Recent-Components-Audit]] [[Collection-Display]]
- Implementation Path: `packages/registry/registry/default/components/ui/RelativeTimeCard.tsx`
- Docs page: `apps/www/content/docs/components/relative-time-card.mdx`
