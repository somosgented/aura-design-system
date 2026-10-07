---
title: Audit Kanban
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. Move buttons are at least 26px tall and name the destination column. The board is a group, not a list of sections.

## Findings
- Fixed. `Kanban.tsx` buttons use `px-0.5` and no min height. `px-0.5` is 6.5px. The hit target is the line box, under a 24px minimum.
- Fixed. The root is `role="list"`. Columns are `<section>` and cards are `<article>`. Arrow-key movement is absent. The label does not say which column Back and Next target.
- Pass. Columns are `w-16` (208px), `gap-1`, `bg-gray-2`, cards `border-gray-6 bg-gray-1`. Focus ring is `ring-accent-8`.

## Context
- Related: [[Recent-Components-Audit]] [[Collection-Display]]
- Implementation Path: `packages/registry/registry/default/components/ui/Kanban.tsx`
- Docs page: `apps/www/content/docs/components/kanban.mdx`
