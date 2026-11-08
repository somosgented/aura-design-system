---
version: "alpha"
name: "Plumline"
description: "Dark plum stages, warm ivory paper, one violet accent and an expressive serif asking one question at a time. A conversational flavor of Aura for forms, surveys, onboarding and intake flows."
extends: "../../DESIGN.md"
colors:
  primary: "#6b3fd9"
  on-primary: "#ffffff"
  surface: "#f8f4ec"
  surface-container: "#f0e9dd"
  on-surface: "#241327"
  on-surface-variant: "#66566a"
  outline: "#e2d8cc"
  plum: "#2b1530"
  on-plum: "#f8f4ec"
  lilac: "#dccfff"
typography:
  headline-display:
    fontFamily: "Fraunces"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: -0.025em
  question-lg:
    fontFamily: "Fraunces"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.015em
  body-md:
    fontFamily: "Hanken Grotesk"
    fontWeight: 400
    lineHeight: 1.55
  label-md:
    fontFamily: "Hanken Grotesk"
    fontSize: 13px
    fontWeight: 600
    letterSpacing: 0.06em
rounded:
  sm: 6.5px
  lg: 19.5px
  full: 9999px
spacing:
  unit: 13px
  section: 130px
  max-width: 1196px
aura:
  theme:
    light:
      accent: "#6b3fd9"
      gray: "#7a6a7c"
      background: "#f8f4ec"
    dark:
      accent: "#9b7bff"
      gray: "#776a7d"
      background: "#160c19"
  fonts:
    sans: "Hanken Grotesk"
    display: "Fraunces"
    label: "Hanken Grotesk"
    href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&family=Hanken+Grotesk:wght@400;500;600&display=swap"
  hero: "field"
  headingWeight: 400
  radius:
    button: "9999px"
    input: "6.5px"
    surface: "19.5px"
  tokens:
    light:
      paper: "#f8f4ec"
      paper-raised: "#f0e9dd"
      plum: "#2b1530"
      plum-raised: "#3a1f40"
      on-plum: "#f8f4ec"
      on-plum-muted: "#cdbfcf"
      lilac: "#dccfff"
      glow: "#8c5cff"
    dark:
      paper: "#160c19"
      paper-raised: "#21142a"
      plum: "#24122a"
      plum-raised: "#321b39"
      on-plum: "#f3ece0"
      on-plum-muted: "#b9a9bd"
      lilac: "#3d2d63"
      glow: "#7a52f0"
---

# Plumline

> Forms that feel like a conversation: one serif question on a plum stage, an ivory page to answer on, and a single violet thread leading forward. Built on Aura.

Source flavor: <https://www.typeform.com/>, used only as visual inspiration for conversational forms and reduced to principles. No brand, logo, imagery, markup, copy or product claims are reused; Plumline and its sample product are fictional. This file adapts it to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility).

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`, so they override the default Aura scales. Do not hand-edit the generated values.
3. If the app uses `next/font`, load `Fraunces` (with the `opsz` axis and italic) and `Hanken Grotesk` there instead of the `@import`, and point `--font-display` at Fraunces and `--font-sans` and `--font-label` at Hanken Grotesk.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Plumline's sample survey copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Plumline is a calm interviewer. The hero is a **dark plum stage** with a soft violet glow, where one large **serif question** waits for an answer. The rest of the page is **warm ivory paper** with sober sans body copy. The product is shown as a **question card**: a progress thread, a numbered question, numbered answer choices with keycaps, and a quiet "Enter" hint. Past answers collapse into a short **transcript** of chat-style bubbles. Violet is the only saturated color; it marks the next step, the selected choice and focus. Use it for form builders, onboarding, research tools and intake flows. It is not loud, not neon, not gradient-heavy and never crowded: one question owns the viewport.

## Colors

Seeds generate the full Aura 12-step scales in `theme.css`. The accent is violet; plum, lilac and the glow are custom tokens.

| Flavor role | Value | Aura token | Use |
| --- | --- | --- | --- |
| Paper | `#f8f4ec` | `--paper` | Page canvas; the generated `gray-1` stays cooler, so set the page on `--paper` |
| Raised paper | `#f0e9dd` | `--paper-raised` | Cards, wells, transcript bubbles |
| Ink | `#241327` | `gray-12` | Headlines, body on paper |
| Muted ink | `#66566a` | `gray-11` | Helper text, captions |
| Hairline | `#e2d8cc` | `gray-6` | Card borders, rules |
| Violet | `#6b3fd9` | `accent-9` / `--primary` | Primary button, selected choice, progress, focus |
| Violet hover | — | `accent-10` | Button hover |
| Plum stage | `#2b1530` | `--plum`, `--plum-raised` | Hero, closing call to action, recommended plan |
| Text on plum | `#f8f4ec` | `--on-plum`, `--on-plum-muted` | Everything placed on plum |
| Lilac | `#dccfff` | `--lilac` | Selected-answer wash, highlight behind one word |
| Glow | `#8c5cff` | `--glow` | One radial glow per plum stage |

- On plum use only `--on-plum` and `--on-plum-muted`; never `gray-*` steps, which are tuned for paper.
- Text on `--lilac` is always `gray-12`.

### Dark mode

Reinterpret, do not invert. The page becomes a deep plum night and the stage becomes slightly raised instead of darker.

| Variable | Light | Dark |
| --- | --- | --- |
| `--paper` | ivory `#f8f4ec` | plum night `#160c19` |
| `--paper-raised` | `#f0e9dd` | `#21142a` |
| `--stage` | `--plum` | `--plum-raised` with a 1px `accent-a5` ring |
| `--stage-fg` | `--on-plum` | `--on-plum` (warm off-white) |
| `--heading` | `gray-12` | `gray-12` |
| `--lilac` | pale wash | the deep `#3d2d63` from `theme.css` |
| `--glow` | 45% opacity | about half |

## Typography

- Display and questions: `Fraunces` through `font-display`, weight 400, optical size high, tracking `-0.025em`, `leading-[1.02]`. One word per headline may be *italic* for warmth. Questions end with a question mark.
- Body: `Hanken Grotesk` through `--aura-font-stack`, weight 400, `gray-11`, `leading-[1.55]`.
- Labels: `Hanken Grotesk` through `font-label`, weight 600, `text-xs`, `uppercase`, `tracking-[0.06em]`, for question numbers and section kickers.
- Hero `.h1` at `text-[clamp(2.5rem,6.5vw,5.5rem)]`. Question cards use `.h3` in display.
- Never set body copy in the serif and never set questions in the sans.

## Layout

| Source | Aura |
| --- | --- |
| 1200px content width | `max-w-92` container |
| 130px section rhythm | `py-10` (130px) |
| 64px hero padding | `py-5` |
| 24px card gaps | `gap-2` (26px) |
| 20px card radius | `rounded-[19.5px]` |
| 6px input radius | `rounded-[6.5px]` |
| Choice row height | `min-h-3.5` (45.5px) |

- Hero is two columns on wide screens: serif headline left, live question card right. One column below 960px with the card under the headline.
- Question card content is capped at `max-w-46` so a question never runs wider than about 60 characters.
- Sections alternate paper and one plum stage; never two plum stages in a row.

## Elevation & Depth

- Paper cards are flat on `--paper-raised` with a `gray-6` hairline. No shadows on paper.
- The question card floats on the plum stage with `shadow-[0_26px_52px_-26px_var(--gray-a10)]` in light and a ring instead of a shadow in dark.
- The stage carries one radial `--glow` behind the question card. No other gradients.

## Shapes

- `theme.css` sets buttons to `9999px` pills, inputs to `6.5px` and surfaces to `19.5px`. Keep the pills; do not square them.
- Keycaps are `rounded-[6.5px]` squares `size-2` with a `gray-7` border and the number in `font-label`.
- Transcript bubbles are `rounded-[19.5px]` with one `rounded-br-[6.5px]` corner on the answer side.
- The progress thread is a `h-[3px] rounded-full` track in `accent-a4` with an `accent-9` fill.

## Components

- **Primary button** → `Button variant="fill"` (violet), weight 600, trailing `ArrowRightIcon className="icon"`.
- **Secondary button** → `Button variant="pill"` with `border border-gray-7 bg-transparent`; on plum use `border-(--on-plum-muted) text-(--on-plum)`.
- **Nav** → `NavigationMenu` on paper with the violet square mark. Below 960px the links wrap to a second row; never hide them without a replacement.
- **Question card** → `Card` on `--paper` with a `font-label` kicker (`3 → 5`), the question in `.h3 font-display`, then a `ToggleGroup type="single"` of choices, each a row with a keycap and label. Selected: `bg-(--lilac) border-accent-9`.
- **Enter hint** → `Button variant="fill"` "OK" plus `small text-gray-11` "press Enter ↵"; visible hint, never the only way to continue.
- **Transcript** → stacked `Card`s as bubbles: question in `--paper-raised`, answer in `--lilac` aligned right.
- **Stats** → `Stat` with `StatValue className="font-display"` and `StatLabel` in `gray-11`.
- **Responses table** → `Table` with `text-sm` cells and `Badge` statuses: `Complete` accent soft, `Partial` neutral.
- **Builder form** → `Input`, `NativeSelect`, `ToggleGroup` for question type, `Button variant="fill"`.
- **Plans** → `Card`s on paper; the recommended plan sits on `--stage` with `--stage-fg` text.
- **FAQ** → `Accordion`; triggers in display serif `.h5`, content in sans.

## Do's and Don'ts

- Do give one question the whole stage; let whitespace do the work.
- Do number questions and choices, and show the keyboard shortcut next to every choice.
- Do write in the second person, warm and short: ask, don't instruct.
- Do keep violet for the next step, the current answer and focus.

- Don't put more than one question card in a viewport.
- Don't use the serif for body copy or the sans for questions.
- Don't add extra brand colors, illustrations or gradients beyond the one glow.
- Don't use real brand names, logos, product claims or borrowed copy.

## Motion

Motion follows the Aura baseline: `transform` and `opacity` only, about 250ms, and only in response to input. After an answer, the next question rises 13px and fades in over 250ms `cubic-bezier(0.22, 1, 0.36, 1)`, and the progress thread grows with `transform: scaleX()` from its left edge over 250ms. The stage glow is static; nothing autoplays. Choice hover and selected tints change instantly. All motion sits behind `prefers-reduced-motion: no-preference`; under `reduce`, questions swap and progress updates instantly. Headlines never animate.

## Reference

```tsx
<Card className="rounded-[19.5px] border-gray-6 bg-(--paper) p-3 shadow-none">
  <span className="font-label text-xs font-semibold uppercase tracking-[0.06em] text-accent-11">
    Question 3 of 5
  </span>
  <h3 className="h3 mt-1 font-display leading-[1.15] tracking-[-0.015em]">
    How did the workshop <em>feel</em> for you?
  </h3>
  <ToggleGroup type="single" className="mt-2 grid gap-1" aria-label="Answer">
    <ToggleGroupItem value="energising" className="min-h-3.5 justify-start gap-1 rounded-[6.5px] data-[state=on]:bg-(--lilac)">
      <kbd className="size-2 rounded-[6.5px] border border-gray-7 font-label text-xs">1</kbd>
      Energising
    </ToggleGroupItem>
  </ToggleGroup>
  <div className="mt-2 flex items-center gap-1">
    <Button variant="fill">
      OK <ArrowRightIcon className="icon" />
    </Button>
    <span className="small text-gray-11">press Enter ↵</span>
  </div>
</Card>
```
