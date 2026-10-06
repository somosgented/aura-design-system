---
title: Audit Item
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. A list row with media, title, description, and an action. `text-sm` is the row utility size. The demo uses a Radix file icon and a real button.

## Findings
- Pass. `Item.tsx` variants use `border-gray-6`, `bg-gray-1`, `bg-gray-3`, `gap-1 p-1` or `gap-0.5 px-1 py-0.5`. Group is `role="list"` and the row is `role="listitem"`.
- Pass. Icon media is `size-2.5`. `item-demo.tsx` uses `FileIcon` with `className="icon"` and `Button` `size="sm"` for Open. No icon margin.

## Context
- Related: [[Recent-Components-Audit]] [[Shadcn-gaps]]
- Implementation Path: `packages/registry/registry/default/components/ui/Item.tsx`
- Docs page: `apps/www/content/docs/components/item.mdx`
