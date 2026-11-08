---
version: "alpha"
name: "Bauhaus"
description: "Muted primaries on warm paper, ink rules that cut the page into cells, six geometric shapes and assertive grotesk type. A catalogue-plate flavor of Aura."
extends: "../../DESIGN.md"
colors:
  primary: "#c9432b"
  on-primary: "#ffffff"
  surface: "#f5f1e8"
  surface-container: "#e0b62c"
  on-surface: "#141414"
  on-surface-variant: "#5b5955"
  outline: "#141414"
  blue: "#2b4bd8"
  blue-fg: "#f5f1e8"
  yellow: "#e0b62c"
  yellow-fg: "#141414"
typography:
  headline-display:
    fontFamily: "Space Grotesk"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: -0.05em
  body-md:
    fontFamily: "DM Sans"
    lineHeight: 1.5
  label-md:
    fontFamily: "Space Grotesk"
    fontWeight: 700
    letterSpacing: 0.14em
rounded:
  md: 0px
  full: 9999px
spacing:
  unit: 13px
  section: 78px
  max-width: 1202.5px
aura:
  theme:
    light:
      accent: "#c9432b"
      gray: "#5b5955"
      background: "#f5f1e8"
    dark:
      accent: "#d94a30"
      gray: "#6b6862"
      background: "#17171a"
  fonts:
    sans: "DM Sans"
    display: "Space Grotesk"
    label: "Space Grotesk"
    href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap"
  hero: "paper"
  headingWeight: 700
  radius:
    button: "0px"
    input: "0px"
    surface: "0px"
  tokens:
    light:
      ink: "#141414"
      cobalt: "#2b4bd8"
      cobalt-fg: "#f5f1e8"
      ochre: "#e0b62c"
      ochre-fg: "#141414"
      rule-weight: "2px"
    dark:
      ink: "#f2ede2"
      cobalt: "#4a68e8"
      cobalt-fg: "#f2ede2"
      ochre: "#d9a92a"
      ochre-fg: "#17171a"
      rule-weight: "2px"
---

# Bauhaus

> Muted primaries on warm paper, shaped by geometric forms, ink rules and assertive grotesk type. Built on Aura.

Source flavor: https://flavors.design/f/bauhaus. This file adapts it to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility).

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`, so they override the default Aura scales. Do not hand-edit the generated values.
3. If the app uses `next/font`, load `DM Sans` and `Space Grotesk` there instead of the `@import`, and point `--font-sans`, `--font-display` and `--font-label` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Formhaus's furniture copy into an unrelated product.
6. Verify at 360px, in dark mode (the **Weimar Night** scheme) and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

A 1920s Dessau catalogue rebuilt as an app: a warm paper sheet, cobalt plates, ochre fields, brick-red actions and near-black rules that cut the page into cells. Every illustration is one of six elementary shapes (circle, square, triangle, half circle, quarter circle, bar). Sections read as catalogue plates: an index, a strip of steps, a bill of materials, a colour card. It suits catalogues, inventories, exhibitions, design-led hardware and data-heavy admin. It is not glossy SaaS minimalism, soft lifestyle branding or pastel Memphis.

## Colors

Seeds generate the full Aura 12-step scales in `theme.css`. The accent is brick, so `--primary` is reserved for actions. Cobalt and ochre are custom tokens.

| Flavor role | Value | Aura token | Use |
| --- | --- | --- | --- |
| bg | `#f5f1e8` | `gray-1` | Warm paper, the continuous page |
| fg | `#141414` | `--ink` / `gray-12` | Type, rules, grid gutters |
| fg-muted | `#5b5955` | `gray-11` | Secondary copy and the light half of every headline |
| accent | `#c9432b` | `accent-9` / `--primary` | Actions only, and the third shape in a set |
| accent-fg | `#ffffff` | `accent-contrast` | Action text |
| hover | brick into ink | `accent-10` | Button hover |
| blue | `#2b4bd8` | `--cobalt` | The one large field per viewport, featured card, focus |
| blue-fg | `#f5f1e8` | `--cobalt-fg` | Type on cobalt |
| yellow | `#e0b62c` | `--ochre` | Labels, counter-shapes, totals |
| yellow-fg | `#141414` | `--ochre-fg` | Type on ochre |
| rule-soft | ink at 25% | `gray-a7` | Ledger row rules |
| tint | ink at 6% | `gray-a3` | Hovered ledger rows |

- Five inks only: paper, ink, cobalt, ochre, brick. No gradients, no sixth hue.
- Focus is `outline-3 outline-(--cobalt) outline-offset-3`, overriding `--aura-outline` with `var(--cobalt) solid 3px`.
- Muted ink only at 15px and up.

## Typography

- Display: `Space Grotesk` through `font-display` on `.h1`–`.h6`. Weight 700 for the dark half of a headline and 500 in `gray-11` for the muted half (`<em className="not-italic font-medium text-gray-11">`). Tracking `-0.05em` on `.h1`, `-0.03em` elsewhere, sentence case.
- Body: `DM Sans` through `--font-sans` / `--aura-font-stack`, Aura's `p` (17px), line-height 1.5.
- Labels: `Space Grotesk` through `font-label`, `text-xs font-bold uppercase tracking-[0.14em]`, tabular numerals. Never below 10px.
- The hero `.h1` stacks three lines at `leading-[0.86]` with the middle line muted. Section titles use `.h2 leading-[0.94]`.
- Numbers are the graphic: stats at `.h1` with `leading-[0.8]`, prices at `.h2`.

## Layout

Bauhaus's 4px grid maps onto Aura's 13px grid in half steps:

| Flavor | Aura |
| --- | --- |
| 1200px content width | `max-w-92.5` container |
| 48 / 32 / 20px gutters | `px-3.5` / `px-2.5` / `px-1.5` |
| 80px section rhythm | `pb-6` (78px) |
| 56px button height | `h-4.5` (58.5px) |
| 28px button padding | `px-2` (26px) |
| 66px nav | `h-5` (65px) |

- Every section opens with a 2px ink rule (`border-t-2 border-(--ink)`) carrying an index number left and a metadata line right, both as labels.
- Card grids are **ink grids**: `grid gap-[2px] p-[2px] bg-(--ink)` with cells in `gray-1`, `--ochre`, `--cobalt` or `--ink`. Cells have no border of their own.
- Sections keep the left edge. Never centre a section.
- Density: balanced. Oversized numerals against 10px labels and six-column rows.

## Elevation & Depth

Flat print. Nothing floats and nothing is lit.

- Structural rules 2px ink; detail rules 1px ink; ledger rules `border-gray-a7`.
- Depth comes from which flat colour fills a cell, never from shadow.
- Optional plate: a cobalt square with a 1px paper grid, shapes overprinted with an ink ghost offset 7px (a print misregister, not a shadow).
- `shadow-none` on every Aura surface, including `Card`, `Popover`, `DropdownMenu` and `Dialog`. No blur, no backdrop filters.

## Shapes

- `theme.css` sets buttons, inputs and surfaces to `0px`. Circles (`rounded-full`) are the only curves: brand mark, step numbers, status dot, bullets.
- Six primitives and nothing else: circle, square, triangle (`clip-path: polygon(50% 0, 100% 100%, 0 100%)`), half circle, quarter circle and bar.
- Bullets and markers are 11px shapes in `--cobalt`, `--ochre` or `--primary`.

## Components

Map each flavor element to Aura registry components:

- **Primary button** → `Button variant="fill"`, `h-4.5 px-2 justify-between gap-2.5`, label `font-label text-xs uppercase tracking-[0.14em]`, trailing `ArrowRightIcon className="icon"` that moves `translate-x-[6px]` on hover. Brick, hover `accent-10`, `hover:scale-100`.
- **Secondary button** → `Button variant="pill"` with `border border-(--ink) bg-transparent text-gray-12 hover:bg-(--ink) hover:text-gray-1`.
- **Nav** → 65px bar with `border-b-2 border-(--ink)`: a cobalt circle mark plus wordmark, label links that underline on hover, and a permanently underlined text action.
- **Section head** → a `div` with `border-t-2 border-(--ink) pt-1 flex justify-between` holding `01 Module index` and metadata as labels, then `.h2`.
- **Card grids** → `Card` cells with `rounded-none border-0 shadow-none` inside an ink grid. On hover a cell inverts to `bg-(--ink) text-gray-1` and its shape rotates 90°.
- **Stats** → `Stat` cells in an ink grid: paper, ochre, cobalt, paper. `StatValue` at `.h1 leading-[0.8]`, `StatLabel` as a label.
- **Bill of materials** → `Table` with a `border-t-2 border-(--ink)` top, label header row under a 1px ink rule, `border-gray-a7` row rules, part names in `font-display font-bold` with a shape bullet, numbers right-aligned, a 2px rule under the totals row.
- **Steps** → four ink-grid cells, each with a circled step number (`rounded-full border-2 border-(--ink)`), a timestamp label and a short line drawing, ending in an ochre total cell.
- **FAQ** → `Accordion` with `border-gray-a7` rules, `.h5 font-medium` triggers that turn `--cobalt` on hover, and a plus that loses its vertical stroke when open.
- **Inputs** → Aura `Input` with `rounded-none border border-(--ink) bg-gray-1`, focus outline 3px cobalt.
- **Badges** → `Badge` as an ochre block: `rounded-none bg-(--ochre) text-(--ochre-fg) font-label uppercase`.

## Do's and Don'ts

- Do use warm paper as the continuous page.
- Do divide sections with 2px ink rules and put cards in 2px ink gutters.
- Do pair weight 700 and muted 500 inside every large headline.
- Do build every illustration from the six primitives.
- Do number sections and parts (01, FH-02, Fig. 01) in tracked uppercase labels.
- Do invert cells to ink on hover instead of lifting them.

- Don't use gradients, glass, blur or drop shadows.
- Don't round cards, buttons or inputs; circles are the only curves.
- Don't add a seventh shape or a sixth ink.
- Don't centre sections.
- Don't use serif, script or handwritten fonts.
- Don't put a decoration on top of text.

## Motion

180ms `cubic-bezier(0.2, 0.8, 0.2, 1)` for fills and arrows; reveals 520ms rising 18px with a 60–70ms stagger. Hovers swap flat fills, rotate shapes 90°, slide button arrows 6px. Rules, body copy, tables and colour fields never animate. All motion sits behind `motion-safe:`; the static first frame is the finished page.

## Reference

```tsx
<section className="border-t-2 border-(--ink) pb-6">
  <div className="flex justify-between pt-1 font-label text-xs font-bold uppercase tracking-[0.14em]">
    <span><span className="mr-1 text-gray-11">01</span>Module index</span>
    <span className="text-gray-11">Everything sits on a 32 mm grid</span>
  </div>
  <h2 className="h2 mt-2 font-display font-bold leading-[0.94]">
    Six shapes. <em className="not-italic font-medium text-gray-11">That is the whole catalog.</em>
  </h2>
  <div className="mt-3 grid grid-cols-3 gap-[2px] bg-(--ink) p-[2px]">
    <Card className="rounded-none border-0 bg-gray-1 shadow-none hover:bg-(--ink) hover:text-gray-1">…</Card>
  </div>
  <Button variant="fill" className="h-4.5 justify-between gap-2.5 px-2 font-label text-xs uppercase tracking-[0.14em] hover:scale-100">
    Get started <ArrowRightIcon className="icon" />
  </Button>
</section>
```
