---
version: "alpha"
name: "Sharpmint"
description: "Ice-blue treasury fields, transparent reserve blocks and split-cell arrows. A sober, open-ledger flavor of Aura for products that show their workings."
extends: "../../DESIGN.md"
colors:
  primary: "#2056d9"
  on-primary: "#ffffff"
  surface: "#f3f3f3"
  surface-container: "#e5eaf0"
  on-surface: "#081522"
  on-surface-variant: "#52616f"
  outline: "#c5ced8"
  ice: "#c9ddec"
  deep: "#031429"
  blue: "#487fc4"
typography:
  headline-display:
    fontFamily: "Archivo"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: -0.035em
  body-md:
    fontFamily: "Archivo"
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "Archivo Narrow"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.08em
rounded:
  md: 0px
  lg: 0px
spacing:
  unit: 13px
  section: 110.5px
  max-width: 1384.5px
aura:
  theme:
    light:
      accent: "#2056d9"
      gray: "#52616f"
      background: "#f3f3f3"
    dark:
      accent: "#2056d9"
      gray: "#52616f"
      background: "#031429"
  fonts:
    sans: "Archivo"
    label: "Archivo Narrow"
    href: "https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=Archivo+Narrow:wght@400;500;600&display=swap"
  hero: "field"
  radius:
    button: "0px"
    input: "0px"
    surface: "0px"
---

# Sharpmint

> An institutional prospectus with the doors left open: ice-blue air, transparent reserve blocks, square controls and a ledger you can read. Built on Aura.

Source flavor: https://flavors.design/f/sharpmint. This file adapts it to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility).

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`, so they override the default Aura scales. Do not hand-edit the generated scale values.
3. If the app uses `next/font`, load `Archivo` and `Archivo Narrow` there instead of the `@import`, and point `--font-sans` and `--font-label` at the font variables.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content and permissions. Do not import Sharpmint's treasury copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Sharpmint borrows the visual grammar of a public report, not a trading terminal: broad blue fields, ordinary-weight grotesk headlines, condensed uppercase labels and ruled tables. In an Aura app that means flat `gray-1` paper, square controls, attached panels separated by `gray-6` rules, and one deep accent field reserved for the top of a page or an empty state. Every claim sits next to a number, timestamp or policy. Use it for reporting, finance, infrastructure and admin tools that need to show their workings. It is not a neon dashboard, a crypto exchange or a rounded-card startup page.

## Colors

Seeds generate the full Aura 12-step scales in `theme.css`. Map the flavor roles to Aura steps:

| Flavor role | Value | Aura token | Use |
| --- | --- | --- | --- |
| bg | `#f3f3f3` | `gray-1` | App canvas, report paper |
| bg-2 | `#e5eaf0` | `gray-3` | Secondary controls, report title plate |
| fg | `#081522` | `gray-12` | Body ink, primary control fill, highlighted plan |
| fg-muted | `#52616f` | `gray-11` | Labels and secondary prose |
| accent | `#2056d9` | `accent-9` / `--primary` | Hover fill, final chart column, focus |
| accent-fg | `#ffffff` | `accent-contrast` | Text on accent and on the deep field |
| border | `#c5ced8` | `gray-6` | Report, stat and table rules |
| ice | `#c9ddec` | `accent-4` | Wirework, closing call-to-action band |
| deep | `#031429` | dark `gray-1` | Hero field foundation |
| blue | `#487fc4` | `accent-8` | Middle of the field gradient |

- Primary actions are **ink**, not blue: `bg-gray-12 text-gray-1`, turning `bg-primary text-primary-foreground` on hover. Blue is the hover and the signal, never body text.
- Text on the field is `accent-contrast` at full opacity. Never `gray-11` on the field.
- Translucency uses Aura alpha steps (`accent-a3`, `gray-a6`) or `color-mix()` over tokens.

## Typography

- Sans: `Archivo` through `--font-sans` / `--aura-font-stack`. Weight 400 for headings and prose, 500 for emphasis. Never bold the display headline: the label face supplies the contrast.
- Label: `Archivo Narrow` through `font-label`, used as `font-label text-xs uppercase tracking-[0.08em] font-medium`. Condensed, not monospaced.
- Keep Aura fluid classes. `.h1` takes the display role with `font-normal leading-[1.02] tracking-[-0.035em] max-w-[9ch]`. `.h2` takes section titles with `leading-[1.08] tracking-[-0.035em] max-w-[20ch]`.
- Body stays Aura `p` (17px root, 1.5 line-height). Form controls stay at the 17px floor.
- Big numbers (stats, prices) use `.h2` at `font-normal tracking-[-0.04em]` with tabular figures.

## Layout

Sharpmint's 4px grid maps onto Aura's 13px grid in half steps:

| Flavor | Aura |
| --- | --- |
| 28px gutters | `px-2` (26px), `px-1.5` below 600px |
| 112px section padding | `py-8.5` (110.5px), `py-5.5` below 600px |
| 1384px content width | `max-w-106.5` container |
| 64px below headings | `mb-5` (65px) |
| 44px arrow cell | `size-3.5` (45.5px) |

- Section headings use a `1fr 2fr` grid: a numbered `font-label` on the left, `.h2` on the right.
- Features are three **attached** columns, divided by `border-l border-gray-6`, each topped by `border-t border-gray-12`. Never floating cards.
- Reports use a one-third title plate (`bg-gray-3`) and two-thirds ruled rows.
- At 900px features, plans, reports and FAQ stack. At 600px stats become two columns and navigation becomes one action.
- Density: balanced. Large ordinary-weight headings around compact, readable rows.

## Elevation & Depth

Flat paper below one deep field. No shadows, no blur.

- Field: `radial-gradient(ellipse at 28% 0%, var(--accent-4), transparent 75%), linear-gradient(178deg, var(--accent-8), var(--gray-1) 83%)` on a dark-scoped surface (`.dark` wrapper), with a `linear-gradient(0deg, var(--gray-1), transparent 65%)` text scrim.
- Rules: `border-gray-6` everywhere; `border-gray-12` only on feature tops.
- Charts: `--chart-grid` lines; bars at `accent-a4`, the last bar solid `accent-9`.
- Highlighted plan or row: solid `bg-gray-12 text-gray-1`. No ring, glow or lift.
- Override shadows on Aura surfaces (`Card`, `Popover`, `DropdownMenu`) with `shadow-none` and a `border-gray-6` edge.

## Shapes

- Radius is `0px` for buttons, inputs and surfaces (`theme.css` sets `--aura-button-radius`, `--aura-input-radius`, `--aura-radius` and `--radius-*`). This flavor deliberately overrides Aura's minimum page-chrome radius.
- Split-cell actions: a text cell and a separate square arrow cell, 2px apart.
- Status is a 5px square (`StatusDot` with `rounded-none`), never a glowing orb.
- No pills, circular avatars or blobs. `Avatar` uses `rounded-none`.

## Components

Map each flavor element to Aura registry components:

- **Split-cell button** → `ButtonGroup` with `gap-[2px]`: `Button variant="fill"` for the text cell (`font-label uppercase tracking-[0.08em] px-1.5`) plus `Button variant="fill" size="icon-md"` holding `ArrowTopRightIcon className="icon"`. Fill `bg-gray-12 text-gray-1`, hover `bg-primary text-primary-foreground`. Secondary: `bg-gray-3 text-gray-12`.
- **Navigation** → `NavigationMenu` links as square cells on `accent-a3`, hover `accent-a5`. Phones show the wordmark and one split-cell action.
- **Stats** → `Stat`, `StatValue`, `StatLabel` in a four-column grid separated by `border-r border-gray-6`; values in `.h2 font-normal`, labels in `font-label`. Real units only.
- **Report list** → `Table` without header chrome: title, `font-label` date/file type in `gray-11`, trailing arrow icon. Hide metadata on narrow screens.
- **Data and ledgers** → `@aura/data-grid` or `Table` with `text-sm` cells, `font-label` uppercase headers, `py-1` rows and `border-b border-gray-6`.
- **Cards** → `Card` with `rounded-none shadow-none border-gray-6 bg-gray-1`, attached in a grid (`-ml-px`), not gapped.
- **Plans** → three attached `Card`s; the recommended one `bg-gray-12 text-gray-1`.
- **FAQ** → `Accordion` with ruled items (`border-t border-gray-6`), `.h5` triggers and `gray-11` answers. First item open.
- **Badges** → `Badge` with `rounded-none font-label uppercase`.
- **Inputs** → Aura `Input` with `rounded-none`, `bg-gray-1`, `border-gray-7`, focus `--aura-outline`.
- **Empty states** → `Empty` on `bg-gray-2` with one split-cell action.

## Do's and Don'ts

- Do pair ordinary-weight headlines with narrow uppercase labels.
- Do pair every claim with a number, date or policy.
- Do keep actions square, with a separate arrow cell.
- Do align report rows and section labels to one grid.
- Do keep tokens: every color comes from `theme.css` steps.

- Don't use pill buttons, rounded cards or gapped bento grids.
- Don't add shadows, glass blur or glowing edges.
- Don't use blue for body text or white text on the lightest top of the field.
- Don't animate counters, prices or the field.
- Don't add real financial logos, customer brands or certification seals.

## Motion

Aura's 250ms timing with `cubic-bezier(.45, 0, .55, 1)` for fill changes on buttons and nav cells. On hover the arrow icon moves `translate-x-[2px]`; the button itself does not move. All motion sits behind `motion-safe:`. Fields, data and numbers stay still.

## Reference

```tsx
<ButtonGroup className="gap-[2px]">
  <Button variant="fill" className="font-label uppercase tracking-[0.08em] bg-gray-12 text-gray-1 hover:bg-primary hover:text-primary-foreground">
    Open the reserve
  </Button>
  <Button variant="fill" size="icon-md" aria-label="Open the reserve" className="bg-gray-12 text-gray-1 hover:bg-primary hover:text-primary-foreground">
    <ArrowTopRightIcon className="icon motion-safe:transition-transform group-hover:translate-x-[2px]" />
  </Button>
</ButtonGroup>
```
