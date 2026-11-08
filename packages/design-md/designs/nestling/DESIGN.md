---
version: "alpha"
name: "Nestling"
description: "A white, airy canvas with soft-grotesk headlines, ink and cream pills, warm off-white panels and clusters of flat, rounded, bobbing vector critters. An Aura flavor for friendly finance apps, wallets and playful consumer products."
extends: "../../DESIGN.md"
colors:
  primary: "#171717"
  on-primary: "#ffffff"
  surface: "#ffffff"
  surface-container: "#fbfaf9"
  surface-cream: "#f6f4ef"
  on-surface: "#343433"
  on-surface-variant: "#474645"
  muted: "#848281"
  outline: "#e8e8e8"
  brand-blue: "#3784f4"
  brand-green: "#44c67f"
  brand-yellow: "#ffbe4c"
  brand-gold: "#ca9230"
  brand-orange: "#ff5310"
typography:
  headline-display:
    fontFamily: "Figtree"
    fontSize: 68px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.02em
  headline-section:
    fontFamily: "Figtree"
    fontSize: 44px
    fontWeight: 500
    lineHeight: 1.09
    letterSpacing: -0.03em
  body-md:
    fontFamily: "Inter"
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.42
    letterSpacing: -0.016em
  label-md:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 600
    letterSpacing: 0em
rounded:
  sm: 6.5px
  md: 13px
  lg: 26px
  full: 9999px
spacing:
  unit: 13px
  section: 117px
  max-width: 1027px
aura:
  theme:
    light:
      accent: "#171717"
      gray: "#858280"
      background: "#ffffff"
    dark:
      accent: "#f2efe9"
      gray: "#8a857e"
      background: "#121110"
  fonts:
    sans: "Inter"
    display: "Figtree"
    label: "Inter"
    href: "https://fonts.googleapis.com/css2?family=Figtree:wght@500;600&family=Inter:wght@400;500;600&display=swap"
  hero: "paper"
  headingWeight: 500
  radius:
    button: "9999px"
    input: "13px"
    surface: "26px"
  tokens:
    light:
      beige: "#fbfaf9"
      cream: "#f6f4ef"
      stone: "#f2ebe0"
      sand: "#e2d6c5"
      blob-blue: "#7dc4ff"
      blob-blue-deep: "#1597ff"
      blob-blue-pale: "#c8e6ff"
      leaf-green: "#44c67f"
      leaf-deep: "#2ea866"
      sun-yellow: "#ffcf7b"
      coin-gold: "#f5b442"
      coin-shine: "#ffe1a3"
      ember: "#ff5310"
      heart-red: "#ef4444"
      petal-pink: "#f966ac"
      plum: "#9553f9"
      limb: "#343433"
      face-ink: "#1c1c1b"
      phone-frame: "#1b1b1b"
      phone-screen: "#111111"
      phone-row: "#222222"
      phone-ink: "#f4f3f1"
      phone-muted: "#a3a19d"
      ink-blue: "#1a64c8"
      ink-green: "#177443"
      ink-gold: "#845a10"
      ink-orange: "#c73a06"
    dark:
      beige: "#1b1a18"
      cream: "#24221e"
      stone: "#2b2722"
      sand: "#4a4238"
      blob-blue: "#5aa5e6"
      blob-blue-deep: "#2a86d6"
      blob-blue-pale: "#2a4a66"
      leaf-green: "#3aae6f"
      leaf-deep: "#2b8f58"
      sun-yellow: "#e6b45f"
      coin-gold: "#d99d34"
      coin-shine: "#f0c574"
      ember: "#e5541c"
      heart-red: "#dc4a4a"
      petal-pink: "#e0609e"
      plum: "#8a5ae8"
      limb: "#d6d0c6"
      face-ink: "#161616"
      phone-frame: "#050505"
      phone-screen: "#0c0c0c"
      phone-row: "#1c1c1c"
      phone-ink: "#eeece8"
      phone-muted: "#95928d"
      ink-blue: "#8cc2ff"
      ink-green: "#6fdca2"
      ink-gold: "#f2c879"
      ink-orange: "#ff9466"
---

# Nestling

> A white page full of air, ink and cream pills, warm panels and a crowd of flat, bobbing critters around a calm headline. Built on Aura.

Source flavor: https://family.co/ (observed 2026-11-08). This file adapts its visual language to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius, shape, motion and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility). Nestling is a fictional self-custody wallet demo; no name, logo, wordmark, mascot, copy, testimonial, person, blog post or platform mark of the source is reused, and every illustration is an original drawing.

| Kind | What |
| --- | --- |
| Observed (measured) | Inter body (17px/26px 500 hero sub, 19px/27px 400 paragraphs, 14px 600 colored eyebrows); display headings 68px/1.1 and 44px/48px at weight 500 with negative tracking; 32px+ pill buttons, ink with white label and cream with ink label; the declared palette (`#171717` ink, `#f6f4ef` cream, `#fbfaf9` beige, blue `#3784f4`, green `#44c67f`, yellow `#ffbe4c`, gold `#ca9230`, orange `#ff5310`, graphic stone/sand); content width about 1024px; section rhythm about 100 to 140px; hairline separators; warm rounded panels; a continuously looping illustration cluster in the hero; two offset rows of sliding quote cards; FAQ with orange plus markers; 100ms ease interaction transitions |
| Adapted by Nestling | Display face Figtree (the source face is proprietary); every spacing value rounded to the 13px grid; dark mode; text-safe eyebrow inks (`--ink-*`) darker than the source graphic colors; original critters (puffs with a leaf tuft and oval face plate, a bean, an acorn), coins, hearts, stars, gears, locks, leaves, eggs; drawn-in-CSS phone mockups with fictional coins; all copy; the shared Aura skeleton (stats, table, form, plans) placed into the source's section order |
| Not legible | Exact keyframes and easing of the illustration loop, video content, dropdown menu contents, any signed-in or wallet flow (deliberately not accessed) |

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values. After those blocks, set `--aura-text-primary-inverse: var(--accent-contrast)` in `:root` (required, see **Upstream limitation**).
3. If the app uses `next/font`, load `Figtree` (500, 600) and `Inter` (400, 500, 600) there instead of the `@import`, and point `--font-display` at Figtree and `--font-sans` and `--font-label` at Inter.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Nestling's sample copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

## Overview

Nestling is a bright, generous page. The hero is paper: a centered two-line headline, a short muted subline and two pills (ink primary, cream secondary), flanked left and right by dense clusters of flat critters and objects that bleed off the viewport edges and bob gently. Below, content sits in a narrow column on warm off-white panels with 26px corners: feature cards with tiny UI vignettes, dark phone mockups, alternating text/panel splits with a small colored eyebrow and a colored checklist, a big calm critter for the security story, sliding quote cards, a split FAQ and a cream closing band with a garden scene. Color lives in illustrations, eyebrows and checks; type and chrome stay ink on white.

## Colors

The accent is **ink**: the source's primary action is an ink pill, so `accent-9` fills primary buttons and the nav square. Brand hues are custom tokens. Exact steps come from `theme.css`.

| Role | Light | Dark | Use |
| --- | --- | --- | --- |
| Canvas | `--gray-1` | `--gray-1` (warm near-black) | Page |
| Ink pill | `--accent-9`, hover `--accent-10`, label `--accent-contrast` | same steps (cream pill, dark label) | Primary buttons, nav mark |
| Cream pill | `--cream`, hover `--stone` | `--gray-3`, hover `--gray-4` | Secondary buttons, nav hover |
| Panel | `--beige` | `--beige` plus 1px `--gray-a4` ring | Feature cards, splits, plans, closing band |
| Hairline | `--gray-5` | `--gray-6` | Section rules, table rows, FAQ |
| Field border | `--gray-8` | `--gray-8` | Inputs, select |
| Headline / body | `--gray-12` / `--gray-11` | same steps | Text |
| Eyebrows, checks, links | `--ink-blue`, `--ink-green`, `--ink-gold`, `--ink-orange` | light tints of the same keys | Text-safe brand hues (≥4.5:1 on canvas and panel) |
| Illustration | `--blob-blue*`, `--leaf-*`, `--sun-yellow`, `--coin-*`, `--ember`, `--heart-red`, `--petal-pink`, `--plum`, `--stone`, `--sand` | slightly deeper twins | Decorative only, never carry meaning |
| Limbs, faces | `--limb`, `--face-ink` | `--limb` turns light, `--face-ink` stays dark on colored bodies | Character strokes |
| Phone | `--phone-*` | `--phone-*` | Mockup frame, screen, rows, text |

- Focus ring: `--aura-outline: var(--gray-12) solid 2px` with 2px offset.
- Badges: tint `color-mix(in srgb, <hue> 18%, var(--gray-1))` with the matching `--ink-*` text; for `--ember` use 6% plus a 1px ember ring at 30% so `--ink-orange` keeps ≥4.5:1.
- Mobile nav: the menu toggle sits before the list in the DOM so Tab moves into the open menu; Escape closes it from anywhere and returns focus to the toggle; the open list is a `--panel` surface.

> **Upstream limitation, `--gray-contrast: undefined`:** the shared generator writes `--gray-contrast: undefined` and Aura `main.css`/`globals.css` map `--aura-text-primary-inverse` to it, so `.button-fill` labels fall back to inherited ink, which vanishes on an ink pill. Setting `--aura-text-primary-inverse: var(--accent-contrast)` in `:root` is **required** for this flavor. The generator is not fixed by this flavor and generated files are never patched by hand.

### Dark mode

Not present on the source; Nestling's own night. Reinterpret, do not invert, through semantic variables in one `.dark` block.

| Variable | Light | Dark |
| --- | --- | --- |
| `--panel` | `--beige` | `--beige` (warm dark) |
| `--panel-ring` | transparent | `--gray-a4` |
| `--soft` / `--soft-hover` | `--cream` / `--stone` | `--gray-3` / `--gray-4` |
| `--hair` | `--gray-5` | `--gray-6` |
| `--disc` (soft circles behind art) | `--stone` | `--stone` (dark stone, about half the presence) |
| Critter limbs | `--limb` ink | `--limb` light so legs stay visible |

## Typography

- Display: Figtree 500 approximates the proprietary rounded grotesk; it is an approximation, not the source face.
- Hero `h1`: `--min: 2.35rem; --val: 5.4vw; --max: 4rem` (68px at a 17px root), line-height 1.1, `-0.02em`.
- Section `h2`: `--min: 1.75rem; --val: 4.4vw; --max: 2.6rem` (44px), line-height 1.09, `-0.03em`.
- Card titles: Figtree 500 on the `.h6` scale.
- Body: Inter 400; lead paragraphs 19px via `--max: 1.12rem`; hero sub 17px 500; card text `text-sm` `gray-11`.
- Eyebrows: Inter 600 `text-sm` in an `--ink-*` hue. Nav links 15px 500.
- Sample amounts use `font-variant-numeric: tabular-nums`.

## Layout

| Source px | Aura step | px | Use |
| --- | --- | --- | --- |
| ≈1024 content | `max-w-79` | 1027 | Wrap |
| ≈100–140 section | `py-7.5`–`py-9` | 97.5–117 | Section rhythm |
| ≈48 hero pill | `h-3.5` | 45.5 | Hero CTAs |
| ≈34 nav pill | `h-2.5` | 32.5 | Nav pills |
| ≈28 card gap | `gap-2` | 26 | Grids |
| ≈24 panel padding | `p-2` | 26 | Panels |
| ≈20 heading → text | `mt-1.5` | 19.5 | Heads |
| ≈8 eyebrow → heading | `mt-0.5` | 6.5 | Eyebrows |
| ≈14 checklist row | `gap-1` | 13 | Checklists |
| ≈64 split gap | `gap-5` | 65 | Splits |

- Hero: three columns (art, center ≈ `max-w-36`, art); below 960px the flanks hide and one small row of four critters sits above the headline.
- Splits collapse to one column below 860px; grids go to one column below 760px.
- Only decorative art flanks and the quote marquee clip overflow.

## Elevation & Depth

Flat. Panels are tone (`--panel`) without borders or shadows; one soft `--gray-a5` shadow only on open nav dropdowns. Phones are ink frames on beige panels, cut at the panel bottom.

## Shapes

- Pills `9999px`; inputs `13px`; panels `26px`; inner mini cards `13px`.
- Critters: scalloped puffs with an oval face plate and a leaf tuft, a pebble bean, an acorn; faces are two dots or calm arcs; limbs are round-capped 9px strokes with oval shoes.
- Objects: coins with a diagonal shine, round hearts, rounded stars, four-point sparkles, dashed-tooth gears, chunky locks, lenses, leaves, eggs, soft background discs.
- Nav mark: an accent square holding a small egg.

## Components

- **Primary** → `Button variant="fill"`, `h-3.5 px-1.5 font-medium`, leading Radix icon `className="icon"`.
- **Secondary** → `Button variant="pill"` with `border-(--soft) bg-(--soft) text-gray-12 hover:bg-(--soft-hover)`.
- **Nav** → `NavigationMenu` with two dropdown triggers and a plain link; right side cream "Sign in" and ink "Get started" pills; below 860px a menu toggle with `aria-expanded`/`aria-controls`, Escape closes and refocuses it.
- **Stats** → `Stat`, `StatValue className="font-display"`, `StatLabel className="text-gray-11"` on a `--panel` strip with a `Badge` "Sample data".
- **Feature cards** → `Card` with `rounded-[26px] border-0 bg-(--panel) shadow-none`, a vignette area and `.h6` title.
- **Send / Receive / Swap** → phone mockups inside `Card` panels, labels below with colored Radix icons.
- **Activity** → `ToggleGroup` filter plus `Table` with `text-sm` cells, avatar circles and `Badge` states; labelled as sample data.
- **Checklists** → list rows with `CheckIcon className="icon"` in an `--ink-*` hue, `gap-0.5`.
- **Plans** → three `Card`s with colored eyebrows, display price and a fill or pill `Button`; prices are demo values.
- **Quotes** → `Marquee` of `Card`s from fictional critters, paused on hover and focus, static under reduced motion, plus a pause `Button`.
- **Join form** → `Form` with `Input`, `Input type="email"`, `NativeSelect`, fill `Button`; local validation only and a status line saying nothing was sent.
- **FAQ** → `Accordion` with an `--ink-orange` plus that turns 45°, hairline separators.
- **Closing** → full-bleed `--panel` band, text link in `--ink-blue` with `ArrowRightIcon`.

## Do's and Don'ts

- Do keep the canvas white (or warm near-black) and the hero centered with art on both flanks.
- Do keep one ink primary per view and cream pills for the rest.
- Do use brand hues for eyebrows, checks and illustrations only, through `--ink-*` for text.
- Do label sample data, plans and mockups as fictional.
- Don't add password, recovery phrase, private key or any wallet-secret fields.
- Don't connect a real wallet, call web3 APIs or send form data anywhere.
- Don't reuse the source's name, logo, mascot, copy, people, handles, posts or platform marks.
- Don't put gradients, heavy shadows or dark cards on the light page.
- Don't let any critter carry meaning on its own.

## Motion

Observed: a continuous hero loop and sliding quote rows. Nestling's version uses `transform` and `opacity` only, inside `@media (prefers-reduced-motion: no-preference)`.

- Critters and objects bob 6px over 3.6s `ease-in-out`, with staggered negative delays; gears spin over 14s linear; stars twinkle (scale 0.85→1, opacity 0.7→1).
- Quote rows translate over 48s linear in opposite directions; pause on hover, focus-within or the pause button.
- Buttons scale 1.03 on hover and 0.97 on press, 200ms `cubic-bezier(0.4, 0, 0.6, 1)`; nav hovers fade in 100ms ease.
- Under `reduce`, all animations and transitions (including Aura's `.button` transitions) are off and the quote rows wrap statically.

## Reference

```tsx
<section className="mx-auto grid max-w-79 gap-2 py-7.5 text-center">
  <h1 className="h1 font-display font-medium tracking-[-0.02em] text-gray-12">Your coziest little wallet.</h1>
  <p className="mx-auto max-w-30 font-medium text-gray-11">A fictional demo wallet with friendly steps.</p>
  <div className="flex flex-wrap justify-center gap-1">
    <Button variant="fill" className="h-3.5 px-1.5 font-medium">
      <MobileIcon className="icon" />
      Get the demo app
    </Button>
    <Button variant="pill" className="h-3.5 border-(--soft) bg-(--soft) px-1.5 text-gray-12 hover:bg-(--soft-hover)">
      <PlayIcon className="icon" />
      Watch the tour
    </Button>
  </div>
  <Card className="rounded-[26px] border-0 bg-(--panel) p-2 text-left shadow-none">
    <p className="text-sm font-semibold text-(--ink-green)">Simple</p>
    <h2 className="h2 font-display font-medium">Watch the nests you care about.</h2>
  </Card>
</section>
```
