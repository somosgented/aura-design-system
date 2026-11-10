---
version: "alpha"
name: "Fernwick"
description: "Fernwick is a crisp white-canvas design with deep cerulean-teal lagoon pills, a green-black night band, pale mist and sky-wash panels, and geometric-humanist type at weight 500, a flavor of Aura for cloud-platform and developer-tool marketing pages."
extends: "../../DESIGN.md"
colors:
  primary: "#0e6e8c"
  on-primary: "#ffffff"
  surface: "#ffffff"
  surface-container: "#eef3ef"
  on-surface: "#1c1f23"
  on-surface-variant: "#586068"
  outline: "#d2d8dc"
  mist: "#eef3ef"
  sky-wash: "#d8eeff"
  night: "#0d1a14"
  lagoon: "#0e6e8c"
  lagoon-on-night: "#4dbfdf"
  fern: "#1a7a3c"
  amber: "#e8a020"
typography:
  headline-display:
    fontFamily: "Plus Jakarta Sans"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.02em
  body-md:
    fontFamily: "Plus Jakarta Sans"
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "Red Hat Mono"
    fontSize: 12px
    fontWeight: 500
    letterSpacing: 0.1em
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
      accent: "#0e6e8c"
      gray: "#586068"
      background: "#ffffff"
    dark:
      accent: "#4dbfdf"
      gray: "#7a8a92"
      background: "#0d1a14"
  fonts:
    sans: "Plus Jakarta Sans"
    display: "Plus Jakarta Sans"
    label: "Red Hat Mono"
    href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&family=Red+Hat+Mono:wght@400;500&display=swap"
  hero: "paper"
  headingWeight: 500
  radius:
    button: "9999px"
    input: "9999px"
    surface: "26px"
  tokens:
    light:
      ink: "#1c1f23"
      body: "#586068"
      canvas: "#ffffff"
      paper: "#ffffff"
      mist: "#eef3ef"
      sky-wash: "#d8eeff"
      night: "#0d1a14"
      night-ink: "#f0f4f2"
      night-muted: "#8fa89a"
      lagoon: "#0e6e8c"
      lagoon-deep: "#0a5068"
      fern: "#1a7a3c"
      amber: "#e8a020"
      rule: "#d2d8dc"
      control-line: "#6b7c84"
      on-lagoon: "#ffffff"
      lagoon-on-night: "#4dbfdf"
      chip-ink: "#1c1f23"
    dark:
      ink: "#e8f0eb"
      body: "#a0b4a8"
      canvas: "#0d1a14"
      paper: "#162318"
      mist: "#1c2e21"
      sky-wash: "#0e2340"
      night: "#080f0b"
      night-ink: "#f0f4f2"
      night-muted: "#8fa89a"
      lagoon: "#4dbfdf"
      lagoon-deep: "#6acde9"
      fern: "#4ec27a"
      amber: "#f0b840"
      rule: "#2a3a30"
      control-line: "#5a7a6a"
      on-lagoon: "#0d1a14"
      lagoon-on-night: "#4dbfdf"
      chip-ink: "#e8f0eb"
---

# Fernwick

> Cloud infrastructure rendered in clean white air, deep cerulean-teal lagoon action pills and a green-black night band — Fernwick, a marketing theme built on Aura.

This file is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility). All copy, data, figures and visuals in the showcase are original and fictional; any resemblance to a real product is coincidental.

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated scale values.
3. If the app uses `next/font`, load Plus Jakarta Sans (400;500;600) and Red Hat Mono (400;500) there instead of the `@import`, and point `--font-sans`, `--font-display` and `--font-label` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Fernwick's sample copy into an unrelated product. All pricing, credits and latency figures are labelled as sample figures.
6. Verify at 360px, 768px and 1280px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Fernwick is built on a white canvas with hairline `rule` borders, fully rounded pill controls filled with `lagoon` (a deep cerulean-teal), a 500-weight geometric-humanist sans throughout, and three named surface bands — `mist` (pale green-tinted inset panels), `sky-wash` (the final CTA panel) and `night` (a full-bleed green-black AI section). Highlight inks (`fern` on white, `amber` on the night band) color select headline words. A floating assistant chip lives fixed at the bottom-right. Use Fernwick for cloud, infrastructure, developer tools and SaaS marketing pages that need a clean, readable home.

## Colors

Seeds generate the full Aura 12-step scales in `theme.css`. Custom tokens extend them for Fernwick-specific surfaces.

| Role | Token | Aura step | Use |
| --- | --- | --- | --- |
| Page canvas | `--canvas` | `gray-1` | App background |
| Cards, dropdowns | `--paper` | `gray-2` | Elevated surfaces |
| Mist band | `--mist` | `accent-a3` tinted | Inset rounded section bands |
| Sky-wash panel | `--sky-wash` | `accent-a5` pale | Final CTA rounded panel |
| Night band | `--night` | dark `gray-1` scoped | Full-bleed AI section |
| Night ink | `--night-ink` | `gray-12` on night | Headings on the night band |
| Night muted | `--night-muted` | `gray-11` on night | Body on the night band |
| Hairline border | `--rule` | `gray-6` | Dividers, card outlines |
| Ink | `--ink` | `gray-12` | Primary text |
| Body | `--body` | `gray-11` | Secondary prose |
| Action fill | `--lagoon` | `accent-9` | Filled pill buttons, links |
| Action hover | `--lagoon-deep` | `accent-10` | Hover state of lagoon pills |
| Fern highlight | `--fern` | custom | Headline accent words on white |
| Amber highlight | `--amber` | custom | Headline accent words on night |
| Chip surface | `--sky-wash` | `accent-a5` | Floating assistant chip fill |
| Chip ink | `--chip-ink` | `gray-12` | Text on the assistant chip |
| Control border | `--control-line` | custom | Input/select/textarea borders and carousel pill borders; ≥ 3:1 on canvas, paper and mist |
| On lagoon | `--on-lagoon` | custom | Text on lagoon-filled controls (white in light; dark canvas ink in dark); ≥ 4.5:1 on the lagoon fill |
| Lagoon on night | `--lagoon-on-night` | custom | Links and focus outlines on night surfaces; ≥ 4.5:1 on night in both appearances |

**Contrast rules:**
- `--ink` on `--canvas` ≥ 7:1 light and dark. All normal body text meets WCAG AA (4.5:1).
- `--night-ink` on `--night` ≥ 7:1. `--night-muted` on `--night` ≥ 4.5:1.
- `--fern` on `--canvas` ≥ 4.5:1 for normal-size headline words; at large display sizes (≥ 36px / 500) the 3:1 large-text threshold applies.
- `--amber` on `--night` ≥ 4.5:1 for normal-size text; 3:1 at large display sizes.
- Lagoon pill: white `accent-contrast` on `--lagoon` ≥ 4.5:1. Outline pill: `--ink` on `--canvas` ≥ 7:1.
- Control borders meet 3:1 against their adjacent background in both appearances.

### Dark mode

Fernwick's dark appearance is its own adaptation of the light palette. The dark canvas is a **deep green-black** (`#0d1a14`), close in hue to the night band so the band reads as a deeper layer rather than a foreign element. Cards use `--paper` (`#162318`), a slightly lighter step of the same green-black hue. The `--mist` band becomes a dark forest tint; `--sky-wash` becomes a deep navy panel. In dark mode `--lagoon` becomes a light cerulean (`#4dbfdf`) so it reads at ≥ 4.5:1 as text on the dark canvas, paper and mist surfaces; lagoon-filled buttons keep `--on-lagoon` (`#0d1a14`, dark ink) for text so that combination also meets 4.5:1. Amber and fern shift lighter to meet contrast on dark backgrounds. A single `.dark` block on `<html>` switches all semantic tokens; no section needs its own dark override.

| Variable | Light | Dark |
| --- | --- | --- |
| `--canvas` | white | deep green-black |
| `--paper` | white | dark forest green |
| `--mist` | pale green-tinted | dark forest tint |
| `--sky-wash` | pale blue | deep navy |
| `--lagoon` | mid blue | lighter blue |
| `--fern` | forest green | bright mint-green |
| `--amber` | warm gold | bright amber |
| `--rule` | cool light gray | dark green-gray |

## Typography

Plus Jakarta Sans (SIL OFL) is used at weights 400, 500 and 600 for all text. Red Hat Mono (SIL OFL) is used at weights 400 and 500 for uppercase micro eyebrows only.

| Element | Size / Leading | Weight | Aura class |
| --- | --- | --- | --- |
| Hero `h1` (1280) | 48px / 52px | 500 | `.h1 font-display` |
| Hero `h1` (360) | 32px / 36px | 500 | `.h1 font-display` |
| Section `h2` | 36px / 40px | 500 | `.h2 font-display` |
| Feature `h3` | 20px / 26px | 500 | `.h3` |
| Body prose | 16px / 24px | 400 | `p` / `.body-md` |
| Nav links | 14px / 20px | 400 | `.small` |
| Eyebrow label | 11px / 16px | 500 | `font-label uppercase tracking-[0.1em]` |
| Mono eyebrow | 11px / 16px | 500 | `font-label text-xs uppercase tracking-[0.1em]` |

## Layout

Fernwick's spacing maps to the 13px grid:

| Source px | Aura step | px | Use |
| --- | --- | --- | --- |
| 8 | `0.5` | 6.5 | Icon gap, tight padding |
| 12–16 | `1` | 13 | Nav item gap, label gap |
| 24 | `2` | 26 | Card padding, pill padding-x |
| 40–48 | `3–3.5` | 39–45.5 | Pill height |
| 64 | `5` | 65 | Header height, hero glyph, header logo zone |
| 96 | `7.5` | 97.5 | Section vertical padding |
| 140 | `11` | 143 | Large section gap |
| 215 | `16.5` | 214.5 | Mega-menu category rail width |
| 443–539 | `34–41.5` | 442–539.5 | Mega-menu panel height |
| 1280 | `98.5` | 1280.5 | Max content width |

**Header (1280px):** White bar `h-[65px]`, hairline `border-b border-(--rule)`. Left: wordmark, a "Platform" plain link, then 4 text nav triggers ("Use cases", "Services", "Plans", "Learn") at 14px. Right: search icon, "Guides", "Help", "Log in" in `--lagoon`. Each trigger opens a **full-width mega panel** (`NavigationMenu`) positioned against the header element. The panel is 1280px wide, white, with a hairline bottom border. Inside: a left category rail (`~215px`, `--mist` background, 5–8 items with `data-group` attributes, active item in a rounded `--lagoon`-tinted highlight, secondary action pill at the bottom) and a main area (dynamic panel title, close ×, 3-item grid updated when a rail item is activated). Rail items act as buttons (`aria-pressed`); clicking one updates the title and grid content via JS. One panel open at a time; clicking the same trigger closes it; click/Enter only — never hover.

**Header (360px):** Hamburger, wordmark, search icon visible. The hamburger toggles a full-screen dialog (`z-index:62`, above the sticky header and assistant chip). The dialog header shows the wordmark and a × close button; below are nav rows — links for leaf pages, expandable buttons with `aria-expanded`+`aria-controls` for sections that reveal sub-link lists in-place ("Use cases", "Services", "Learning hub"). Footer of panel shows "Log in" outline pill and "Begin free" filled lagoon pill. Closes on Escape; focus returns to the burger. The footer row of the mobile panel shows "Log in" and "Begin free" pills.

**Hero:** Centered on white. 64px multicolor SVG glyph above a 2-line `h1`, a centered `--body` paragraph with one bold sentence about sample free credits, then two pills: "Start for free" (lagoon fill) and "Talk to sales" (outline).

**Mist bands:** Inset from page edges, `border-radius: 26px`, `background: --mist`. Used for the audience-tabs section and the platform-split section.

**Night band:** Full-bleed, `background: --night`. Holds the AI features section. Headline words in `--amber`; body in `--night-muted`; buttons white pill.

**Sky-wash panel:** Inset, `border-radius: 26px`, `background: --sky-wash`. Final CTA with a 3-line heading (first two words in `--lagoon`), two pills, and a large SVG brand glyph bleeding off the right edge.

**Other patterns:** Stories carousel (wide media cards, pill-grouped prev/next below-left; disabled button shows `opacity:0.45`, dashed border, `cursor:not-allowed`); customer stories carousel (3 visible cards, progress bar, prev/next pill group); vertical industry tabs (12 industries, active in a `--lagoon`-tinted rounded highlight); logo band (SVG wordmarks, pausable animation visible only with motion enabled, filled pill + circular pause button hidden without motion); footer (5 columns — "The Fernwick story", "Services & plans", "Use cases", "Learning hub", "Connect" — hairline top, legal row with language select). The AI features product name is used throughout.

## Elevation & Depth

- **Flat default:** Canvas, mist and sky-wash bands carry no shadow.
- **Cards:** `shadow-sm border border-(--rule)` on white; `shadow-none border border-(--rule)` inside the mist band.
- **Mega panel and dropdowns:** `shadow-lg border-b border-(--rule)` — the only layer that floats above the header flow.
- **Floating assistant chip:** `shadow-md` with a subtle ring. The dialog it opens uses `shadow-xl rounded-[26px]`.
- **Night band:** No shadow; depth comes from the `--night` background against the white canvas.
- Dark mode: shadows shorten and darken; no glow or blur is added.

## Shapes

- **Buttons and inputs:** Fully rounded pills (`9999px`). Both filled and outline variants.
- **Surfaces (cards, panels, bands):** `border-radius: 26px` for mist bands, sky-wash panel, mega-panel, assistant dialog and carousel cards. `border-radius: 9999px` for suggestion chips.
- **Category rail active item:** `border-radius: 13px`.
- **Logo band items:** No radius (text-based wordmarks).
- **Assistant chip:** `border-radius: 16px` (smaller pill for the fixed chip).
- **Night band offer cards:** `border-radius: 13px`.

## Components

| Flavor element | Aura component | Notes |
| --- | --- | --- |
| Filled "Start for free" button | `Button variant="fill"` | `bg-(--lagoon) text-white hover:bg-(--lagoon-deep) rounded-full` |
| Outline "Talk to sales" button | `Button variant="pill"` | `border border-(--rule) text-(--ink) bg-(--canvas) rounded-full` |
| Nav with mega panel | `NavigationMenu` | Full-width panel; category rail left (8 items for Services, 8 for Use cases, 5 for Plans, 5 for Learn); 3-col product grid right updated when rail item is clicked; click/Enter only |
| Audience tabs (underline) | `Tabs` underline variant | Three tabs: "Builders", "Decision makers", "Access programs"; WAI-ARIA tabs; roving tabindex; Left/Right arrows; Home/End |
| Industry tabs (vertical) | `Tabs` vertical variant | Up/Down arrows; active item in lagoon-tinted rounded highlight |
| Platform accordion | `Accordion` | 8 categories (Network & Delivery, Managed Databases, Intelligent Automation, Security & Identity, Data & Storage, Build Tooling, Stream & Analytics, Core Compute) with chevrons; open item shows green-check inline links |
| Mobile footer columns | `Accordion` | Collapses at < 768px; first item closed by default |
| Stories carousel | `Carousel` with `Button size="icon-md"` pill-grouped prev/next | Slide; prev/next disable at ends; keyboard reachable |
| Customer stories carousel | `Carousel` with progress track + `Button size="icon-md"` prev/next | 3 visible cards; progress bar beneath |
| Floating assistant chip | `Button` fixed chip + `Dialog`/`Popover` | Chip: `bg-(--sky-wash) text-(--chip-ink) rounded-[16px] shadow-md`; dialog: `rounded-[26px] shadow-xl` |
| Assistant suggestion chips | `Button variant="pill"` full-width | `bg-(--mist) text-(--ink) rounded-full justify-between` with `ArrowRightIcon` |
| Assistant input | `Input` + circular send `Button` | Input row: `border: 1px solid var(--rule); border-radius: 9999px; background: var(--canvas)` wrapping a borderless inner input and a circular send button; send disabled until text |
| Stats row | `Stat`, `StatValue`, `StatLabel` | Sample figures; `--body` labels in `font-label uppercase` |
| Regions/latency table | `Table` | `text-sm` cells; `border-b border-(--rule)`; `font-label` headers |
| Talk to sales form | `Input`, `NativeSelect`, `Textarea` | Local; `preventDefault`; `aria-live` confirmation |
| Pricing plans | `Card` × 3 | Recommended plan: `border-2 border-(--lagoon)`; others: `border border-(--rule)` |
| FAQ | `Accordion` | 5 items; `--body` answers; first item open |
| Eyebrow badges | `Badge` | `font-label uppercase tracking-[0.1em] text-xs` |
| Logo band | `Marquee` | SVG wordmarks; `--rule` tint; circular pause `Button size="icon-sm"`; hidden when `.motion` class absent |
| Language select (footer) | `NativeSelect` | `border: 1px solid var(--control-line); background: var(--canvas); color: var(--body); appearance: none` with an inline SVG chevron in `--body` color overlaid via absolute positioning; consistent in light and dark |

## Do's and Don'ts

- Do use `--lagoon` only for the primary action fill and inline links; never for section backgrounds.
- Do use `--fern` only for highlighted headline words on a white or mist surface where contrast ≥ 4.5:1.
- Do use `--amber` only for highlighted headline words on the `--night` band where contrast ≥ 4.5:1.
- Do keep all pill buttons fully rounded; never square or partially rounded.
- Do label all numbers, pricing and credit figures as sample figures.
- Do close the mega panel when Escape is pressed and return focus to the trigger.
- Do disable carousel prev/next at the ends and expose `aria-live` region for position.

- Don't open the mega panel on hover — click or Enter only.
- Don't use `--fern` or `--amber` for body text, labels or any text below 18px where contrast is not verified.
- Don't use real logos, photos or external images; draw all visuals with HTML/CSS/inline SVG.
- Don't add shadows to cards inside the mist band.
- Don't make the floating assistant chip cover content permanently at 360px; keep it small with safe bottom and right margins.
- Don't animate under `prefers-reduced-motion: reduce`; show all content in its final state.
- Don't send, store or transmit any data from the form, assistant or search controls.

## Motion

All motion sits behind `@media (prefers-reduced-motion: no-preference)`. Use only `opacity`, `transform` and `background-color`.

| Element | Animation | Timing |
| --- | --- | --- |
| Section entrance | Fade + raise `translateY(16px → 0)` | 400ms `cubic-bezier(0.4, 0, 0.2, 1)`, staggered |
| Carousel slide | `scroll-behavior: smooth` | Native |
| Button fill hover | `background-color` to `--lagoon-deep` (hover rule uses `!important` to override inline styles on fill buttons) | 200ms ease |
| Mega panel open | Shown/hidden via `hidden` attribute (no fade transition currently) | — |
| Logo band scroll | `transform: translateX` loop | 30s linear; the `.motion` class enables the animation via `.motion .fw-marquee-track { animation: fw-marquee 30s linear infinite }`. Adding `.paused` to the track sets `animation-play-state: paused` and wins because the base rule has no `.paused` class. The pause button is hidden when `.motion` is absent. |
| Assistant chip open | `scale(0.95 → 1) opacity(0 → 1)` | 220ms ease |

With `prefers-reduced-motion: reduce`: all entrances appear instantly, the logo band stops, carousels jump without slide, and the assistant dialog appears without scale.

## Reference

```tsx
<section className="mx-auto max-w-[1280px] px-[26px] py-[97.5px]">
  <div className="rounded-[26px] bg-(--sky-wash) px-[52px] py-[65px] flex items-center justify-between gap-[52px] overflow-hidden relative">
    <div className="grid gap-[26px] max-w-[560px]">
      <Badge className="font-label uppercase tracking-[0.1em] text-xs bg-(--mist) text-(--lagoon) border-none">
        Platform update
      </Badge>
      <h2 className="h2 font-display font-medium text-(--ink)">
        <span className="text-(--lagoon)">Start building</span> on a cloud made for every scale.
      </h2>
      <p className="text-[16px] leading-[24px] text-(--body)">
        Deploy compute, storage and AI agents from one console. Sample credits available for new workspaces.
      </p>
      <div className="flex gap-[13px] flex-wrap">
        <Button variant="fill" className="rounded-full bg-(--lagoon) text-white hover:bg-(--lagoon-deep) px-[26px] h-[45.5px]">
          Start for free
        </Button>
        <Button variant="pill" className="rounded-full border border-(--rule) text-(--ink) bg-(--canvas) px-[26px] h-[45.5px]">
          Talk to sales
        </Button>
      </div>
    </div>
    <div aria-hidden className="absolute right-0 top-0 h-full w-[320px] pointer-events-none">
      <svg viewBox="0 0 320 300" className="h-full w-full">
        <defs>
          <radialGradient id="fw-glyph" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="var(--lagoon)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="var(--fern)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--sky-wash)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="150" r="140" fill="url(#fw-glyph)" />
        <rect x="140" y="80" width="60" height="60" rx="13" fill="var(--lagoon)" fillOpacity="0.3" />
        <rect x="175" y="115" width="60" height="60" rx="13" fill="var(--fern)" fillOpacity="0.25" />
      </svg>
    </div>
  </div>
</section>
```
