---
title: Audit Tags Input
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. The tag box draws a focus ring. The text field opts out of the legacy width and padding.

## Findings
- Fixed. `TagsInput.tsx` input classes are `border-0 bg-transparent px-0.5 py-0.5 text-gray-12 focus-visible:outline-none`. No replacement ring.
- Note. Remove is `size-2` (26px) with `aria-label={`Remove ${tag}`}` and Radix `Cross2Icon` `className="icon"`. That meets a 24px minimum and is still tight. Enter and comma add a tag. The placeholder is only "Add a tag".
- Fixed. The same raw input is subject to `input:not(.default)` width and padding, which fights `border-0` and `min-w-16`. Fix Root Causes.

## Context
- Related: [[Recent-Components-Audit]] [[Input-Controls]]
- Implementation Path: `packages/registry/registry/default/components/ui/TagsInput.tsx`
- Docs page: `apps/www/content/docs/components/tags-input.mdx`
