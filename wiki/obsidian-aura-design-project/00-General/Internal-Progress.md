---
title: Internal progress
date: 2026-10-06
tags: [dev-log, logic]
---
## Summary
Fixed InputOTP / SegmentedInput caret overflow: items now opt out of legacy `input:not(.default)` styles and set `py-0 leading-none`. Utils docs section remains separate under `/docs/utils`.

## Context
- Related: [[Segmented-Input]] [[Media-Utilities]] [[Collection-Display]] [[Input-Controls]]
- Implementation Path: `packages/registry/registry/default/components/ui/SegmentedInput.tsx`
- Next: confirm focus caret sits inside cells in Ladle `input-otp` story; watch docs CI on `canary`.
