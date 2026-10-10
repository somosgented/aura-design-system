---
title: Custom colors showcase
date: 2026-09-13
tags: [dev-log, architecture, taste]
---
## Summary
Home-page `AuraAesthetic` and Theme Settings both call `useAuraThemeColors`. [[Shared-Theme-Store]] injects `--accent-*` / `--gray-*` on `:root` from the root layout. Swatches read CSS variables only.

## Context
- Related: [[Taste]], [[Theme-Colors-Crash-Fix]], [[Internal-Progress]]
- Implementation Path: `apps/www/components/AuraAesthetic.tsx`, `apps/www/hooks/use-aura-theme-colors.ts`, `apps/www/components/ThemeColorSwitcher.tsx`
- Layout: `smesh` container, stacked controls on mobile, 3-column component preview from `lg`. Preview field groups and the two quotes use `gap-2.5`; layer rows use `py-1` and icon `gap-0.5`.
