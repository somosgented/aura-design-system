---
version: "alpha"
name: "Blocksmith"
description: "Heavy black display type on a dotted canvas, pages assembled from bright modular blocks, one purple-to-orange gradient and friendly rounded cards. A playful, builder flavor of Aura for content tools, site builders and marketing teams."
extends: "../../DESIGN.md"
colors:
  primary: "#7b3fe4"
  on-primary: "#ffffff"
  surface: "#ffffff"
  surface-container: "#f6f5f8"
  on-surface: "#111111"
  on-surface-variant: "#5e5b66"
  outline: "#e6e3ec"
  block-lime: "#c6f36b"
  block-coral: "#ff8a65"
  block-sky: "#7cc7ff"
  block-butter: "#ffd95e"
  block-pink: "#ff8fd1"
typography:
  headline-display:
    fontFamily: "Bricolage Grotesque"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: -0.04em
  body-md:
    fontFamily: "Onest"
    fontWeight: 400
    lineHeight: 1.5
  label-mono:
    fontFamily: "JetBrains Mono"
    fontSize: 12px
    fontWeight: 500
rounded:
  md: 13px
  lg: 19.5px
  full: 9999px
spacing:
  unit: 13px
  section: 117px
  max-width: 1300px
aura:
  theme:
    light:
      accent: "#7b3fe4"
      gray: "#6b6876"
      background: "#ffffff"
    dark:
      accent: "#9a6bff"
      gray: "#6e6a7d"
      background: "#0f0d14"
  fonts:
    sans: "Onest"
    display: "Bricolage Grotesque"
    label: "JetBrains Mono"
    href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Onest:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap"
  hero: "paper"
  headingWeight: 800
  radius:
    button: "13px"
    input: "13px"
    surface: "19.5px"
  tokens:
    light:
      block-lime: "#c6f36b"
      block-coral: "#ff8a65"
      block-sky: "#7cc7ff"
      block-butter: "#ffd95e"
      block-pink: "#ff8fd1"
      block-ink: "#111111"
      gradient-from: "#7b3fe4"
      gradient-via: "#e44fa8"
      gradient-to: "#ff9a3d"
    dark:
      block-lime: "#9cc756"
      block-coral: "#d8735a"
      block-sky: "#5f9fd4"
      block-butter: "#d6b64f"
      block-pink: "#d477b0"
      block-ink: "#f4f2f8"
      gradient-from: "#9a6bff"
      gradient-via: "#e062b4"
      gradient-to: "#ffab5c"
---

# Blocksmith

> Pages built like toys: bright blocks snapping into place on a dotted canvas, under headlines heavy enough to sit on. Built on Aura.

Source flavor: an interpretation of the visual language of modern page-builder and content-platform marketing sites, reduced to principles. No brand, copy, imagery or assets are reused. This file adapts it to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility).

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`, so they override the default Aura scales. Do not hand-edit the generated values.
3. If the app uses `next/font`, load `Bricolage Grotesque`, `Onest` and `JetBrains Mono` there instead of the `@import`, and point `--font-display`, `--font-sans` and `--font-label` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Blocksmith's sample builder copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Blocksmith is the joy of assembling. The canvas is white with a **dotted grid**, like a design tool. Headlines are **heavy, chunky and black**, and one word sits on a tilted color block like a sticker. The product is shown as a **page being assembled from blocks**: colored rectangles labelled `hero`, `features`, `pricing`, one of them mid-drag with a cursor. A **block library** of colorful cards, each a tiny wireframe, explains the system. A single purple-to-orange **gradient** marks the special things: the recommended plan, the hero highlight underline. Use it for site builders, CMSs, design tools and creative SaaS. It is not corporate, not monochrome and never dark-first.

## Colors

Seeds generate the full Aura 12-step scales in `theme.css`. The accent is purple; the block colors and the gradient are custom tokens.

| Flavor role | Value | Aura token | Use |
| --- | --- | --- | --- |
| Canvas | `#ffffff` | `gray-1` | Page, with a dotted grid of `gray-5` |
| Raised | `#f6f5f8` | `gray-2` | Cards, wells |
| Ink | `#111111` | `gray-12` | Headlines, borders on blocks |
| Secondary ink | `#5e5b66` | `gray-11` | Body under headlines |
| Hairline | `#e6e3ec` | `gray-6` | Card borders, rules |
| Purple | `#7b3fe4` | `accent-9` / `--primary` | Primary button, links, focus |
| Blocks | lime, coral, sky, butter, pink | `--block-*` | Block fills, sticker highlights, chips |
| Gradient | purple → pink → orange | `--gradient-from/via/to` | One border and one underline per page |

- Blocks carry a `2px` `--block-ink` border so the color reads as a physical piece.
- Text on blocks is always `--block-ink` in light mode; blocks are never used behind body paragraphs.

### Dark mode

| Variable | Light | Dark |
| --- | --- | --- |
| Canvas dots | `gray-5` | `gray-4` |
| Blocks | bright | the muted `--block-*` set in `theme.css` |
| `--block-ink` | `#111111` | `#f4f2f8`, so block borders become light outlines |
| Text on blocks | `--block-ink` | `#111111` fixed, because the muted blocks stay mid-light |
| Gradient | full | the lighter dark stops |

## Typography

- Display: `Bricolage Grotesque` through `font-display`, weight 800, tracking `-0.04em`, `leading-[0.94]`. Headlines are short, punchy and end with a period.
- Body: `Onest` through `--aura-font-stack`, weight 400, `gray-11`.
- Labels: `JetBrains Mono` through `font-label`, `text-xs`, lowercase block names like `block / hero-02`.
- Hero `.h1` at `text-[clamp(3rem,7.5vw,6.75rem)]`; one word wrapped in a sticker: `bg-(--block-lime) px-0.5 rounded-[13px] border-2 border-(--block-ink) -rotate-2 inline-block`.

## Layout

| Source | Aura |
| --- | --- |
| 1300px content width | `max-w-100` container |
| 120px section rhythm | `py-9` (117px) |
| 24px card gaps | `gap-2` (26px) |
| 20px card radius | `rounded-[19.5px]` |
| Dotted canvas | `bg-[radial-gradient(var(--gray-5)_1px,transparent_1px)] bg-size-[26px_26px]` |

- Hero is two columns: headline left, the block stack right.
- Block library is a four-column grid of square-ish cards.
- Steps sit on a dashed connector line.

## Elevation & Depth

- Blocks: `border-2 border-(--block-ink)` with a hard offset shadow `shadow-[4px_4px_0_var(--block-ink)]`. The dragged block lifts to `shadow-[10px_12px_0_var(--block-ink)]` and tilts `rotate-3`.
- Cards: flat on `gray-2`, `rounded-[19.5px]`, no shadow.
- The recommended plan has a 2px gradient border (padding-box/border-box gradient).

## Shapes

- `theme.css` sets buttons and inputs to `13px`, surfaces to `19.5px`.
- Block vocabulary: wide rectangles with labelled tabs, wireframe bars (`rounded-full` lines), a cursor arrow, a plus handle.
- Chips are `rounded-full` with a 1.5px ink border.

## Components

- **Primary button** → `Button variant="fill"` (purple), `h-3.5`, weight 600.
- **Secondary button** → `Button variant="pill"` with `border-2 border-gray-12 text-gray-12 bg-gray-1`, hard shadow `shadow-[3px_3px_0_var(--gray-12)]` that collapses on press.
- **Nav** → `NavigationMenu` with a `Badge` "new" chip in `--block-lime`.
- **Block stack** → a column of `Card`s styled as blocks with `font-label` tabs.
- **Block library** → `Card` grid; each has a colored wireframe preview and a mono name.
- **Stats** → `Stat` with `.h1 font-extrabold` values underlined by a block-colored bar.
- **Pages table** → `Table` with `Badge` statuses: `Published` lime, `Draft` neutral, `Scheduled` sky.
- **New block form** → `Input`, `NativeSelect`, `ToggleGroup` of chips, purple `Button`.
- **Plans** → `Card`s; the recommended one with the gradient border and a pink sticker.
- **FAQ** → `Accordion` on `gray-2` rounded cards, plus sign in a block-colored circle.

## Do's and Don'ts

- Do show the product as blocks being assembled.
- Do give headlines one sticker word on a tilted block.
- Do keep the dotted canvas subtle behind hero and builder moments.
- Do write playful, concrete copy about building pages fast.

- Don't use the gradient more than twice per page.
- Don't put block colors behind long paragraphs.
- Don't soften the headlines; 800 weight is the voice.
- Don't use real brand names, logos or borrowed copy.

## Motion

The dragged block bobs 6px on a 4s loop; blocks snap with a 300ms `cubic-bezier(0.34, 1.56, 0.64, 1)` overshoot on hover; hard shadows collapse to `1px` on press. All motion stops under `prefers-reduced-motion: reduce`. Headlines never animate.

## Reference

```tsx
<h1 className="h1 font-display font-extrabold leading-[0.94] tracking-[-0.04em]">
  Build pages your team{" "}
  <span className="inline-block -rotate-2 rounded-[13px] border-2 border-(--block-ink) bg-(--block-lime) px-0.5">
    actually
  </span>{" "}
  wants to ship.
</h1>
<div className="mt-3 flex gap-1">
  <Button variant="fill">Start building</Button>
  <Button variant="pill" className="border-2 border-gray-12 shadow-[3px_3px_0_var(--gray-12)]">
    Book a demo
  </Button>
</div>
```
