---
version: "alpha"
name: "Duskreef"
description: "Very deep navy-black page with condensed bold cream headlines, pastel pill buttons and abstract sunset art — a flavor of Aura for serialized audio drama launch pages."
extends: "../../DESIGN.md"
colors:
  primary: "#ffb4c8"
  on-primary: "#1a0a14"
  surface: "#0f1020"
  surface-container: "#181928"
  on-surface: "#e8e4f0"
  on-surface-variant: "#a09ab8"
  outline: "#2a2840"
typography:
  headline-display:
    fontFamily: "Barlow Condensed"
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -0.01em
  body-md:
    fontFamily: "Outfit"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: -0.01em
  label-md:
    fontFamily: "Outfit"
    fontSize: 12px
    fontWeight: 500
    letterSpacing: 0.05em
rounded:
  md: 16px
  full: 9999px
spacing:
  unit: 13px
  section: 143px
  max-width: 1280px
aura:
  theme:
    light:
      accent: "#7c3fa0"
      gray: "#7a6a90"
      background: "#f0eef8"
    dark:
      accent: "#c084e0"
      gray: "#8878a8"
      background: "#0a0b18"
  fonts:
    sans: "Outfit"
    display: "Barlow Condensed"
    href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Outfit:wght@400;500&display=swap"
  hero: "field"
  headingWeight: 700
  radius:
    button: "9999px"
    input: "12px"
    surface: "16px"
  tokens:
    light:
      canvas: "#f0eef8"
      ink: "#1a1428"
      body: "#2e2650"
      muted: "#7a6a90"
      rule: "#ccc8e0"
      control-line: "#8878a8"
      focus: "#7c3fa0"
      pill-pink: "#ffb4c8"
      on-pill-pink: "#1a0a14"
      pill-peach: "#ffd9b0"
      on-pill-peach: "#1a0a14"
      pill-lime: "#ecff9e"
      on-pill-lime: "#1a1400"
      card-bg: "#e8e4f4"
      card-scrim: "rgba(10,8,30,0.55)"
      eyebrow-tint: "#a080c0"
      plum-frame: "#3d1a4a"
      deep-plum: "#2a1040"
      band-bg: "#f4f0fc"
      footer-bg: "#e8e2f4"
      footer-ink: "#1a1428"
      statement-h: "#2a1040"
      neon-pink: "#e040a0"
      neon-cyan: "#20c8d8"
    dark:
      canvas: "#0a0b18"
      ink: "#e8e4f0"
      body: "#c8c0e0"
      muted: "#8878a8"
      rule: "#2a2840"
      control-line: "#5a5080"
      focus: "#c084e0"
      pill-pink: "#ffb4c8"
      on-pill-pink: "#1a0a14"
      pill-peach: "#ffd9b0"
      on-pill-peach: "#1a0a14"
      pill-lime: "#ecff9e"
      on-pill-lime: "#1a1400"
      card-bg: "#181928"
      card-scrim: "rgba(0,0,0,0.65)"
      eyebrow-tint: "#c0a0e0"
      plum-frame: "#3d1a4a"
      deep-plum: "#0e0820"
      band-bg: "#0e0f24"
      footer-bg: "#080814"
      footer-ink: "#e8e4f0"
      statement-h: "#e8e4f0"
      neon-pink: "#ff60c0"
      neon-cyan: "#40e8f8"
---

# Duskreef

> Very deep navy-black chrome with condensed cream display type, pastel pill buttons and abstract sunset art tiles — a launch-page flavor for serialized audio drama. Built on Aura.

This file is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility). All copy, data, figures and visuals in the showcase are original and fictional; any resemblance to a real production is coincidental.

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values.
3. If the app uses `next/font`, load Barlow Condensed (weights 600, 700) and Outfit (weights 400, 500) there instead of the `@import`, and point `--font-display` and `--font-sans` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Duskreef's sample copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Duskreef runs on three pillars: a near-black navy canvas (`--canvas`) that is the page at all times in dark, condensed uppercase display type in a warm cream/pale-yellow (`--ink`) that arrives at every scale from 24 px eyebrows to 64 px hero titles, and pastel pill buttons in three hues — pink (`--pill-pink`), peach (`--pill-peach`), and lime (`--pill-lime`) — each carrying dark ink labels. Abstract art in sunset palette (magenta, violet, coral, teal, sky, gold) lives exclusively inside art panels; the chrome itself is colorless. A dusk-gradient promotional strip crowns every page. The overlay menu is full-screen with large condensed links.

## Colors

| Role | Token | Dark value | Light value |
| --- | --- | --- | --- |
| Page canvas | `--canvas` | `#0a0b18` | `#f0eef8` |
| Primary ink | `--ink` | `#e8e4f0` | `#1a1428` |
| Body text | `--body` | `#c8c0e0` | `#2e2650` |
| Muted text | `--muted` | `#8878a8` | `#7a6a90` |
| Hairline rule | `--rule` | `#2a2840` | `#ccc8e0` |
| Control border | `--control-line` | `#5a5080` | `#8878a8` |
| Focus ring | `--focus` | `#c084e0` | `#7c3fa0` |
| Pink pill fill | `--pill-pink` | `#ffb4c8` | `#ffb4c8` |
| Pink pill text | `--on-pill-pink` | `#1a0a14` | `#1a0a14` |
| Peach pill fill | `--pill-peach` | `#ffd9b0` | `#ffd9b0` |
| Peach pill text | `--on-pill-peach` | `#1a0a14` | `#1a0a14` |
| Lime pill fill | `--pill-lime` | `#ecff9e` | `#ecff9e` |
| Lime pill text | `--on-pill-lime` | `#1a1400` | `#1a1400` |
| Card surface | `--card-bg` | `#181928` | `#e8e4f4` |
| Card art scrim | `--card-scrim` | `rgba(0,0,0,0.65)` | `rgba(10,8,30,0.55)` |
| Eyebrow tint | `--eyebrow-tint` | `#c0a0e0` | `#a080c0` |
| Plum frame | `--plum-frame` | `#3d1a4a` | `#3d1a4a` |
| Deep plum | `--deep-plum` | `#0e0820` | `#2a1040` |
| Band background | `--band-bg` | `#0e0f24` | `#f4f0fc` |
| Footer surface | `--footer-bg` | `#080814` | `#e8e2f4` |
| Footer text | `--footer-ink` | `#e8e4f0` | `#1a1428` |
| Statement heading | `--statement-h` | `#e8e4f0` | `#2a1040` |
| Neon pink glow | `--neon-pink` | `#ff60c0` | `#e040a0` |
| Neon cyan glow | `--neon-cyan` | `#40e8f8` | `#20c8d8` |

Pastel pill hues are identical in light and dark so they always read as bright accents regardless of appearance. Never use pastel fills for body text or control borders.

### Dark mode

Duskreef is dark-native. The dark appearance uses `--canvas: #0a0b18`, near-black navy, as the page background. The light appearance is a **declared Aura adaptation**: canvas becomes a pale lavender-white (`#f0eef8`), ink inverts to deep navy (`#1a1428`), display headlines shift to deep plum (`#2a1040`), control borders darken to pass 3:1, and the footer becomes a light lavender band. Cards keep their abstract art; scrims lighten slightly while maintaining text contrast. Pastel pill fills stay identical in both appearances. All semantic variables switch in one `.dark` block.

## Typography

| Role | Face | Weight | Size | Tracking | Leading |
| --- | --- | --- | --- | --- | --- |
| Display / h1 | Barlow Condensed | 700 | 64 px (44 px at 360) | −0.01 em | 1.0 |
| h2 / section title | Barlow Condensed | 700 | 40 px (32 px at 360) | −0.01 em | 1.05 |
| h3 / card title | Barlow Condensed | 700 | 28 px | 0 | 1.1 |
| Eyebrow | Outfit | 500 | 12 px | +0.05 em | 1.4 |
| Body | Outfit | 500 | 15–16 px | −0.01 em | 1.5 |
| Pill label | Outfit | 500 | 13–14 px | 0 | 1 |
| Small label / date | Outfit | 400 | 13 px | 0 | 1.4 |

Barlow Condensed uppercase is the voice of Duskreef: every headline and section title is set uppercase with a tight leading. Outfit at weight 500 handles all body text, labels, pill text, and form fields. No third typeface is used.

## Layout

| Source spacing | Aura step | px |
| --- | --- | --- |
| 6 px (icon gap) | 0.5 | 6.5 |
| 12–13 px (inline pad) | 1 | 13 |
| 16 px (card gap) | 1 | 13 |
| 24 px (sub-section gap) | 2 | 26 |
| 36–40 px (component gap) | 3 | 39 |
| 48 px (promo strip) | 3.5 | 45.5 |
| 88 px (header height) | 6.5 | 84.5 |
| 96 px (section pad) | 7.5 | 97.5 |
| 760 px (hero mosaic max-width) | — | 760 px |
| 1280 px max width | max-w-98.5 | 1280.5 px |

Page max-width: `min(100% − 48px, 1280px)` on desktop, `min(100% − 32px, 1280px)` on mobile. Section vertical padding: `calc(var(--aura) * 7.5)` (97.5 px). Grid children always declare `min-width: 0`; grid templates use `minmax(0, 1fr)`.

## Elevation & Depth

Duskreef uses no box shadows on chrome elements. Depth is created by layering: art panels sit below text scrims; the promo strip sits above the header which is transparent over the page. Art cards use a bottom linear-gradient scrim (`--card-scrim`) that is at least 50% opacity to ensure text contrast. Flyouts and the overlay menu have no shadow — they sit on the page background color. Neon-tube strokes in S-06b use a `filter: drop-shadow` glow only.

## Shapes

| Element | Radius |
| --- | --- |
| Pill buttons (all) | 9999 px |
| Form inputs / selects | 12 px |
| Art cards, mosaic panels | 16 px |
| Hero mosaic frame | ~3% (clamp to 16 px minimum) |
| Wide link cards (S-08) | 16 px |
| Store / dispatch cards | 16 px |
| Pricing cards | 16 px |
| Footer pill container | 999 px at 1280 / 24 px at 360 |
| Overlay menu | 0 px (edge-to-edge) |
| Dropdown panel | 12 px |

## Components

Exact literal tokens required by the check script live in the code block below:

```
menu-overlay-width: 100vw
dropdown-width: 280px
quote-font: Outfit
quote-size: 32px
```

- **Promo strip (S-01)** — full-width `h-[45px]` band; dusk gradient left-to-right (`lavender → rose → peach`); centered condensed uppercase link in dark-violet `color-mix(in srgb,#2a1040 100%,transparent)` >= 4.5:1 against the gradient; abstract sun-stripe SVG art floats at each end (clipped inside the strip).
- **Header (S-02)** — transparent; `h-[84px]`; two interlocking geometric shapes (no letters) as the monogram mark left; a two-bar menu button right (`aria-label="Open menu"`, `aria-expanded`, `aria-controls`). The overlay is `position:fixed; left:0; top:0; width:100vw; height:100vh;` page canvas, `z-index:200`; large Barlow Condensed uppercase links in a `<ul>`; a close button; focus trapped inside; Escape and close return focus to the trigger; `overflow:hidden` on `<body>` while open; `role="dialog"` `aria-modal="true"` on the overlay.
- **Hero mosaic (S-03)** — centered framed poster: deep plum 10 px padding, 16 px radius, max-width 760 px; 9-panel CSS grid of abstract art in sunset palette; center panel carries the DUSKREEF badge (rotated rounded shape, violet→pink gradient, Barlow Condensed stacked type). Below: a three-column row at 1280/768 (date left, pink pill center, dropdown right); at 360 centered date then full-width pink pill then dropdown.
- **Dropdown (S-03)** — `data-dropdown`; `aria-expanded`; `aria-controls`; panel is `width:280px` at 1280 and 768, `width:min(280px,100vw - 32px)` at 360; anchored under its trigger; Escape closes and returns focus; click outside closes.
- **Long preview card (S-04)** — 16:6 ratio at 1280, 4:5 at 360; abstract dusk-sky art; bottom-left eyebrow + 40 px condensed headline; white pill "Play" with triangle icon; `aria-pressed` toggle; CSS animation in the art plays only under `.motion` and while `aria-pressed="true"`.
- **Episode cards (S-05)** — 3:4 portrait; 3 columns at 1280/768, 1 column at 360; 48 px round white play button; `aria-pressed` toggle; bottom-centered eyebrow + condensed title.
- **Promo panels (S-06)** — (a) violet→coral gradient, wide-letter eyebrow top-left, square art box left, cream condensed title right, peach pill; (b) deep teal-navy, neon-tube SVG strokes with glow, eyebrow, cream condensed title, copy, lime pill. Text always on a solid or scrimmed area >= 4.5:1.
- **Statement (S-07)** — 40 px Outfit 600 heading in `--statement-h`; 32 px Outfit 500 paragraph with `background-clip:text` pink→amber gradient fill; solid `--body` color fallback via `@supports not (-webkit-background-clip:text)`.
- **Wide link cards (S-08)** — 16:5.5 ratio; full-bleed art + scrim; eyebrow + condensed title + copy alternating left/right; pill link only (not entire card).
- **Store (S-09)** — header row: "Store" in Outfit 600 28 px `--pill-peach` left, "See everything →" plain link right; two art cards side by side (1 column at 360).
- **Dispatches (S-10)** — header row: "Latest dispatches" in `--pill-pink` left, "All dispatches →" right; three cards with 16:9 CSS art top, lighter navy body, 16 px Outfit 500 title, muted date.
- **Aura skeleton sections** — stats (`Stat`, `StatValue`, `StatLabel`); features (3-column grid at 1280, 1-column at 360); data table (`Table` inside `overflow-x:auto`, `role="region"`, `aria-label`, `tabindex="0"`, caption); form (`Input`, `NativeSelect.inputer`, `aria-live` confirmation); pricing (3 `Card` with pill CTA); FAQ (`Accordion` with real `<button>` `aria-expanded`); pull quote (`<blockquote>` overridden under `.dr blockquote`); closing CTA.
- **Pull quote** — `<blockquote>` inside `.dr`: `font-family: Outfit`, `text-transform: none`, `font-weight: 500`, `font-size: 32px` at 1280 (24 px at 360), `quotes: none`.
- **Footer (S-11)** — pill-shaped outline container (`border:1px solid var(--control-line)`, `border-radius:999px` at 1280 / `24px` at 360); monogram + "THE HARBOR LETTER" + pitch + email field + "Sign up" button (`preventDefault`, `aria-live` confirmation); 5 round social buttons (generic glyphs, `aria-label="Sample channel 1"` … `"Sample channel 5"`); legal links row; listener note box; legal line "2026 Duskreef, a fictional studio."
- **Control styling** — all `input`, `select`, `textarea`, `button` inside `.dr` are styled with enough specificity to override `/aura/main.css`; selects get `border:1px solid var(--control-line)` (>= 3:1) and a chevron via `background-image` SVG data URI in both light and dark.

## Do's and Don'ts

**Do**
- Keep pastel pill fills (`--pill-pink`, `--pill-peach`, `--pill-lime`) strictly for button backgrounds and accent highlights.
- Use Barlow Condensed uppercase for every section heading and card title.
- Clip decorative art overflow inside its own container element, never on `html` or `body`.
- Keep all animations behind the `html.motion` class and provide pause/play controls.
- Ensure every text element over art has a scrim or solid plate achieving >= 4.5:1 (>= 3:1 for large text >= 24 px).

**Don't**
- Use pastel fills for body text, control borders, or focus rings.
- Draw people, faces, characters, animals, vehicles, or recognizable logos in any art element.
- Place any real brand, platform name, URL (other than the Google Fonts href), trademark symbol, or social network name.
- Apply `overflow-x: hidden` on `html` or `body`; clip decorative overflow in its own element.
- Hard-code hex literals in `result.html`; use `var(--...)` tokens throughout.

## Motion

All animations sit behind the `html.motion` class set by a head script that checks `prefers-reduced-motion: no-preference`. With reduced motion the class is absent and no `@keyframes` run. Every looping animation (badge tilt shimmer, panel pulse, bouncing chevron, neon glow pulse) has a paired pause/play `<button>` with `aria-pressed` that toggles `animation-play-state`. Transition duration for interactive states is 180 ms `ease`. Episode and preview card play toggles use `aria-pressed` and switch between play and pause labels.

## Light mode

Duskreef's light appearance is a **declared Aura adaptation** only. Canvas becomes pale lavender-white (`#f0eef8`), primary ink becomes deep navy (`#1a1428`), display headlines shift to deep plum (`#2a1040`), muted text uses `#7a6a90`, the footer becomes a light lavender band (`#e8e2f4`). Cards keep their abstract sunset art; card scrims use `rgba(10,8,30,0.55)` to maintain text contrast against the light page. Control borders use `#8878a8` to meet 3:1 against the light canvas. Pastel pill fills are unchanged.

## Reference

```tsx
import { Button } from "@aura/ui/button";
import { NavigationMenu } from "@aura/ui/navigation-menu";

export function DuskreefNav() {
  return (
    <NavigationMenu className="dr" style={{ background: "transparent", height: 84 }}>
      <span className="dr-monogram" aria-hidden="true">
        <svg width="36" height="36" viewBox="0 0 36 36">
          <ellipse cx="13" cy="18" rx="10" ry="12" fill="none" stroke="var(--pill-pink)" strokeWidth="3"/>
          <ellipse cx="23" cy="18" rx="10" ry="12" fill="none" stroke="var(--pill-peach)" strokeWidth="3"/>
        </svg>
      </span>
      <Button
        aria-label="Open menu"
        aria-expanded="false"
        aria-controls="dr-overlay"
        style={{ background: "none", border: "none", color: "var(--ink)" }}
      >
        <svg width="22" height="16" viewBox="0 0 22 16" fill="var(--ink)">
          <rect y="0" width="22" height="2.5" rx="1.25"/>
          <rect y="6.75" width="22" height="2.5" rx="1.25"/>
        </svg>
      </Button>
    </NavigationMenu>
  );
}
```
