---
version: "alpha"
name: "Slatemoor"
description: "Near-white and pure-black monochrome chrome with 64px tight display type, 1px hairline borders and compact pill buttons — a flavor of Aura for developer workbench marketing pages."
extends: "../../DESIGN.md"
colors:
  primary: "#0a0a0a"
  on-primary: "#fafafa"
  surface: "#fafafa"
  surface-container: "#f0f0f0"
  on-surface: "#0a0a0a"
  on-surface-variant: "#6b6b6b"
  outline: "#e2e2e2"
typography:
  headline-display:
    fontFamily: "Hanken Grotesk"
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -0.045em
  body-md:
    fontFamily: "Hanken Grotesk"
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "JetBrains Mono"
    fontSize: 12px
    fontWeight: 400
    letterSpacing: 0.0em
rounded:
  md: 12px
  full: 9999px
spacing:
  unit: 13px
  section: 143px
  max-width: 1280px
aura:
  theme:
    light:
      accent: "#0a0a0a"
      gray: "#6b6b6b"
      background: "#fafafa"
    dark:
      accent: "#f0f0f0"
      gray: "#888888"
      background: "#000000"
  fonts:
    sans: "Hanken Grotesk"
    label: "JetBrains Mono"
    href: "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
  hero: "paper"
  headingWeight: 500
  radius:
    button: "9999px"
    input: "6px"
    surface: "12px"
  tokens:
    light:
      canvas: "#fafafa"
      ink: "#0a0a0a"
      body: "#1a1a1a"
      muted: "#6b6b6b"
      rule: "#e2e2e2"
      card-bg: "#f5f5f5"
      control-line: "#7b7b7b"
      focus: "#0a0a0a"
      header-btn-radius: "6px"
      cobalt: "#1c6ef5"
      green-dot: "#22c55e"
      chip-bg: "#efefef"
      chip-ink: "#1a1a1a"
    dark:
      canvas: "#000000"
      ink: "#f0f0f0"
      body: "#d4d4d4"
      muted: "#888888"
      rule: "#1f1f1f"
      card-bg: "#0d0d0d"
      control-line: "#606060"
      focus: "#f0f0f0"
      header-btn-radius: "6px"
      cobalt: "#3b82f6"
      green-dot: "#22c55e"
      chip-bg: "#1f1f1f"
      chip-ink: "#d4d4d4"
---

# Slatemoor

> Near-white and pure-black chrome, 64px tight display headings, 1px hairlines and compact pill buttons — a build-and-host workbench flavor for developer platform marketing pages. Built on Aura.

This file is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility). All copy, data, figures and visuals in the showcase are original and fictional; any resemblance to a real product is coincidental.

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values.
3. If the app uses `next/font`, load Hanken Grotesk and JetBrains Mono there instead of the `@import`, and point `--font-sans` and `--font-label` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Slatemoor's sample copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Slatemoor is a monochrome workbench theme: two extreme appearances (near-white light, pure-black dark) unified by identical chrome geometry. The color system is achromatic — ink fills and hairlines everywhere — with vivid color appearing only in product mock-up accents (a cobalt tile, a green status dot). Display type is Hanken Grotesk 500 at very tight tracking (−0.045 em); code labels use JetBrains Mono. Every interactive surface is pill-shaped (9999px) or uses the small header radius (6px for header outline buttons); cards and flyout panels are 12px.

## Colors

| Role | Token | Light | Dark |
| --- | --- | --- | --- |
| Page canvas | `--canvas` | `#fafafa` | `#000000` |
| Ink (headings, primary text) | `--ink` | `#0a0a0a` | `#f0f0f0` |
| Body text | `--body` | `#1a1a1a` | `#d4d4d4` |
| Muted text, secondary | `--muted` | `#6b6b6b` | `#888888` |
| Hairline borders | `--rule` | `#e2e2e2` | `#1f1f1f` |
| Card surface | `--card-bg` | `#f5f5f5` | `#0d0d0d` |
| Control borders | `--control-line` (overridden to `gray-10`/`gray-8`) | `~#7b7b7b` | `~#606060` |
| Focus ring | `--focus` | `#0a0a0a` | `#f0f0f0` |
| Accent blue (mock-up only) | `--cobalt` | `#1c6ef5` | `#3b82f6` |
| Status green | `--green-dot` (dark) / `color-mix` darkened (light) | meets ≥ 3:1 on canvas | `#22c55e` |
| Chip surface | `--chip-bg` | `#efefef` | `#1f1f1f` |
| Chip text | `--chip-ink` | `#1a1a1a` | `#d4d4d4` |

Primary buttons are solid ink (`--ink` fill, `--canvas` text). Outline buttons use `--canvas` fill with a 1px `--control-line` border. Control borders use `--control-line` overridden to `var(--gray-10)` light (≈ `#7b7b7b`, 4.06:1 on canvas) and `var(--gray-8)` dark (≈ `#606060`, 3.34:1 on canvas), both ≥ 3:1 against their respective canvas.

### Dark mode

The dark appearance is not a tinted inversion: it is pure black (`#000000`) with near-white ink (`#f0f0f0`). Hairlines (`#1f1f1f`) are barely visible yet structurally present. The same cobalt accent appears in mock-up art; the status green holds its value in dark. In light the dot uses a darker green built with `color-mix(in srgb, var(--green-dot) 50%, black)` to meet ≥ 3:1 against the near-white canvas. No navy, no tinted dark canvas.

## Typography

| Role | Face | Weight | Size | Tracking |
| --- | --- | --- | --- | --- |
| Display h1 | Hanken Grotesk | 500 | 64px | −0.045 em |
| Section h2 | Hanken Grotesk | 500 | 48px | −0.045 em |
| Sub-heading h3 | Hanken Grotesk | 500 | 32px | −0.03 em |
| Body | Hanken Grotesk | 400 | 15px | 0 |
| Nav / labels | Hanken Grotesk | 500 | 14px | 0 |
| Code chips / mono labels | JetBrains Mono | 400 | 12–13px | 0 |

Both faces load from the flavor's Google Fonts href. No separate display face; the single grotesk handles all scales. Line-height for display is 1.0; body is 1.5.

## Layout

- Max content width: 1280px, centered with 24px gutters (≈ `calc(var(--aura) * 2)`).
- Section vertical rhythm: `calc(var(--aura) * 11)` (≈ 143px) between major sections.
- Header height: `calc(var(--aura) * 5)` (65px).
- Hero height at 1280px: ~600px with 3-column layout (left h1 + CTAs, center art, right descriptor lines).
- At <768px: art first, then h1, then a single JetBrains Mono subline (14px, `--muted`, ≥ 4.5:1), then two full-width stacked pills (48px tall), then descriptor lines.
- Bento grid: 2 equal columns at ≥ 768px; card (a) is the tall left card with `grid-row: span 2`, spanning the height of the two stacked right cards; 1 column at 360px.
- Footer directory: at 1280px two row-blocks (top block 4 columns: Platform, Build, Learn, Explore; second block 3 columns: Company, Social, Legal); 3 columns at 768–1023px; 2 columns at <768px.

Spacing table (design px to 13px grid):

| Design px | Step | px |
| --- | --- | --- |
| 8 | 0.5 | 6.5 |
| 16 | 1 | 13 |
| 24 | 2 | 26 |
| 32 | 2.5 | 32.5 |
| 40 | 3 | 39 |
| 48 | 3.5 | 45.5 |
| 64 | 5 | 65 |
| 96 | 7.5 | 97.5 |
| 143 | 11 | 143 |

## Elevation & Depth

Hairline 1px borders (`--rule`) define sections and cards. No multi-level shadows except on flyout panels (a soft ambient shadow using `color-mix(in srgb, var(--ink) 8%, transparent)`). The dark mode shadow uses the same formula. No blur-background effects.

## Shapes

- Pills: `border-radius: 9999px` on all CTAs and tag chips.
- Header outline buttons: `border-radius: 6px` (small rounded rectangles, not full pills).
- Cards and flyout panels: `border-radius: 12px`.
- Logo monogram: two overlapping rounded rectangles offset diagonally, drawn in SVG with `rx="4"`. No letters.
- Hero art: a softly glowing rounded slab or ring of light built in CSS — radial-gradient halo.

## Components

Slatemoor overrides the following Aura defaults:

- `Button variant="fill"`: pill shape, ink fill (`--ink`), `--canvas` text, 40px hero height, 32px header height.
- `Button variant="pill"` (outline): `--canvas` fill, 1px `--control-line` border, pill shape; header variant uses 6px radius instead.
- `NavigationMenu` triggers: rendered as `<button data-dropdown>` with `aria-expanded` and `aria-controls`; flyout panels are 12px radius, hairline border, soft shadow.
- `Card`: `--card-bg` surface, 1px `--rule` border, 12px radius, `shadow-none`.
- `Input`, `NativeSelect` (`select.inputer`): 6px radius, 1px `--control-line` border, CSS gradient chevron (two `linear-gradient` triangles in `background-image` at `right 14px center`), `--canvas` fill.
- `Accordion`: standard disclosure pattern, `aria-expanded` buttons, hairline separators.
- `Badge` / chips: pill shape, `--chip-bg` fill, `--chip-ink` text, 11px Mono for "New" labels.

The flyout panel token is exactly:

```
menu-overlay-width: 100vw
dropdown-width: 560px
quote-font: Hanken Grotesk
quote-size: 32px
```

Flyout panels are `min(560px, 100vw - 32px)` wide, anchored under their trigger, left-aligned to it.

The mobile menu overlay is `position: fixed`, `left: 0`, `top: 0`, `width: 100vw`, `height: 100vh`, `role="dialog"`, `aria-modal="true"`, focus-trapped, with body scroll locked while open.

Blockquote override: `.sm blockquote` and `.sm blockquote p` reset Aura's default uppercase and quote font, rendering in Hanken Grotesk 500, `text-transform: none`, 32px at 1280px and 24px at 360px, tight tracking (−0.03 em).

## Do's and Don'ts

**Do:**
- Use achromatic fills exclusively on chrome; keep cobalt confined to mock-up art.
- Keep display type at weight 500 and tracking −0.045 em for h1/h2.
- Respect the hairline-only border system for cards; never add shadows to cards.
- Use pill radius (9999px) for CTAs and chips; use 6px only for the header outline buttons.
- Keep dark mode pure black, not navy.

**Don't:**
- Do not use a tinted dark canvas.
- Do not add box shadows to cards; shadow only flyout panels.
- Do not set heading weight above 500 or tracking above −0.03 em.
- Do not use JetBrains Mono for body copy; it is for code chips and small mono labels only.

## Motion

All transitions are behind `html.motion`. One-shot hover transitions (opacity, transform) on interactive elements use `transition: 0.15s ease`. No looping animations. With `prefers-reduced-motion: reduce` (no `.motion` class), no animations run. No pause/play control is needed because there are no looping animations.

## Usage example

```tsx
import { Button, Card } from "@aura/ui";

export function SlatemoorHero() {
  return (
    <section style={{ background: "var(--canvas)" }}>
      <h1 className="h1" style={{ fontSize: 64, letterSpacing: "-0.045em", fontWeight: 500, lineHeight: 1 }}>
        Benchwork for builders
        <br />and their bots
      </h1>
      <div style={{ display: "flex", gap: "calc(var(--aura) * 1)", marginTop: "calc(var(--aura) * 2.5)" }}>
        <Button variant="fill" style={{ borderRadius: 9999, height: 40 }}>Open a cairn</Button>
        <Button variant="pill" style={{ borderRadius: 9999, height: 40, border: "1px solid var(--control-line)" }}>Ask a person</Button>
      </div>
    </section>
  );
}
```
