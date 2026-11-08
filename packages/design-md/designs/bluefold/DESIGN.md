---
version: "alpha"
name: "Bluefold"
description: "Pale sky fields, a white sweep of light, one clear working blue and a folded-square mark. A calm, airy flavor of Aura for agent dashboards, task runners and assistant products."
extends: "../../DESIGN.md"
colors:
  primary: "#1d6ee6"
  on-primary: "#ffffff"
  surface: "#f6faff"
  surface-container: "#e5f1ff"
  on-surface: "#0f1b2d"
  on-surface-variant: "#4d5b70"
  outline: "#d3e3f5"
  sky-wash: "#e1effc"
  sky-mid: "#80bdfc"
  field-white: "#ffffff"
typography:
  headline-display:
    fontFamily: "Bricolage Grotesque"
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: -0.03em
  body-md:
    fontFamily: "Instrument Sans"
    fontWeight: 400
    lineHeight: 1.55
  label-md:
    fontFamily: "JetBrains Mono"
    fontSize: 13px
    fontWeight: 500
    letterSpacing: 0.04em
rounded:
  sm: 6.5px
  lg: 13px
  full: 9999px
spacing:
  unit: 13px
  section: 117px
  max-width: 1196px
aura:
  theme:
    light:
      accent: "#1d6ee6"
      gray: "#6b7a8f"
      background: "#f6faff"
    dark:
      accent: "#1a5ecb"
      gray: "#6c7889"
      background: "#0b1220"
  fonts:
    sans: "Instrument Sans"
    display: "Bricolage Grotesque"
    label: "JetBrains Mono"
    href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap"
  hero: "field"
  headingWeight: 600
  radius:
    button: "9999px"
    input: "6.5px"
    surface: "13px"
  tokens:
    light:
      sky-mist: "#e5f1ff"
      sky-wash: "#e1effc"
      sky-mid: "#80bdfc"
      sweep: "#ffffff"
      field-ink: "#0f1b2d"
    dark:
      sky-mist: "#122036"
      sky-wash: "#16273f"
      sky-mid: "#2c5f9e"
      sweep: "#9cc8ff"
      field-ink: "#eaf3ff"
---

# Bluefold

> Work that runs quietly in the background: a pale sky field, one sweep of white light and a clear blue for the next action. Built on Aura.

Source flavor: <https://x.ai/bot>. **Limited observation:** the only visual input was the page's 1920×1080 Open Graph card (a blue field with a white sweep and a brand lockup) plus a previously captured text outline of the page's section topics. The live page was not viewed. Fonts, radii, motion, layout and dark mode are **Aura interpretations**, not facts about the source. No logo, circle mark, imagery, markup, copy or product claims are reused. Bluefold, its folded-square mark and its sample product "Bluefold Relay" are fictional. This file adapts that inspiration to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility).

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values.
3. If the app uses `next/font`, load `Bricolage Grotesque`, `Instrument Sans` and `JetBrains Mono` there instead of the `@import`, and point `--font-display`, `--font-sans` and `--font-label` at them.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Bluefold's sample copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Bluefold is airy and unhurried. The hero is a **sky field**: pale blue with one soft **diagonal sweep of white light** crossing it. Everything else is near-white paper with cool gray ink. The signature object is the **run card**: a task with a `font-label` status line, a thin progress track and an attributed note of what it learned. Blue is the only saturated color and marks the next action, running state and focus. Use it for agent dashboards, background job tools and assistant products. It is not neon, not glassy and never busy.

## Colors

The reference values `#e5f1ff`, `#e1effc`, `#80bdfc` and white were measured from the OG card. They inform the tokens below and are not a palette observed on the live page.

The table records exact static literals in the generated `theme.css`, not browser-computed or verified rendered colors. Background seeds differ from the generated canvas step; `--field-ink` is a separate custom token from `--gray-12`. Do not hand-edit generated files to match seeds.

| Flavor role | Source / intent | Generated light literal | Generated dark literal | Aura token | Use |
| --- | --- | --- | --- | --- | --- |
| Canvas | background seeds `#f6faff` light / `#0b1220` dark | `#f5f6f9` | `#101216` | `--gray-1` | Page background |
| Mist surface | custom token | `#e5f1ff` | `#122036` | `--sky-mist` | Cards on the field, stat wells |
| Wash | custom token | `#e1effc` | `#16273f` | `--sky-wash` | Table header, selected rows |
| Sky mid | custom token | `#80bdfc` | `#2c5f9e` | `--sky-mid` | Hero field body; not alone behind small text |
| Sweep | custom token | `#ffffff` | `#9cc8ff` | `--sweep` | Light band in hero and CTA |
| Body ink | gray seed–derived | `#19202a` | `#ebeef2` | `--gray-12` | Body text, headings |
| Field ink | custom token | `#0f1b2d` | `#eaf3ff` | `--field-ink` | Text on the hero field, separate from gray-12 |
| Muted ink | gray seed–derived | `#515e6f` | `#abb4c2` | `--gray-11` | Body and helper text |
| Hairline | gray seed–derived | `#c9d3e0` | `#333a45` | `--gray-6` | Borders, rules |
| Working blue | accent seeds | `#1d6ee6` | `#1a5ecb` | `--accent-9` | Primary controls and progress |
| Blue hover | accent scale | `#0760d6` | `#1952ae` | `--accent-10` | Hover scale step |

The dark accent seed (`#1a5ecb`) remains a proposed correction. Runtime foreground/background contrast on primary buttons and the focused skip link is PENDING_UNTESTED; no contrast pass is claimed from static literals. Local browser access was blocked by environment loopback policy, not demonstrated to be an application defect.

- Text on the hero field uses `--field-ink`, not `--gray-12`. Small text on the field sits on `--sky-mist` cards, not directly on `--sky-mid`.

> **Upstream limitation — `--gray-contrast: undefined`:** The generator unconditionally interpolates `scales.grayContrast`, but the direct `generateRadixColors` return has no `grayContrast` property. The generated declaration is literally `undefined`. No DIRECT consumer was found in Bluefold HTML; indirect shared-CSS consumers were not inspected, so absence of runtime impact is not established. The shared producer/generator fix is outside this flavor's scope; generated files are not patched by hand.

### Dark mode

Reinterpret, do not invert. The field becomes a night sky and the sweep becomes a faint blue haze.

| Variable | Light | Dark |
| --- | --- | --- |
| `--field` | `--sky-mid` → `--sky-mist` | `color-mix(in srgb, var(--sky-mid) 30%, var(--gray-1))` |
| `--field-fg` | `--field-ink` (dark ink) | `--field-ink` (pale) |
| `--sweep-opacity` | `0.85` | `0.25` |
| `--heading` | `gray-12` | `gray-12` |
| Cards on field | `--sky-mist` | `--sky-mist` with a 1px `accent-a5` ring |

## Typography

Font choices are Aura interpretations; the source page's fonts were not observed.

- Display: `Bricolage Grotesque` through `font-display`, weight 600, `tracking-[-0.03em]`, `leading-none`.
- Body: `Instrument Sans` through `--aura-font-stack`, weight 400, `gray-11`, `leading-[1.55]`.
- Labels and status: `JetBrains Mono` through `font-label`, weight 500, `text-xs`, `tracking-[0.04em]`, for run states, timestamps and kickers.
- Hero `.h1` at `text-[clamp(2.5rem,6vw,5rem)]`.

## Layout

| Intent | Aura |
| --- | --- |
| 1196px content width | `max-w-92` |
| 117px section rhythm | `py-9` |
| 64px hero padding | `py-5` |
| 26px card gaps | `gap-2` |
| 13px surface radius | `rounded-[13px]` |
| 6.5px input radius | `rounded-[6.5px]` |

- Hero is two columns from 960px: headline left, two stacked run cards right. One column below.
- Features use a three-column grid that collapses to one at 640px.

## Elevation & Depth

- Paper cards are flat with a `gray-6` hairline.
- Cards on the field use `--sky-mist` and `shadow-[0_13px_39px_-13px_var(--accent-a6)]` in light, a 1px `accent-a5` ring in dark.
- One sweep per field: a static diagonal `linear-gradient` of `--sweep`. No circles, orbs or glossy highlights.

## Shapes

- Buttons are `9999px` pills, inputs `6.5px`, surfaces `13px`. Keep them.
- The **folded square** mark: an accent square with its top-right corner cut by a diagonal fold in `--sweep`. It replaces any round mark.
- Progress tracks are `h-[3px] rounded-full` in `accent-a4` with an `accent-9` fill.

## Components

- **Primary button** → `Button variant="fill"`, weight 600, trailing `ArrowRightIcon className="icon"`.
- **Secondary button** → `Button variant="pill"` with `border border-gray-7 bg-transparent`.
- **Nav** → `NavigationMenu` with the folded-square mark. Below 760px a disclosure button with `aria-expanded` reveals the links.
- **Run card** → `Card` on `--sky-mist` with a `font-label` status (`StatusDot` + `RUNNING` / `DONE`), title, progress track and a small attributed "learned" note.
- **Stats** → `Stat`, `StatValue className="font-display"`, `StatLabel` in `gray-11`.
- **Runs table** → `Table` with `text-sm` cells, `--sky-wash` header and `Badge` states.
- **Brief form** → `Input`, `NativeSelect`, `Textarea`, `Button variant="fill"`, inline errors with `aria-describedby`.
- **Plans** → `Card`s on paper; the recommended plan sits on the field.
- **FAQ** → `Accordion`.

## Do's and Don'ts

- Do keep one sweep per field and let the page breathe.
- Do label every status in text, not color alone.
- Do mark sample metrics and demos as examples.
- Do write short, plain, second-person copy.

- Don't draw circles, orbs or round mascot marks.
- Don't add gradients beyond the field sweep.
- Don't reuse the source's brand name, logo, imagery, copy or claims.
- Don't put small text directly on `--sky-mid`.

## Motion

Motion is an Aura interpretation; the source's motion was not observed. `transform` and `opacity` only, about 250ms, only in response to input. Buttons and cards scale to `1.03` on hover and `0.97` on press with `cubic-bezier(0.4, 0, 0.6, 1)`. The mobile menu is shown and hidden with a `display` toggle; no animated entry is implemented. The sweep is static; nothing autoplays. Under `prefers-reduced-motion: reduce` every transition is removed.

## Reference

```tsx
<Card className="rounded-[13px] border-transparent bg-(--sky-mist) p-2 shadow-[0_13px_39px_-13px_var(--accent-a6)]">
  <div className="flex items-center gap-0.5 font-label text-xs tracking-[0.04em] text-accent-11">
    <StatusDot /> RUNNING · 2 of 3
  </div>
  <h3 className="h5 mt-0.5 font-display tracking-[-0.03em]">Sort this week's invoices</h3>
  <div className="mt-1 h-[3px] rounded-full bg-accent-a4">
    <div className="h-full w-2/3 rounded-full bg-accent-9" />
  </div>
  <p className="small mt-1 text-gray-11">Learned: you file receipts by client first.</p>
</Card>
```
