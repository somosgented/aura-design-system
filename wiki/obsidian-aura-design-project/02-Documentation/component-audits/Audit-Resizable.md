---
title: Audit Resizable
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. The demo shows a grip. The handle's hit area is `before:w-1` (13px) over a 1px rule, and keyboard focus uses `outline-accent-8`.

## Findings
- Pass. `Resizable.tsx` uses Radix `DragHandleDots2Icon` with `className="icon"` when `withHandle` is set. The demo sets `withHandle`. Panel copy is `text-sm`, not an input.
- Pass. The preview frame is `h-16` with `border-gray-6`. Vertical and horizontal demos both exist.

## Context
- Related: [[Recent-Components-Audit]] [[Shadcn-gaps]]
- Implementation Path: `packages/registry/registry/default/components/ui/Resizable.tsx`
- Docs page: `apps/www/content/docs/components/resizable.mdx`
