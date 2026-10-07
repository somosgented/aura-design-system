---
title: Audit Listbox
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. Arrow keys move selection and focus onto the option. Only the selected option is in the tab order.

## Findings
- Fixed. `Listbox.tsx` puts `tabIndex={0}` and the key handler on the listbox. Options are `<button role="option">`, so Tab also stops on every row. There is no roving tabindex.
- Pass. Selected row is `aria-selected:bg-accent-3`. Options use `px-1 py-0.5 text-gray-12`, `hover:bg-gray-3`, and `ring-accent-8`. Disabled rows are `opacity-50`. The frame is `border-gray-6 bg-gray-1`.
- Note. The visible name is only the option labels. The list name is `aria-label="Options"`.

## Context
- Related: [[Recent-Components-Audit]] [[Input-Controls]]
- Implementation Path: `packages/registry/registry/default/components/ui/Listbox.tsx`
- Docs page: `apps/www/content/docs/components/listbox.mdx`
