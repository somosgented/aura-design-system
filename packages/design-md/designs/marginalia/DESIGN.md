---
version: "alpha"
name: "Marginalia"
description: "Warm ivory paper, near-black ink buttons, a bookish serif and one clay margin rule used sparingly. A thoughtful editorial flavor of Aura for research tools, writing assistants and knowledge products."
extends: "../../DESIGN.md"
colors:
  primary: "#141413"
  on-primary: "#faf9f5"
  surface: "#faf9f5"
  surface-container: "#f0eee6"
  on-surface: "#141413"
  on-surface-variant: "#5e5d59"
  outline: "#d1cfc5"
  clay: "#d97757"
  oat: "#e3dacc"
typography:
  headline-display:
    fontFamily: "Newsreader"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-section:
    fontFamily: "Newsreader"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: -0.015em
  body-md:
    fontFamily: "Instrument Sans"
    fontWeight: 400
    lineHeight: 1.55
  label-md:
    fontFamily: "Instrument Sans"
    fontSize: 13px
    fontWeight: 500
    letterSpacing: 0.01em
rounded:
  sm: 8px
  lg: 26px
  full: 9999px
spacing:
  unit: 13px
  section: 130px
  max-width: 1196px
aura:
  theme:
    light:
      accent: "#d97757"
      gray: "#87867f"
      background: "#faf9f5"
    dark:
      accent: "#e08a6c"
      gray: "#7f7d76"
      background: "#1a1918"
  fonts:
    sans: "Instrument Sans"
    display: "Newsreader"
    label: "Instrument Sans"
    href: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Instrument+Sans:wght@400;500;600&display=swap"
  hero: "paper"
  headingWeight: 400
  radius:
    button: "8px"
    input: "8px"
    surface: "26px"
  tokens:
    light:
      paper: "#faf9f5"
      paper-raised: "#f0eee6"
      oat: "#e3dacc"
      ink: "#141413"
      on-ink: "#faf9f5"
      night: "#141413"
      night-raised: "#262624"
      on-night: "#faf9f5"
      on-night-muted: "#b0aea5"
      clay-ink: "#a8482a"
    dark:
      paper: "#1a1918"
      paper-raised: "#262624"
      oat: "#3a3631"
      ink: "#f0eee6"
      on-ink: "#141413"
      night: "#0f0f0e"
      night-raised: "#1f1e1d"
      on-night: "#f0eee6"
      on-night-muted: "#a6a49b"
      clay-ink: "#eea488"
---

# Marginalia

> A calm desk for careful thinking: ivory paper, ink-black actions, a bookish serif and a single clay rule in the margin. Built on Aura.

Source flavor: <https://claude.com>. Observed on the real desktop page at 1280px and used only as visual inspiration for an editorial, paper-toned product site, reduced to principles. No brand, logo, mark, photography, markup, copy, sign-in flow or product claims are reused; Marginalia and its sample product are fictional and are not affiliated with the source. This file adapts it to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility).

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`, so they override the default Aura scales. Do not hand-edit the generated values.
3. If the app uses `next/font`, load `Newsreader` (with the `opsz` axis and italic) and `Instrument Sans` there instead of the `@import`, and point `--font-display` at Newsreader and `--font-sans` and `--font-label` at Instrument Sans.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Marginalia's sample notebook copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Marginalia is a quiet reading room. The page is **warm ivory paper**; headlines are a **book serif at weight 400**, centred and balanced; actions are **ink-black rectangles with softly rounded corners**, paired with an outlined secondary. The hero sits on paper, not on a coloured stage: a short serif promise, one plain sub-line, and a **rounded composer card** with a hairline border where the visitor starts a piece of work. Beside it, a **desk of notes**: a tilted stack of paper cards in oat and ivory that stands in for photography. **Clay** is the only saturated hue and appears in small doses: a margin rule beside a highlighted phrase, the focus ring, a status dot. Sections stay airy and centred, plans sit in a segmented switch, the FAQ is a long list of hairline rows, and the page ends on a **dark ink footer**. Use it for research tools, writing assistants, knowledge bases and documentation. It is not loud, not glossy, not gradient-heavy and never neon.

## Colors

Seeds generate the full Aura 12-step scales in `theme.css`. The accent is clay; paper, oat, ink and night are custom tokens. The source's primary action is ink, so primary buttons use `--ink`, not `accent-9`.

| Flavor role | Value | Aura token | Use |
| --- | --- | --- | --- |
| Paper | `#faf9f5` | `--paper`, `gray-1` | Page canvas |
| Raised paper | `#f0eee6` | `--paper-raised` | Cards, wells, plan panels, table header |
| Oat | `#e3dacc` | `--oat` | Note cards on the desk, quiet highlight behind one phrase |
| Ink | `#141413` | `--ink`, `gray-12` | Headlines, body, primary button fill |
| Text on ink | `#faf9f5` | `--on-ink` | Labels on ink buttons |
| Muted ink | `#5e5d59` | `gray-11` | Sub-lines, helper text, legal small print |
| Hairline | `#d1cfc5` | `gray-6` | Card and composer borders, FAQ rules |
| Clay | `#d97757` | `accent-9` | Margin rule, status dot, focus ring, progress fill. Never body text |
| Clay text | `#a8482a` | `--clay-ink` | The rare clay word in text, links on hover |
| Night | `#141413` | `--night`, `--night-raised` | Footer and the closing call to action |
| Text on night | `#faf9f5` | `--on-night`, `--on-night-muted` | Everything placed on night |

- Clay at `accent-9` is decorative: dots, rules, focus, fills behind ink text. Text in clay uses `--clay-ink` (light) so it stays above 4.5:1 on paper.
- On night use only `--on-night` and `--on-night-muted`; never `gray-*` steps, which are tuned for paper.
- Text on `--oat` is always `gray-12`.

### Dark mode

The source page was only observed in light, with a dark footer. Dark is reinterpreted from that footer: the whole page becomes warm charcoal paper and the ink button flips to ivory.

| Variable | Light | Dark |
| --- | --- | --- |
| `--paper` | ivory `#faf9f5` | charcoal `#1a1918` |
| `--paper-raised` | `#f0eee6` | `#262624` |
| `--oat` | `#e3dacc` | deep oat `#3a3631` |
| `--ink` / `--on-ink` | ink on ivory text | ivory `#f0eee6` with ink text |
| `--night` | `#141413` | `#0f0f0e` with a 1px `gray-a5` top rule |
| `--clay-ink` | `#a8482a` | `#eea488` |
| Composer and desk shadow | soft `gray-a7` | 1px `gray-a5` ring, no shadow |

## Typography

- Display: `Newsreader` through `font-display`, weight 400, tracking `-0.02em`, `leading-[1.05]`, `text-wrap: balance`. One phrase per page may be *italic*. Never bold the serif.
- Section heads: `Newsreader` `.h2` at `text-[clamp(2rem,4.5vw,3.25rem)]`, centred over their section.
- Body: `Instrument Sans` through `--aura-font-stack`, weight 400, `gray-12` for lead lines and `gray-11` for support copy, `leading-[1.55]`.
- Labels and buttons: `Instrument Sans` through `font-label`, weight 500, `text-sm`, sentence case. No uppercase kickers; small labels stay in sentence case.
- Hero `.h1` at `text-[clamp(2.5rem,6vw,4.75rem)]`.

## Layout

| Source | Aura |
| --- | --- |
| ~1200px content width | `max-w-92` container |
| ~130px section rhythm | `py-10` (130px) |
| ~16px nav padding | `py-1` (13px) |
| ~24px card padding | `p-2` (26px) |
| ~12px gaps between stacked buttons | `gap-1` (13px) |
| ~40px button height | `h-3` (39px) |
| ~26px composer radius | `rounded-[26px]` |
| ~8px button radius | `rounded-[8px]` |

- Hero is two columns on wide screens: serif headline, sub-line and composer card on the left, centred in their column; the desk of notes on the right. One column below 960px with the desk under the composer.
- Section heads are centred; body blocks under them are capped at `max-w-46`.
- The nav keeps a mark, five text links and two actions on wide screens. Below 960px the links move into a disclosure menu opened by a labelled button.

## Elevation & Depth

- Paper is flat. Cards are `--paper-raised` or paper with a `gray-6` hairline. No drop shadows on paper sections.
- The composer card and the desk notes take one soft shadow: `shadow-[0_13px_39px_-19.5px_var(--gray-a7)]` in light, a `gray-a5` ring instead in dark.
- No gradients, glows or textures.

## Shapes

- `theme.css` sets buttons and inputs to `8px` and surfaces to `26px`. Keep buttons rectangular with soft corners; do not turn them into pills.
- Desk notes are `rounded-[13px]` cards rotated between `-4deg` and `3deg`.
- The brand mark is the Aura gallery square: `size-1.5`, `accent-9`, `rounded-[3px]`. Never draw a star, burst or asterisk mark.
- The **margin rule** is a 3px-wide, `h-2` clay bar set in the left margin of a highlighted phrase or feature title, like a pencil note beside a paragraph.
- Status dots are `size-0.5` circles.

## Components

- **Primary button** → `Button variant="fill"` with `bg-(--ink) text-(--on-ink)` and hover `opacity-90`, weight 500.
- **Secondary button** → `Button variant="pill"` with `rounded-[8px] border border-gray-7 bg-transparent text-gray-12`; on night use `border-(--on-night-muted) text-(--on-night)`.
- **Nav** → `NavigationMenu` on paper: mark plus name on the left, text links in `gray-12`, then the secondary and primary buttons. Below 960px a menu `Button size="icon-md"` with `aria-expanded` toggles the links.
- **Composer** → `Card` on paper, `rounded-[26px] border-gray-6`, a `Textarea` with a visible label, a `ToggleGroup type="single"` of modes, a `Button variant="fill"` to start, and one line of `small text-gray-11` help.
- **Desk** → three or four `Card`s on `--oat` and `--paper-raised`, rotated, holding a short note, a checklist or a quote. Decorative: `aria-hidden` when they repeat nearby content.
- **Stats** → `Stat` with `StatValue className="font-display"` and `StatLabel` in `gray-11`, divided by `gray-6` rules.
- **Library table** → `Table` with `text-sm` cells, `--paper-raised` header and `Badge`s: `Drafting` with a clay `StatusDot`, `Reviewed` neutral.
- **Form** → `Input`, `NativeSelect`, `Textarea`, a `Checkbox`, and `Button variant="fill"`. Labels above fields, errors in text, never colour only.
- **Plans** → a `ToggleGroup` or `Tabs` switch (Personal / Team) above `Card`s on `--paper-raised`; the recommended plan uses a `gray-12` 1px border, never a coloured stage.
- **FAQ** → `Accordion` with `gray-6` rules; triggers in sans `text-lg` weight 500 with a plus icon that rotates 45°.
- **Footer** → full-bleed `--night` band with columns of `font-label` links in `--on-night-muted`.

## Do's and Don'ts

- Do leave generous ivory space; let the serif carry the voice.
- Do keep clay small: a margin rule, a dot, a ring, a progress fill.
- Do write in plain, warm, first-person-plural sentences. Invite, don't hype.
- Do keep every disclosure, tab and menu operable by keyboard with a visible clay focus ring.

- Don't fill buttons, cards or sections with clay.
- Don't bold the serif or set body copy in it.
- Don't add photography that imitates the source; use the desk of notes or the product's own imagery.
- Don't reproduce a third party's logo, sign-in screen, social sign-in buttons, product names or copy.
- Don't claim to be, or be affiliated with, any existing AI assistant.

## Motion

Motion follows the Aura baseline: `transform` and `opacity` only, about 250ms, ease `cubic-bezier(0.22, 1, 0.36, 1)`. Section heads rise 13px and fade in once when scrolled into view; desk notes settle from a slightly larger tilt on load over 400ms; the FAQ plus icon rotates 45° on open; the plan switch slides its indicator. Nothing loops or autoplays. All motion sits behind `prefers-reduced-motion: no-preference`; under `reduce`, content is visible immediately and state changes are instant.

## Reference

```tsx
<Card className="rounded-[26px] border-gray-6 bg-(--paper) p-2 shadow-[0_13px_39px_-19.5px_var(--gray-a7)]">
  <Label htmlFor="brief" className="font-label text-sm font-medium">
    What are you working through?
  </Label>
  <Textarea
    id="brief"
    className="mt-1 min-h-6 rounded-[8px] border-gray-7 bg-(--paper)"
    placeholder="Compare three sources on river restoration…"
  />
  <div className="mt-1.5 flex flex-wrap items-center gap-1">
    <ToggleGroup type="single" defaultValue="outline" aria-label="Mode">
      <ToggleGroupItem value="outline">Outline</ToggleGroupItem>
      <ToggleGroupItem value="summarise">Summarise</ToggleGroupItem>
    </ToggleGroup>
    <Button variant="fill" className="ml-auto bg-(--ink) text-(--on-ink) hover:opacity-90">
      Open a notebook <ArrowRightIcon className="icon" />
    </Button>
  </div>
  <p className="small mt-1 text-gray-11">Notes stay on this device in the demo.</p>
</Card>
```
