---
title: Audit Icon
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. The docs demo and its story use Radix `CheckIcon` and `StarFilledIcon`. The page no longer teaches a custom path.

## Findings
- Pass. `Icon.tsx` adds `className="icon"`, sets `role="img"` only when `label` is set, and uses `.h4` for `size="lg"` instead of a width or height attribute.
- Fixed. `icon-demo.tsx` defines `Mark` as an inline `<path>`. The icon rule says glyphs come from Radix. `CheckIcon` on the same row is the correct pattern.

## Context
- Related: [[Recent-Components-Audit]]
- Implementation Path: `packages/registry/registry/default/components/ui/Icon.tsx`
- Docs page: `apps/www/content/docs/components/icon.mdx`
