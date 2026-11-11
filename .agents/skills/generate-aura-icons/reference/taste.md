# Aura icon taste

Source of truth: `packages/icons/icons/*.svg` from the Aura sprite set.

## Canvas

| Rule | Value |
| --- | --- |
| Artboard | `24×24` (`viewBox="0 0 24 24"`) |
| Display size in SVG shell | `width="15" height="15"` (Aura `icon` class scales with `1em`) |
| Color | `currentColor` only |
| Background | none |

Keep ~1–2 units of padding from the artboard edge so the glyph does not clip when sized small.

## Construction modes

Pick one mode per icon. Match the closest sibling.

### Filled outline (most marks)

Illustrator-style expanded strokes: the visible “line” is a **filled** path (or a ring made of outer + inner contours).

Examples: `cross`, `chevron-*`, `magnifying-glass`, `person`, `hamburger-menu`, `cube`, `link`.

```svg
<path d="…" fill="currentColor" />
```

Rings (head, hollow shapes) often use two filled subpaths: outer contour then inner hole, or separate paths that read as a stroke.

### Stroke

Open paths with stroke, no fill. Used for slender arrows and some outlines.

Examples: `arrow-*`, `eye-open`, `eye-none`, `bell`, parts of `trash`.

```svg
<path
  d="…"
  fill="none"
  stroke="currentColor"
  stroke-width="1"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
```

`stroke-width` is usually `1`, sometimes `0.75` on denser glyphs (`bell`). Prefer round caps and joins.

## Geometry

- Orthogonal and 45° diagonals dominate. Soft curves only where the metaphor needs them (heart, bell, eye arc, person shoulders).
- Uniform visual weight with neighbors at the same size. If it looks heavier than `cross` or lighter than `hamburger-menu`, adjust.
- Flat. No shadows, glows, gradients, or multi-stop fills.
- One idea per icon. No badges, dots, or notification pips unless that is the icon.

## Naming

| File | Export |
| --- | --- |
| `magnifying-glass.svg` | `MagnifyingGlassIcon` |
| `eye-none.svg` | `EyeNoneIcon` |
| `heart-filled.svg` | `HeartFilledIcon` |
| `hamburger-menu.svg` | `HamburgerMenuIcon` |

Tags for the catalog are the kebab segments (`eye`, `none`).

## Sibling map

When inventing a new glyph, copy construction from:

| Family | Open these |
| --- | --- |
| Navigation chevrons | `chevron-left`, `chevron-right`, `chevron-up`, `chevron-down` |
| Arrows | `arrow-left`, `arrow-right`, `arrow-up`, `arrow-down` |
| Visibility | `eye-open`, `eye-none` |
| Affection | `heart`, `heart-filled` |
| Objects | `envelope`, `bell`, `trash`, `copy`, `key`, `pencil`, `store`, `cube`, `pin` |
| UI chrome | `cross`, `hamburger-menu`, `magnifying-glass`, `person`, `link` |

## Import from design tools

Prefer **SVG** export (one artboard per icon, 24×24). PDF-compatible `.ai` can be parsed in a pinch; SVG avoids conversion drift. After drop-in:

1. Normalize to the shell above (`currentColor`, viewBox 24).
2. Remove hard-coded fills (`#000`, `#111`).
3. Run `pnpm generate-src` in `packages/icons`.
