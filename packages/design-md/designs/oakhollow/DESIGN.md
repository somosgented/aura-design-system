---
version: "alpha"
name: "Oakhollow"
description: "Warm off-white canvas, bold Plus Jakarta Sans editorial mosaic tiles, seasonal feature bands and deep moss accents, a flavor of Aura for home goods storytelling pages."
extends: "../../DESIGN.md"
colors:
  primary: "#2b6636"
  on-primary: "#ffffff"
  surface: "#fdfcf8"
  surface-container: "#f4f1ea"
  on-surface: "#141414"
  on-surface-variant: "#575652"
  outline: "#e6e3dc"
typography:
  headline-display:
    fontFamily: "Plus Jakarta Sans"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.025em
  body-md:
    fontFamily: "Plus Jakarta Sans"
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 13px
    fontWeight: 500
    letterSpacing: 0.0em
rounded:
  md: 8px
  full: 9999px
spacing:
  unit: 13px
  section: 52px
  max-width: 1248px
aura:
  theme:
    light:
      accent: "#2b6636"
      gray: "#78756e"
      background: "#fdfcf8"
    dark:
      accent: "#8fd19a"
      gray: "#86837b"
      background: "#121211"
  fonts:
    sans: "Plus Jakarta Sans"
    display: "Plus Jakarta Sans"
    label: "Plus Jakarta Sans"
    href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&display=swap"
  hero: "band"
  headingWeight: 700
  radius:
    button: "8px"
    input: "8px"
    surface: "8px"
  tokens:
    light:
      canvas: "#fdfcf8"
      surface: "#f4f1ea"
      surface-card: "#ffffff"
      ink: "#141414"
      body: "#2b2a27"
      muted: "#575652"
      rule: "#e6e3dc"
      control-line: "#73716b"
      accent: "#2b6636"
      accent-hover: "#21522a"
      accent-ink: "#ffffff"
      focus: "#2b6636"
      band-marigold: "#f3b33d"
      band-marigold-line: "#5c4314"
      band-cranberry: "#b3262e"
      band-sage: "#c9d8c5"
      band-sage-ink: "#141414"
      band-rust: "#6e2f22"
      band-rose: "#f4b6c8"
      band-rose-ink: "#141414"
      band-plum: "#2e1f3d"
      footer-bg: "#0d0d0d"
      on-dark: "#ffffff"
      on-dark-eyebrow: "#f0eee8"
      on-dark-muted: "#c6c4bc"
      on-dark-line: "#8a8880"
      on-dark-surface: "#1d1d1b"
      scrim-base: "#0e0d0b"
      art-wall: "#ebe4d6"
      art-wall-warm: "#dfd2be"
      art-wood: "#a97546"
      art-wood-dark: "#6b4423"
      art-wood-pale: "#d4b084"
      art-clay: "#c85e3f"
      art-sage: "#7d9978"
      art-moss: "#3c6e45"
      art-cream: "#f6f1e6"
      art-berry: "#9c3244"
      art-ochre: "#d69b3a"
      art-slate: "#4d5457"
      art-charcoal: "#282725"
      art-stone: "#dedad0"
      art-blush: "#dfb0bc"
      art-plum: "#5a426e"
    dark:
      canvas: "#121211"
      surface: "#1c1c1a"
      surface-card: "#1c1c1a"
      ink: "#eeece6"
      body: "#dddad2"
      muted: "#b7b4ac"
      rule: "#33322e"
      control-line: "#8a8880"
      accent: "#8fd19a"
      accent-hover: "#a4dca9"
      accent-ink: "#121211"
      focus: "#8fd19a"
      band-marigold: "#5a3f0e"
      band-marigold-line: "#c7a76c"
      band-cranberry: "#7f1d23"
      band-sage: "#2c3a2b"
      band-sage-ink: "#eeece6"
      band-rust: "#4e2118"
      band-rose: "#5a2c3a"
      band-rose-ink: "#eeece6"
      band-plum: "#241830"
      footer-bg: "#0d0d0d"
      on-dark: "#ffffff"
      on-dark-eyebrow: "#f0eee8"
      on-dark-muted: "#c6c4bc"
      on-dark-line: "#8a8880"
      on-dark-surface: "#1d1d1b"
      scrim-base: "#0e0d0b"
      art-wall: "#2f2c26"
      art-wall-warm: "#3a3228"
      art-wood: "#6e4c2e"
      art-wood-dark: "#452c17"
      art-wood-pale: "#8a6d4b"
      art-clay: "#8c402a"
      art-sage: "#4a6146"
      art-moss: "#294d30"
      art-cream: "#c8c2b5"
      art-berry: "#6e2230"
      art-ochre: "#8c6322"
      art-slate: "#313739"
      art-charcoal: "#181715"
      art-stone: "#292824"
      art-blush: "#754552"
      art-plum: "#3d2b4d"
---

# Oakhollow

> Warm off-white canvas, bold Plus Jakarta Sans editorial mosaic tiles, seasonal feature bands and deep moss accents for home goods storytelling pages. Built on Aura.

This file is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's path (13px grid, accent/gray step roles, Radix icons, forms, accessibility). All copy, data, figures and visuals in the showcase are original and fictional.

## Apply to an Aura project

An agent that receives this file inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same folder, `DESIGN.md` -> `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values.
3. If the app uses `next/font`, load Plus Jakarta Sans (weights 400, 500 and 700) there instead of the `@import`, and point `--font-sans`, `--font-display` and `--font-label` at that font variable.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Oakhollow's sample copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Oakhollow organizes home goods storytelling into a calm editorial mosaic: large 8px-rounded story tiles paired in square two-up rows, wide full-width feature tiles, and deeply colored seasonal bands (cranberry, sage, rust, rose and plum) separated by clean 16px gutters on desktop (12px on narrow viewports). A single humanist sans-serif face, Plus Jakarta Sans, handles headlines (700), UI controls (500) and body copy (400). Deep moss green anchors primary actions and the acorn mark, while marigold highlights the lead shop tile and a solid near-black block closes the page in both light and dark appearances.

## Colors

| Role | Token | Light | Dark |
| --- | --- | --- | --- |
| Page canvas | `--canvas` | `#fdfcf8` | `#121211` |
| Raised surface (skeleton cards) | `--surface` | `#f4f1ea` | `#1c1c1a` |
| Inset white/dark card surface | `--surface-card` | `#ffffff` | `#1c1c1a` |
| Primary ink | `--ink` | `#141414` | `#eeece6` |
| Body copy | `--body` | `#2b2a27` | `#dddad2` |
| Muted copy and captions | `--muted` | `#575652` | `#b7b4ac` |
| Structural hairline | `--rule` | `#e6e3dc` | `#33322e` |
| Control border | `--control-line` | `#73716b` | `#8a8880` |
| Primary accent (moss) | `--accent` | `#2b6636` | `#8fd19a` |
| Primary accent hover | `--accent-hover` | `#21522a` | `#a4dca9` |
| Text on accent | `--accent-ink` | `#ffffff` | `#121211` |
| Focus outline | `--focus` | `#2b6636` | `#8fd19a` |
| Lead shopping tile | `--band-marigold` | `#f3b33d` | `#5a3f0e` |
| Shopping tile control border | `--band-marigold-line` | `#5c4314` | `#c7a76c` |
| Cranberry band | `--band-cranberry` | `#b3262e` | `#7f1d23` |
| Sage band and ink | `--band-sage` / `--band-sage-ink` | `#c9d8c5` / `#141414` | `#2c3a2b` / `#eeece6` |
| Rust carousel band | `--band-rust` | `#6e2f22` | `#4e2118` |
| Rose tile and ink | `--band-rose` / `--band-rose-ink` | `#f4b6c8` / `#141414` | `#5a2c3a` / `#eeece6` |
| Plum band | `--band-plum` | `#2e1f3d` | `#241830` |
| Footer canvas (always dark) | `--footer-bg` | `#0d0d0d` | `#0d0d0d` |
| Always-dark primary text | `--on-dark` | `#ffffff` | `#ffffff` |
| Always-dark tile eyebrow | `--on-dark-eyebrow` | `#f0eee8` | `#f0eee8` |
| Always-dark muted links | `--on-dark-muted` | `#c6c4bc` | `#c6c4bc` |
| Always-dark control border | `--on-dark-line` | `#8a8880` | `#8a8880` |
| Always-dark control fill | `--on-dark-surface` | `#1d1d1b` | `#1d1d1b` |
| Tile scrim base | `--scrim-base` | `#0e0d0b` | `#0e0d0b` |

Interior scene illustrations draw solely from the sixteen `--art-*` tokens (`--art-wall`, `--art-wall-warm`, `--art-wood`, `--art-wood-dark`, `--art-wood-pale`, `--art-clay`, `--art-sage`, `--art-moss`, `--art-cream`, `--art-berry`, `--art-ochre`, `--art-slate`, `--art-charcoal`, `--art-stone`, `--art-blush`, `--art-plum`), which shift automatically in dark mode.

### Dark mode

Dark mode moves to a warm near-black canvas (`#121211`) with `#1c1c1a` raised panels and `#33322e` hairlines. Moss accent lightens to `#8fd19a` with `#121211` text. Every seasonal band keeps its hue while deepening in value (`--band-cranberry` `#7f1d23`, `--band-sage` `#2c3a2b`, `--band-rust` `#4e2118`, `--band-rose` `#5a2c3a`, `--band-plum` `#241830`, `--band-marigold` `#5a3f0e`), switching `--band-sage-ink`, `--band-rose-ink` and `--ink` to warm light text (`#eeece6`). Text over tile scrims and inside the near-black footer stays fixed to `--on-dark`, `--on-dark-eyebrow` and `--on-dark-muted` in both appearances.

## Typography

| Role | Face | Weight | Desktop size | 360px size | Line height | Tracking |
| --- | --- | --- | --- | --- | --- | --- |
| Plum band display | Plus Jakarta Sans | 700 | 56px | 36px | 1.08 | -0.03em |
| Stat figure | Plus Jakarta Sans | 700 | 44px | 34px | 1.05 | -0.03em |
| Band heading | Plus Jakarta Sans | 700 | 36px | 28px | 1.15 | -0.025em |
| Pull quote | Plus Jakarta Sans | 500 | 32px | 24px | 1.2 | -0.025em |
| Lead tile and shop CTA | Plus Jakarta Sans | 700 | 28px | 22px | 1.18 | -0.02em |
| Story tile title | Plus Jakarta Sans | 700 | 24px | 20px | 1.2 | -0.02em |
| Wordmark | Plus Jakarta Sans | 700 | 20px | 20px | 1.5 | -0.02em |
| Footer lead links | Plus Jakarta Sans | 500 | 20px | 20px | 1.5 | 0 |
| Body copy | Plus Jakarta Sans | 400 | 16px | 16px | 1.5 | 0 |
| Carousel card title | Plus Jakarta Sans | 700 | 15px | 15px | 1.35 | 0 |
| UI nav links | Plus Jakarta Sans | 500 | 14px | hidden below `900px` | 1.5 | 0 |
| UI nav `About us` trigger (`<button>`) | Plus Jakarta Sans | 500 | 14px | hidden below `900px` | normal | 0 |
| Footer utility links | Plus Jakarta Sans | 400 | 14px | 14px | 1.5 | 0 |
| Tile, band and carousel eyebrows | Plus Jakarta Sans | 400 | 13px | 13px | 1.4 | 0 |
| Legal copy | Plus Jakarta Sans | 400 | 13px | 13px | 1.5 | 0 |

Plus Jakarta Sans (400, 500, 700) loads through the single Google Fonts stylesheet in frontmatter. No secondary display or monospace face is loaded.

## Layout

- Page side padding: `16px`; centered max content width: `1248px`.
- Header: `64px` tall, `--canvas` fill, **not sticky** (scrolls with the page).
- Mosaic gutters: `16px` between tiles at `>= 900px`, tightening to `12px` at `< 900px`.
- Section order:
  1. Non-sticky header (`64px`) with acorn mark and 4 desktop links (including `About us` dropdown flyout); the round mobile menu trigger stays hidden at `>= 900px` and appears below `900px`, opening a `100vw` x `100vh` modal dialog.
  2. Lead row (`2fr / 1fr`, ~`500px` tall at `1280px`): shelf-wall drifting story tile with pause/play control beside the marigold shopping tile with shop disclosure selector (4 sample shops).
  3. First story mosaic: square pair (sofa / bed with play toggle), cranberry feature band with 16:10 dining-table inset, square pair (archive hall / candlelit table), wide kitchen tile (`1248x600`), square pair (game corner / sage bed), wide kids-room tile, square pair (tote on plinth with play toggle / street bench tote).
  4. Sage feature band with 16:10 clothes-rail inset, followed by a square pair (moving boxes / gallery pedestals).
  5. Rust carousel band (`60px` desktop padding, full-bleed without radius at `360px`) with left intro copy, clipped horizontal 4-card track sized to show whole cards only (`3` at `1280px`, `2` at `768px`, `1` at `360px`) while marking off-window cards `visibility: hidden` and `inert` on move and resize, plus round prev/next controls and `aria-live` step announcements.
  6. Second mosaic: square pair (studio storage / cabinet fronts), square pair (rose circular-inset tile with ink play toggle / warm living room), and plum feature band with 56px two-line display heading and inset 4x2 grid of 8 original object illustrations.
  7. Full-bleed 16:5 tote-on-plinth strip with top-right pause/play button.
  8. Aura skeleton block on `--canvas`: 4 stats, 3 features, scrollable delivery comparison `<table>`, 3 assembly pricing cards, planning-visit `<form>`, 4-item FAQ accordion, and customer pull quote `<blockquote>`.
  9. Solid near-black footer (`#0d0d0d`, ~`360px` tall at `1280px`) with 3 primary white links, 6 muted utility links, appearance radiogroup (`System` / `Light` / `Dark`), 3-option language `<select class="inputer">`, and legal notice.

Spacing table (design px to 13px Aura grid):

| Design px | Aura step | px |
| --- | --- | --- |
| 6 | 0.5 | 6.5 |
| 12 | 1 | 13 |
| 16 | 1.25 | 16.25 |
| 24 | 2 | 26 |
| 32 | 2.5 | 32.5 |
| 40 | 3 | 39 |
| 52 | 4 | 52 |
| 64 | 5 | 65 |
| 96 | 7.5 | 97.5 |
| 1248 | 96 | 1248 |

## Elevation & Depth

Tiles and feature bands carry zero box shadows, relying on crisp 8px corners, solid color shifts, and bottom dark gradient scrims (`--scrim-base`) over interior art. Raised skeleton cards use `--surface` with 1px `--rule` hairlines. Only the header `About us` flyout panel carries a subtle ambient shadow (`color-mix(in srgb, var(--ink) 12%, transparent)`) to separate it over lead tile art.

## Shapes

- Story tiles, wide tiles, feature bands, inset panels, carousel cards, inputs, selects, buttons and skeleton cards: `8px` radius (feature bands drop to `0px` full-bleed at `< 640px`).
- Round icon controls (play/pause, arrow CTA, carousel prev/next, mobile hamburger/close): `40px` circle (`border-radius: 50%`).
- Footer appearance switch buttons and language select: full pill (`9999px`). No other pills appear on the page.
- Brand mark: an inline SVG acorn (rounded cap with two fine crosshatch strokes over a smooth nut body) in `--accent` moss green, paired with `Oakhollow` in Plus Jakarta Sans 700 at `20px`.

## Components

Oakhollow overrides the following Aura defaults under the `.oh` body scope:

- `Button variant="fill"` (`.oh-btn-primary`): `8px` radius, `--accent` fill, `--accent-ink` label, `44px` tall, weight `500`.
- `Button variant="pill"` (outline actions `.oh-btn-outline`): `8px` radius, `--canvas` fill, `--ink` label, `1px solid var(--control-line)` border.
- Round icon buttons (`.oh-round-btn`): `40px` x `40px` circle; white fill (`--on-dark`) with dark glyph (`--footer-bg`) and a `2px` fixed dark border (`color-mix(in srgb, var(--scrim-base) 78%, transparent)`) over illustrated tile art; solid white / dark-glyph controls on the rust band; `--ink` fill with `--canvas` glyph on light/adaptive surfaces (marigold tile, cranberry inset, rose tile, plum inset panel, S-07 strip).
- `NavigationMenu`: desktop `About us` button uses `data-dropdown`, `aria-expanded` and `aria-controls` to toggle a two-column 6-link flyout anchored under the trigger. Below `900px` (hidden at `>= 900px`), a round hamburger trigger opens a full-viewport modal dialog (`role="dialog"`, `aria-modal="true"`, focus trap, Escape close, body scroll lock).
- `Card`: `8px` radius, `--surface` fill, `1px solid var(--rule)` border, no shadow.
- `Stat`: 4-column grid with `44px` bold Plus Jakarta Sans figures and `14px` `--muted` labels.
- `Table`: semantic `<table>` with `<caption>` inside an `overflow-x: auto` region (`role="region"`, `aria-label`, `tabindex="0"`).
- `Input`, `Textarea`, `NativeSelect` (`select.inputer`): `8px` radius (pill in footer), `1px solid var(--control-line)` border (`--on-dark-line` in footer), explicit dual-gradient CSS chevron visible in both light and dark appearances.
- `Accordion` and shop disclosure: real `<button aria-expanded aria-controls>` triggers with Escape dismissal on the shop selector and `aria-pressed` state on the 4 sample shop choices.
- `ToggleGroup` (footer appearance switch): `role="radiogroup"` pill container with transparent fill and `1px solid var(--on-dark-line)` border holding three `role="radio"` pill buttons (`System`, `Light`, `Dark`) with `aria-checked` and arrow-key navigation; unselected buttons stay transparent with no fill and no border, while the selected button uses solid `--on-dark` fill with `--footer-bg` text.

Measured structural contracts:

```
menu-overlay-width: 100vw
dropdown-width: 560px
quote-font: Plus Jakarta Sans
quote-size: 32px
```

The header flyout panel is `min(560px, calc(100vw - 32px))` wide, anchored below its trigger.

Blockquote override: `.oh blockquote` and `.oh blockquote p` override Aura's uppercase quote style so pull quotes render in Plus Jakarta Sans, `text-transform: none`, weight `500`, `32px` at `>= 1000px` (`24px` at `< 1000px`), line-height `1.2`, and tracking `-0.025em`.

## Do's and Don'ts

**Do:**
- Pair every illustrated tile headline with a bottom `--scrim-base` gradient and fixed `--on-dark` / `--on-dark-eyebrow` text in both light and dark modes.
- Keep all interactive control boundaries high-contrast using `--control-line`, `--band-marigold-line`, `--on-dark-line`, and `2px` dark rims on white round tile buttons.
- Use `min-width: 0` on grid/flex children and `minmax(0, 1fr)` grid tracks so no headline overflows at `360px`.
- Gate all animations and transitions behind `html.motion` and provide a pause/play button for every looping scene.
- Match the `2px` focus ring to its surface: `--focus` on the canvas, `--on-dark` inside dark bands, tile scrims and the footer, and `--ink` on light fills (marigold shop tile, sage band, rose tile and the `--surface-card` panel inside the plum band).
- Draw carousel card focus inside the card: a `3px` `--ink` ring with a `2px` `--surface-card` inner rim on a pseudo-element that paints above the illustration, plus a transparent outline for forced colors, because the card and the track viewport clip anything outside the card edge.
- When Previous or Next becomes disabled while it has keyboard focus, move focus to the opposite carousel control if that control is enabled, so focus never drops to the page.
- Write all product family names in plain normal-case English with US spelling.

**Don't:**
- Do not add drop shadows to mosaic tiles or feature bands.
- Do not hide sections behind scroll-reveal opacity transitions.
- Do not put `overflow-x: hidden` on `html` or `body`; clip decorative art and carousel tracks inside their own wrapper.
- Do not leave text clipped inside rigid fixed-ratio containers at `360px`.

## Motion

All CSS animations and transitions sit strictly behind `html.motion`, which the head script attaches only when `prefers-reduced-motion: no-preference` matches. Two ambient looping scenes exist — the lead shelf-wall gentle drift (`18s ease-in-out infinite alternate`) and the S-07 tote-on-plinth subtle float (`6s ease-in-out infinite alternate`) — and each carries a dedicated round pause/play button (`aria-pressed`) that toggles `animation-play-state: paused`. Carousel slide transforms and hover cues use `0.25s ease` under `html.motion`. Under `prefers-reduced-motion: reduce`, `document.getAnimations()` stays empty at load and after scrolling.

## Usage example

```tsx
import { Button, Card } from "@aura/ui";

export function OakhollowLeadTile() {
  return (
    <section style={{ background: "var(--canvas)", paddingInline: "calc(var(--aura) * 1.25)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr)", gap: "calc(var(--aura) * 1.25)" }}>
        <Card style={{ borderRadius: 8, background: "var(--band-marigold)", color: "var(--ink)", border: 0, boxShadow: "none" }}>
          <h2 className="h2" style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.18 }}>
            Browse the catalog
          </h2>
          <Button variant="fill" style={{ borderRadius: 8, background: "var(--accent)", color: "var(--accent-ink)" }}>
            Explore catalog
          </Button>
        </Card>
      </div>
    </section>
  );
}
```
