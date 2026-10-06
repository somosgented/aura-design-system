---
title: Audit Input OTP
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Pass. Six cells render at 39px with their own borders and a gap. Measured on the docs preview. The legacy field width no longer applies.

## Findings
- Fixed. Reference: `/cursor/stores/self/media/otp-affordance-not-ok-ref.png`. `input-otp-demo.tsx` sets `separatorAfter={3}`, so the control renders two groups. `SegmentedInput` middle and last positions use `border-l-0`, so three cells read as one box.
- Fixed. Each cell sets `className="w-3 flex-none text-center"` on `SegmentedInputItem`. `text-center` restyles the control. `w-3` (39px) loses to unlayered `input:not(.default) { width: 100% }` in `apps/www/styles/main.css`.
- Pass. Cells have `aria-label={`Digit ${index + 1} of ${length}`}`, numeric input mode, paste handling, and a Radix minus with `className="icon"`. The caption `text-sm text-gray-11` is not on the input. The group label is "One-time code", which is not visible.

## Context
- Related: [[Recent-Components-Audit]] [[Shadcn-gaps]]
- Implementation Path: `packages/registry/registry/default/components/ui/InputOTP.tsx`
- Docs page: `apps/www/content/docs/components/input-otp.mdx`
