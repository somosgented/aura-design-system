---
version: "alpha"
name: "Copperfern"
description: "Pure-white chrome with near-black ink, vivid artwork-tile accents and a solid-black footer — a flavor of Aura for craft-workshop planning studio home pages."
extends: "../../DESIGN.md"
colors:
  primary: "#000000"
  on-primary: "#ffffff"
  surface: "#ffffff"
  surface-container: "#f5f5f5"
  on-surface: "#0a0a0a"
  on-surface-variant: "#737373"
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
    fontFamily: "IBM Plex Mono"
    fontSize: 14px
    fontWeight: 400
    letterSpacing: 0.038em
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
      gray: "#737373"
      background: "#ffffff"
    dark:
      accent: "#ffffff"
      gray: "#8c8c8c"
      background: "#111111"
  fonts:
    sans: "Onest"
    display: "Onest"
    label: "IBM Plex Mono"
    href: "https://fonts.googleapis.com/css2?family=Onest:wght@300;400&family=IBM+Plex+Mono:wght@400&display=swap"
  hero: "paper"
  headingWeight: 400
  radius:
    button: "8px"
    input: "8px"
    surface: "8px"
  tokens:
    light:
      ink: "#0a0a0a"
      ink-muted: "#737373"
      canvas: "#ffffff"
      paper: "#ffffff"
      rule: "#e0e0e0"
      control-line: "#a3a3a3"
      focus: "#0a0a0a"
      footer-bg: "#0a0a0a"
      footer-ink: "#ffffff"
      footer-muted: "#8c8c8c"
      tile-lavender: "#7c5cbf"
      tile-magenta: "#d43f8f"
      tile-cobalt: "#2a4fc9"
      tile-lime: "#7ec214"
      tile-cyan: "#1ac5c5"
      tile-coral: "#e05638"
      tile-moss: "#4a7c4e"
    dark:
      ink: "#f0f0f0"
      ink-muted: "#8c8c8c"
      canvas: "#111111"
      paper: "#1a1a1a"
      rule: "#2a2a2a"
      control-line: "#4a4a4a"
      focus: "#f0f0f0"
      footer-bg: "#0a0a0a"
      footer-ink: "#ffffff"
      footer-muted: "#8c8c8c"
      tile-lavender: "#6448aa"
      tile-magenta: "#b83078"
      tile-cobalt: "#1e3eaa"
      tile-lime: "#5ea00a"
      tile-cyan: "#10a0a0"
      tile-coral: "#c03e22"
      tile-moss: "#2e5c32"
---

# Copperfern

> Pure-white chrome, near-black ink, vivid craft-artwork tiles, and a solid-black footer — a flavor of Aura for the Copperfern shared planning studio. Built on Aura.

This file is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility). All copy, data, illustrations and visuals in the showcase are original and fictional; any resemblance to a real product is coincidental.

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values.
3. If the app uses `next/font`, load Onest and IBM Plex Mono there instead of the `@import`, and point `--font-sans`, `--font-display` and `--font-label` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Copperfern's sample copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Copperfern uses a monochrome chrome: white page, near-black ink (`--ink`), and muted ink at ~54% (`--ink-muted`). All color is confined to artwork tiles — glazed-pot paintings, woven-stripe panels, stamp-print blocks, wood-grain stripes, node-graph sketches — rendered with inline CSS and SVG. The footer is always solid black (`--footer-bg`) regardless of appearance.

Buttons come in three flavors: a plain-text link, a 1px-outline ghost (`8px` radius), and a solid-black fill (`8px` radius). In dark mode, the filled button inverts to white with black text.

The layout uses generous section padding (`calc(var(--aura)*6)` = 78px top/bottom), a max-width of 1280px centered with symmetric gutters (`calc(var(--aura)*3)` at desktop, `calc(var(--aura)*1.5)` at mobile), and a hairline `1px solid var(--rule)` border under the sticky header.

## Colors

| Role | Token | Light | Dark |
| --- | --- | --- | --- |
| Page canvas | `--canvas` | `#ffffff` | `#111111` |
| Card / paper | `--paper` | `#ffffff` | `#1a1a1a` |
| Primary ink | `--ink` | `#0a0a0a` | `#f0f0f0` |
| Muted ink (~54%) | `--ink-muted` | `#737373` | `#8c8c8c` |
| Hairline rule | `--rule` | `#e0e0e0` | `#2a2a2a` |
| Control border | `--control-line` | `#a3a3a3` | `#4a4a4a` |
| Focus ring | `--focus` | `#0a0a0a` | `#f0f0f0` |
| Footer background | `--footer-bg` | `#0a0a0a` | `#0a0a0a` |
| Footer text | `--footer-ink` | `#ffffff` | `#ffffff` |
| Footer muted | `--footer-muted` | `#8c8c8c` | `#8c8c8c` |
| Lavender tile | `--tile-lavender` | `#7c5cbf` | `#6448aa` |
| Magenta tile | `--tile-magenta` | `#d43f8f` | `#b83078` |
| Cobalt tile | `--tile-cobalt` | `#2a4fc9` | `#1e3eaa` |
| Lime tile | `--tile-lime` | `#7ec214` | `#5ea00a` |
| Cyan tile | `--tile-cyan` | `#1ac5c5` | `#10a0a0` |
| Coral tile | `--tile-coral` | `#e05638` | `#c03e22` |
| Moss tile | `--tile-moss` | `#4a7c4e` | `#2e5c32` |

Artwork tiles are the only places where the vivid palette appears. Body copy, navigation, and UI controls stay in the monochrome range.

### Dark mode

Dark mode is a declared Copperfern adaptation — it was not observed in the reference captures. The page canvas shifts to `#111111` and surfaces to `#1a1a1a`; ink inverts to `#f0f0f0`; muted ink stays near `#8c8c8c`. Artwork tile hues deepen by ~15% saturation. The footer stays identical (`#0a0a0a` with white text). Filled buttons become white with black text; outline buttons become white-bordered with white text.

## Typography

| Role | Face | Weight | Size | Tracking | Leading |
| --- | --- | --- | --- | --- | --- |
| Display / h1 | Onest | 400 | 56px | −0.022em | 1.0 |
| h2 | Onest | 400 | 32px | −0.01em | 1.1 |
| h3 / card title | Onest | 400 | 18px | 0 | 1.3 |
| Body | Onest | 400 | 16–18px | 0 | 1.5 |
| Eyebrow label | IBM Plex Mono | 400 | 14px | +0.038em | 1.4 |

Onest at weight 400 gives the light-geometric-grotesk feel. IBM Plex Mono at 14px handles all uppercase eyebrow labels and footer column headings. At 360px, h1 caps at 36px with the same weight and tracking.

## Layout

| Source value | 13px step | Computed |
| --- | --- | --- |
| 8px gap | 0.5 | 6.5px |
| 16px body pad | 1 | 13px |
| 24px inner pad | 2 | 26px |
| 40px nav height | 3 | 39px |
| 64px header | 5 | 65px |
| 80px section pad | 6 | 78px |
| 140px section max | 11 | 143px |
| 1280px max width | — | 1280px |

Section rhythm: `padding-block: calc(var(--aura)*6)` (78px). Max-width wrapper: `min(100% - calc(var(--aura)*6), 1280px)` at desktop; `min(100% - calc(var(--aura)*3), 1280px)` at mobile.

## Elevation & Depth

No shadows. Depth is expressed through layered stacking (the hero collage of slightly offset artwork cards), `1px solid var(--rule)` hairlines, and artwork tile fills. Cards use `border: 1px solid var(--rule)` and `border-radius: 8px`. The header drops a `1px solid var(--rule)` border-bottom.

## Shapes

- Buttons: `border-radius: 8px` (ghost and filled); social and play/pause round buttons: `border-radius: 9999px`.
- Cards and panels: `border-radius: 8px`.
- The closing CTA button is full-width, `~80px` tall, `border-radius: 16px`, solid black fill (white in dark).
- The play/pause button is `36px × 36px`, `border-radius: 9999px`, solid black.
- FAQ chevrons rotate 180° on open (reduced-motion: no rotation).

## Components

- **NavigationMenu** — sticky header (`64px`); left: logo mark + wordmark; nav links: Studio, Workshops, Learn (each a `<button>` with chevron, aria-expanded, aria-controls); plain `<a>` for Plans; right side: "Sign in" plain link, "Talk to us" ghost button, "Start a board" fill button. Full-viewport flyouts (`left:0;right:0`) positioned against the header; Escape closes, click-outside closes. At 360px: logo + "Start a board" small fill button + hamburger menu button; hamburger opens a full-screen panel (`role=dialog`, `aria-modal=true`) with the same nav groups as accordions (button/aria-expanded, panel slides open), plus "Sign in" and "Start a board" links; a close ✕ button in the panel header; Escape closes; focus returns to the hamburger button; `body { overflow: hidden }` while open.
- **Button variant="fill"** — solid black (`background: var(--ink); color: var(--canvas)`); in dark, white fill with black text via `.dark` override.
- **Button variant="ghost"** — `1px solid var(--ink)` border, transparent fill, `8px` radius; in dark, `1px solid var(--ink)` becomes `1px solid var(--footer-ink)`.
- **Card** — `border: 1px solid var(--rule); border-radius: 8px; background: var(--paper)`.
- **Blockquote** — `font-family: var(--aura-font-stack)` (Onest); `font-size: clamp(20px, 2.5vw, 32px)`; `font-weight: 400`; `text-transform: none`; `border-left: 1px solid var(--ink)`; `padding-left: calc(var(--aura)*1.5)`; color `var(--ink)`. High-specificity `.cf .cf-quote` rule overrides any Aura base blockquote styles.
- **Stat** / **StatValue** — 64px display numerals in `--ink`; `StatLabel` in `--ink-muted`; footnote in `--ink-muted` at 12px marked "Sample stat · fictional survey".
- **Footer social buttons** — 4 round buttons (`34px`, `border-radius: 9999px`, `border: 1px solid`), generic glyphs (filled circle, play triangle, filled square, sine wave), `aria-label` values "Sample channel 1" through "Sample channel 4". No real brand names or logos.
- **Table** — plan comparison table; hairline `1px solid var(--rule)` rows; header row in `--ink`; cell text in `--ink-muted`; `overflow-x:auto` region with `role=region`, `aria-label`, `tabindex=0`.
- **Accordion** — FAQ; `<button>` triggers; aria-expanded; `border-bottom: 1px solid var(--rule)`.
- **Marquee** — workshop wordmarks; horizontal scroll with pause/play button; aria-live; respects reduced-motion.
- **Input / NativeSelect** — `border: 1px solid var(--control-line); border-radius: 8px`; focus ring `2px solid var(--focus)`.
- Artwork tiles: drawn entirely with CSS gradients and inline SVG; no `<img>` or external resources.

## Do's and Don'ts

**Do:**
- Use `--ink` and `--ink-muted` for all chrome text; never hard-code gray values.
- Confine the vivid tile palette (`--tile-*`) to artwork panels only.
- Keep the footer always black in both appearances.
- Scale h1 down to `clamp(32px, 9vw, 56px)` to prevent 360px overflow.
- Apply `min-width:0` to every flex and grid child to prevent blowout.

**Don't:**
- Add color to navigation, body copy, or UI controls — Copperfern chrome is strictly monochrome.
- Render phone or laptop mockups; use abstract CSS/SVG art (glaze drips, warp threads, block prints, node graphs).
- Add a dark-mode variant of the footer; it stays solid black.
- Use `overflow-x:hidden` on `html` or `body` to mask overflow; clip decorative art inside its own container.
- Apply shadows or gradients outside artwork tiles.

## Motion

All animation is gated behind `html.motion` (set by the head script checking `prefers-reduced-motion: no-preference`). Animated pieces:
- Hero collage: a subtle vertical float on the stacked cards (`transform: translateY` ±6px, 3s ease-in-out infinite).
- Mosaic panels with play buttons: CSS keyframe art (glaze drip flow, warp-thread shimmer).
- Marquee: horizontal scroll, `animation-play-state` toggled by the pause button.
- Flyout panels: `opacity 0→1` + `translateY -4px→0` on open (120ms ease-out).
- Carousel: smooth `scroll-behavior:smooth` on the scroll container.

Every looping animation has a labeled pause/play button. Reduced-motion: no animation runs, play buttons start as "Play".

## Reference

```tsx
import { Button, Card, Stat, StatValue, StatLabel } from "@aura/ui";

export function CopperfernHero() {
  return (
    <section style={{ padding: "calc(var(--aura)*6) 0", background: "var(--canvas)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 calc(var(--aura)*3)", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "calc(var(--aura)*3)", alignItems: "center" }}>
        <h1 className="h1" style={{ fontSize: "clamp(32px, 4.4vw, 56px)", fontWeight: 400, letterSpacing: "-0.022em", lineHeight: 1, gridColumn: "1", color: "var(--ink)" }}>
          Sketch, plan and hand off<br />craft collections<br />together.
        </h1>
        <div style={{ gridColumn: "2", position: "relative", minHeight: 320 }}>
          {/* artwork collage — CSS/SVG tiles only */}
        </div>
        <div style={{ gridColumn: "3", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Button variant="fill" style={{ fontSize: 24, padding: "26px 52px", borderRadius: 16, background: "var(--ink)", color: "var(--canvas)" }}>
            Start a board
          </Button>
        </div>
      </div>
    </section>
  );
}
```
