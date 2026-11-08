---
version: "alpha"
name: "Stillfield"
description: "Warm paper, one light grotesk headline, black pills and media that carries all the colour. A quiet, art-book flavor of Aura for libraries, galleries and anything visual."
extends: "../../DESIGN.md"
colors:
  primary: "#0d0d0d"
  on-primary: "#ffffff"
  surface: "#f7f5f3"
  surface-container: "#ffffff"
  on-surface: "#0d0d0d"
  on-surface-variant: "#6b6a69"
  outline: "#e2e0dd"
  elev: "#f2f1f0"
  fg-faint: "#9a9997"
  onmedia: "#ffffff"
  sage: "#a4a38f"
  brick: "#d1543e"
  peach: "#eac7a0"
  dusk: "#302f47"
typography:
  headline-display:
    fontFamily: "Inter Tight"
    fontWeight: 350
    lineHeight: 1
    letterSpacing: -0.05em
  headline-lg:
    fontFamily: "Inter Tight"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: -0.04em
  body-md:
    fontFamily: "Inter Tight"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: -0.02em
  label-mono:
    fontFamily: "DM Mono"
    fontSize: 12px
    fontWeight: 400
rounded:
  md: 13px
  full: 9999px
spacing:
  unit: 13px
  section: 162.5px
  max-width: 1300px
aura:
  theme:
    light:
      accent: "#0d0d0d"
      gray: "#6b6a69"
      background: "#f7f5f3"
    dark:
      accent: "#f7f5f3"
      gray: "#6b6a69"
      background: "#0d0d0d"
  fonts:
    sans: "Inter Tight"
    label: "DM Mono"
    href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300..700&family=DM+Mono:wght@400;500&display=swap"
  hero: "paper"
  headingWeight: 350
  radius:
    button: "9999px"
    input: "9999px"
    surface: "13px"
  tokens:
    light:
      pigment-sage: "#a4a38f"
      pigment-brick: "#d1543e"
      pigment-peach: "#eac7a0"
      pigment-dusk: "#302f47"
    dark:
      pigment-sage: "#7d7c69"
      pigment-brick: "#b8442f"
      pigment-peach: "#c9a27c"
      pigment-dusk: "#3a3958"
---

# Stillfield

> A gallery wall with the gravity switched off: images drift in warm air around one quiet sentence. Built on Aura.

Source flavor: https://flavors.design/f/stillfield. This file adapts it to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility).

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`, so they override the default Aura scales. Do not hand-edit the generated values.
3. If the app uses `next/font`, load `Inter Tight` and `DM Mono` there instead of the `@import`, and point `--font-sans` and `--font-label` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Stillfield's photo-library copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Stillfield is unhurried curation: an art book, not a feed. In an Aura app that means a warm paper canvas (`gray-1`), white content surfaces (`gray-2`), ink pills for actions, one centred light headline per section and generous empty space. The UI is monochrome. Colour comes from the product's own images and from four muted pigments that tint media panels to match what is shown. Use it for media libraries, galleries, portfolios, catalogues and search-first tools. It is not a social grid, dense masonry, dark-mode tech or gradient-mesh SaaS.

## Colors

Seeds generate the full Aura 12-step scales in `theme.css`. The accent seed is ink, so `accent-9` / `--primary` is near-black in light mode and bone in dark mode.

| Flavor role | Value | Aura token | Use |
| --- | --- | --- | --- |
| bg | `#f7f5f3` | `gray-1` | Paper canvas, hero and closing fields, pricing band |
| bg-2 | `#ffffff` | `gray-2` | Content sections, cards, search pill, dialogs |
| elev | `#f2f1f0` | `gray-3` | Image placeholders, skeletons |
| fg | `#0d0d0d` | `gray-12` | Headlines and body ink |
| fg-muted | `#6b6a69` | `gray-11` | Nav links, captions, stat labels, answers |
| fg-faint | `#9a9997` | `gray-9` | Placeholders, proof lines, mono metadata (13–14px only) |
| accent | `#0d0d0d` | `accent-9` / `--primary` | Ink pill, highlighted plan |
| accent-fg | `#ffffff` | `accent-contrast` | Text on ink |
| border | `#e2e0dd` | `gray-6` | Every hairline: outline pills, cards, FAQ rules |
| sage / brick / peach / dusk | see frontmatter | `--pigment-*` | Media panel tints only |

- Pigments live in `theme.css` as `--pigment-sage`, `--pigment-brick`, `--pigment-peach`, `--pigment-dusk`. Use them only as backgrounds behind images (`bg-(--pigment-sage)`). Never on text, icons or buttons.
- Derive washes from tokens: outline-pill hover is `gray-a3`, ink-pill hover is `accent-10`.
- Ink on paper stays above 17:1. `gray-9` is for secondary 13–14px lines, never body copy.

## Typography

- Sans: `Inter Tight` through `--font-sans` / `--aura-font-stack`, tracking `-0.02em` on body.
- Mono: `DM Mono` through `font-label`, 12px uppercase metadata only (`font-label text-xs uppercase`). No other uppercase except the wordmark.
- Keep Aura fluid classes. `.h1` takes the display role at `font-[350] leading-none tracking-[-0.05em]`. `.h2` takes section heads at `font-normal leading-[1.08] tracking-[-0.04em] text-center`. Sentence case, full stop at the end.
- Captions use `.h5` in `gray-11` with `leading-[1.2]`, centred.
- Weight 500 is for nav, buttons and names. Headlines never go bold.
- Form controls stay at Aura's 17px floor.

## Layout

Stillfield's 4px grid maps onto Aura's 13px grid in half steps:

| Flavor | Aura |
| --- | --- |
| 1300px content width | `max-w-100` container |
| 24px gutters | `px-2` (26px) |
| 160px section rhythm | `py-12.5` (162.5px), `py-8.5` below 860px |
| 48px headline to content | `mt-3.5` (45.5px) |
| 22px card gaps | `gap-1.5` (19.5px) |
| 88px navigation | `h-7` (91px) |

- Hero and closing call-to-action are full-bleed paper fields at least one viewport tall with content dead centre.
- Three equal columns for media cards, quotes and plans. Stats are four open columns without boxes.
- Density: airy. One idea per screen, generous paper around it.

## Elevation & Depth

Flat by default. Depth comes from blur and scale on media, not from shadow stacks.

- Cards, plans and tables: `border border-gray-6`, `shadow-none` at rest and on hover.
- Search pill and floating media chips: `bg-gray-2/80 backdrop-blur-md` with a soft `shadow-[0_1px_8px_var(--gray-a3)]`.
- Dialogs and popovers are the one lifted surface: `shadow-[0_6px_44px_var(--gray-a5)]`.
- Sticky header fades into the page with `bg-linear-to-b from-gray-1 from-30% to-transparent`, no bottom border.
- Optional hero field: the product's own images as small tilted tiles at random depth (`perspective: 900px`), far tiles blurred and faded. Keep a clear rectangle around the hero copy.

## Shapes

- `theme.css` sets buttons and inputs to pills (`--aura-button-radius`, `--aura-input-radius` 9999px) and surfaces to `13px` (`--aura-radius`, `--radius-*`).
- Every interactive surface is a pill: `Button`, `Input`, search, `ToggleGroup`, `Badge`, chips.
- Media cards and image tiles use `rounded-md`. Images inside tinted panels use `rounded-[2px]`.
- Avatars and swatch dots are circles (`rounded-full`).

## Components

Map each flavor element to Aura registry components:

- **Primary pill** → `Button variant="fill"` (ink on paper, `accent-contrast` text). Hover only changes colour, so add `hover:scale-100`.
- **Secondary pill** → `Button variant="pill"` with `border-gray-6 text-gray-12 bg-transparent hover:bg-gray-a3`.
- **Search** → `InputGroup` with a leading `MagnifyingGlassIcon className="icon"`, pill radius, `bg-gray-2/80 backdrop-blur-md`. The only boxed-looking input is this pill.
- **Media cards** → `Card` with `border-0 shadow-none bg-transparent`: an `AspectRatio ratio={8 / 9}` image at `rounded-md`, then a centred `.h6` label and a `text-sm text-gray-11` line.
- **Tinted media panel** → a `rounded-md` block on `bg-(--pigment-*)` holding two or three images, with a frosted pill caption (`bg-gray-a6 backdrop-blur-lg text-white rounded-full`).
- **Stats** → `Stat`, `StatValue` (`.h2 font-[350]`), `StatLabel` (`text-sm text-gray-11`), centred, no borders.
- **Segmented control** → `ToggleGroup` with pill items; the pressed item is `bg-primary text-primary-foreground`.
- **Plans** → `Card` with `border-gray-6 bg-gray-2`; the recommended one `bg-primary text-primary-foreground` with an inverted pill.
- **FAQ** → `Accordion` with hairline items and a round plus in a `rounded-full border-gray-6` circle that rotates 45° when open.
- **Metadata** → `font-label text-xs uppercase text-gray-9`.
- **Empty states** → `Empty` on `bg-gray-1` with one ink pill.

## Do's and Don'ts

- Do keep the hero to a wordmark, one light headline, one sentence, two pills and a proof line.
- Do let images carry the colour; tint panels behind them with the pigments.
- Do track display type tight (`-0.04em` to `-0.05em`) and keep it light.
- Do make every interactive surface a pill.
- Do keep tokens: every colour comes from `theme.css`.

- Don't add drop shadows to cards, plans or buttons.
- Don't use bold headlines or uppercase headings beyond the wordmark.
- Don't pack images into dense masonry.
- Don't use pigments on text, icons or buttons.
- Don't add feeds, likes or counters to cards.

## Motion

150ms `cubic-bezier(0.4, 0, 0.2, 1)` for colour changes on pills and links; 550ms for panel tint cross-fades and the segmented control. Optional hero tiles bob 14px over 9s. Buttons, headlines and layout never move. All motion sits behind `motion-safe:`.

## Reference

```tsx
<div className="flex flex-wrap justify-center gap-0.5">
  <Button variant="fill" className="hover:scale-100">Sign up</Button>
  <Button variant="pill" className="border-gray-6 bg-transparent text-gray-12 hover:bg-gray-a3 hover:scale-100">
    Get the app
  </Button>
</div>
```
