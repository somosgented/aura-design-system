---
version: "alpha"
name: "Narc"
description: "Grainy ultramarine bands with scalloped edges, cream paper, candy-tinted window frames and chunky soft-grotesk headlines in blue. A cheeky, zine-like flavor of Aura for consumer apps."
extends: "../../DESIGN.md"
colors:
  primary: "#3139fb"
  on-primary: "#fffcec"
  surface: "#ffffff"
  surface-container: "#fffcec"
  on-surface: "#000000"
  on-surface-variant: "#696969"
  outline: "#dcdefe"
  deep: "#2702c2"
  ink: "#252525"
  red: "#fb3a4d"
  coral: "#ff8d87"
  lilac: "#c9c6fb"
  sun: "#f6dc6a"
  mint: "#62d3ae"
  blush: "#f7c6ee"
  peach: "#ffdcb4"
  chalk: "#ffffff"
typography:
  headline-display:
    fontFamily: "Gabarito"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: "Gabarito"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: -0.04em
  body-md:
    fontFamily: "Inter"
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "Space Mono"
    fontSize: 12px
    fontWeight: 700
    letterSpacing: 0.12em
rounded:
  sm: 6.5px
  md: 10px
  lg: 13px
  full: 9999px
spacing:
  unit: 13px
  section: 143px
  max-width: 1280.5px
aura:
  theme:
    light:
      accent: "#3139fb"
      gray: "#696969"
      background: "#ffffff"
    dark:
      accent: "#5b62ff"
      gray: "#6f6f8f"
      background: "#0e0f1f"
  fonts:
    sans: "Inter"
    display: "Gabarito"
    label: "Space Mono"
    href: "https://fonts.googleapis.com/css2?family=Gabarito:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Fraunces:opsz,wght@9..144,700&display=swap"
  hero: "band"
  headingWeight: 700
  radius:
    button: "10px"
    input: "10px"
    surface: "13px"
  tokens:
    light:
      paper-cream: "#fffcec"
      brand-deep: "#2702c2"
      brand-ink: "#252525"
      candy-red: "#fb3a4d"
      candy-coral: "#ff8d87"
      candy-lilac: "#c9c6fb"
      candy-sun: "#f6dc6a"
      candy-mint: "#62d3ae"
      candy-blush: "#f7c6ee"
      candy-peach: "#ffdcb4"
    dark:
      paper-cream: "#171937"
      brand-deep: "#2a1bb0"
      brand-ink: "#000000"
      candy-red: "#ff5a6b"
      candy-coral: "#c8605c"
      candy-lilac: "#6f6ad8"
      candy-sun: "#c9ac3e"
      candy-mint: "#3fae8c"
      candy-blush: "#6d3f86"
      candy-peach: "#d9a07a"
---

# Narc

> A consumer app with a sense of humour: grainy ultramarine bands bitten along the edge by scalloped waves, cream paper ribbons, and candy-coloured window frames under chunky blue headlines. Built on Aura.

Source flavor: https://flavors.design/f/narc. This file adapts it to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility).

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`, so they override the default Aura scales. Do not hand-edit the generated values.
3. If the app uses `next/font`, load `Inter`, `Gabarito`, `Space Mono` and `Fraunces` there instead of the `@import`, and point `--font-sans`, `--font-display` and `--font-label` at the font variables. Gabarito is already Aura's default face, so it may be loaded.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Narc's tab-counting copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

The look of a design-literate consumer app that wants to feel like a zine rather than a SaaS dashboard. Pages alternate between **ultramarine bands** (`accent-9` with a grain overlay) and **white or cream paper**, and every transition between them is a row of small scallops instead of a straight edge. Headlines on paper are a chunky soft grotesk in brand blue with tight tracking. Under them sit oversized product windows, each framed in a different candy tint, so the product is the illustration. Small extras carry the personality: mono uppercase handle tags, a serif promo line, a wiggly arrow. Warm, cheeky and editorial. Not glassmorphism, not a bento grid of icon cards. Dark mode is supported through the **Night Space** scheme but light is the reference.

## Colors

Seeds generate the full Aura 12-step scales in `theme.css`. Extra brand colors are custom tokens in the same file.

| Flavor role | Value | Aura token | Use |
| --- | --- | --- | --- |
| bg | `#ffffff` | `gray-1` | Main paper for content sections |
| bg-2 | `#fffcec` | `--paper-cream` | Ribbons, testimonial band, promo banner |
| fg | `#000000` | `gray-12` | Body ink |
| fg-muted | `#696969` | `gray-11` | Subheads and body copy under blue headlines |
| accent | `#3139fb` | `accent-9` / `--primary` | Bands, headlines, links, handle tags |
| accent-fg | `#fffcec` | `accent-contrast` | Text on blue bands |
| border | pale blue | `accent-a5` | Stat dividers, FAQ rules, card rings |
| deep | `#2702c2` | `--brand-deep` | Secondary action on bands, poster panels |
| ink | `#252525` | `--brand-ink` | Dark promo pill |
| candy | coral, lilac, sun, mint, blush, peach, red | `--candy-*` | Window frames, swatches, promo glow only |

- Blue is the only saturated colour at page scale. Candy tints live only inside window frames, swatches and the promo glow.
- Headlines on paper are `text-primary`. Body stays `gray-11` on white, never lighter.
- Cream on `accent-9` and blue on white both clear 4.5:1.

### Dark mode (Night Space)

Dark is a reinterpretation, not an inversion. Bright ultramarine and full candy fills glare on a dark page, so the flavor drives everything through a few semantic tokens that switch per appearance:

| Token | Light | Dark |
| --- | --- | --- |
| `--band` | `accent-9` | `color-mix(in srgb, var(--accent-9) 30%, var(--gray-1))`, a deep indigo night band |
| `--band-fg` | `accent-contrast` | `accent-12` |
| `--heading` | `accent-9` | `accent-11`, a soft periwinkle for headlines, numbers and handles |
| `--chalk` / `--chalk-fg` | white / `--brand-deep` | `accent-12` / `gray-1`, the light button on a band inverts |
| `--frame-mix` | `100%` | `30%`: window frames become dark surfaces tinted with their candy and edged in it (`ring-1` at 55% of the candy) |
| `--grain` | `0.5` | `0.3` |
| `--glow` | `70%` | `35%` on the promo glows |

- Window frames: `--frame: color-mix(in srgb, var(--candy-*) var(--frame-mix), var(--gray-2))`, so coral, lilac and sun stay recognisable without lighting up the page.
- Window internals use `gray-a*` and `gray-1` mixes, never raw black or white, so tabs, URL fields and pins flip with the theme.
- `--paper-cream` and the `--candy-*` tokens already carry Night Space values in `theme.css`; declare the table above in the same `.dark` block.
- Surfaces transition `background-color` and `color` over 250ms so a theme switch feels fluid.

## Typography

- Display: `Gabarito` through `font-display` on `.h1`–`.h6`, weight 700–800, tracking `-0.04em`, sentence case, short lines, ending with a full stop.
- Body: `Inter` through `--font-sans` / `--aura-font-stack`, 17px (Aura's `p`) in `gray-11`, with key nouns in `font-semibold text-gray-12`.
- Mono: `Space Mono` through `font-label` for handle tags, eyebrows and footer headings: `font-label text-xs font-bold uppercase tracking-[0.12em]`.
- Serif: `Fraunces` 700 for one promo line only (`font-[Fraunces]`).
- Section headlines use `.h3 font-bold text-primary text-center tracking-[-0.04em] leading-[0.98]`. The hero uses `.h1` on the band in `accent-contrast`.
- Nav labels: `font-display font-medium`, never uppercase.

## Layout

Narc's 4px grid maps onto Aura's 13px grid in half steps:

| Flavor | Aura |
| --- | --- |
| 1280px content width | `max-w-98.5` container |
| 32px gutters | `px-2.5` (32.5px), `px-1.5` on phones |
| 140px section rhythm | `py-11` (143px) |
| headline to window 54px | `mt-4` (52px) |
| 1100px product window | `max-w-84.5` |
| 96px nav band | `h-7.5` (97.5px) |

- Every section is centred: headline, one-line subhead, then a large product window.
- Stats are four columns with 2px `accent-a5` dividers. Testimonials four centred columns. Pricing three.
- Sequence: blue nav band, cream promo ribbon, blue hero band, cream marquee, white sections, cream testimonial band, blue call-to-action and footer.
- Density: airy. One idea per viewport.

## Elevation & Depth

Paper with a few lifted objects. Bands are flat and grainy; only windows, buttons and pickers float.

- Grain on every blue band: a pseudo-element with an SVG fractal-noise tile, `mix-blend-mode: overlay`, opacity about 0.55.
- Scalloped edges: a `repeat-x` mask of a 20×10 half-circle path, 18px wide and 9px deep, on the edge between band and paper. Never straight edges between blue and paper.
- Product windows: a candy frame (`bg-(--candy-coral)` and so on) with `shadow-[0_30px_60px_var(--gray-a5)]`; the inner pane is `bg-gray-1 rounded-sm`.
- Buttons: flat fill with `shadow-[0_5px_5px_var(--gray-a3)]`, no border.
- Pricing cards: `shadow-[0_8px_30px_var(--gray-a4)] ring-1 ring-(--accent-a5)`. The highlighted plan is an `accent-9` band without the ring.
- No glass, no inner glows, no gradients on bands.

## Shapes

- `theme.css` sets buttons and inputs to `10px` and surfaces to `13px`.
- Nav hover pills, handle tags and tabs: `rounded-sm` (6.5px). Windows and cards: `rounded-md`. Promo pill: `rounded-lg`.
- Traffic lights 11px circles, swatches 15px circles.

## Components

Map each flavor element to Aura registry components:

- **Download button on a band** → `Button variant="fill"` with `bg-gray-1 text-(--brand-deep) border-0 shadow-[0_5px_5px_var(--gray-a3)]` and a leading `DownloadIcon className="icon"`. Its twin: `bg-(--brand-deep) text-white`.
- **Button on paper** → `Button variant="fill"` (blue with cream text). Hover keeps Aura's `scale(1.02)`.
- **Nav** → `NavigationMenu` on an `accent-9` band; links `font-display font-medium`, hover `bg-(--brand-deep)/50 rounded-sm`.
- **Product window** → `Card` with `rounded-md p-0.5 bg-(--candy-*) border-0` around a `Sidebar`-like column (traffic lights, URL field on `gray-a3`, tabs as `Button variant="menu"`) and a `bg-gray-1` pane.
- **Handle tag** → `Badge` with `rounded-sm border-2 border-primary bg-transparent text-primary font-label uppercase`; hover `-translate-y-[3px]`.
- **Testimonials** → `.h4 font-bold text-primary` quotes over a handle `Badge`, on `bg-(--paper-cream)`.
- **Stats** → `Stat`, `StatValue` (`.h1 font-extrabold text-primary`), `StatLabel` (`font-label text-xs uppercase text-gray-11`), split by `border-l-2 border-(--accent-a5)`.
- **Press marquee** → `Marquee` on `bg-(--paper-cream)`, blue bold quotes alternating with wordmarks; pause on hover.
- **Pricing** → three `Card`s; the recommended one `bg-primary text-primary-foreground` with a mono `Badge`.
- **FAQ** → `Accordion` in two columns with `border-t-2 border-(--accent-a5)`; triggers `.h6 font-bold text-primary`, a mono plus/minus.

## Do's and Don'ts

- Do alternate grainy blue bands with white and cream paper, joined by scalloped edges.
- Do put a large tinted product window under each section headline, each with a different candy frame.
- Do set headlines in bold blue soft grotesk with tight tracking and a closing period.
- Do use mono uppercase only for small labels: handles, eyebrows, footer headings.
- Do keep body copy grey and set the key product nouns in bold.

- Don't use glass panels or blur.
- Don't draw straight-edged breaks between blue and paper.
- Don't add feature-card grids with icons; the windows are the features.
- Don't put candy tints on page-scale backgrounds.
- Don't uppercase headlines or nav labels.

## Motion

150ms `ease-out` for colour changes; 200ms ease for hover lifts. Nav pills `scale(1.05)`, buttons `scale(1.02)`, handle tags `translateY(-3px)`, promo arrow `translateX(2px)`. The press marquee crawls left on a 42s loop and pauses on hover. Bands, waves, grain and windows never move. All motion sits behind `motion-safe:`.

## Reference

```tsx
<section className="relative isolate bg-primary text-primary-foreground">
  <div className="mx-auto max-w-98.5 px-2.5 py-6 text-center">
    <p className="font-label text-xs font-bold uppercase tracking-[0.14em] opacity-75">Release 4.2</p>
    <h1 className="h1 font-display font-bold leading-[0.98] tracking-[-0.04em]">The app that keeps receipts.</h1>
    <Button variant="fill" className="mt-2 border-0 bg-gray-1 text-(--brand-deep)">
      <DownloadIcon className="icon" />Download for desktop
    </Button>
  </div>
</section>
```
