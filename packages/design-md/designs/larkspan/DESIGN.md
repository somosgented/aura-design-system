---
version: "alpha"
name: "Larkspan"
description: "Pure-white canvas with near-black ink, vivid artwork-tile hues and a geometric grotesk at weight 400 — a flavor of Aura for collaborative maker-studio planning platforms."
extends: "../../DESIGN.md"
colors:
  primary: "#000000"
  on-primary: "#ffffff"
  surface: "#ffffff"
  surface-container: "#f5f5f5"
  on-surface: "#0a0a0a"
  on-surface-variant: "#757575"
  outline: "#e0e0e0"
typography:
  headline-display:
    fontFamily: "Onest"
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.022em
  body-md:
    fontFamily: "Onest"
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "DM Mono"
    fontSize: 14px
    fontWeight: 400
    letterSpacing: 0.04em
rounded:
  md: 8px
  full: 9999px
spacing:
  unit: 13px
  section: 143px
  max-width: 1280px
aura:
  theme:
    light:
      accent: "#000000"
      gray: "#757575"
      background: "#ffffff"
    dark:
      accent: "#ffffff"
      gray: "#8a8a8a"
      background: "#0d0d0d"
  fonts:
    sans: "Onest"
    display: "Onest"
    label: "DM Mono"
    href: "https://fonts.googleapis.com/css2?family=Onest:wght@300;400&family=DM+Mono:wght@400;500&display=swap"
  hero: "paper"
  headingWeight: 400
  radius:
    button: "8px"
    input: "8px"
    surface: "8px"
  tokens:
    light:
      ink: "#0a0a0a"
      body: "#0a0a0a"
      muted: "rgba(10,10,10,0.54)"
      canvas: "#ffffff"
      paper: "#ffffff"
      rule: "#e8e8e8"
      control-line: "#b0b0b0"
      focus: "#0a0a0a"
      footer-bg: "#0a0a0a"
      footer-ink: "#ffffff"
      footer-muted: "rgba(255,255,255,0.54)"
      footer-rule: "rgba(255,255,255,0.14)"
      lavender: "#7c6af5"
      magenta: "#e040c8"
      cobalt: "#2448d8"
      lime: "#b8f020"
      cyan: "#18d8e8"
      coral: "#f05848"
      moss: "#3a8054"
      btn-outline-bg: "#ffffff"
      btn-outline-border: "#0a0a0a"
      chip-bg: "#f0f0f0"
      chip-ink: "#0a0a0a"
      pale-cyan: "#e8f8fa"
    dark:
      ink: "#f0f0f0"
      body: "#f0f0f0"
      muted: "rgba(240,240,240,0.60)"
      canvas: "#0d0d0d"
      paper: "#1a1a1a"
      rule: "#2a2a2a"
      control-line: "#555555"
      focus: "#f0f0f0"
      footer-bg: "#0a0a0a"
      footer-ink: "#ffffff"
      footer-muted: "rgba(255,255,255,0.54)"
      footer-rule: "rgba(255,255,255,0.14)"
      lavender: "#a090ff"
      magenta: "#f06ae0"
      cobalt: "#6080f8"
      lime: "#c8f840"
      cyan: "#40e8f8"
      coral: "#f87868"
      moss: "#50a870"
      btn-outline-bg: "transparent"
      btn-outline-border: "#f0f0f0"
      chip-bg: "#2a2a2a"
      chip-ink: "#f0f0f0"
      pale-cyan: "#0d2428"
---

# Larkspan

> Pure-white monochrome chrome with vivid artwork tiles and geometric-grotesk type — a planning studio flavor for independent furniture and lighting makers. Built on Aura.

This file is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility). All copy, data and visuals in the showcase are original and fictional; any resemblance to a real product is coincidental.

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values.
3. If the app uses `next/font`, load Onest (weights 300, 400) and DM Mono (weights 400, 500) there instead of the `@import`, and point `--font-sans` and `--font-label` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Larkspan's sample copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Larkspan is built on three pillars: a monochrome chrome (pure white page, near-black ink, muted ink at 54% opacity), vivid hue artwork tiles (lavender-violet, magenta, cobalt, acid lime, cyan, coral, moss) that exist only inside art cards, and a solid-black footer that anchors both appearances. Navigation is a hairline-bordered sticky bar with full-width disclosure flyouts. The accent-primary is ink, so primary buttons render as solid black pills with white labels; outline buttons have a 1 px ink border.

## Colors

| Role | Token | Light value | Dark value |
| --- | --- | --- | --- |
| Page canvas | `--canvas` | `#ffffff` | `#0d0d0d` |
| Primary ink | `--ink` | `#0a0a0a` | `#f0f0f0` |
| Body text | `--body` | `#0a0a0a` | `#f0f0f0` |
| Muted text | `--muted` | `rgba(10,10,10,0.54)` | `rgba(240,240,240,0.60)` |
| Hairline rule | `--rule` | `#e8e8e8` | `#2a2a2a` |
| Control border | `--control-line` | `#b0b0b0` | `#555555` |
| Focus ring | `--focus` | `#0a0a0a` | `#f0f0f0` |
| Footer | `--footer-bg` | `#0a0a0a` | `#0a0a0a` |
| Footer text | `--footer-ink` | `#ffffff` | `#ffffff` |
| Lavender tile | `--lavender` | `#7c6af5` | `#a090ff` |
| Magenta tile | `--magenta` | `#e040c8` | `#f06ae0` |
| Cobalt tile | `--cobalt` | `#2448d8` | `#6080f8` |
| Lime tile | `--lime` | `#b8f020` | `#c8f840` |
| Cyan tile | `--cyan` | `#18d8e8` | `#40e8f8` |
| Coral tile | `--coral` | `#f05848` | `#f87868` |
| Moss tile | `--moss` | `#3a8054` | `#50a870` |
| Pale cyan panel | `--pale-cyan` | `#e8f8fa` | `#0d2428` |

Artwork hues are confined to decorative tiles, art panels, stat highlights and the logo mark. Never use them for body text or control borders.

### Dark mode

Larkspan has no dark appearance in the observed reference. The dark mode defined here is a **declared Aura adaptation**: canvas becomes near-black (`#0d0d0d`), ink inverts to `#f0f0f0`, muted ink stays at 60% opacity, artwork hues shift 10–15% lighter for readability, and primary buttons become white with black labels. The footer remains solid black in both appearances, with a 1 px top hairline in dark mode. All semantic variables switch in one `.dark` block; no additional Aura defaults are overridden.

## Typography

| Role | Face | Weight | Size | Tracking | Leading |
| --- | --- | --- | --- | --- | --- |
| Display / h1 | Onest | 400 | 56 px (40 px at 360) | −0.022 em | 1.0 |
| h2 | Onest | 400 | 32 px | −0.015 em | 1.1 |
| h3 / card title | Onest | 400 | 24 px | −0.01 em | 1.2 |
| Body | Onest | 400 | 16–18 px | 0 | 1.5 |
| Eyebrow label | DM Mono | 400 | 14 px | +0.04 em | 1.4 |
| Small label / badge | DM Mono | 500 | 11–12 px | +0.08 em | 1.4 |

Onest at weight 300 is reserved for large decorative subheadings in dark artwork panels. DM Mono handles all uppercase eyebrow strings, counter numerals, badge text and footer column headings.

## Layout

| Source spacing | Aura step | px |
| --- | --- | --- |
| 8 px (icon gap) | 0.5 | 6.5 |
| 16 px (inline pad) | 1 | 13 |
| 24 px (card gap) | 2 | 26 |
| 32 px (sub-section gap) | 2.5 | 32.5 |
| 40 px (component gap) | 3 | 39 |
| 64 px (header height) | 5 | 65 |
| 80 px (section pad) | 6 | 78 |
| 1280 px max width | max-w-98.5 | 1280.5 |

Page max-width: `min(100% − 80px, 1280px)` on desktop, `min(100% − 32px, 1280px)` on mobile. Section vertical padding: `calc(var(--aura) * 6)` (78 px). Grid children always declare `min-width: 0`; grid templates use `minmax(0, 1fr)`.

## Elevation & Depth

Larkspan is flat. No shadows on interactive controls or cards. Depth is implied only by overlapping paper layers in the hero collage (slight offsets, 1–2 px border in `--rule`). Flyouts use a minimal `0 4px 20px rgba(0,0,0,0.08)` drop only. The footer is raised by color contrast, not shadow.

## Shapes

| Element | Radius |
| --- | --- |
| Primary / outline buttons | 8 px |
| Icon-round buttons (play, social) | 9999 px (full circle) |
| Form inputs / selects | 8 px |
| Artwork cards, tiles | 0 px (flush, square) |
| Info overlay card in media panel | 8 px |
| Context panel (S-06) | 4 px |
| Flyout | 0 px (edge-to-edge) |
| Pricing cards | 8 px |

## Components

- **Nav bar** — `NavigationMenu` at `h-[65px]`, `border-b border-[--rule]`, sticky. Trigger buttons use `font-size:14px`, eyebrow DM Mono column headings inside flyouts. Full-viewport-width flyouts: `position:absolute; left:0; right:0`.
- **Primary button** — `Button variant="fill"` with `background:var(--ink)`, `color:var(--canvas)`, `border-radius:8px`. Hero variant is 24 px label, 16 px radius.
- **Outline button** — `Button variant="outline"` with `border:1px solid var(--btn-outline-border)`, `background:var(--btn-outline-bg)`, `border-radius:8px`.
- **Round icon button** — `Button size="icon-md"` with `border-radius:9999px`. Play buttons are 36 px, social buttons are 40 px.
- **Artwork tiles** — raw `<div>` with inline SVG or CSS art; square corners; overflow clipped to their own container.
- **Stats** — `Stat`, `StatValue` at 64 px / DM Mono; `StatLabel` in `--muted`.
- **Data table** — `Table` inside `overflow-x:auto` region with `role="region"`, `aria-label`, `tabindex="0"`.
- **Form** — `Input`, `NativeSelect` with `.inputer`, explicit `border:1px solid var(--control-line)`, `border-radius:8px`.
- **Accordion (FAQ)** — `Accordion` with disclosure buttons; `border-top:1px solid var(--rule)`.
- **Carousel** — scroll-snap row; prev/next `Button size="icon-md"` round outline; counter in DM Mono.
- **Marquee** — `Marquee` with pause `Button size="icon-md"` round; respects `prefers-reduced-motion`.
- **Pricing cards** — `Card` with `border:1px solid var(--rule)`, `border-radius:8px`; highlighted plan has `background:var(--ink)`, `color:var(--canvas)`.
- **Footer** — solid `var(--footer-bg)` in both appearances; `color:var(--footer-ink)`; column headings in DM Mono uppercase; `NativeSelect` for language with explicit border.

## Do's and Don'ts

**Do**
- Keep artwork hues strictly inside decorative tiles and the logo mark.
- Use `--muted` (54% opacity ink) for secondary text and eyebrow labels.
- Use DM Mono for all uppercase eyebrow strings, counter numerals, badge text and footer headings.
- Clip decorative overflow inside its own section container, never on `html` or `body`.
- Keep the footer solid black in both light and dark appearances.

**Don't**
- Use artwork hues for body text, control borders, button fills or focus rings.
- Add shadows to cards or buttons.
- Apply border-radius to artwork tiles; they are always flush and square.
- Use Onest at weight 300 outside large dark decorative panels.
- Add any third-party tracking, analytics or account scripts.

## Motion

All animations are gated on the `html.motion` class (set by a head script that checks `prefers-reduced-motion: no-preference`). Looping animations (the hero collage float, the mosaic play previews, the marquee scroll) each have an explicit pause/play button that toggles `animation-play-state`. Transition duration for interactive states is 160 ms `ease`. The CSS animation panel uses `@keyframes` only inside a `.motion` selector block.

## Reference

```tsx
import { Button } from "@aura/ui/button";
import { NavigationMenu } from "@aura/ui/navigation-menu";

export function LarkspanNav() {
  return (
    <NavigationMenu className="lk" style={{ borderBottom: "1px solid var(--rule)", height: 65 }}>
      <span className="lk-mark" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 28 28">
          <rect x="2" y="6" width="8" height="16" rx="1" fill="var(--lavender)" />
          <rect x="10" y="10" width="8" height="12" rx="1" fill="var(--coral)" />
          <rect x="18" y="4" width="8" height="18" rx="1" fill="var(--lime)" />
        </svg>
      </span>
      <span style={{ fontFamily: "var(--aura-font-stack)", fontWeight: 400, fontSize: 17 }}>Larkspan</span>
      <Button variant="fill" style={{ background: "var(--ink)", color: "var(--canvas)", borderRadius: 8 }}>
        Start a board
      </Button>
    </NavigationMenu>
  );
}
```
