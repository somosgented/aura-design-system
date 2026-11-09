---
version: "alpha"
name: "Noctilume"
description: "A near-black violet canvas with a glowing poster mosaic, luminous accent tabs, three-tier plan cards with monthly/yearly switching, horizontally scrollable title rails, full-bleed genre bands and a large-word genre carousel. A flavor of Aura for evening streaming demo pages."
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

Noctilume is a marketing home for a fictional evening streaming service. The page opens with a **fixed header** (wordmark left, ghost sign-in button + light pill sign-up button right; at 360px only the sign-in ghost button is shown to prevent clipping). Below it a **hero** shows a right-hand CSS poster mosaic that is a dense full-height wall of gradient tiles fading into the canvas on the left; the left side carries a two-line headline, a subline, and two offer columns each with a small all-caps price label and a button (light ghost pill + dark filled pill). Hero base copy is followed by fine print. Next a **plan picker** section: centered heading, two tabs (Bundles / Plans), three dark plan cards side by side with feature lists, a tinted add-on sub-panel, monthly price + outlined button, an OR divider, yearly price + SAVE badge + solid action, and a student-discount pill link. Then several **horizontal title rails** (heading + subline, scrollable 16:9 or 2:3 CSS tiles). A **genre band strip**: four full-bleed gradient panels each with a small kicker word and a huge display word, then a rail. A **genre carousel** with large centred words, prev/next buttons and a 2×3 CSS tile grid. A **FAQ accordion** with hairline separators. A **footer** with link columns, language selector, and legal line. At 360px the hero mosaic stacks on top of the copy, plan cards stack, rails scroll horizontally within their container.

## Colors

The accent seed is the brand purple-violet observed in the source's CSS; Noctilume uses `#7c3aed` (light) and `#8b5cf6` (dark) as the Aura accent seed — close enough to generate faithful violet steps without naming the source's exact internal variables. The gray seed `#7c6fa0` carries the page's lavender tint into neutral steps. The dark canvas is `#120c1d` (observed: `body background` on themed pages).

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

The **dark appearance is the reference**: every observed value was read from the source's single dark scheme. The **light appearance is an explicit adaptation** — it does not exist in the source (confirmed: the source has only one dark scheme). The light adaptation uses a soft lavender-white canvas `#f3f0fa`, near-black ink `#1a0f2e`, and desaturated violet steps that keep the brand identity legible without mimicking an inverted night. The genre band gradients shift from deep violet-blue (dark) to pale rose-lavender (light). No element is simply `filter: invert`. The light mode is a deliberate daylight interpretation: warmer card surfaces, desaturated accent, pale band backgrounds — not an inversion of the dark scheme.

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

The source uses a proprietary geometric sans (observed: weight 400 and 600, `@font-face` in the served CSS). It is not available under an open licence. **Sora** (OFL, Google Fonts) is the Noctilume substitute: a clean geometric sans with a rounded aperture, good readability at display sizes and a wide weight range. It is not presented as a metric-compatible substitute.

Justify: Sora's low x-height and clean geometry match the source's display headlines well; it is not taken by any existing gallery flavor.

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

Poster tile size: `width: calc(var(--aura)*9)` × `height: calc(var(--aura)*13)` ≈ 117×169px (2:3), or `calc(var(--aura)*14)` × `calc(var(--aura)*7.5)` ≈ 182×97.5px (16:9). At 360px tiles stay the same size and the rail scrolls horizontally within its container (`overflow-x: auto`; document never overflows).

The hero copy column uses the same `max-width` container and `padding-inline` as the fixed header, ensuring text aligns to the same left edge as the wordmark at all widths.

## Elevation & Depth

Depth comes from the **violet glow and canvas fade**, not from box-shadows. The hero mosaic is a dense full-height wall of gradient tiles fading into the canvas via a horizontal gradient; the active tab underline glows. Plan cards are flat (`box-shadow: none`); the highlighted card adds a 1px violet border. The genre band backgrounds are full-bleed gradients that fade to `--canvas` at their edges. No elevation tokens are changed.

## Shapes

- Buttons: **4px** (`radius.button: 4px`) — matching the observed action corner radius.
- Cards / plan panels: **6–8px** (`radius.surface: 8px`; cards use 6px override).
- Pills (student discount link, language selector): **9999px** fully round.
- FAQ rows: **0px** — square edges with 1px hairline separators between items.
- Poster tiles: **6px** border-radius.
- Add-on sub-panel inside card: **6px**.

## Components

- **Ghost sign-in button** → `Button variant="pill"` with `border: 1px solid var(--pill-ghost-border); background: var(--pill-ghost-bg); color: var(--pill-ghost-ink)`.
- **Light sign-up pill** → `Button variant="fill"` with `background: var(--gray-12); color: var(--gray-1); border-radius: 9999px`. Hidden at 360px via `@media (max-width: 540px)` to prevent header overflow.
- **Plan tab (ToggleGroup)** → two `button` elements with `role="tab"`, `aria-selected`, underline active state via `border-bottom: 2px solid var(--tab-active)` and glow `box-shadow: 0 2px 10px var(--glow-violet)`. Keyboard: Arrow keys switch tabs, Enter/Space selects.
- **Plan card** → `Card` `rounded-[6px] border border-(--gray-6) bg-(--card-bg) shadow-none`. Highlighted card adds `border-color: var(--accent-9)`.
- **Add-on sub-panel** → inner `div` `rounded-[6px] bg-(--addon-bg) p-1`.
- **Outlined monthly button** → `Button variant="outline"` `rounded-[4px] border border-(--gray-7) text-(--gray-12)`.
- **Solid yearly button** → `Button variant="fill"` `rounded-[4px] bg-(--gray-12) text-(--gray-1)`.
- **SAVE badge** → inline `span` `rounded-[4px] bg-(--save-badge-bg) text-(--save-badge-ink) px-0.5 text-xs font-semibold`.
- **Student discount pill** → `a` `rounded-full border border-(--gray-6) px-1.5 py-0.5 text-sm`.
- **Title rail** → `div` with `overflow-x: auto; display: flex; gap: calc(var(--aura)*1); scroll-snap-type: x mandatory`. Each tile is a `button` or `a` with `scroll-snap-align: start; border-radius: 6px; outline-offset: 3px` and a 2px ring on `:focus-visible`. Rails never cause document horizontal overflow.
- **Genre band** → full-width `section` with a gradient background, `aria-hidden` decorative panel, a small kicker `p` and a display `h2`. The rail below follows the same tile component. Band gradients use custom properties declared once in the page style block; no raw hex in component markup.
- **Genre carousel** → `div[role="region"]` with `aria-roledescription="carousel"` and `aria-label`. Prev/Next are `Button size="icon-md"` with explicit `aria-label="Previous genre"` / `"Next genre"`. No autoplay (CA-30: N/A — no automatic motion). Disabled state: `aria-disabled="true"` + visual `opacity: 0.4`.
- **FAQ** → `button[aria-expanded]` triggers that toggle a sibling panel `div[hidden]`. Hairline separator is `border-top: 1px solid var(--gray-6)` on each item except the first.
- **Language selector** → `select` wrapped in a pill container with a globe SVG icon, `border-radius: 9999px; border: 1px solid var(--gray-6); background: transparent`.
- **Stats, features table, form** → Aura skeleton components with no source reference; labeled as such only in DESIGN.md and AUTHOR-NOTES, not in visible page copy.
- **Focus ring** → `outline: 2px solid var(--focus-ring); outline-offset: 3px; border-radius: 6px` on all interactive elements (observed: 2px focus, 6px radius).

## Do's and Don'ts

- Do use the violet accent for a single interactive element per row (active tab, plan card border, yearly CTA).
- Do keep the poster mosaic as CSS-only gradient tiles; no external images, no photos.
- Do label all prices as "Example pricing" or "fictional".
- Do keep rails scrolling only within their container; never the document.
- Do use `prefers-reduced-motion: no-preference` around any transition or animation.
- Do hide the secondary header CTA at 360px to prevent header overflow without causing document scroll.
- Don't use the source's wordmark, font name, show titles, league names, or partner brands.
- Don't add autoplay carousels; if you add motion, provide a labelled pause button.
- Don't use shadows on cards; depth comes from color layers.
- Don't use raw hex literals in component markup; declare art-placeholder hues as named custom properties once.
- Don't copy real prices or legal terms from the source.
- Don't expose internal "no reference" or "Aura skeleton" notes in visible page text.

## Motion

All transitions are behind `@media (prefers-reduced-motion: no-preference)`. No auto-advancing carousels exist; CA-30 is N/A.

| What | Value | Level |
|---|---|---|
| Tab underline slide | `width 200ms ease` | Observed (visual, adapted) |
| Poster tile hover scale | `transform: scale(1.04)` 180ms `ease-in-out` | Observed (visual) |
| Button background | `background-color 150ms ease` | Observed (visual) |
| FAQ panel expand | `grid-template-rows` 220ms `cubic-bezier(0.4,0,0.2,1)` | Adaptation |
| Genre carousel slide | `transform` 300ms `ease-in-out` | Adaptation |
| Focus ring | instant (no transition) | Accessibility |

Under `reduce`: no transitions, no scale, no slides. FAQ opens instantly.

## Contrast notes

Measured against the generated scale tokens. All normal text ≥4.5:1; large text and UI ≥3:1.

| Pair | Light | Dark | Min |
|---|---|---|---|
| Body text `--gray-12` on `--canvas` | ≥14:1 | ≥16:1 | 4.5 |
| Hero headline on canvas (left col) | ≥14:1 | ≥16:1 | 3 (large) |
| Plan name on `--card-bg` | ≥9:1 | ≥10:1 | 4.5 |
| Feature list on `--card-bg` | ≥7:1 | ≥8:1 | 4.5 |
| Tab label (active) on canvas | ≥5:1 | ≥5.5:1 | 4.5 |
| CTA label on `--accent-fill` | ≥4.6:1 (accent-9) | ≥5.1:1 (accent-10) | 4.5 |
| Fine print `--fine-print` on canvas | ≥4.6:1 | ≥4.7:1 | 4.5 |
| FAQ question on canvas | ≥9:1 | ≥10:1 | 4.5 |
| Focus ring on canvas | ≥3.5:1 | ≥3.5:1 | 3 |
| Genre display word on band | ≥7:1 | ≥9:1 | 3 (large) |
| `--save-badge-ink` white on `--save-badge-bg` | ≥5:1 | ≥4.6:1 | 4.5 |
| `--label-caps` / `--fine-print` on card | ≥4.6:1 | ≥4.7:1 | 4.5 |
| Add-on sub-panel text `--gray-11` on `--addon-bg` | ≥4.5:1 | ≥4.5:1 | 4.5 |

Placeholder text (form input) uses `--gray-11` which meets 4.5:1 on `--canvas` in both modes.

### Not legible

- Exact pixel dimensions of the source's poster tiles: read as visual approximation.
- Internal CSS variable names for the source's focus color: observed as values only; selector names not reproduced.
- Source's proprietary font metrics: not available; Sora does not replicate them.
- Source's exact gradient stops for genre band backgrounds: adapted visually.

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
      Choose your plan
    </h2>
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
              Live sports add-on available
            </span>
          </div>
          <div className="mt-[calc(var(--aura)*2)]">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--fine-print)" }}>
              Plans start at — example pricing
            </p>
            <div className="mt-[calc(var(--aura)*0.5)] flex items-center justify-between">
              <span className="text-3xl font-bold" style={{ color: "var(--canvas-ink)" }}>
                {plan.monthlyPrice}
                <span className="text-sm font-normal" style={{ color: "var(--gray-11)" }}>
                  /mo
                </span>
              </span>
              <Button
                variant="outline"
                className="rounded-[4px]"
                style={{ borderColor: "var(--gray-7)", color: "var(--canvas-ink)" }}
              >
                Select monthly
              </Button>
            </div>
            <div className="my-[calc(var(--aura)*1)] flex items-center gap-[calc(var(--aura)*1)]">
              <hr style={{ flex: 1, borderColor: "var(--gray-6)" }} />
              <span className="text-xs" style={{ color: "var(--gray-11)" }}>OR</span>
              <hr style={{ flex: 1, borderColor: "var(--gray-6)" }} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xl font-bold" style={{ color: "var(--canvas-ink)" }}>
                  {plan.yearlyPrice}
                </span>
                <span
                  className="ml-[calc(var(--aura)*0.5)] rounded-[4px] px-[calc(var(--aura)*0.5)] py-[2px] text-xs font-semibold"
                  style={{ background: "var(--save-badge-bg)", color: "var(--save-badge-ink)" }}
                >
                  SAVE {plan.saving}
                </span>
              </div>
              <Button
                variant="fill"
                className="rounded-[4px]"
                style={{ background: "var(--gray-12)", color: "var(--gray-1)" }}
              >
                Select yearly
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>
```
