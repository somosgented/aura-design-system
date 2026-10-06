---
title: Audit Snackbar
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass on color roles. The surface is `bg-gray-12` with `text-gray-1`. The demo shows the message and Undo inline so it does not cover the page.

## Findings
- Pass. `Snackbar.tsx` is `role="status"`, `px-1.5 py-1`, `gap-1`, `rounded-sm`. The demo sets `position="inline"`.
- Note. Dismiss, when `onOpenChange` is passed, is `size-2` (26px) with `Cross2Icon` `className="icon"`. The demo does not pass `onOpenChange`, so dismiss is absent and Undo is the action.
- Note. `SnackbarAction` is `text-accent-9` on `bg-gray-12`. This pass did not measure that pair. Do not treat it as proven contrast.

## Context
- Related: [[Recent-Components-Audit]]
- Implementation Path: `packages/registry/registry/default/components/ui/Snackbar.tsx`
- Docs page: `apps/www/content/docs/components/snackbar.mdx`
