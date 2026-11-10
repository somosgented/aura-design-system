---
version: "alpha"
name: "Ashgrove"
description: "Full-width alternating mist and night mosaics, translucent pill-paired nav and dense small-type footer directory, a calm home-objects flavor of Aura for consumer-products marketing pages."
extends: "../../DESIGN.md"
colors:
  primary: "#2563a8"
  on-primary: "#ffffff"
  surface: "#ffffff"
  surface-container: "#f0f2f5"
  on-surface: "#111318"
  on-surface-variant: "#555e6b"
  outline: "#c8cdd6"
  grove: "#2563a8"
  grove-deep: "#1a4d8f"
  mist: "#f0f2f5"
  night: "#111318"
  ember: "#c94f1a"
  moss: "#1f5c3b"
  clay: "#7a2e1a"
  honey: "#c4860a"
  dusk: "#5b3a7a"
typography:
  headline-display:
    fontFamily: "Inter"
    fontWeight: 600
    lineHeight: 1.07
    letterSpacing: -0.022em
  body-md:
    fontFamily: "Inter"
    fontWeight: 400
    lineHeight: 1.47
    letterSpacing: -0.011em
  label-md:
    fontFamily: "JetBrains Mono"
    fontSize: 12px
    fontWeight: 400
    letterSpacing: 0em
    note: "Used for footnote number markers only. Footnote body text and unnumbered notes use the sans font at 12px var(--muted)."
rounded:
  md: 12px
  full: 9999px
spacing:
  unit: 13px
  section: 143px
  max-width: 1300px
aura:
  theme:
    light:
      accent: "#2563a8"
      gray: "#555e6b"
      background: "#ffffff"
    dark:
      accent: "#5b9de8"
      gray: "#7a8799"
      background: "#000000"
  fonts:
    sans: "Inter"
    display: "Inter"
    label: "JetBrains Mono"
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
  hero: "paper"
  headingWeight: 600
  radius:
    button: "9999px"
    input: "12px"
    surface: "18px"
  tokens:
    light:
      ink: "#111318"
      body: "#555e6b"
      muted: "#5c6470"
      canvas: "#ffffff"
      paper: "#ffffff"
      mist: "#f0f2f5"
      night: "#111318"
      night-ink: "#f0f2f5"
      night-muted: "#9aa4b2"
      nav-glass: "#111318cc"
      nav-ink: "#f0f2f5"
      grove: "#2563a8"
      grove-deep: "#1a4d8f"
      on-grove: "#ffffff"
      link: "#2563a8"
      link-night: "#7ab8f5"
      rule: "#c8cdd6"
      control-line: "#6b7585"
      control-line-night: "#7a8799"
      focus: "#2563a8"
      focus-night: "#7ab8f5"
      dot: "#6b7482"
      footer: "#f0f2f5"
      footer-ink: "#2563a8"
      ember: "#c94f1a"
      moss: "#1f5c3b"
      clay: "#7a2e1a"
      honey: "#c4860a"
      dusk: "#5b3a7a"
    dark:
      ink: "#edeef2"
      body: "#9aa4b2"
      muted: "#8a95a3"
      canvas: "#000000"
      paper: "#0d0f14"
      mist: "#1a1d24"
      night: "#0a0c10"
      night-ink: "#edeef2"
      night-muted: "#9aa4b2"
      nav-glass: "#111318cc"
      nav-ink: "#edeef2"
      grove: "#5b9de8"
      grove-deep: "#79b2f0"
      on-grove: "#000000"
      link: "#5b9de8"
      link-night: "#7ab8f5"
      rule: "#2a2d35"
      control-line: "#7a8799"
      control-line-night: "#9aa4b2"
      focus: "#5b9de8"
      focus-night: "#7ab8f5"
      dot: "#6b7585"
      footer: "#0d0f14"
      footer-ink: "#7ab8f5"
      ember: "#e06030"
      moss: "#27784a"
      clay: "#a84030"
      honey: "#d4960a"
      dusk: "#8060a8"
---

# Ashgrove

> Ashgrove is a consumer-products marketing theme of cool mist mosaics, deep night bands, and pill-paired actions. Built on Aura.

This file is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility). All copy, data, figures and visuals in the showcase are original and fictional; any resemblance to a real product is coincidental.

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated scale values.
3. If the app uses `next/font`, load Inter (400;500;600;700) and JetBrains Mono (400;500) there instead of the `@import`, and point `--font-sans`, `--font-display` and `--font-label` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Ashgrove's sample copy into an unrelated product. All prices, counts and durations are labelled as sample figures.
6. Verify at 360px, 768px and 1280px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Ashgrove is built on a white canvas with full-width product mosaics alternating between `mist` (pale cool-gray, light mosaic) and `night` (near-black, dark mosaic), separated by a 12px gap that lets the page background show through. Filled pill buttons use `grove` (a slightly teal-shifted blue) with white `on-grove` text; outline pills on light surfaces carry a 1px `link` border; on night surfaces the outline/text color shifts to `link-night` (lighter blue). The global nav is a 44px bar with a translucent `nav-glass` fill and blur, present in both appearances. The five decorative hues — `ember`, `moss`, `clay`, `honey` and `dusk` — appear only inside CSS/SVG artwork: never as text or control color. Use Ashgrove for calm, objects-first consumer-products home pages.

## Colors

Seeds generate the full Aura 12-step scales in `theme.css`. Custom tokens extend them for Ashgrove-specific surfaces.

| Role | Token | Aura step | Use |
| --- | --- | --- | --- |
| Page canvas | `--canvas` | `gray-1` | App background |
| Cards, dropdowns | `--paper` | `gray-2` | Elevated surfaces |
| Mist mosaic | `--mist` | `gray-2`–`gray-3` | Light product mosaic background |
| Night mosaic | `--night` | dark `gray-1` scoped | Dark product mosaic background |
| Night headings | `--night-ink` | `gray-12` on night | Headings and primary text on night surfaces |
| Night body | `--night-muted` | `gray-11` on night | Secondary prose on night surfaces |
| Nav fill | `--nav-glass` | 8-digit hex with alpha | Translucent nav background; `backdrop-filter: blur` |
| Nav text | `--nav-ink` | near-white | Category labels and icons in the nav |
| Hairline | `--rule` | `gray-6` | Dividers, table borders |
| Ink | `--ink` | `gray-12` | Primary text |
| Body | `--body` | `gray-11` | Secondary prose |
| Muted | `--muted` | `gray-9`–`gray-10` | Footnotes, metadata |
| Action fill | `--grove` | `accent-9` | Filled pill buttons |
| Action hover | `--grove-deep` | `accent-10` | Hover state of grove pills |
| On grove | `--on-grove` | `accent-contrast` | Text on grove-filled buttons; meets 4.5:1 on grove |
| Text link / outline pill light | `--link` | custom | Links and outline pills on canvas, paper and mist |
| Text link / outline pill night | `--link-night` | custom | Links and outline pills on night surfaces |
| Control border light | `--control-line` | custom | Input/select borders on light surfaces; meets 3:1 on paper, canvas, mist |
| Control border night | `--control-line-night` | custom | Input/select borders on night surfaces; meets 3:1 on night |
| Focus ring light | `--focus` | custom | Focus outline on light surfaces; meets 3:1 |
| Focus ring night | `--focus-night` | custom | Focus outline on night surfaces; meets 3:1 |
| Inactive dot | `--dot` | custom | Gallery dot tabs on mist; meets 3:1 on mist |
| Footer surface | `--footer` | `gray-2` | Footer directory background |
| Footer link | `--footer-ink` | custom | Footer link text; meets 4.5:1 on footer |
| Ember | `--ember` | custom | Decorative artwork only |
| Moss | `--moss` | custom | Decorative artwork and deep hero tile fill; white text on moss meets 4.5:1 |
| Clay | `--clay` | custom | Decorative artwork and deep hero tile fill; white text on clay meets 4.5:1 |
| Honey | `--honey` | custom | Decorative artwork only |
| Dusk | `--dusk` | custom | Decorative artwork only |

**Contrast rules:**
- `--ink` on `--canvas`, `--paper` and `--mist` meets WCAG AA (4.5:1) in both appearances.
- `--night-ink` on `--night` meets WCAG AA. `--night-muted` on `--night` meets WCAG AA.
- `--on-grove` on `--grove` meets 4.5:1 in both appearances.
- `--link` on `--canvas`, `--paper` and `--mist` meets 4.5:1.
- `--link-night` on `--night` meets 4.5:1 in both appearances.
- `--nav-ink` over `--nav-glass` atop any mist or night content meets 4.5:1.
- `--control-line` meets 3:1 on paper, canvas and mist. `--control-line-night` meets 3:1 on night.
- `--focus` meets 3:1 on all light surfaces. `--focus-night` meets 3:1 on night.
- `--dot` meets 3:1 on mist.
- `--footer-ink` meets 4.5:1 on `--footer`.
- White text on `--moss` and `--clay` meets 4.5:1 for hero text tiles.
- Ember, honey and dusk are decorative only; no contrast requirement applies.

### Dark mode

Ashgrove's dark appearance is a declared adaptation — it is not derived from any observed external dark theme. In dark mode the body background becomes black (`--canvas: #000000`); `--paper` becomes a very dark near-black graphite. The `--mist` band, which is pale cool-gray in light, becomes a dark graphite surface so light mosaics read as a distinct dark layer rather than disappearing into the body. The `--night` mosaic stays near-black (slightly deeper than the dark canvas). Link blues lighten: `--link` and `--grove` shift to lighter blues that meet 4.5:1 on the dark canvas, paper and mist. `--on-grove` switches to near-black so it meets 4.5:1 on the lighter dark-mode grove fill. A single `.dark` block on `<html>` switches all semantic tokens; individual sections need no extra dark overrides.

| Variable | Light | Dark |
| --- | --- | --- |
| `--canvas` | white | black |
| `--paper` | white | very dark graphite |
| `--mist` | pale cool-gray | dark graphite |
| `--night` | near-black | deeper near-black |
| `--grove` | mid blue | lighter blue |
| `--on-grove` | white | near-black |
| `--link` | mid blue | lighter blue |
| `--rule` | cool light gray | dark gray |

## Typography

Inter (SIL OFL) is used at weights 400, 500, 600 and 700 for all prose and headings. JetBrains Mono (SIL OFL) is used at weights 400 and 500 for footnote markers and small numeric chips only.

| Element | Size / Leading | Weight | Aura class |
| --- | --- | --- | --- |
| Hero tile `h2` (1280) | 56px / 60px | 600 | `.h1 font-display` |
| Hero tile `h2` (360) | 32px / 36px | 600 | `.h1 font-display` |
| Hero sub-line (≤ 480px) | 17px | 400 | `.h5` |
| Promo tile `h3` (1280) | 40px / 44px | 600 | `.h2 font-display` |
| Promo tile `h3` (360) | 28px / 32px | 600 | `.h2 font-display` |
| Promo sub-line (≤ 480px) | 15px | 400 | `p` |
| Section `h2` | 40px / 44px | 600 | `.h2 font-display` |
| Sub-line | 21px / 28px | 400 | `.h5` |
| Body prose | 17px / 25px | 400 | `p` |
| Nav category | 12px / 18px | 600 | `.small font-display` |
| Flyout big link | 24px / 30px | 600 | `.h4 font-display` |
| Flyout small link | 12px / 18px | 400 | `.small` |
| Footnote number marker | 12px | 400 | `font-label` |
| Footnote body text | 12px / 19px | 400 | `font-sans` (`inherit`), `--muted` |
| Stats figure | 48px / 52px | 600 | `.h1 font-display` |

## Layout

Ashgrove's spacing maps to the 13px grid:

| Source px | Aura step | px | Use |
| --- | --- | --- | --- |
| 11–12 | `0.5`–`1` | 6.5–13 | Pill padding-y, icon gap |
| 21 | `1.5` | 19.5 | Pill padding-x |
| 24 | `2` | 26 | Card inner padding |
| 44 | `3.5` | 45.5 | Nav height, pill height |
| 56 | `4` | 52 | Locale bar height |
| 80 | `6` | 78 | Promo tile inner padding |
| 96 | `7.5` | 97.5 | Section vertical padding |
| 140 | `11` | 143 | Large section gap |
| 520 | `40` | 520 | Product mosaic tile min-height at 1280px |
| 1300 | `100` | 1300 | Max content width |

**S-00 Locale bar:** A dark strip above the nav (`background: --night`; class `ag-locale`). At ≥768px: a single flex row — text (`flex:1; min-width:0`), select (`width:auto; min-width:180px; flex-shrink:0`), Continue pill, close × — all vertically centered in the ~52px bar, text 12px. At <768px: text on its own full-width line, then a second row with the select (`flex:1`) + Continue + close ×. The `NativeSelect` has `border: 1px solid var(--control-line-night)`, `color: var(--night-ink)` and a visible system chevron, meeting 3:1 on the night strip. Both Continue and close dismiss the bar; focus moves to the nav wordmark. `--night-ink` text meets 4.5:1 on night. The element is a `div` with `role="region"` and `aria-label="Region selector"` (not `role="alert"`).

**S-01 Global nav (1280px):** A sticky 44px `<header>` with `z-index: 60`, `isolation: isolate`, `background: var(--nav-glass)` and `backdrop-filter: blur(20px)`. Content max 1000px centered inside a `<nav aria-label="Main navigation">`. Left: an accent square wordmark + "Ashgrove" at 12px weight 600. Center: 9 category buttons — Gifts, Lamps, Sound, Kitchen, Textiles, Clocks, Outdoor, Studio, Help — at 12px `--nav-ink`. Right: search icon button and bag icon button (badge "0"). Clicking a category (click/Enter/Space only; no hover) opens a flyout panel — a plain `div` with `position: absolute; top: 100%; left: 0; right: 0` inside the header, `background: --night`, full-width, content max 1000px centered in 3 columns in a `.ag-flyout-inner` div. Each flyout has three column headings. For product categories (Lamps, Sound, Kitchen, Textiles, Clocks, Outdoor, Studio): col 1 "In the [category] range", col 2 "Bring one home", col 3 "Care and guides". For Gifts: col 1 "In the gifts range", col 2 "Bring one home", col 3 "Wrapping and delivery". For Help: col 1 "How we can help", col 2 "Add a Care plan", col 3 "Find us". The bag panel is similarly a full-width night panel under the nav with its content in `.ag-flyout-inner`, max 1000px centered. Only one panel open at a time; same trigger toggles it closed; Escape closes and returns focus; click outside closes; ArrowDown from a trigger opens the panel (if not already open) and moves focus to the first link inside it; a dimming blurred scrim (`position: fixed; z-index: 55`) covers page content below while a panel is open — the header at z-index 60 sits above the scrim so triggers remain interactive. `aria-expanded` and `aria-controls` on each trigger. Flyout panels are plain `div` elements — no `role`, no `aria-label`; the trigger's `aria-controls` and `aria-expanded` are sufficient.

**S-01 Global nav (360px):** 48px bar: wordmark left; search, bag and two-line menu button right. Menu opens a full-screen panel (`z-index: 70`, `background: --night`, internally scrollable) with a close × top-right and 9 category rows at 28px weight 600 `--night-ink` in order: Gifts, Lamps, Sound, Kitchen, Textiles, Clocks, Outdoor, Studio, Help. Each row is a button that slides to a sub-view listing that category's links with a "Back" button. The sub-view title for Help reads "Help". Escape closes and returns focus to the menu button; page scroll is locked while open.

**S-02 Campaign hero:** Full-width mosaic of CSS/SVG tiles on a 4-column × 2-row grid at 1280px (each row 260px, no empty cells). The text tile spans columns 1–2, rows 1–2 on `--moss`. The remaining 4 cells hold: lamp glow tile (col 3, row 1), concentric circles tile (col 4, row 1), checker tile (col 3, row 2), woven stripes tile (col 4, row 2). At ≤900px: 2-column grid with rows `320px 200px 200px`; text tile spans both columns in row 1 (`grid-column:1/3; grid-row:1/2`); the 4 decorative tiles fill a 2×2 grid in rows 2–3, with no empty cells. At ≤480px: 2-column grid with rows `360px 160px 160px`; text tile spans both columns in row 1 (`grid-column:1/3; grid-row:1/2`); the 4 decorative tiles fill a 2×2 grid in rows 2–3, no empty cells. The mosaic container has no `role` or `aria-label`. Each decorative tile div carries `aria-hidden="true"`. The text tile contains a single filled pill "See the collection". Drift animations are declared only under `.motion` and scoped to `#ag-hero` via `.ag-hero-paused` (e.g. `.motion .ag-drift-x { animation: … }; .ag-hero-paused .ag-drift-x { animation-play-state: paused }`); pressing the pause button toggles the class `ag-hero-paused` on `#ag-hero` only — `html.motion` is never touched by the hero pause button, so gallery autoplay, flyout and FAQ animations are unaffected. With `prefers-reduced-motion: reduce` the `.motion` class is absent, no animation runs and the button starts labelled "Play animation". Pressing Play under reduced motion shows an `aria-live="polite"` note: "Animation is off because reduced motion is on." `aria-label` on the pause button toggles between "Pause animation" and "Play animation"; `aria-pressed` is not used.

**S-03 Product mosaics:** Two full-width tiles (min-height 520px at 1280px, light on `--mist` then dark on `--night`) with a 12px gap between them (the page background shows through). Each is centered: `h2` + sub-line + pill pair with object-specific labels (e.g. "Meet the Lantern" + "Reserve one" on mist; "Hear the Orbit" + "Reserve one" on night) + a large CSS/SVG product visual below the text (Ashgrove Lantern glowing lamp on mist; Ashgrove Orbit fabric-dot sphere on night). Text on the night tile uses `--night-ink` and `--link-night` for the outline pill.

**S-04 Promo grid:** 2 × 3 tile grid (12px gaps, `minmax(0, 1fr)` columns), mixed dark and light tiles in order: dark, light, light, dark, dark, light. Each tile: `h3` (40px at 1280, 28px at 360), 2-line sub, pill pair with object-specific labels (some tiles one pill only), a CSS/SVG visual below. Two tiles carry `<sup>` footnote links (superscript, `font-label`, linking to `#note-1` and `#note-2`). Below 768px the grid becomes 1 column.

**S-05 Sessions gallery:** A band on `--mist`. Centered `h2` (40px). Horizontal gallery of 9 large 16:9 media cards (~80% of 1000px wide at 1280, `border-radius: 0`). Current card centered; neighbours peek. Each card has a bottom-left white filled pill "Join session" and a short caption line behind a dark text scrim meeting 4.5:1. Below cards: a WAI-ARIA `tablist` of 9 dot tabs (roving tabindex, Left/Right/Home/End; active dot is a 24px capsule `--grove`; inactive dots use `--dot` meeting 3:1 on mist) and an autoplay pause button at right. The autoplay pause button's initial `aria-label` is "Play gallery"; it switches to "Pause gallery" only when motion is allowed and autoplay starts. Autoplay advances every 5 s only when `prefers-reduced-motion: no-preference` and not paused by user. It pauses on `pointerenter` anywhere inside `#ag-sessions` and on `focusin` inside `#ag-sessions`; it resumes on `pointerleave` and on `focusout` when focus leaves `#ag-sessions`, unless the user pressed the pause button. With reduced motion there is no autoplay and the button stays as "Play gallery". Tab 2 (index 1, the Kitchen session) is initially selected; its panel has no `inert` attribute. All other panels carry the `inert` attribute (no `aria-hidden`); `inert` is added and removed in sync with tab selection. Below the gallery: 3 smaller cards (Workshops, Recipes, Repair days) each with a grove pill.

**Stats band:** "Ashgrove in numbers" — 4 big figures at 48px weight 600 with short labels, labelled as sample figures.

**Comparison table:** "Compare Lantern models" — real `<table>` with `<caption>`, 4 sample models (Lantern One, Lantern Arc, Lantern Glow, Lantern Grand) × 6 rows (light output, warmth range, battery, weight, materials, sample price), inside `overflow-x: auto` with `role="region"`, `aria-label` and `tabindex="0"`.

**Care plans:** 3 plan cards (Basic sample free, Plus, Complete) with monthly sample prices, checklists and pill CTAs. The recommended card has a 2px `--grove` border. The "Recommended" badge is 12px, weight 600, `--grove` color meeting 4.5:1 on the card background.

**Sessions booking form:** Name, email, session `NativeSelect`, date input, notes `Textarea`, consent checkbox. Submit prevents default; inline errors linked via `aria-describedby`; `aria-live` confirmation. Sends nothing.

**FAQ:** `Accordion` of 5 sample questions and answers. Multiple items may be open simultaneously (independent toggles; no single-open constraint).

**Closing CTA tile:** A centered dark tile (`background: --night`) "Find the Ashgrove object that fits your home." with a grove filled pill "Browse the collection" + an outline pill "Learn about Sessions".

**S-06 Numbered notes:** `<ol>` of 3 notes (`id="note-1"` … `id="note-3"`) at 12px `--muted` on `--footer` background, in the sans font (`var(--aura-font-sans)` or `inherit`), each with a back-link to its superscript. Two short unnumbered paragraphs follow in the same style. All text meets 4.5:1 on `--footer`. The monospace label font is not used for note body text.

**S-07 Footer directory:** `--footer` background, inside a `<nav aria-label="Site directory">`. 5 columns at 1280px holding 11 groups: column 1 — Objects, Gift ideas; column 2 — Sessions, Recipes and guides; column 3 — Ashgrove Care, Orders and delivery; column 4 — For studios, For makers, For schools; column 5 — About Ashgrove, Values. Each group has 3–6 fictional links. Column titles at 12px weight 600 `--ink`; links at 12px `--footer-ink`, 8px line gaps. `box-sizing: border-box` and `width: 100%` on the container prevents overflow at 768px. Below 768px every group collapses into an accordion button row (`aria-expanded`, chevron icon, hairline `--rule` separators), all collapsed by default.

**S-08 Final bar:** "Prefer to see things in person? Visit an Ashgrove space or one of our partner makers (sample)." — a hairline `--rule`, then "2026 Ashgrove, a fictional company." + legal links (Privacy, Terms, Sending something back (sample), Legal, Directory) separated by thin `--rule` bars + region label "United States (sample)" at the right. The orders and delivery directory section uses "Where is my order?" instead of "Track your order" and "Sending something back (sample)" instead of "Returns (sample)". "Studio locations" appears in the Sessions group and "Ashgrove vouchers (sample)" appears in the Gift ideas group. Stacks at 360px.

**Z-index scale:** scrim 55 < header/nav with flyout panels 60 < mobile menu 70. The header carries `isolation: isolate` and `z-index: 60`; flyout panels sit inside the header at `position: absolute; top: 100%; z-index: 1` so they always open below the nav bar and are clipped within the header stacking context, sitting above the scrim. The scrim at `position: fixed; z-index: 55` sits below the header stack so nav triggers remain clickable while a panel is open. The mobile menu at `position: fixed; z-index: 70` sits above everything.

## Elevation & Depth

- **Flat default:** Canvas, mist and footer carry no shadow.
- **Mosaics:** Depth comes from the alternating `--mist` / `--night` fills against the white page gap; no shadow added.
- **Nav glass:** `backdrop-filter: blur(20px)` on `--nav-glass` (8-digit hex with alpha) creates a frosted layer above content.
- **Flyout panels:** Positioned `absolute` with `top: 100%; left: 0; right: 0` inside the header stacking context; `z-index: 1` relative to the header; no additional shadow — the `--night` fill provides separation.
- **Scrim:** `position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); z-index: 55`.
- **Plan cards:** The recommended plan has `border: 2px solid var(--grove)`; others `border: 1px solid var(--rule)`. No shadow.
- **Gallery cards:** `border-radius: 0`; depth from surrounding `--mist` band.
- Dark mode: no glow or extra blur is added.

## Shapes

- **Buttons:** Fully rounded pills (`border-radius: 9999px`). Filled grove pills and 1px outline pills.
- **Inputs and selects:** `border-radius: 12px` with explicit `border: 1px solid var(--control-line)` on light and `border: 1px solid var(--control-line-night)` on night.
- **Surface cards, flyout panels, plan cards:** `border-radius: 18px`.
- **Gallery cards and product mosaic tiles:** `border-radius: 0` (square edges, flush mosaic).
- **Nav pause buttons:** Circular, `border-radius: 9999px`, 36px.
- **Active gallery dot:** 24px capsule, `border-radius: 9999px`. Inactive dots: 8px circles.
- **Accent wordmark square:** 18px × 18px, `border-radius: 4px`.

## Components

| Flavor element | Aura component | Notes |
| --- | --- | --- |
| Filled grove pill ("Learn more") | `Button variant="fill"` | `bg-(--grove) text-(--on-grove) hover:bg-(--grove-deep) rounded-full px-[19.5px] h-[45.5px]` |
| Outline pill light ("Order") | `Button variant="pill"` | `border border-(--link) text-(--link) bg-transparent rounded-full` |
| Outline pill night | `Button variant="pill"` | `border border-(--link-night) text-(--link-night) bg-transparent rounded-full` |
| Global nav | `NavigationMenu` | Full-width flyout; `left:0; right:0`; click/Enter only; `aria-expanded`/`aria-controls` |
| Locale bar select | `NativeSelect class="inputer"` | `.ag select.inputer { border: 1px solid var(--control-line-night); appearance: auto; color: var(--night-ink); background: color-mix(in srgb, white 8%, transparent); }` |
| Search input in flyout | `Input` | 24px, borderless with a 2px bottom border (`border-bottom: 2px solid var(--night-muted)`); no radius box; `placeholder` "Search Ashgrove — local demo" |
| Mosaic tile (product hero) | `Card` | `rounded-none shadow-none overflow-hidden`; CSS/SVG product art inside |
| Promo tile | `Card` | `rounded-none shadow-none overflow-hidden`; `h3` + sub + pills + art |
| Gallery card | `Card` | `rounded-none shadow-none`; 16:9; bottom-left pill + scrim caption |
| Plan card | `Card` | `rounded-[18px]`; recommended: `border-2 border-(--grove)`; others: `border border-(--rule)` |
| Sessions gallery dot tablist | `Tabs` with dot variant | WAI-ARIA `tablist`; roving tabindex; Left/Right/Home/End; active = 24px capsule `--grove` |
| Autoplay pause | `Button size="icon-md"` circular | `border-radius: 9999px`; `aria-label` toggles; `aria-pressed` omitted per spec |
| Campaign hero pause | `Button size="icon-md"` circular | 36px; translucent dark fill; white icon; `aria-label` "Pause animation" / "Play animation" |
| FAQ | `Accordion` | 5 items; `--body` answers; first item open |
| Footer groups (< 768px) | `Accordion` | All collapsed by default; `aria-expanded`; chevron icon; `border-b border-(--rule)` |
| Comparison table | `Table` inside `overflow-x: auto` | `role="region"` wrapper; `aria-label`; `tabindex="0"`; `text-sm` cells |
| Care plans form | `Input`, `NativeSelect`, `Textarea` | `border-radius: 12px`; `border: 1px solid var(--control-line)`; `aria-describedby` errors; `aria-live` confirm |
| NativeSelect on night | `NativeSelect class="inputer"` | `.ag select.inputer.night { border: 1px solid var(--control-line-night); color: var(--night-ink); background: var(--night); }` |
| Stat figures | `Stat`, `StatValue`, `StatLabel` | `font-display font-semibold text-[48px]`; labels `--body`; sample figures |
| Locale bar region | `div role="region"` | `aria-label="Region selector"`; close × moves focus to nav wordmark; not `role="alert"` |
| Footnote superscript | inline `<sup><a>` | `font-label text-[12px] text-(--link)` on light; `text-(--link-night)` on night |

## Do's and Don'ts

- Do use `--grove` only for filled pill buttons and the active gallery dot capsule.
- Do use `--link` for text links and outline pills on light surfaces only; `--link-night` on night surfaces.
- Do keep `--ember`, `--moss`, `--clay`, `--honey` and `--dusk` inside CSS/SVG artwork only — never as text or control color.
- Do use white text on `--moss` and `--clay` hero tiles only after verifying 4.5:1.
- Do give every `NativeSelect` an explicit `border` and `appearance: auto` or a custom chevron meeting 3:1.
- Do position flyout panels with `left:0; right:0` against the nav, never anchored to the trigger `<li>`.
- Do keep `min-width: 0` on every grid and flex child to prevent overflow at 360px.
- Do label all prices, counts and durations as sample figures.

- Don't open flyout panels on hover — click or Enter/Space only.
- Don't animate anything under `prefers-reduced-motion: reduce`; show all content in its final visible state.
- Don't use `--ember`, `--honey` or `--dusk` for any text, border or control color.
- Don't add shadows or blur to mosaic tiles; depth comes from alternating fills and the 12px page-background gap.
- Don't use hex literals inside component or Reference sections; use token custom properties only.
- Don't send, store or transmit any data from forms, the search panel or the bag panel.
- Don't split words mid-word; use font sizes that fit the container at 360px (`overflow-wrap: break-word`; `hyphens: none`).

## Motion

All motion sits behind `@media (prefers-reduced-motion: no-preference)`. Use only `opacity`, `transform` and `background-color`.

| Element | Animation | Timing |
| --- | --- | --- |
| Flyout panel open | Slide down `translateY(-8px → 0)` + `opacity 0 → 1` | 220ms `ease` |
| Scrim appear | `opacity 0 → 1` | 200ms `ease` |
| Hero tile drift | `translateX` / `translateY` subtle loop | 8–12s `linear` infinite; paused by pause button |
| Mosaic text fade-up | `translateY(16px → 0) opacity 0 → 1` | 400ms `cubic-bezier(0.4, 0, 0.2, 1)` on scroll entry |
| Gallery slide | `scroll-behavior: smooth` or `transform` | 300ms `ease` |
| Button hover fill | `background-color` to `--grove-deep` | 180ms `ease` |
| Autoplay advance | Gallery slide every 5 s | Only when `prefers-reduced-motion: no-preference` and not paused |

With `prefers-reduced-motion: reduce`: tile drift does not run (button starts in "Play animation" state); gallery autoplay is off (button starts as "Play gallery"); all entrances appear instantly at their final state; flyout and scrim appear without transition.

## Accessibility notes

- All normal-weight text at any size meets WCAG AA 4.5:1 against its background in both appearances. Control borders and focus rings meet 3:1. Decorative artwork hues (`--ember`, `--honey`, `--dusk`) are never used for text.
- Focus rings use `outline: 2px solid var(--focus)` with `outline-offset: 2px` on light; `outline: 2px solid var(--focus-night)` on night. Inside `#ag-hero` (the campaign mosaic), all `:focus-visible` elements use `outline: 2px solid white; outline-offset: 2px; box-shadow: 0 0 0 4px var(--night)` — a white ring with a dark halo — to achieve ≥3:1 contrast against every tile color including moss, clay, honey and dusk.
- `@media (forced-colors: active)`: pill borders use `ButtonBorder`; active gallery dot uses `Highlight`; focus outlines use `Highlight`; SVG icons use `currentColor`.
- The gallery tablist follows the WAI-ARIA tabs pattern: roving tabindex, Left/Right/Home/End keyboard navigation, `aria-selected` on the active tab, `aria-controls` pointing to the matching tabpanel.
- The flyout navigation uses `aria-expanded` and `aria-controls` on each trigger. Flyout panels are plain `div` elements — no `role`, no `aria-label` on the panel div itself. Escape closes the open panel and returns focus to the trigger. ArrowDown from a nav trigger opens the panel if closed, then moves focus to the first link inside the panel. The mobile full-screen menu (`role="dialog"`, `aria-modal="true"`) locks page scroll, traps Tab/Shift+Tab within the currently visible view (main list or sub-view), and returns focus to the menu button on close.
- The campaign hero pause button switches `aria-label` between "Pause animation" and "Play animation" but does not use `aria-pressed`.
- The comparison table sits inside a scroll region with `role="region"`, `aria-label="Compare Lantern models"` and `tabindex="0"` so keyboard users can reach the scrollable area.
- Locale bar select: the native `<select>` on the dark strip has `border: 1px solid var(--control-line-night)`, `background: color-mix(in srgb, white 8%, transparent)` and a visible system chevron, ensuring 3:1 on the night background in both appearances.
- Focus rings on night surfaces (locale bar, nav, flyouts, mobile menu, closing tile, gallery dark scrim pills) use `outline: 2px solid var(--focus-night)` via context rules (`#ag-nav :focus-visible`, `#ag-locale :focus-visible`, `.ag-flyout :focus-visible`, `#ag-menu :focus-visible`, `.on-night :focus-visible`). On light surfaces `outline: 2px solid var(--focus)` applies globally. Inside `#ag-hero` the white-ring-plus-night-halo rule overrides both.
- The consent checkbox has `accent-color: var(--grove)` and `border: 1px solid var(--control-line)` for visibility in both appearances.
- All drift animations are declared only under `.motion` (e.g. `.motion .ag-drift-x { animation: … }`). Gallery slide transition, dot transition, FAQ chevron transition and accordion chevron transition are similarly scoped to `.motion`. No animation or transition runs under `prefers-reduced-motion: reduce`.
- Gallery autoplay fires every 5000 ms only when `prefers-reduced-motion: no-preference` and not user-paused. Autoplay is suspended on `pointerenter` or `focusin` inside `#ag-sessions` and resumes on `pointerleave` / `focusout` (when focus leaves the section), unless the pause button was pressed.
- The FAQ accordion allows multiple items open simultaneously; there is no single-open constraint.

## Reference

```tsx
<section className="ag w-full bg-(--mist) overflow-hidden">
  <div className="mx-auto max-w-[1300px] px-[26px] py-[97.5px] flex flex-col items-center gap-[26px] min-w-0">
    <h2 className="h2 font-display font-semibold text-(--ink) text-center tracking-[-0.022em] max-w-[18ch]">
      Ashgrove Lantern. Warm light, wherever you settle.
    </h2>
    <p className="text-[17px] leading-[25px] text-(--body) text-center max-w-[40ch] overflow-wrap-break-word">
      Sample description. Dimmable from full glow to a soft ember warmth. Cord-free for up to 18 hours (sample figure).
    </p>
    <div className="flex gap-[13px] flex-wrap justify-center">
      <Button
        variant="fill"
        className="rounded-full bg-(--grove) text-(--on-grove) hover:bg-(--grove-deep) px-[19.5px] h-[45.5px] font-semibold"
      >
        Learn more
      </Button>
      <Button
        variant="pill"
        className="rounded-full border border-(--link) text-(--link) bg-transparent px-[19.5px] h-[45.5px]"
      >
        Order
      </Button>
    </div>
    <div aria-hidden className="w-full max-w-[520px] aspect-[4/3] relative">
      <svg viewBox="0 0 520 390" className="w-full h-full">
        <ellipse cx="260" cy="300" rx="120" ry="30" fill="var(--rule)" />
        <rect x="230" y="80" width="60" height="200" rx="8" fill="var(--muted)" fillOpacity="0.3" />
        <ellipse cx="260" cy="80" rx="80" ry="80" fill="var(--honey)" fillOpacity="0.18" />
        <ellipse cx="260" cy="80" rx="50" ry="50" fill="var(--honey)" fillOpacity="0.28" />
        <ellipse cx="260" cy="80" rx="24" ry="24" fill="var(--honey)" fillOpacity="0.7" />
        <ellipse cx="260" cy="80" rx="10" ry="10" fill="var(--ember)" fillOpacity="0.9" />
      </svg>
    </div>
  </div>
</section>
```
