---
version: "alpha"
name: "Halcrest"
description: "Geometric-sans at weight 300 for display, cobalt action pills, a near-black story-worlds band, light-mist membership band and a strong-blue footer — a flavor of Aura for entertainment-platform and story-studio home pages."
extends: "../../DESIGN.md"
colors:
  primary: "#2258c8"
  on-primary: "#ffffff"
  surface: "#ffffff"
  surface-container: "#eaecf2"
  on-surface: "#0f1116"
  on-surface-variant: "#565c6e"
  outline: "#cdd0dc"
  error: "#a83008"
typography:
  headline-display:
    fontFamily: "Manrope"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: -0.02em
  body-md:
    fontFamily: "Manrope"
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "Manrope"
    fontSize: 11px
    fontWeight: 700
    letterSpacing: 0.1em
rounded:
  md: 12px
  full: 9999px
spacing:
  unit: 13px
  section: 143px
  max-width: 1274px
aura:
  theme:
    light:
      accent: "#2258c8"
      gray: "#565c6e"
      background: "#ffffff"
    dark:
      accent: "#9ab9f7"
      gray: "#7a829a"
      background: "#121318"
  fonts:
    sans: "Manrope"
    display: "Manrope"
    label: "Manrope"
    href: "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap"
  hero: "paper"
  headingWeight: 300
  radius:
    button: "9999px"
    input: "12px"
    surface: "12px"
  tokens:
    light:
      ink: "#0f1116"
      body: "#565c6e"
      muted: "#616878"
      canvas: "#ffffff"
      paper: "#ffffff"
      strip: "#0a0a0c"
      strip-ink: "#e8e9ed"
      night: "#10111a"
      night-ink: "#ecedf4"
      night-muted: "#8b90a8"
      indigo: "#1a1c38"
      indigo-deep: "#0e1020"
      mist: "#eaecf2"
      haze: "#f0f1f5"
      cobalt: "#2258c8"
      cobalt-deep: "#1b48ad"
      on-cobalt: "#ffffff"
      flare: "#c43a10"
      flare-deep: "#a83008"
      on-flare: "#ffffff"
      error: "#a83008"
      link: "#1b48ad"
      link-night: "#8aaef5"
      rule: "#cdd0dc"
      control-line: "#5e6478"
      control-line-night: "#8b90a8"
      focus: "#2258c8"
      focus-night: "#8aaef5"
      dot: "#767b92"
      dot-night: "#6b7090"
      footer: "#003a8c"
      footer-deep: "#002d6e"
      footer-ink: "#ffffff"
      footer-muted: "#a8bce0"
      tier-wander: "#2a7a4e"
      tier-venture: "#1b48ad"
      tier-summit: "#7a3a9a"
      on-tier: "#ffffff"
      tide: "#3a7a9a"
      ember: "#c86030"
      moss: "#4a7a3a"
      plum: "#7a3a6a"
      sand: "#a89060"
    dark:
      ink: "#ecedf4"
      body: "#a8adc0"
      muted: "#9196ae"
      canvas: "#121318"
      paper: "#1c1e26"
      strip: "#07080d"
      strip-ink: "#c8cad4"
      night: "#0c0d14"
      night-ink: "#ecedf4"
      night-muted: "#8b90a8"
      indigo: "#16182e"
      indigo-deep: "#0e1020"
      mist: "#1e2030"
      haze: "#181a28"
      cobalt: "#6b96f0"
      cobalt-deep: "#84a8f5"
      on-cobalt: "#0a1030"
      flare: "#f07050"
      flare-deep: "#f58870"
      on-flare: "#1a0808"
      error: "#f07050"
      link: "#8aaef5"
      link-night: "#8aaef5"
      rule: "#2a2d3c"
      control-line: "#6e748c"
      control-line-night: "#7e84a0"
      focus: "#6b96f0"
      focus-night: "#8aaef5"
      dot: "#6e7490"
      dot-night: "#6e7490"
      footer: "#002d6e"
      footer-deep: "#002060"
      footer-ink: "#ffffff"
      footer-muted: "#7a9acc"
      tier-wander: "#1e6040"
      tier-venture: "#1b3a8a"
      tier-summit: "#5a2878"
      on-tier: "#ffffff"
      tide: "#2a607a"
      ember: "#a85030"
      moss: "#3a6030"
      plum: "#5a2a50"
      sand: "#806840"
---

# Halcrest

> Thin display headings, cobalt action pills, a near-black story-worlds band and a strong-blue footer — a calm living-room flavor for Halcrest Studio's entertainment home page. Built on Aura.

This file is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility). All copy, figures and visuals in the showcase are original and fictional. Palette values and measurements are approximate and tuned to the Halcrest identity. The dark appearance and the 360 layout are declared adaptations.

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated scale values.
3. If the app uses `next/font`, load Manrope (300;400;500;600;700) there instead of the `@import`, and point `--font-sans`, `--font-display` and `--font-label` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Halcrest's sample copy into an unrelated product. All pricing, stat figures and discount tags are labelled as sample figures.
6. Verify at 360px, 768px and 1280px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Halcrest opens with a pure-black utility strip, a white navigation bar with chevron-triggered full-width dropdowns, a full-bleed dark hero carousel with a thumbnail tab strip, and a sequence of named surface bands: white hardware showcase, `night` story-worlds band, `mist` membership band, `indigo` editorial band, and a `footer` strong-blue footer. The display typeface is Manrope at weight 300 — wide, airy and calm. Filled action pills use `cobalt`; a second filled pill uses `flare` (warm orange-red). Text links use `link`. Badges on tier cards use `tier-wander`, `tier-venture` and `tier-summit` with white `on-tier` text. Use Halcrest for living-room entertainment hubs, story-studio marketing and calm hardware showcase pages.

## Colors

Seeds generate the full Aura 12-step scales in `theme.css`. Custom tokens extend them for Halcrest-specific surfaces.

| Role | Token | Aura step | Use |
| --- | --- | --- | --- |
| Page canvas | `--canvas` | `gray-1` | App background, white sections |
| Elevated surface | `--paper` | `gray-2` | Cards, dropdowns, nav panel |
| Utility strip | `--strip` | custom near-black | Top bar background |
| Strip text | `--strip-ink` | custom light | Text and links on the strip |
| Story-worlds band | `--night` | custom near-black+blue | Games/worlds section background |
| Worlds headings | `--night-ink` | custom light | Headings on night band |
| Worlds body | `--night-muted` | custom mid | Body on night band |
| Editorial gradient start | `--indigo` | custom dark indigo | Band top color |
| Editorial gradient end | `--indigo-deep` | custom deeper | Band bottom color |
| Membership band | `--mist` | `accent-a3` tinted | Light-gray band background |
| Social band | `--haze` | `gray-2` lighter | Very light gray social band |
| Hairline border | `--rule` | `gray-6` | Dividers, card outlines |
| Primary ink | `--ink` | `gray-12` | Headings, primary text |
| Body text | `--body` | `gray-11` | Prose and secondary text |
| Muted text | `--muted` | `gray-9` | Small metadata, captions |
| Action fill | `--cobalt` | `accent-9` (light); own token in dark | Filled pill buttons |
| Action hover | `--cobalt-deep` | `accent-10` | Hover on cobalt fills |
| On cobalt | `--on-cobalt` | Halcrest own token (NOT Aura's `accent-contrast`) | Text on cobalt fills; white in light, dark ink in dark; ≥ 4.5:1 on `--cobalt` in both appearances |
| Second action fill | `--flare` | custom | Warm orange-red pill |
| Flare hover | `--flare-deep` | custom | Hover on flare fills |
| On flare | `--on-flare` | custom | Text on flare fills; ≥ 4.5:1 |
| Error text | `--error` | custom | Form error messages on canvas, paper and mist; ≥ 4.5:1 |
| Text links (light) | `--link` | custom | Links on canvas, paper, mist; ≥ 4.5:1 |
| Text links (dark) | `--link-night` | custom | Links on night, indigo, footer; ≥ 4.5:1 |
| Control border | `--control-line` | custom | Input/select borders on light surfaces; ≥ 3:1 |
| Control border (dark) | `--control-line-night` | custom | Input/select borders on dark bands; ≥ 3:1 |
| Focus ring (light) | `--focus` | custom | Focus outline on light surfaces; ≥ 3:1 |
| Focus ring (dark) | `--focus-night` | custom | Focus outline on dark surfaces; ≥ 3:1 |
| Inactive dash (light) | `--dot` | custom | Carousel pagination on light; ≥ 3:1 |
| Inactive dash (dark) | `--dot-night` | custom | Carousel pagination on dark; ≥ 3:1 |
| Footer background | `--footer` | custom strong-blue | Footer band |
| Footer deep | `--footer-deep` | custom deeper-blue | Footer hover states |
| Footer headings | `--footer-ink` | custom white | Column headings on footer; ≥ 4.5:1 |
| Footer links | `--footer-muted` | custom light-blue-gray | Links on footer; ≥ 4.5:1 |
| Wander tier badge | `--tier-wander` | custom green | Badge fill for Wander tier |
| Venture tier badge | `--tier-venture` | custom blue | Badge fill for Venture tier |
| Summit tier badge | `--tier-summit` | custom purple | Badge fill for Summit tier |
| On tier | `--on-tier` | custom white | Badge text on all three tiers; ≥ 4.5:1 |
| Tide | `--tide` | custom | Decorative art only |
| Ember | `--ember` | custom | Decorative art only |
| Moss | `--moss` | custom | Decorative art only |
| Plum | `--plum` | custom | Decorative art only |
| Sand | `--sand` | custom | Decorative art only |

**Contrast rules (stated, not measured ratios):**
- `--ink` on `--canvas`, `--paper`, `--mist` and `--haze` meets WCAG AA for normal text in light and dark.
- `--night-ink` on `--night` meets WCAG AA. `--night-muted` on `--night` meets WCAG AA.
- `--on-cobalt` on `--cobalt` ≥ 4.5:1 in both appearances. `--on-flare` on `--flare` ≥ 4.5:1 in both appearances.
- `--link` on `--canvas`, `--paper` and `--mist` ≥ 4.5:1. `--link-night` on `--night` and `--indigo` ≥ 4.5:1.
- `--control-line` on canvas, paper, mist and haze ≥ 3:1. `--control-line-night` on night, indigo and footer ≥ 3:1.
- `--focus` on every light surface ≥ 3:1. `--focus-night` on every dark surface ≥ 3:1.
- `--dot` on canvas, mist and haze ≥ 3:1. `--dot-night` on night and indigo ≥ 3:1.
- `--footer-ink` and `--footer-muted` on `--footer` ≥ 4.5:1.
- `--on-tier` on `--tier-wander`, `--tier-venture` and `--tier-summit` ≥ 4.5:1 in both appearances.
- Aura's generated `accent-contrast` on `accent-9` is ≥ 4.5:1 in both appearances: in dark the accent seed is lightened so the generator picks a dark ink contrast color; `--on-cobalt` is Halcrest's own token and is not Aura's `accent-contrast`.
- `--error` on `--mist`, `--canvas` and `--paper` is ≥ 4.5:1 in both appearances.

## Dark mode

Dark appearance is Halcrest's own declared adaptation. It is not modelled on any existing dark theme.

| Variable | Light | Dark |
| --- | --- | --- |
| `--canvas` | white | deep graphite `#121318` |
| `--paper` | white | slightly lighter graphite `#1c1e26` |
| `--mist` | light blue-gray | dark graphite-blue `#1e2030` |
| `--haze` | very light gray | dark near-graphite `#181a28` |
| `--night` / `--indigo` | already dark | slightly deeper in dark |
| `--cobalt` | mid blue | lighter blue for contrast on dark |
| `--on-cobalt` | white | dark ink (contrast preserved); Halcrest own token, not Aura's `accent-contrast` |
| `--flare` | dark orange-red | lighter warm for contrast on dark |
| `--on-flare` | white | dark ink (contrast preserved) |
| `--error` | deep orange-red | lighter warm `#f07050` |
| `--link` | dark cobalt | lightened to `--link-night` value |
| `--link-night` | same | same lighter blue |
| `--rule` | cool light gray | dark graphite `#2a2d3c` |
| accent seed | mid blue | lightened seed `#9ab9f7` so `accent-contrast` is dark ink |

The night band, indigo editorial band and footer stay dark in both appearances and use their own `--night-ink`, `--link-night`, `--control-line-night` and `--focus-night` tokens. A single `.dark` block on `<html>` switches all semantic tokens.

## Typography

Manrope (SIL OFL, Google Fonts) at weights 300, 400, 500, 600 and 700 for all text roles.

| Element | Size / Leading | Weight | Aura class |
| --- | --- | --- | --- |
| Hero slide headline `h2` (1280) | 44px / 48px | 300 | `.h1 font-display` (implemented as `clamp(28px,4vw,44px)`) |
| Hero slide headline `h2` (360) | 28px / 34px | 300 | `.h1 font-display` |
| Hardware headline (1280) | 52px / 56px | 300 | `.h1 font-display` (implemented as `clamp(28px,4.5vw,52px)`) |
| Section `h2` | 32px / 38px | 300 | `.h2 font-display` (implemented as `clamp(22px–24px,3vw,32px)` per section) |
| Tier/card `h3` | 24px / 30px | 600 | `.h3` |
| Feature `h4` | 16px / 22px | 600 | `.h4` |
| Body prose | 16px / 24px | 400 | `p` / `.body-md` |
| Nav trigger links | 14px / 20px | 500 | `.hc-trig` |
| Tier badge / eyebrow | 11px / 16px | 700 | `font-label uppercase tracking-[0.1em]` |
| Card caption | 13px / 18px | 400 | `.small text-(--muted)` |
| Thumbnail label | 13px / 18px | 500 | `.small` |

## Layout

Halcrest's spacing maps to the 13px grid:

| Source px | Aura step | px | Use |
| --- | --- | --- | --- |
| 8 | `0.5` | 6.5 | Thumbnail gap, icon gap |
| 13–16 | `1` | 13 | Nav item gap, label gap, card padding-x |
| 24 | `2` | 26 | Card gap, pill padding-x |
| 28–32 | `2.5` | 32.5 | Strip height |
| 40–44 | `3–3.5` | 39–45.5 | Pill height, thumbnail height approx |
| 60–64 | `5` | 65 | Nav height, section heading gap |
| 72 | `5.5` | 71.5 | Promo band height |
| 80 | `6` | 78 | Editorial band top padding |
| 96 | `7.5` | 97.5 | Hardware/worlds section padding |
| 128 | `10` | 130 | Thumbnail strip width approx |
| 140 | `11` | 143 | Large section gap, max section padding |
| 1200 | `98` | 1274 | Content max-width |

**Page structure (1280px):** Content centered at max `1274px` with `40px` gutters. Full-bleed sections clip their own decorative art; no `overflow-x` on `html`/`body`.

**Mobile layout (below 768px, approximate):** Utility strip hidden. Nav bar 60px tall with menu toggle at the left, mark-only wordmark centered between the toggle and the action group by auto margins (the word is hidden; the link keeps its accessible name), then search, cart and a compact 32px Log in pill at the right. The mobile menu is a full-screen sheet whose 61px head mirrors the bar (close at the left, wordmark centered); rows are at least 56px tall with a 20px line icon at the left and a chevron at the right; opening a sub-view makes the covered rows and the Log in footer `inert`. The hero stacks a 300px art area above centered text (28px heading, 15px body) and a centered CTA pill of at least 200px wide. Hero thumbnails are 100×60 with 10px gaps; the strip uses `justify-content:flex-start` with `margin-left:auto` on the first and `margin-right:auto` on the last thumbnail so it is centered when all 7 fit and left-aligned with the first thumbnail fully visible when they overflow, scrolling horizontally to keep the selected thumbnail in view. Section headings in the hardware and offers modules are centered with their pills centered side by side. The Story Worlds grid uses 3 columns.

**Nav (1280px):** White bar `66px` tall (measured; CSS sets `height:65px`), sticky, `z-index:50`, `1px border-b` in `--rule`. Left: wordmark; 7 text triggers at 14px/500 each with a `10px` chevron that rotates 180° when open. Right: search icon, cart icon and filled cobalt 36px pill "Log in" visible from 768px and wider; below 768px a compact 32px pill replaces the 36px one; hamburger toggle shown below 1024px. DOM and focus order matches visual order at every width — no CSS `order` is used. Each trigger controls a full-width dropdown panel positioned against `header#hc-nav` with `left:0;right:0`, never the `<li>`. When any dropdown or panel is open the header gains class `hc-raised` raising it to `z-index:60`.

**Nav (below 1024px):** The menu toggle `#hc-menu-toggle` is the first child of the nav and sits at the left of the wordmark. At 768px to 1023px search, cart and the 36px Log in pill remain visible at the right alongside the toggle. `#hc-menu-toggle` opens `#hc-menu`, a full-screen panel with `#hc-menu-close` and sub-views for each of the 7 nav sections. Body scroll locked while open. Escape closes and returns focus to trigger.

**Dropdowns:** `--canvas` background (white in light, deep graphite in dark), flush under nav, `radius:0`, `border-top: 1px solid var(--rule)` and `border-bottom: 1px solid var(--rule)`, `box-shadow: 0 4px 16px rgba(0,0,0,0.12)`, `z-index:60`, measured approximately `186px` tall at 1280px. Row of 6 icon tile links centered (flex, each `flex:1 1 0`; 28px line SVG icon in `--link`, 13px/500 label below), then a `1px` hairline `<hr>`, then 3 bullet links in `--link` at 13px. Hover never opens a dropdown; click or Enter opens; ArrowDown opens and focuses the first link; Escape closes and returns focus to the trigger.

**Panels:** `#hc-login-toggle → #hc-panel-login`, `#hc-cart-toggle → #hc-panel-cart`, `#hc-search-toggle → #hc-panel-search`. Log-in and cart are `400px` wide side sheets sliding in from the right, `z-index:60`, `box-shadow: -8px 0 32px rgba(0,0,0,0.14)`; they trap Tab/Shift+Tab and return focus to their toggle on every close path (close button, Escape, scrim, panel action). The promo band button "Log in to Halcrest" also opens the log-in panel; closing the panel from that path returns focus to the promo button. The mobile menu footer "Log in" closes the menu then opens the log-in panel; closing the panel returns focus to the nav Log in pill. Search is a full-width sheet fixed to the top of the viewport, drawn over the nav at `z-index:60` with the scrim below; inside, one centered row `width:min(100%,560px)` holding the search input and a round close button, and a centered row of 4 suggestion chips below. All are local demo only; no data is sent or stored.

**z-index scale:** nav `50` (default) → scrim `55` → dropdowns, slide-in panels and nav while raised (`hc-raised`) `60` → mobile menu `70`.

**Page section order (IDs):**

`#hc-strip` — `#hc-nav` — `main#hc-main`:
1. `#hc-hero` — full-bleed hero carousel, 7 slides, `background:var(--night)`. A visually hidden `h1` "Halcrest: story worlds and calm hardware" with class `sr-only` sits at the top of `#hc-hero`; every slide headline is an `h2`, so the page keeps exactly one `h1` while the slideshow rotates. Slide area `min-height:470px`; each slide is `position:absolute;inset:0` at 768px and wider and stacks in flow below 768px. Thumbnail tablist `#hc-hero-tabs` is a strip below the slides (`padding:10px 0 18px`, `border-top` hairline in `--night-ink` at 15% opacity); the tablist has `6px` vertical padding so outlines and focus rings are never clipped by its horizontal scroll. The strip uses `justify-content:flex-start` with `margin-left:auto` on the first thumbnail and `margin-right:auto` on the last, centering the 7 thumbnails when they fit and left-aligning them (first thumbnail fully visible) when they overflow. 7 thumbnail tabs, each `120×68px` art area plus an 11px/500 label; `border-radius:10px`; inactive thumbnails dim only their art to 60% opacity while their labels stay full-strength `--night-muted` (≥ 4.5:1 on night); the selected thumbnail has a 2px `--night-ink` outline, offset 2px. Pause button `#hc-hero-pause` is `36px` circle, `z-index:3`; at 768px and wider it is anchored to the bottom-right of the slide area (20px from the bottom and right edges of `.hc-hero-slides`); below 768px it is anchored to the top-right of the art area (12px); it never overlaps the thumbnail strip. The hero has a single autoplay controller: one interval at most, running only while the user has not paused AND the pointer is not over the hero AND focus is not inside it; the pause button always stops the interval and its label ("Pause slideshow" / "Play slideshow") always matches the user's choice; selecting a thumbnail restarts the 5000ms count only if rotation is allowed. With reduced motion the slideshow starts paused ("Play slideshow"); the user may start it explicitly, and slides then switch instantly. Total section height approximately `594px` (slide area + strip).
2. `#hc-promo` — log-in promo band, `min-height:72px`, cobalt-to-cobalt-deep gradient background in light; in dark switches to `footer`-to-`footer-deep` gradient with `footer-ink` text. Dismissible via `#hc-promo-close`; on dismiss focus moves to the hardware section heading (`#hc-hardware-h`). Stacks to column layout below 768px.
3. `#hc-hardware` — `background:var(--canvas)`, `padding:97px 0 78px`. Hearth feature block: 2-column grid (1-col below 768px), `gap:65px`. Hardware card carousel `#hc-hw-track` with 7 cards, each `190px` wide (approximately `78%` viewport width on mobile, ~`256px` at 360px). Cards have `border-radius:12px`, `border:1px solid var(--rule)`, `box-shadow:0 2px 12px rgba(0,0,0,0.08)`. Arrow buttons `#hc-hw-prev` / `#hc-hw-next` are 40px circles; prev uses `hc-circ-light` (canvas background, rule border), next uses `hc-circ-cobalt`. Dash pagination: 7 dashes, `24×4px` pill for active, `16×4px` for inactive; last dash becomes current when scrolled to end. At the ends, the respective arrow disables and focus moves to the opposite arrow.
4. `#hc-worlds` — `background:var(--night)`, `padding:78px 0`. Section `h2` 32px/300. Segmented tablist `#hc-worlds-tabs` with 2 tabs "Just arrived" / "On the horizon" styled as pill toggles (active tab: `night-ink` background, `night` text; inactive: transparent, `night-muted` text). Each panel: 6-column grid of 12 cover cards at 1280px; 4 columns at 768px to 1023px; 3 columns below 768px with 12px titles. Each cover card `border-radius:8px`, `overflow:hidden`; art area `aspect-ratio:3/4`; cobalt badge top-left `border-radius:4px`; 13px/500 `night-ink` title below art. Card measured approximately `188px` wide × `285px` tall including title at 1280px.
5. `#hc-pass` — `background:var(--mist)`, `padding:97px 0 78px`, `text-align:center`. Tier carousel `#hc-pass-track` with 3 tier cards, each `700px` wide (approximately `min(700px,80vw)` on mobile, ~`288px` at 360px), `scroll-snap-align:center`. Tier cards: `border-radius:12px`, dark gradient (`night` → `indigo`). Arrows: prev (`hc-pass-prev-btn`) uses canvas background with `control-line` border (light variant); next (`hc-pass-next-btn`) uses cobalt fill. Dash dots use `--dot` inactive / `--cobalt` active. Focus rings on pass section use `--focus` (not `--focus-night`). Tier badges: `border-radius:4px`, 11px/700, uppercase, 0.1em tracking; modifier classes `hc-tier-badge-wander`, `hc-tier-badge-venture`, `hc-tier-badge-summit`. At the ends, the respective arrow disables and focus moves to the opposite arrow.
6. `#hc-monthly` — `background:linear-gradient(to bottom,var(--indigo),var(--indigo-deep))`, `padding:97px 0 78px`. Article carousel `#hc-monthly-track` with 6 cards, each `280px` wide; `border-radius:12px`. Arrows use `hc-circ-night`; dashes use `dot-night` inactive / `night-ink` active. At the ends, the respective arrow disables and focus moves to the opposite arrow.
7. `#hc-deals` — `background:var(--canvas)`, `padding:97px 0 78px`. Two-column grid (text left, deal panel right; stacks below 768px). Deal panel `#hc-deals-panel`: `border-radius:12px`, `border:1px solid var(--rule)`, `box-shadow:0 2px 20px rgba(0,0,0,0.09)`, 2×2 grid of 4 deal tiles. Each tile `border-radius:12px`.
8. `#hc-stats` — `background:var(--mist)`, `padding:78px 0`. 4 stat figures in a 4-column grid (2-col below 768px, 1-col below 400px); `border-right:1px solid var(--rule)` between items. All figures are labelled as sample.
9. `#hc-compare` — `background:var(--canvas)`, `padding:78px 0`. Comparison table: `table-layout:fixed`, `border-collapse:collapse`, `border-radius:12px` wrapper, `border:1px solid var(--rule)`. Cells `padding:12px 16px` at full width; at ≤767px padding reduces to `8px 6px` and font-size to `12px`; no horizontal scroll at 360px (column widths compress). First column `width:34%` (30% at ≤767px). No inline `style` attributes.
10. `#hc-playtest` — `background:var(--mist)`, `padding:78px 0`, max-width `680px` centered. Form fields: `height:calc(var(--aura)*3.5)` (approximately `45.5px`), `font-size:max(1rem,17px)`, `border:1px solid var(--control-line)`, `border-radius:12px`. Select wrapped in `.hc-select-wrap` with a CSS chevron; `appearance:none`. Custom checkbox: real `<input type="checkbox">` positioned absolutely at opacity 0, followed by `span.hc-check` (`20px×20px`, `border:2px solid var(--control-line)`, `border-radius:4px`); when checked, `background:var(--cobalt)`, border-color cobalt, checkmark via `::after`. Inline error messages use `--error` color, `aria-invalid` on the field, and `aria-live="polite"` (not `role="alert"`). On submit, focus moves to the first invalid field. All `aria-live` regions are `polite`. No data is submitted.
11. `#hc-faq` — `background:var(--canvas)`, `padding:78px 0`. 5 items; first item open on load. Each item: `border-top:1px solid var(--rule)`; last item also has `border-bottom`. Trigger: full-width button with question text and a 24px icon wrapper containing a `+` SVG that rotates 45° when expanded. Answer panel hidden when collapsed.
12. `#hc-journal` — `background:var(--canvas)`, `padding:78px 0`. Carousel `#hc-journal-track` with 10 cards, each `360px` wide (approximately `78%` viewport width on mobile, ~`256px` at 360px); `border-radius:12px`, `border:1px solid var(--rule)`, `box-shadow:0 2px 16px rgba(0,0,0,0.10)`. Image area `200px` tall. Author row: 40px avatar circle (`border-radius:9999px`, cobalt background). 10 dash buttons. Prev arrow `hc-circ-light`, next arrow `hc-circ-cobalt`. At the ends, the respective arrow disables and focus moves to the opposite arrow.
13. `#hc-social` — `background:var(--haze)`, `padding:78px 0`. 5 generic channel tiles (video channel, photo diary, community forum, newsletter, podcast) using inline SVG icons only; no external logos. Each tile `border-radius:12px`, `background:var(--canvas)`, `border:1px solid var(--rule)`. Label 13px/500.
14. `#hc-closing` — `background:linear-gradient(135deg,var(--cobalt),var(--cobalt-deep))`, `padding:97px 40px`, `text-align:center`. In dark mode switches to `footer`-to-`footer-deep` gradient with `footer-ink` text. Two CTA buttons: a white-filled pill ("Explore Halcrest Pass") and an outline pill ("Discover hardware") in `footer-ink` color.
15. `#hc-legal` — `background:var(--canvas)`, `padding:28px 0`. Three paragraphs at 12px italic `--muted`. No section heading.

Then `footer#hc-footer` — `background:var(--footer)`, `padding:56px 0 0`. 6 link groups: Play, Hardware, Pass, Studio, Help, Follow. At ≥1024px rendered as a 6-column grid with static headings (`14px/700`, `footer-ink`) and link lists (`13px`, `footer-muted`); from 768px to 1023px rendered as a 3-column grid with the same static headings and link lists. Below 768px each group collapses to an accordion: the static heading is hidden via CSS (`display:none`) and a `<button>` toggle (`hc-footer-col-btn`) appears; the link list is `hidden` until expanded. Region select `#hc-region` (`border-radius:6px`, `border:1px solid var(--footer-muted)`, `background:var(--footer-deep)`, `color:var(--footer-ink)`, `appearance:none`); compact: `height:32px; width:auto`. Footer legal links separated by `border-left:1px solid var(--footer-muted)` — no text pipe characters. All footer focus rings use `--focus-night`.

## Elevation & Depth

- **Flat default:** Canvas, mist and haze bands carry no shadow.
- **Hardware cards:** `box-shadow: 0 2px 12px rgba(0,0,0,0.08)` with `border: 1px solid var(--rule)`.
- **Journal cards:** `box-shadow: 0 2px 16px rgba(0,0,0,0.10)` with `border-radius: 12px`.
- **Nav dropdowns:** `box-shadow: 0 4px 16px rgba(0,0,0,0.12)` flush under header.
- **Tier cards:** gradient dark surface, `border-radius: 12px`, no additional shadow.
- **Deal panel:** `box-shadow: 0 2px 20px rgba(0,0,0,0.09)` with `border: 1px solid var(--rule)`.
- **Login / cart / search panels:** `box-shadow: 0 8px 32px rgba(0,0,0,0.14)`.
- Dark mode: shadow opacity reduces by roughly half; no glow or blur is added.

## Shapes

- **Buttons:** Fully rounded pills, `border-radius: 9999px`.
- **Inputs:** `border-radius: 12px` from `--aura-input-radius`.
- **Cards (hardware, journal, deal, article):** `border-radius: 12px`.
- **Cover cards (worlds):** `border-radius: 8px`.
- **Thumbnails (hero strip):** `border-radius: 10px`.
- **Tier badges:** `border-radius: 4px`.
- **Circular carousel arrows:** `border-radius: 9999px`, `width: 40px; height: 40px`.
- **Active dash:** wider `~24px`, `--cobalt` fill. Inactive dash: `~16px`, `--dot` fill.
- **Avatar circles (journal):** `border-radius: 9999px`, `40px`.

## Components

| Flavor element | Aura component | Notes |
| --- | --- | --- |
| Filled cobalt pill "Log in" (nav) | `Button variant="fill"` | `bg-(--cobalt) text-(--on-cobalt) hover:bg-(--cobalt-deep) rounded-full h-[36px] px-[20px] text-[13px]`; 36px pill from 768px; a compact `h-[32px] px-[14px] text-[12px]` pill below 768px |
| Filled cobalt pill (primary CTA) | `Button variant="fill"` | `bg-(--cobalt) text-(--on-cobalt) hover:bg-(--cobalt-deep) rounded-full h-[45px] px-[26px] text-[14px] font-[600]` |
| Filled flare pill (second CTA) | `Button variant="fill"` | `bg-(--flare) text-(--on-flare) hover:bg-(--flare-deep) rounded-full` |
| Outline pill (white on dark) | `Button variant="pill"` | `border border-white text-white bg-transparent rounded-full` |
| Nav with full-width dropdowns | `NavigationMenu` | 7 triggers (Worlds, Hardware, Gear, Pass, Journal, Shop, Help); full-width `left:0;right:0` panels `z-index:60`; 10px chevron rotates 180° on open; click or Enter opens; ArrowDown opens and focuses first link; Escape closes and returns focus to trigger; hover does not open |
| Search input (search panel) | `Input` + suggestion chips | Full-width sheet fixed to top of viewport at `z-index:60` with scrim below; inner centered row `width:min(100%,560px)` holds `border border-(--control-line) rounded-[12px] px-[13px] h-[45.5px] text-[17px]` input and a round close button; centered row of 4 suggestion chips below |
| Hardware card | `Card` | `rounded-[12px] border border-(--rule) box-shadow:0 2px 12px rgba(0,0,0,0.08) bg-(--paper) p-[13px]`; 190px wide; art area 140px tall, `border-radius:8px`; 13px/500 centered label |
| Cover card (worlds) | `Card` | `rounded-[8px] overflow-hidden`; art `aspect-ratio:3/4`; cobalt badge top-left `border-radius:4px` 11px/700; 13px/500 `night-ink` title below |
| Tier card | `Card` | `rounded-[12px]`; dark gradient bg; tier badge `Badge`; `h3` heading; body text |
| Article card (monthly) | `Card` | `rounded-[12px] border border-(--rule)`; image area, bold title, body, author |
| Deal tile | `Card` | `rounded-[12px]`; gradient art area; title and "sample" discount tag `Badge` |
| Journal card | `Card` | `rounded-[12px] shadow-sm`; 200px image CSS gradient; title 15px/600; excerpt; author row |
| Carousel with arrows + dashes | `Carousel` + `Button size="icon-md"` | `ul`/`li` inside `overflow-x:auto scroll-snap-type:x mandatory` wrapper; `scroll-snap-align:start` (center for pass); prev/next `button` elements disable (`disabled` attr) at ends and focus moves to the opposite arrow; dashes are `button` with `aria-label="Show card N"` and `aria-current="true"` on active; active dash `24×4px` `--cobalt` fill, inactive `16×4px` `--dot` fill |
| Hero thumbnail tablist | `Tabs` WAI-ARIA | `role="tablist"` on `#hc-hero-tabs`; `role="tab"` per thumbnail button; `aria-selected`; `aria-controls` → slide panel; roving tabindex; Left/Right/Home/End arrow keys; `border-radius:10px`; thumbnail `120×68px` art |
| Worlds segmented tabs | `Tabs` | `ToggleGroup`-style pill pair; active white pill + dark text; inactive transparent + muted |
| Trigger dropdowns | `NavigationMenu` | 6 icon tiles + hairline + 3 bullet links; Tab order enters panel after trigger |
| FAQ | `Accordion` | 5 items; `border-t border-(--rule)` on each, `border-b` on last; full-width `button` triggers 16px/500; 24px icon wrapper, `+` SVG rotates 45° when expanded; answer 15px `--body`; first item open on load |
| Footer columns | `Accordion` (below 768px) | 6 groups: Play, Hardware, Pass, Studio, Help, Follow; at ≥768px static headings 14px/700 `--footer-ink`; below 768px headings hidden (`display:none`) and `hc-footer-col-btn` toggle buttons appear; link list `hidden` until expanded; links 13px `--footer-muted` |
| Pass comparison table | `Table` | `text-sm` cells; `font-label uppercase` headers; `border-b border-(--rule)` rows |
| Playtest form | `Input`, `NativeSelect`, checkbox | `name` + `email` + story-world select + checkbox; inputs/select `height:~45.5px`, `font-size:17px`, `border:1px solid var(--control-line)`, `border-radius:12px`; select wrapped in `.hc-select-wrap` with CSS chevron, `appearance:none`; custom `span.hc-check` `20×20px` `border:2px solid var(--control-line)` `border-radius:4px`, cobalt when checked; `aria-invalid` on error fields; error messages use `--error` color and `aria-live="polite"` (no `role="alert"`); focus moves to first invalid field; `novalidate`; local `preventDefault` only — no data sent |
| Stats row | `Stat`, `StatValue`, `StatLabel` | Sample figures; `--body` labels; `border-r border-(--rule)` between items |
| Promo band | `Alert` dismissible | `--cobalt` gradient bg; white text; `#hc-promo-close` dismiss button; `aria-live` polite |
| Tier badges | `Badge` | `font-label uppercase tracking-[0.1em] text-[11px] rounded-[4px] bg-(--tier-*)  text-(--on-tier)` |
| Region select (footer) | `NativeSelect` | `select#hc-region`; `border: 1px solid var(--footer-muted); color: var(--footer-ink); background: var(--footer-deep); border-radius:6px; appearance:none; padding:5px 32px 5px 10px; font-size:12px; height:32px; width:auto`; CSS chevron via `.hc-region-wrap::after` |
| Channel tiles (social) | `Card` link | Generic SVG icon (play triangle, camera, speech bubbles, envelope, microphone); label below |

## Do's and Don'ts

- Do use `--cobalt` only for the primary action fill and active UI states; never for body text or section backgrounds.
- Do use `--flare` only for the second CTA pill; never for text or icon fills.
- Do keep all display headings at weight 300 for calm spaciousness.
- Do label all pricing, stat figures and discount tags as sample figures.
- Do close any open dropdown or panel when Escape is pressed and return focus to the trigger.
- Do disable carousel prev/next at the ends and expose an `aria-live` polite region for slide position.
- Do draw all visuals with CSS gradients and inline SVG; never load external images.
- Do keep the footer legal line exactly: "2026 Halcrest, a fictional studio." with no symbol.

- Don't open nav dropdowns on hover — click or Enter only.
- Don't use `--tide`, `--ember`, `--moss`, `--plum` or `--sand` for any text or interactive element; they are decorative only.
- Don't place more than one `h1` on the page.
- Don't use hardware names that resemble real gaming peripherals; keep all hardware as abstract forms only.
- Don't add real network logos or external channel links; use generic icons and labels only.
- Don't animate anything under `prefers-reduced-motion: reduce`; autoplay only when motion is allowed.
- Don't split display-heading words at 360px; keep headings ≤ 28px at that breakpoint to avoid mid-word breaks.
- Don't send, store or transmit any data from forms, the search panel or the login panel.

## Motion

Autoplay and smooth carousel scrolling run only when the `motion` class is added to `<html>` (set at page load when `prefers-reduced-motion: no-preference`); the short hover and chevron transitions listed below are declared normally and cancelled by a blanket rule when `prefers-reduced-motion: reduce` is active. There are no keyframe animations and no entrance animations; dropdowns, panels and the promo bar appear and disappear instantly via the `hidden` attribute. Hero slides switch by toggling `display` and `aria-hidden`. The hero has a single autoplay controller: one interval at most, running only while the user has not paused AND the pointer is not over the hero AND focus is not inside it; autoplay only runs when `html.motion` is present. `#hc-hero-pause` is always visible. Its label ("Pause slideshow" / "Play slideshow") always matches the user's choice. Selecting a thumbnail restarts the 5000ms count only if rotation is allowed. With reduced motion the slideshow starts paused ("Play slideshow"); the user may start it explicitly, and slides then switch instantly. Manual carousel scroll uses `behavior:'smooth'` only when `html.motion` is present, otherwise `behavior:'auto'`.

| Element | Animation | Timing |
| --- | --- | --- |
| Hero carousel autoplay | Show/hide slides via `display` and `aria-hidden` | 5000ms interval from a single controller; runs only while not paused by the user, the pointer is not over the hero and focus is not inside it |
| Carousel scroll (manual) | `scrollBy`/`scrollTo` with `behavior:'smooth'` | Only when `motion` class present; otherwise `behavior:'auto'` |
| Nav chevron rotate | `transform` | 180ms `ease` |
| FAQ icon rotate | `transform` | 180ms `ease` |
| Footer accordion chevron rotate | `transform` | 180ms `ease` |
| Button background (all pill and fill variants) | `background-color`, `border-color` | 160ms `ease` |
| Carousel arrow (`hc-circ`) background | `background` | 160ms |
| Dash indicator width and background | `width`, `background` | 160ms |
| Worlds tab background and color | `background`, `color` | 160ms |

With `prefers-reduced-motion: reduce`: no autoplay (hero pause button starts as "Play slideshow"), no CSS transitions or animations (`.hc *` override with `transition:none!important; animation:none!important; scroll-behavior:auto!important`), no smooth scrolling in carousels, no entrance animations; every section and carousel item appears in its final visible state. Hero slide changes are instant (no transition). The `@media(prefers-reduced-motion:reduce)` block in the page CSS overrides all `.hc .button` hover transforms.

## Accessibility Notes

- Exactly one `h1` per page: a visually hidden (`sr-only`) heading "Halcrest: story worlds and calm hardware" at the top of `#hc-hero`; every slide headline is an `h2`.
- `aria-controls` on every disclosure toggle and carousel arrow.
- Hero thumbnail tablist follows WAI-ARIA tabs pattern: `role="tablist"`, `role="tab"`, `aria-selected`, roving tabindex; Left/Right/Home/End arrow keys move focus.
- Worlds segmented tabs: same WAI-ARIA tabs pattern; Left/Right/Home/End arrow keys supported.
- Carousel items in a real `ul`/`li`; prev/next are `button` elements that set `disabled` attribute at the ends; focus moves automatically to the opposite arrow when the active arrow becomes disabled.
- Dash pagination buttons carry `aria-label="Show card N"` and `aria-current="true"` on the active dash.
- Log-in and cart panels trap Tab/Shift+Tab and return focus to their toggle on every close path (close button, Escape, scrim, panel action); the cart's "Browse story worlds" action is an exception: instead of returning focus to the toggle it moves focus to the Story Worlds heading. The promo band "Log in to Halcrest" button opens the log-in panel; closing the panel returns focus to that promo button.
- Mobile menu (`#hc-menu`) is a focus trap while open; Escape closes it; `aria-modal="true"` on the panel; opening a sub-view makes the covered rows and the Log in footer `inert`. The menu footer "Log in" closes the menu and then opens the log-in panel; closing the panel returns focus to the nav Log in pill.
- The editorial section has a real `h2` heading.
- All `aria-live` regions are `polite`; never `assertive`. Form error messages use `aria-live="polite"` without `role="alert"`.
- Form inputs carry `autocomplete` attributes: `name` on the name field, `email` on the email field, `off` on the story-world select. The checkbox does not carry autocomplete.
- Forced-colors (Windows High Contrast): all borders use `currentColor` or `ButtonBorder` system color; no information conveyed by color alone.
- Focus rings use `outline: 2px solid var(--focus)` with `outline-offset: 2px` on light surfaces; `var(--focus-night)` on dark surfaces; both meet ≥ 3:1 on their respective backgrounds.
- Dropdowns use `--canvas` background (white in light, deep graphite in dark).

## Reference

```tsx
<section id="hc-hardware" className="bg-(--canvas) py-[97.5px]">
  <div className="mx-auto max-w-[1274px] px-[39px]">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[65px] items-center mb-[65px]">
      <div className="grid gap-[26px] min-w-0">
        <h2 className="h1 font-display font-[300] text-(--ink) leading-[1.08] tracking-[-0.02em]">
          Calm hardware for<br />every room.
        </h2>
        <p className="text-[16px] text-(--link) font-[500]">Halcrest Hearth</p>
        <p className="text-[14px] text-(--body)">
          A low, stone-like slab that keeps your story worlds within reach. Sample figures only.
        </p>
        <div className="flex gap-[13px] flex-wrap">
          <Button
            variant="fill"
            className="rounded-full bg-(--cobalt) text-(--on-cobalt) hover:bg-(--cobalt-deep) h-[45.5px] px-[26px]"
          >
            Order Hearth
          </Button>
          <Button
            variant="fill"
            className="rounded-full bg-(--flare) text-(--on-flare) hover:bg-(--flare-deep) h-[45.5px] px-[26px]"
          >
            Shop all hardware
          </Button>
        </div>
      </div>
      <div aria-hidden className="w-full aspect-[4/3] rounded-[12px] overflow-hidden">
        <svg viewBox="0 0 480 360" className="w-full h-full">
          <defs>
            <radialGradient id="hc-hearth-bg" cx="50%" cy="60%" r="70%">
              <stop offset="0%" stopColor="var(--mist)" />
              <stop offset="100%" stopColor="var(--haze)" />
            </radialGradient>
          </defs>
          <rect width="480" height="360" fill="url(#hc-hearth-bg)" />
          <rect x="100" y="210" width="280" height="60" rx="12" fill="var(--dot)" fillOpacity="0.5" />
          <rect x="140" y="195" width="200" height="38" rx="10" fill="var(--body)" fillOpacity="0.25" />
          <ellipse cx="240" cy="175" rx="90" ry="30" fill="var(--cobalt)" fillOpacity="0.15" />
        </svg>
      </div>
    </div>
    <div
      id="hc-hw-track"
      role="region"
      aria-label="Hardware carousel"
      className="relative"
    >
      <ul
        className="flex gap-[26px] overflow-x-auto scroll-snap-x mandatory pb-[13px]"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {hardwareCards.map((card) => (
          <li
            key={card.id}
            className="scroll-snap-align-start shrink-0 min-w-0"
            style={{ scrollSnapAlign: "start" }}
          >
            <Card className="w-[190px] rounded-[12px] shadow-sm border border-(--rule) bg-(--paper) p-[13px] flex flex-col items-center gap-[13px]">
              <div className="w-full h-[140px] rounded-[8px] overflow-hidden" aria-hidden>
                <svg viewBox="0 0 190 140" className="w-full h-full">
                  <rect width="190" height="140" fill="var(--mist)" />
                  <ellipse cx="95" cy="80" rx="50" ry="40" fill="var(--dot)" fillOpacity="0.4" />
                </svg>
              </div>
              <p className="text-[13px] font-[500] text-(--ink) text-center overflow-wrap-break-word min-w-0">
                {card.name}
              </p>
            </Card>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-center gap-[13px] mt-[26px]">
        <Button
          id="hc-hw-prev"
          variant="fill"
          size="icon-md"
          aria-label="Previous hardware"
          className="rounded-full w-[40px] h-[40px] bg-(--canvas) border border-(--rule) text-(--ink) hover:bg-(--mist)"
        >
          <ChevronLeftIcon className="icon" />
        </Button>
        <Button
          id="hc-hw-next"
          variant="fill"
          size="icon-md"
          aria-label="Next hardware"
          className="rounded-full w-[40px] h-[40px] bg-(--cobalt) text-(--on-cobalt) hover:bg-(--cobalt-deep)"
        >
          <ChevronRightIcon className="icon" />
        </Button>
      </div>
    </div>
  </div>
</section>
```
