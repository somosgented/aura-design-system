---
title: Input Controls
date: 2026-10-06
tags: [dev-log, logic, architecture]
---
## Summary
Phone input, tags input, key value, rating, listbox, color swatch, and color picker live in `packages/registry/registry/default/components/ui`. Color values stay on inline styles so the swatch can show any hex. Calling codes and tags keep their own uncontrolled state when a parent does not pass a value.

## Context
- Related: [[Bootstrap]]
- Implementation Path: `packages/registry/registry/default/components/ui`
