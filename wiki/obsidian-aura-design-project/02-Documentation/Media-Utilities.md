---
title: Media Utilities
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Tour, swap, cropper, compare slider, media player, and the frames-per-second meter stay in Components. Hitbox, pending, presence, portal, client-only, and visually hidden are documented under [[Utils-docs-menu]]. `composeEventHandlers` in `packages/registry/registry/default/utils/compose-refs.tsx` runs a second handler unless the first already prevented the default.

## Context
- Related: [[Bootstrap]]
- Implementation Path: `packages/registry/registry/default/utils/compose-refs.tsx`
