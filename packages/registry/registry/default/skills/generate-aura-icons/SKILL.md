---
name: generate-aura-icons
description: >-
  Designs and adds Aura glyph icons in the taste of packages/icons (24×24,
  currentColor, geometric filled outlines or thin strokes). Use when the user
  asks to add, draw, generate, or expand Aura icons, @aura-design/react-icons,
  the /icons gallery, or icon SVGs that should match the Aura sprite set.
---

# Generate Aura icons

Create icons that match the Aura glyph set in `packages/icons`. Do not invent a second style. Do not ship Lucide, Heroicons, or Radix geometry as Aura icons.

Product UI still defaults to `@radix-ui/react-icons` + `className="icon"` until `DESIGN.md` switches. This skill only grows `@aura-design/react-icons`.

## Detect scenario

| Signal | Scenario |
| --- | --- |
| Repo has `packages/icons/` and `apps/www/app/(home)/icons/` | **A — Aura monorepo** (write here) |
| Otherwise | Stop. This skill is for the Aura icons package, not ad-hoc app icons. |

## 1. Name and scope

1. Pick a kebab-case filename: `arrow-up-left`, `sliders`, `calendar`.
2. Component name is PascalCase + `Icon`: `ArrowUpLeftIcon`.
3. Prefer one metaphor. Do not ship filled + outline pairs unless the set already has that pair (`heart` / `heart-filled`).
4. Open [reference/taste.md](./reference/taste.md) and 2–3 sibling SVGs in `packages/icons/icons/` that share the metaphor (arrow with arrows, eye with eyes).

## 2. Draw the SVG

Write `packages/icons/icons/<name>.svg` only. Hand-author paths; do not paste Lucide/Radix path data.

Required shell:

```svg
<svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- paths -->
</svg>
```

Taste checklist (full rules in [reference/taste.md](./reference/taste.md)):

- [ ] `viewBox="0 0 24 24"`, display size `15×15`
- [ ] Only `currentColor` (fill and/or stroke)
- [ ] Geometric, monoline feel; no gradients, filters, or secondary colors
- [ ] Optical padding ~1–2 units from the artboard edge
- [ ] Construction is either **filled outline** (ribbon/ring paths) or **stroke** (`stroke-width` 0.75–1, round caps/joins) — match siblings
- [ ] No `width`/`height`/`size` props in usage docs beyond the SVG shell

## 3. Generate React

From `packages/icons`:

```bash
pnpm generate-src
```

That regenerates `src/*Icon.tsx`, `src/catalog.tsx`, `src/index.tsx`, and `manifest.json`. Do not hand-edit generated files.

## 4. Verify

1. Confirm the new export appears in `packages/icons/src/index.tsx`.
2. Open `/icons` (or tell the user to) and check optical weight against neighbors.
3. Usage snippet for docs or chat:

```tsx
import { MagnifyingGlassIcon } from "@aura-design/react-icons";

<MagnifyingGlassIcon className="icon" />
```

## Don'ts

- Don't add icons under `apps/www/components/ui/` or the registry as a substitute for this package.
- Don't change `DESIGN.md` or `.agents/skills/aura/rules/icons.md` to replace Radix unless the user explicitly asks to cut over.
- Don't commit Illustrator sources; keep SVG in `packages/icons/icons/`.
- Don't use emoji, duotone, or filled solid blobs that ignore the set's outline weight.
