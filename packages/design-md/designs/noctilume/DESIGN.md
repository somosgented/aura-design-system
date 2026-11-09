---
version: "alpha"
name: "Noctilume"
description: "A near-black violet canvas with a glowing poster mosaic, luminous accent tabs, three-tier plan cards with global monthly/yearly switching, horizontally scrollable title rails, full-bleed genre bands, a large-word genre carousel, a live-events band and a partner-trio promo band. A flavor of Aura for evening streaming demo pages."
extends: "../../DESIGN.md"
colors:
  primary: "#7c3aed"
  on-primary: "#ffffff"
  primary-hover: "#6d28d9"
  primary-pressed: "#5b21b6"
  surface: "#120c1d"
  surface-container: "#1e1530"
  surface-container-high: "#2a1f40"
  tile: "#1e1530"
  on-surface: "#ffffff"
  on-surface-variant: "#b4a9cc"
  outline: "#3d2f5e"
  error: "#f87171"
  success: "#34d399"
  warning: "#fbbf24"
typography:
  headline-display:
    fontFamily: "Sora"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.02em
  headline-section:
    fontFamily: "Sora"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.01em
  body-md:
    fontFamily: "Sora"
    fontWeight: 400
    lineHeight: 1.6
  label-md:
    fontFamily: "Sora"
    fontSize: 11px
    fontWeight: 600
    letterSpacing: 0.08em
  display-genre:
    fontFamily: "Sora"
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: -0.03em
rounded:
  sm: 4px
  md: 6px
  lg: 8px
  pill: 9999px
spacing:
  unit: 13px
  section: 91px
  max-width: 1280.5px
aura:
  theme:
    light:
      accent: "#6d28d9"
      gray: "#7c6fa0"
      background: "#f3f0fa"
    dark:
      accent: "#8b5cf6"
      gray: "#7c6fa0"
      background: "#120c1d"
  fonts:
    sans: "Sora"
    display: "Sora"
    label: "Sora"
    href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap"
  hero: "field"
  headingWeight: 700
  radius:
    button: "4px"
    input: "6px"
    surface: "8px"
  tokens:
    light:
      canvas: "#f3f0fa"
      canvas-ink: "#1a0f2e"
      card-bg: "#e9e3f7"
      card-bg-hi: "#ddd5f5"
      addon-bg: "#d8cfef"
      tab-active: "#6d28d9"
      hero-fade-from: "rgba(243,240,250,0.95)"
      hero-fade-to: "rgba(243,240,250,0.0)"
      tile-empty: "#ccc5e0"
      genre-kicker: "#6d28d9"
      rail-scroll-bg: "#e9e3f7"
      pill-ghost-bg: "#e9e3f7"
      pill-ghost-border: "#a78bda"
      pill-ghost-ink: "#4c1d95"
      pill-dark-bg: "#2e1065"
      pill-dark-ink: "#ede9fe"
      save-badge-bg: "#6d28d9"
      save-badge-ink: "#ffffff"
      fine-print: "#6b5f88"
      focus-ring: "#6d28d9"
      glow-violet: "rgba(109,40,217,0.18)"
    dark:
      canvas: "#120c1d"
      canvas-ink: "#ffffff"
      card-bg: "#1e1530"
      card-bg-hi: "#2a1f40"
      addon-bg: "#1a1035"
      tab-active: "#8b5cf6"
      hero-fade-from: "rgba(18,12,29,0.95)"
      hero-fade-to: "rgba(18,12,29,0.0)"
      tile-empty: "#2a1f40"
      genre-kicker: "#a78bfa"
      rail-scroll-bg: "#1e1530"
      pill-ghost-bg: "rgba(255,255,255,0.08)"
      pill-ghost-border: "rgba(255,255,255,0.3)"
      pill-ghost-ink: "#ede9fe"
      pill-dark-bg: "rgba(0,0,0,0.5)"
      pill-dark-ink: "#ede9fe"
      save-badge-bg: "#7c3aed"
      save-badge-ink: "#ffffff"
      fine-print: "#8b7faa"
      focus-ring: "#a78bfa"
      glow-violet: "rgba(139,92,246,0.22)"
---

# Noctilume

> An evening sky of violet and near-black, a glowing poster mosaic and a plan picker that never leaves the page. Built on Aura.

Source flavor: a private reference kept outside this repository. This file adapts an observed visual language to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility).

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values. After those blocks, fix in `:root`: `--aura-text-primary-inverse: var(--accent-contrast)` (keeps button labels white on the violet fill) and `--aura-bg: var(--canvas)`.
3. If the app uses `next/font`, load `Sora` (weights 400, 600, 700) there instead of the `@import`, and point `--font-sans`, `--font-display` and `--font-label` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Noctilume's sample copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Noctilume is a marketing home for a fictional evening streaming service. The page opens with a **fixed header** (wordmark left, ghost log-in button + light pill begin-watching button right; both buttons are present at every viewport width — at ≥360px the wordmark text is visible, below 360px a mark-only square shows). Below it a **hero** shows a right-hand CSS poster mosaic that is a dense full-height wall of gradient tiles fading into the canvas on the left; the left side carries a two-line headline, a subline, and two offer columns each with a small all-caps price label and a button (light ghost pill + dark filled pill). Hero base copy is followed by fine print. Next a **plan picker** section: centered heading, a global billing-period toggle (Monthly / Yearly, `button[data-period][aria-pressed]`) above the cards, two tabs (Bundles / Plans), three dark plan cards in a row of three with feature lists, a tinted add-on sub-panel, price display updated by JS, an OR divider, yearly price + SAVE badge + solid action, and an academic-discount pill link. Then several **horizontal title rails** (heading + subline, scrollable 16:9 or 2:3 CSS tiles). A **genre band strip**: four full-bleed gradient panels each with a small kicker word and a huge display word, then a rail. After the second title rail (Fresh Arrivals) and before the genre bands: a **live-events band** (dark full-bleed, heading + paragraph + fine print left, CSS abstract arena art right, 2×4 event-category tile grid below) and a **partner-trio band** (gradient full-bleed, three CSS wordmarks + heading + sentence + small button left, 3×2 CSS poster grid with glow frame right). A **genre carousel** with prev/next arrow buttons flanking one large moving genre word — JS sets `translateX(-current * 100%)` on `#carousel-track` so only the active `.carousel-item` is in view; a small live status line `#carousel-current-label` reads "Genre · n of N" and updates on every navigation; the section `h2` acts as the eyebrow above the track; below the track sits a 2×3 CSS tile grid. A **FAQ accordion** with hairline separators. A **footer** with link columns, language selector, and legal line. At 360px the hero mosaic stacks on top of the copy, plan cards stack, rails scroll horizontally within their container.

## Colors

The accent seed is the brand purple-violet; Noctilume uses `#7c3aed` (light) and `#8b5cf6` (dark) as the Aura accent seed — close enough to generate faithful violet steps without naming any external variable. The gray seed `#7c6fa0` carries lavender tint into neutral steps. The dark canvas is `#120c1d`.

| Role | Token | Source level |
|---|---|---|
| Page canvas | `--canvas` / `--gray-1` | Observed (`#120c1d` dark, adapted `#f3f0fa` light) |
| Body text | `--canvas-ink` / `--gray-12` | Observed (`#ffffff` on dark) |
| Card / plan surface | `--card-bg` / `--gray-2` | Observed (dark card ~`#1e1530`, visual) |
| Elevated card | `--card-bg-hi` / `--gray-3` | Observed (visual) |
| Add-on sub-panel | `--addon-bg` | Observed (tinted sub-panel, visual) |
| Brand accent fill | `--accent-9` | Observed (adapted violet) |
| Tab underline active | `--tab-active` | Observed (violet underline active tab) |
| Hero left fade | `--hero-fade-from` → `--hero-fade-to` | Observed (gradient over mosaic fades to canvas) |
| Empty tile | `--tile-empty` / `--gray-3` | Observed (gray placeholder tiles) |
| Genre kicker | `--genre-kicker` | Observed (small kicker word, visual) |
| Ghost button bg | `--pill-ghost-bg` | Observed (light ghost pill CTA) |
| Dark button bg | `--pill-dark-bg` | Observed (dark filled pill CTA) |
| SAVE badge | `--save-badge-bg` / `--accent-9` | Observed (violet save badge, visual) |
| Fine print | `--fine-print` / `--gray-11` | Observed (`rgba`-muted text, visual) |
| Inline link | `--accent-11` | Observed (violet step) |
| Focus ring | `--focus-ring` / `--accent-9` | Observed (2px focus, 6px radius) |
| Glow (hero, tabs) | `--glow-violet` | Observed (violet glow under active tab, visual) |

Noctilume uses a single violet for all interactive states. No red. The glow appears only under the active tab underline and as a soft radial behind the hero headline — never as a card background.

### Dark mode

The **dark appearance is the reference**: every observed value was read from the source's single dark scheme. The **light appearance is an explicit adaptation** — the light adaptation uses a soft lavender-white canvas `#f3f0fa`, near-black ink `#1a0f2e`, and desaturated violet steps that keep the brand identity legible without mimicking an inverted night. The genre band gradients shift from deep violet-blue (dark) to pale rose-lavender (light). No element is simply `filter: invert`. The light mode is a deliberate daylight interpretation: warmer card surfaces, desaturated accent, pale band backgrounds — not an inversion of the dark scheme.

| Variable | Light (adaptation) | Dark (reference) |
|---|---|---|
| `--canvas` | `#f3f0fa` lavender white | `#120c1d` near-black violet |
| `--canvas-ink` | `#1a0f2e` deep violet-ink | `#ffffff` white |
| `--card-bg` | `#e9e3f7` soft lavender | `#1e1530` dark plum |
| `--hero-fade-from` | `rgba(243,240,250,.95)` | `rgba(18,12,29,.95)` |
| `--tab-active` | `#6d28d9` | `#8b5cf6` |
| `--genre-kicker` | `#6d28d9` | `#a78bfa` |
| `--glow-violet` | `rgba(109,40,217,.18)` | `rgba(139,92,246,.22)` |
| `--fine-print` | `#6b5f88` | `#8b7faa` |

## Typography

Sora (OFL, Google Fonts) is the Noctilume typeface: a clean geometric sans with a rounded aperture, good readability at display sizes and a wide weight range.

| Element | Observed at 1280 | Adapted Aura class |
|---|---|---|
| Hero `h1` | ~56–64px bold, two lines | `clamp(2.25rem,4.8vw,3.75rem)` weight 700 |
| Hero subline | ~20px 400 | `text-xl` weight 400 |
| All-caps price label | ~11px 600, spaced | `font-size: 0.6875rem` tracking 0.08em uppercase |
| CTA button label | ~16px 600 | `text-base` weight 600 |
| Plan picker heading | ~32px 600 | `clamp(1.75rem,2.6vw,2rem)` weight 600 |
| Tab label | ~16px 400 | `text-base` weight 400 |
| Plan card name | ~20px 600 | `text-xl` weight 600 |
| Plan price | ~28px 700 | `text-3xl` weight 700 |
| Feature list item | ~14px 400 | `text-sm` weight 400 |
| Rail heading | ~20–24px 600 | `clamp(1.25rem,1.8vw,1.5rem)` weight 600 |
| Genre kicker | ~14px 600 all-caps | `text-sm` weight 600 uppercase |
| Genre display word | ~72–96px 700 | `clamp(4rem,8vw,6rem)` weight 700 |
| Carousel label | ~14px 600 all-caps | `text-sm` weight 600 uppercase tracking |
| FAQ question | ~16–18px 400 | `text-base` weight 400 |
| Footer link | ~14px 400 | `text-sm` weight 400 |
| Fine print | ~12px 400 | `text-xs` / `0.75rem` |

## Layout

| Source px | Aura step | px | Use |
|---|---|---|---|
| 1280 max content | 98.5 | 1280.5 | Page max-width |
| 160 hero left column | 12.5 | 162.5 | Hero copy column target |
| 96 section padding-top | 7.5 | 97.5 | Section rhythm |
| 72 hero padding-top (below fixed header) | 5.5 | 71.5 | Hero offset |
| 64 header height | 5 | 65 | Fixed header |
| 48 button height (CTA) | 3.5 | 45.5 | Primary CTAs |
| 40 tab height | 3 | 39 | Plan picker tabs |
| 24 card padding | 2 | 26 | Plan card interior |
| 16 gap default | 1 | 13 | Grid/flex gap |
| 8 small gap | 0.5 | 6.5 | Fine gaps |
| 4 hairline offset | 4px | 4 | FAQ separators, borders |

Poster tile size: `width: calc(var(--aura)*9)` × `height: calc(var(--aura)*13)` ≈ 117×169px (2:3), or `calc(var(--aura)*14)` × `calc(var(--aura)*7.5)` ≈ 182×97.5px (16:9). At 360px tiles stay the same size and the rail scrolls horizontally within its container (`overflow-x: auto`; document never overflows). The gap below the hero is approximately 130px at 1280px width and ≈88px at ≤860px incl. 360px, composed of: fine-print `margin-bottom` (13px) + `.hero-left` bottom padding (`calc(var(--aura)*1.5)` = 19.5px desktop, 13px at ≤860px via `calc(var(--aura)*1)`) + `#stats` `padding-top` (`calc(var(--aura)*4)` = 52px desktop, `calc(var(--aura)*1.5)` = 19.5px at ≤860px) + `.stats-grid` `margin-top` (`calc(var(--aura)*3)` = 39px) + line leading (≈6px), so the section rhythm stays tight.

The header remains fully visible at 320px: both the log-in ghost button and the "Watch tonight" pill use compact padding and shortened labels; the wordmark text ("Noctilume") remains visible at 360px and is hidden only below 360px so the flex row never causes horizontal document overflow.

## Elevation & Depth

Depth comes from the **violet glow and canvas fade**, not from box-shadows. The hero mosaic is a dense full-height wall of gradient tiles fading into the canvas via a horizontal gradient; the active tab underline glows. Plan cards are flat (`box-shadow: none`); the highlighted card adds a 1px violet border. The genre band backgrounds are full-bleed gradients that fade to `--canvas` at their edges. No elevation tokens are changed.

## Shapes

- Buttons: **4px** (`radius.button: 4px`) — matching the observed action corner radius.
- Cards / plan panels: **6–8px** (`radius.surface: 8px`; cards use 6px override).
- Pills (academic-discount link, language selector): **9999px** fully round.
- FAQ rows: **0px** — square edges with 1px hairline separators between items.
- Poster tiles: **6px** border-radius.
- Add-on sub-panel inside card: **6px**.
- Live-events category tiles: **8px** border-radius.
- Partner-trio poster cards: **8px** border-radius with a soft accent glow frame.

## Components

- **Ghost log-in button** → `Button variant="pill"` with `border: 1px solid var(--pill-ghost-border); background: var(--pill-ghost-bg); color: var(--pill-ghost-ink)`. Compact size applied via `.header .btn` scoped rule at ≤540px; never hidden down to 360px.
- **Light "Watch tonight" pill** → `Button variant="fill"` with `background: var(--gray-12); color: var(--gray-1); border-radius: 9999px`. Visible at all widths; compact padding scoped to `.header .btn` at ≤540px so global button sizes are unaffected.
- **Global billing-period toggle** → two `button[data-period="monthly|yearly"][aria-pressed]` elements centred above plan cards. Active button uses `accent-10` background with white text (≥4.5:1 in both modes); inactive has ghost style. JS updates all `[data-price]` elements across cards on click.
- **Plan tab (ToggleGroup)** → two `button` elements with `role="tab"`, `aria-selected`, underline active state via `border-bottom: 2px solid var(--tab-active)` and glow `box-shadow: 0 2px 10px var(--glow-violet)`. Keyboard: Arrow keys switch tabs, Enter/Space selects.
- **Plan card** → `Card` `rounded-[6px] border border-(--gray-6) bg-(--card-bg) shadow-none`. Highlighted card adds `border-color: var(--accent-9)`.
- **Add-on sub-panel** → inner `div` `rounded-[6px] bg-(--addon-bg) p-1`.
- **Outlined monthly button** → `Button variant="outline"` `rounded-[4px] border border-(--gray-7) text-(--gray-12)`.
- **Solid yearly button** → `Button variant="fill"` `rounded-[4px] bg-(--gray-12) text-(--gray-1)`.
- **SAVE badge** → inline `span` `rounded-[4px] bg-(--save-badge-bg) text-(--save-badge-ink) px-0.5 text-xs font-semibold`.
- **Academic-discount pill** → `a` `rounded-full border border-(--gray-6) px-1.5 py-0.5 text-sm`.
- **Title rail** → `div` with `overflow-x: auto; display: flex; gap: calc(var(--aura)*1); scroll-snap-type: x mandatory`. Each tile is a `button` or `a` with `scroll-snap-align: start; border-radius: 6px; outline-offset: 3px` and a 2px ring on `:focus-visible`. Tile labels use a solid `rgba(0,0,0,0.75)` chip background so white text reaches ≥4.5:1 in both light and dark modes. Rails never cause document horizontal overflow.
- **Genre band** → full-width `section` with a gradient background, `aria-hidden` decorative panel, a small kicker `p` and a display `h2`. The rail below follows the same tile component. Band gradients use custom properties declared once in the page style block; no raw hex in component markup.
- **Genre carousel** → `div[role="region"]` with `aria-roledescription="carousel"` and `aria-label`. One `.carousel-item` per genre inside `#carousel-track`; `.carousel-track-wrap` sits inside `.carousel-row` between the Prev/Next buttons (flex:1, min-width:0, overflow:hidden) and JS sets `#carousel-track` `style.transform = translateX(-current * 100%)` on every Prev/Next click. The section `h2` is the eyebrow "Mood and genre". `#carousel-current-label` is a small visible status `p` below the row, `color:var(--gray-11)`, font-size 0.9375rem, ≥4.5:1; its text updates to "Drama · 1 of 6" format on every step. Transition runs only under `prefers-reduced-motion: no-preference`. Prev/Next are icon buttons with `aria-label` and `aria-disabled`; both are always focusable at either end because only `aria-disabled` is used (never the native `disabled` property), and click/keydown handlers are no-ops when the attribute is `"true"`. No opacity dimming of any visible text. No autoplay.
- **Live-events band** → dark full-bleed `section`; left column with original heading, paragraph and fine print (all ≥4.5:1 on the dark background); right side CSS-only abstract arena art (radial beam shapes, no images). Below: a centered 2×4 grid of rounded event-category cards (~9×3 aura), each with a CSS shape mark (a styled initial or geometric mark) and a caption using generic event vocabulary. Cards wrap at 360px; no document overflow.
- **Partner-trio band** → full-bleed gradient `section` (teal token → ink token). Left: three fictional CSS wordmarks (Noctilume, Dawncast, Vela), heading, one-sentence description, small light button. Right: 3×2 CSS poster cards with a soft `box-shadow: 0 0 0 2px var(--accent-9)` glow frame and original titles. Hero references this band with its own wording.
- **FAQ** → `button[aria-expanded]` triggers that toggle a sibling panel `div[hidden]`. Hairline separator is `border-top: 1px solid var(--gray-6)` on each item except the first.
- **Language selector** → `select` wrapped in a pill container with a globe SVG icon, `border-radius: 9999px; border: 1px solid var(--gray-6); background: transparent`.
- **Focus ring** → `outline: 2px solid var(--focus-ring); outline-offset: 3px; border-radius: 6px` on all interactive elements.

## Do's and Don'ts

- Do use the violet accent for a single interactive element per row (active tab, plan card border, yearly CTA).
- Do keep the poster mosaic as CSS-only gradient tiles; no external images, no photos.
- Do label all prices as "Example pricing" or "fictional".
- Do keep rails scrolling only within their container; never the document.
- Do use `prefers-reduced-motion: no-preference` around any transition or animation.
- Do show both header buttons at all widths using compact labels and reduced padding; never hide either button.
- Do ensure every tile label chip uses a solid dark background so white text ≥4.5:1 in both modes.
- Don't use the source's wordmark, font name, show titles, league names, or partner brands.
- Don't add autoplay carousels; if you add motion, provide a labelled pause button.
- Don't use shadows on cards; depth comes from color layers (exception: partner-trio poster glow uses a thin accent ring, not elevation shadow).
- Don't use raw hex literals in component markup; declare art-placeholder hues as named custom properties once.
- Don't copy real prices or legal terms from the source.
- Don't expose internal notes in visible page text.
- Don't use `opacity` to dim tile or carousel labels below the contrast threshold.

## Motion

All transitions are behind `@media (prefers-reduced-motion: no-preference)`. No auto-advancing carousels exist.

| What | Value | Level |
|---|---|---|
| Tab underline slide | `width 200ms ease` | Observed (visual, adapted) |
| Poster tile hover scale | `transform: scale(1.04)` 180ms `ease-in-out` | Observed (visual) |
| Button background | `background-color 150ms ease` | Observed (visual) |
| FAQ panel expand | `grid-template-rows` 220ms `cubic-bezier(0.4,0,0.2,1)` | Adaptation |
| Genre carousel slide | `transform` 300ms `ease-in-out` on `#carousel-track` | Adaptation |
| Focus ring | instant (no transition) | Accessibility |

Under `reduce`: no transitions, no scale, no slides. FAQ opens instantly.

## Contrast notes

All tile and poster labels use a solid `rgba(0,0,0,0.75)` chip strip so white text reaches ≥4.5:1 regardless of the tile gradient colour or light/dark mode. Carousel word uses `--canvas-ink` at full opacity; no opacity dimming of text. Live-events band uses near-white text on a near-black surface (≥9:1). Partner-trio band uses `--canvas-ink` on `--card-bg` (≥9:1 dark, ≥7:1 light). At desktop (≥861px) hero mosaic labels on grid columns 1–4 are hidden (`visibility:hidden`) because the left-hand hero fade covers those tiles; only columns 5–6 labels remain visible and they sit on solid chip strips meeting ≥4.5:1 in both light and dark mode.

| Pair | Light | Dark | Min |
|---|---|---|---|
| Body text `--gray-12` on `--canvas` | ≥14:1 | ≥16:1 | 4.5 |
| Hero headline on canvas (left col) | ≥14:1 | ≥16:1 | 3 (large) |
| Plan name on `--card-bg` | ≥9:1 | ≥10:1 | 4.5 |
| Feature list on `--card-bg` | ≥7:1 | ≥8:1 | 4.5 |
| Tab label (active) on canvas | ≥5:1 | ≥5.5:1 | 4.5 |
| CTA label on `--accent-fill` | ≥4.6:1 | ≥5.1:1 | 4.5 |
| Fine print `--fine-print` on canvas | ≥4.6:1 | ≥4.7:1 | 4.5 |
| FAQ question on canvas | ≥9:1 | ≥10:1 | 4.5 |
| Focus ring on canvas | ≥3.5:1 | ≥3.5:1 | 3 |
| Genre display word on band | ≥7:1 | ≥9:1 | 3 (large) |
| `--save-badge-ink` white on `--save-badge-bg` | ≥5:1 | ≥4.6:1 | 4.5 |
| Tile label white on solid `rgba(0,0,0,0.75)` chip | ≥10:1 | ≥10:1 | 4.5 |
| Carousel current word `--canvas-ink` on `--canvas` | ≥14:1 | ≥16:1 | 3 (large) |
| Live-events band text on dark surface | ≥9:1 | ≥9:1 | 4.5 |
| Event tile caption on dark card | ≥8:1 | ≥8:1 | 4.5 |

## Asset Licenses

| Asset | License | Notes |
|---|---|---|
| Sora typeface | SIL Open Font License 1.1 | Loaded from `fonts.googleapis.com` / `fonts.gstatic.com` |
| Icons | Inline SVG drawn for this flavor | No external icon library; paths authored here |
| Artwork | CSS gradients only, no raster images | All tiles, bands, poster mosaics and abstract art are pure CSS |

## Reference

```tsx
<section
  className="relative overflow-hidden"
  style={{ background: "var(--canvas)" }}
  aria-labelledby="plan-picker-heading"
>
  <div className="mx-auto max-w-[calc(var(--aura)*98.5)] px-[calc(var(--aura)*1.5)] py-[calc(var(--aura)*7.5)]">
    <h2
      id="plan-picker-heading"
      className="text-center font-display text-[clamp(1.75rem,2.6vw,2rem)] font-semibold"
      style={{ color: "var(--canvas-ink)" }}
    >
      Pick your plan
    </h2>
    <div className="mt-[calc(var(--aura)*1.5)] flex justify-center gap-[calc(var(--aura)*0.5)]">
      <button
        data-period="monthly"
        aria-pressed="true"
        className="rounded-[4px] px-[calc(var(--aura)*2)] py-[calc(var(--aura)*0.75)] text-sm font-semibold"
        style={{ background: "var(--accent-9)", color: "var(--accent-contrast)" }}
      >
        Monthly
      </button>
      <button
        data-period="yearly"
        aria-pressed="false"
        className="rounded-[4px] px-[calc(var(--aura)*2)] py-[calc(var(--aura)*0.75)] text-sm font-semibold"
        style={{ background: "var(--gray-a3)", color: "var(--canvas-ink)", border: "1px solid var(--gray-6)" }}
      >
        Yearly
      </button>
    </div>
    <div
      role="tablist"
      aria-label="Plan type"
      className="mt-[calc(var(--aura)*2)] flex justify-center gap-0"
    >
      <button
        role="tab"
        aria-selected="false"
        className="px-[calc(var(--aura)*2)] py-[calc(var(--aura)*1)] text-base"
        style={{ borderBottom: "2px solid transparent", color: "var(--gray-11)" }}
      >
        Bundles
      </button>
      <button
        role="tab"
        aria-selected="true"
        className="px-[calc(var(--aura)*2)] py-[calc(var(--aura)*1)] text-base font-semibold"
        style={{
          borderBottom: "2px solid var(--tab-active)",
          boxShadow: "0 2px 10px var(--glow-violet)",
          color: "var(--canvas-ink)",
        }}
      >
        Plans
      </button>
    </div>
    <div className="mt-[calc(var(--aura)*3)] grid gap-[calc(var(--aura)*1)] md:grid-cols-3">
      {plans.map((plan) => (
        <Card
          key={plan.id}
          className="rounded-[6px] border shadow-none"
          style={{
            background: "var(--card-bg)",
            borderColor: plan.featured ? "var(--accent-9)" : "var(--gray-6)",
          }}
        >
          <h3 className="text-xl font-semibold" style={{ color: "var(--canvas-ink)" }}>
            {plan.name}
          </h3>
          <ul className="mt-[calc(var(--aura)*1)] text-sm" style={{ color: "var(--gray-11)" }}>
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-[calc(var(--aura)*0.5)]">
                <CheckIcon className="icon" aria-hidden />
                {f}
              </li>
            ))}
          </ul>
          <div
            className="mt-[calc(var(--aura)*1)] rounded-[6px] p-[calc(var(--aura)*1)]"
            style={{ background: "var(--addon-bg)" }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--genre-kicker)" }}>
              Live events add-on available
            </span>
          </div>
          <div className="mt-[calc(var(--aura)*2)]">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--fine-print)" }}>
              From — example pricing
            </p>
            <div className="mt-[calc(var(--aura)*0.5)] flex items-center justify-between">
              <span
                className="text-3xl font-bold"
                data-price={plan.id}
                style={{ color: "var(--canvas-ink)" }}
              >
                {plan.monthlyPrice}
                <span className="text-sm font-normal" style={{ color: "var(--gray-11)" }}>
                  /mo
                </span>
              </span>
              <button
                className="rounded-[4px] border px-[calc(var(--aura)*1.5)]"
                style={{ borderColor: "var(--gray-7)", color: "var(--canvas-ink)" }}
              >
                Choose this plan
              </button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>
```
