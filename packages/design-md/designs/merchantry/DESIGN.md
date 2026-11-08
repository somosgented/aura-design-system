---
version: "alpha"
name: "Merchantry"
description: "Night-black heroes, white paper sections, one electric lime, huge tight grotesk headlines, pill actions and rounded media built from flat shapes. A confident commerce flavor of Aura for storefronts, checkouts and seller tools."
extends: "../../DESIGN.md"
colors:
  primary: "#b4f03c"
  on-primary: "#0b0b0b"
  surface: "#ffffff"
  surface-container: "#f3f3f1"
  on-surface: "#0b0b0b"
  on-surface-variant: "#5f5f5c"
  outline: "#e4e4e0"
  night: "#0b0b0b"
  clay: "#e8572a"
  sky: "#7aa7ff"
  sand: "#f2e3c6"
  plum: "#6b3fa0"
  mint: "#8fe3c0"
typography:
  headline-display:
    fontFamily: "Geist"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: -0.045em
  headline-lg:
    fontFamily: "Geist"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: -0.035em
  body-md:
    fontFamily: "Geist"
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "Geist Mono"
    fontSize: 12px
    fontWeight: 500
    letterSpacing: 0.04em
rounded:
  sm: 13px
  md: 19.5px
  lg: 26px
  full: 9999px
spacing:
  unit: 13px
  section: 130px
  max-width: 1436.5px
aura:
  theme:
    light:
      accent: "#b4f03c"
      gray: "#6f6f6b"
      background: "#ffffff"
    dark:
      accent: "#b4f03c"
      gray: "#6f6f6b"
      background: "#0a0a0a"
  fonts:
    sans: "Geist"
    display: "Geist"
    label: "Geist Mono"
    href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
  hero: "field"
  headingWeight: 600
  radius:
    button: "9999px"
    input: "13px"
    surface: "19.5px"
  tokens:
    light:
      night: "#0b0b0b"
      night-fg: "#f5f5f2"
      shape-clay: "#e8572a"
      shape-sky: "#7aa7ff"
      shape-sand: "#f2e3c6"
      shape-plum: "#6b3fa0"
      shape-mint: "#8fe3c0"
    dark:
      night: "#000000"
      night-fg: "#f5f5f2"
      shape-clay: "#c9532f"
      shape-sky: "#5f84cc"
      shape-sand: "#cbbd9f"
      shape-plum: "#7a55ad"
      shape-mint: "#6fbf9f"
---

# Merchantry

> A shop window at night: black stages, white paper, one electric lime and headlines big enough to read from across the street. Built on Aura.

Source flavor: an interpretation of the visual language of large commerce-platform marketing sites, reduced to principles. No brand, copy, imagery or assets are reused. This file adapts it to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility).

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`, so they override the default Aura scales. Do not hand-edit the generated values.
3. If the app uses `next/font`, load `Geist` and `Geist Mono` there instead of the `@import`, and point `--font-sans`, `--font-display` and `--font-label` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Merchantry's sample shop copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Merchantry is commerce with confidence. Pages alternate between **night stages** (near-black, full-bleed) and **white paper**. Headlines are huge, tight and medium-bold, often with one rotating word. Actions are pills: lime for the one thing you want people to do, ink or white for everything else. Product moments are rounded media cards; when there is no photography, they are flat geometric compositions (arches, circles, stripes, stacked blocks) in five muted shape colors. Numbers are set large and plain. Use it for storefronts, checkout flows, seller dashboards and launch pages. It is not pastel, not glassy, and never a dense dashboard on the marketing surface.

## Colors

Seeds generate the full Aura 12-step scales in `theme.css`. The accent is the lime, so `--primary` is lime with dark text (`accent-contrast`).

| Flavor role | Value | Aura token | Use |
| --- | --- | --- | --- |
| Paper | `#ffffff` | `gray-1` | Default page sections |
| Paper raised | `#f3f3f1` | `gray-2`–`gray-3` | Cards and media frames on paper |
| Night | `#0b0b0b` | `--night` | Hero, stats band, closing stage |
| Text on night | `#f5f5f2` | `--night-fg` | Headlines and body on night |
| Ink | `#0b0b0b` | `gray-12` | Headlines and body on paper |
| Muted ink | `#5f5f5c` | `gray-11` | Subheads, captions |
| Hairline | `#e4e4e0` | `gray-6` | Card and table rules on paper |
| Lime | `#b4f03c` | `accent-9` / `--primary` | The primary pill, highlights, the rotating word |
| Text on lime | `#0b0b0b` | `accent-contrast` | Pill labels |
| Shape colors | clay, sky, sand, plum, mint | `--shape-*` | Geometric media only |

- Lime appears once or twice per viewport: the main action and one highlight. Never as a section background.
- Shape colors live only inside media cards and illustrations, never on text or controls.
- On night, hairlines are `color-mix(in srgb, var(--night-fg) 12%, transparent)`.

### Dark mode

The page itself becomes night, so night stages need their own depth instead of a color flip.

| Variable | Light | Dark |
| --- | --- | --- |
| `--stage` | `--night` | `--night` with a `1px` hairline of `--night-fg` at 10% |
| `--paper` | `gray-1` | `gray-1` (near-black) |
| `--raised` | `gray-2` | `gray-3` |
| `--ink-pill` / `--ink-pill-fg` | `gray-12` / `gray-1` | `gray-12` / `gray-1` (it flips to a white pill automatically) |
| Shape colors | full | the muted dark set in `theme.css` |

Lime stays lime in both appearances; it is the constant.

## Typography

- Display and body: `Geist` through `font-display` and `--aura-font-stack`. Headlines weight 600, tracking `-0.045em` on `.h1` and `-0.035em` on `.h2`/`.h3`, `leading-[0.95]`–`leading-[1.02]`, sentence case, `text-wrap: balance`.
- Hero `.h1` runs larger than Aura's default clamp: `text-[clamp(3rem,8vw,7rem)]`. One word may rotate through a short list in lime.
- Labels: `Geist Mono` through `font-label`, `text-xs font-medium tracking-[0.04em]`, for step numbers, order IDs and metadata.
- Stats: `.h1` numerals at weight 500 with a `text-sm text-gray-11` caption.
- Body stays Aura `p`. Form controls keep the 17px floor.

## Layout

| Source | Aura |
| --- | --- |
| 1440px content width | `max-w-110.5` container |
| 40px gutters | `px-3` (39px), `px-1.5` on phones |
| 128px section rhythm | `py-10` (130px), `py-6` on phones |
| 48px headline to content | `mt-3.5` (45.5px) |
| 24px card gaps | `gap-2` (26px) |
| 72px nav | `h-5.5` (71.5px) |

- Hero: full-bleed night stage, left-aligned headline and actions, a geometric product collage on the right.
- A slow strip of maker wordmarks under the hero.
- Feature tiles in a 3-column grid; the first tile may span two.
- Numbered steps `01 / 02 / 03` in three columns with one action.
- Density: generous. One message per screen; media does the explaining.

## Elevation & Depth

- Flat surfaces. Cards on paper sit on `gray-2` with no border; on night they sit on `color-mix(in srgb, var(--night-fg) 6%, transparent)`.
- The collage frames carry the only shadow: `shadow-[0_30px_80px_rgba(0,0,0,0.35)]` on night.
- No glass, no gradients on surfaces. Gradients appear only inside geometric media.

## Shapes

- `theme.css` sets buttons to pills, inputs to `13px` and surfaces to `19.5px`. Media cards use `rounded-[26px]` for a softer frame.
- Geometric media vocabulary: arches (`rounded-t-full`), circles, half-moons, stripes, stacked rounded blocks, a tilted card. Two or three shapes per frame, one shape color dominant.

## Components

- **Primary pill** → `Button variant="fill"` (lime, dark label). Hover `accent-10`.
- **Ink pill** → `Button variant="fill"` with `bg-gray-12 text-gray-1` on paper, `bg-(--night-fg) text-(--night)` on night.
- **Text action** → `Button variant="link"` with a trailing `ArrowRightIcon className="icon"`.
- **Nav** → `NavigationMenu` on the night stage with mono-free medium labels, a text sign-in and a lime pill.
- **Maker strip** → `Marquee` of invented wordmarks in mixed type styles at 60% opacity.
- **Feature tiles** → `Card` with `rounded-[26px] border-0 shadow-none bg-gray-2 p-0 overflow-hidden`: geometric media on top, `.h5` title and `text-sm text-gray-11` line below.
- **Stats** → `Stat`, `StatValue` (`.h1 font-medium`), `StatLabel` (`text-sm`) on the night stage.
- **Orders** → `Table` with `font-label` IDs, `tabular-nums` totals and `Badge` statuses (`Paid` in lime, `Packed` neutral).
- **Checkout** → `Card` with `Input`, `NativeSelect`, `Checkbox` and a full-width lime pill.
- **Plans** → three `Card`s on `gray-2`; the recommended one on `--night` with a lime pill.
- **FAQ** → `Accordion` with `border-gray-6` rules and a plus in a `rounded-full` 26px circle.

## Do's and Don'ts

- Do alternate night stages and white paper with hard, straight edges.
- Do keep lime for the main action and one highlight per screen.
- Do set headlines huge, tight and balanced; let one word rotate in the hero.
- Do build media from flat geometric shapes when there is no photography.
- Do show real numbers: orders, countries, minutes.

- Don't use lime for backgrounds or body text.
- Don't add glass, glows or gradients on surfaces.
- Don't crowd the marketing surface with dashboard density.
- Don't use real brand names, logos or borrowed copy.
- Don't use pastel washes; the shape colors stay muted and inside media.

## Motion

200ms `cubic-bezier(0.2, 0.8, 0.2, 1)` for pill fills and card lifts (`-translate-y-[2px]` on hover). The hero word rotates every 2.4s with a 400ms slide; the maker strip crawls on a 40s loop. Both stop under `prefers-reduced-motion: reduce`, which shows the first word only. Headlines and stats never animate.

## Reference

```tsx
<section className="bg-(--night) text-(--night-fg)">
  <div className="mx-auto max-w-110.5 px-3 py-10">
    <h1 className="h1 font-display font-semibold leading-[0.95] tracking-[-0.045em]">
      Open a shop for your <span className="text-primary">ceramics</span>.
    </h1>
    <div className="mt-3 flex flex-wrap gap-1">
      <Button variant="fill">Start for free</Button>
      <Button variant="link" className="text-(--night-fg)">
        See how it works <ArrowRightIcon className="icon" />
      </Button>
    </div>
  </div>
</section>
```
