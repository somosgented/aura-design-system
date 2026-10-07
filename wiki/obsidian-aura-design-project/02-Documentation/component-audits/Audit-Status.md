---
title: Audit Status
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. Online stays accent. Away uses the warning contrast, busy uses the danger contrast, and offline stays gray.

## Findings
- Fixed. `Status.tsx` maps away to `bg-gray-9`, busy to `bg-gray-12`, offline to `bg-gray-7`. Text for the first three tones is `text-gray-12`. Busy and away do not use a warning or danger step.
- Pass. Layout is `gap-0.5` and the dot is `size-1` (13px). The dot is `aria-hidden` and the word (Online, Away, Busy, Offline) is visible in the demo.

## Context
- Related: [[Recent-Components-Audit]] [[Collection-Display]]
- Implementation Path: `packages/registry/registry/default/components/ui/Status.tsx`
- Docs page: `apps/www/content/docs/components/status.mdx`
