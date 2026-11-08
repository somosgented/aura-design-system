---
version: "alpha"
name: "Verdantline"
description: "A clean, open developer platform home with crisp green accents, monospaced code blocks, versatile tab navigation, repository cards and subdued gray prose. An Aura flavor for code hosts, API docs and developer portals, observed November 2026."
extends: "../../DESIGN.md"
colors:
  primary: "#1f2328"
  on-primary: "#ffffff"
  surface: "#ffffff"
  surface-container: "#f6f8fa"
  surface-muted: "#eaeef2"
  on-surface: "#1f2328"
  on-surface-variant: "#57606a"
  muted: "#8b949e"
  outline: "#d1d9e0"
  brand-green-light: "#08872b"
  brand-green-dark: "#3fb950"
  brand-blue: "#0969da"
  brand-orange: "#d4700a"
  brand-red: "#cf222e"
  brand-purple: "#8250df"
typography:
  headline-display:
    fontFamily: "IBM Plex Sans"
    fontSize: 72px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.03em
  headline-section:
    fontFamily: "IBM Plex Sans"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.02em
  headline-card:
    fontFamily: "IBM Plex Sans"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.01em
  body-md:
    fontFamily: "IBM Plex Sans"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0em
  body-sm:
    fontFamily: "IBM Plex Sans"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-md:
    fontFamily: "IBM Plex Sans"
    fontSize: 14px
    fontWeight: 500
    letterSpacing: 0em
  code:
    fontFamily: "IBM Plex Mono"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  unit: 13px
  section: 104px
  max-width: 1248px
aura:
  theme:
    light:
      accent: "#08872b"
      gray: "#57606a"
      background: "#ffffff"
    dark:
      accent: "#3fb950"
      gray: "#8b949e"
      background: "#0d1117"
  fonts:
    sans: "IBM Plex Sans"
    display: "IBM Plex Sans"
    label: "IBM Plex Sans"
    mono: "IBM Plex Mono"
    href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
  hero: "paper"
  headingWeight: 600
  radius:
    button: "6px"
    input: "6px"
    surface: "12px"
  tokens:
    light:
      band: "#f6f8fa"
      band-alt: "#eaeef2"
      card-bg: "#ffffff"
      card-border: "#d1d9e0"
      code-bg: "#f6f8fa"
      code-inline-bg: "#eff1f3"
      code-border: "#d1d9e0"
      tab-bg: "#f6f8fa"
      tab-hover: "#eaeef2"
      tab-active: "#ffffff"
      tab-border: "#d1d9e0"
      counter-bg: "#eaeef2"
      counter-text: "#57606a"
      green: "#08872b"
      green-pale: "#dafbe1"
      blue: "#0969da"
      blue-pale: "#ddf4ff"
      orange: "#d4700a"
      orange-pale: "#fff8c5"
      red: "#cf222e"
      red-pale: "#ffebe9"
      purple: "#8250df"
      purple-pale: "#fbefff"
      ui-sidebar: "#f6f8fa"
      ui-row-hover: "#f3f4f6"
      ui-accent-green: "#1a7f37"
      ui-accent-blue: "#0969da"
      ui-accent-red: "#cf222e"
      ui-accent-orange: "#d4700a"
    dark:
      band: "#161b22"
      band-alt: "#1c2128"
      card-bg: "#0d1117"
      card-border: "#30363d"
      code-bg: "#161b22"
      code-inline-bg: "#1c2128"
      code-border: "#30363d"
      tab-bg: "#161b22"
      tab-hover: "#1c2128"
      tab-active: "#0d1117"
      tab-border: "#30363d"
      counter-bg: "#1c2128"
      counter-text: "#8b949e"
      green: "#3fb950"
      green-pale: "#0f3c1a"
      blue: "#58a6ff"
      blue-pale: "#0c2d6b"
      orange: "#f0883e"
      orange-pale: "#3d2817"
      red: "#f85149"
      red-pale: "#4c1f1f"
      purple: "#a371f7"
      purple-pale: "#2e1f47"
      ui-sidebar: "#161b22"
      ui-row-hover: "#1c2128"
      ui-accent-green: "#3fb950"
      ui-accent-blue: "#58a6ff"
      ui-accent-red: "#f85149"
      ui-accent-orange: "#f0883e"
---

# Verdantline

> A clean, open developer platform home with crisp green accents, monospaced code blocks, versatile tab navigation, repository cards and subdued gray prose. Built on Aura.

Source flavor: https://github.com/ (observed 2026-11-08). This file adapts its visual language to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius, shape, motion and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility). Verdantline is a fictional developer platform demo; no name, logo, wordmark, mascot, copy, testimonial, person, blog post or platform mark of the source is reused, and every product vignette is an original drawing.

| Kind | What |
| --- | --- |
| Observed (measured) | IBM Plex Sans body (16px/1.6); IBM Plex Mono for code (14px/1.6); display headings 72px weight 600 with tracking `-0.03em`, section heads 40px/1.2 weight 600; green accent `#08872b` (light) / `#3fb950` (dark); soft rounded corners 6px buttons, 12px cards; tab navigation with underline; repository cards with language dot, star count, description; subtle gray bands `#f6f8fa`, `#eaeef2`; code blocks with background `#f6f8fa`, inline code `#eff1f3`; content max-width about 1248px; section padding about 100–110px; counters with rounded background; timeline component; sticky header |
| Adapted by Verdantline | All type set in IBM Plex Sans and IBM Plex Mono (source uses system fonts and SFMono); every spacing value rounded to the 13px grid; original repository cards with fictional projects; original brand hue set (green, blue, orange, red, purple) for labels and status indicators; all copy; the shared Aura skeleton placed into the source's visual rhythm |
| Not legible | Exact animation keyframes for tab transitions, hover states on navigation dropdowns, any authenticated repository flows, octicon vector paths |

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values. After those blocks, set `--aura-text-primary-inverse: var(--accent-contrast)` in `:root` (required, see **Upstream limitation**).
3. If the app uses `next/font`, load `IBM Plex Sans` (400, 500, 600) and `IBM Plex Mono` (400, 500) there instead of the `@import`, and point `--font-sans`, `--font-display` and `--font-label` at the IBM Plex Sans variable, and `--font-mono` at the IBM Plex Mono variable.
4. Restyle with Aura components and token classes only, following **Components** below. No new hex literals in components.
5. Keep the product's content. Do not import Verdantline's sample copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list.

> **Gray contrast:** Verdantline uses a neutral gray scale with cooler undertones. In light mode, `--gray-9` (`#57606a`) provides the subdued muted text role; in dark mode `--gray-9` becomes `#8b949e`. Inline code and metadata use this step. Body text uses `--gray-12` for full contrast.

## Overview

Verdantline is a crisp, functional page with a developer-first aesthetic. The hero is paper: a bold centered headline (one or two lines), a muted subline explaining the platform's purpose, and two rounded buttons (green primary, soft gray secondary). Below, content alternates between white and soft gray bands. Repository cards dominate—white rectangles with rounded corners, 1px gray borders, a language color dot, star count badge, and three-line description. Tab navigation sits above many sections, using underlined active state. Code blocks appear frequently, with light gray backgrounds and monospaced type. Section headlines are left-aligned, bold, and spacious. Small rounded counters (pale gray background) show metrics. Color is restrained: green for primary actions and success states, blue for links, orange for warnings, red for errors, purple for special labels—all appearing sparingly. The page feels open, organized, and technically competent.

## Colors

The accent is **green**: the source's primary action is a green button, so `accent-9` fills primary buttons, success badges, and verified indicators. Brand hues are custom tokens for status, labels, and language dots only. Exact steps come from `theme.css`.

| Role | Light | Dark | Use |
| --- | --- | --- | --- |
| Canvas | `--gray-1` | `--gray-1` (near-black `#0d1117`) | Page |
| Green button | `--accent-9`, hover `--accent-10`, label `--accent-contrast` | same steps (brighter green, dark label) | Primary buttons, success |
| Soft button | `--gray-3`, hover `--gray-4` | `--gray-3`, hover `--gray-4` | Secondary buttons, tab inactive |
| Band | `--band` | `--band` | Alternating section backgrounds |
| Card | `--card-bg`, 1px `--card-border` | `--card-bg`, 1px `--card-border` | Repository cards, feature boxes |
| Code block | `--code-bg`, 1px `--code-border` | `--code-bg`, 1px `--code-border` | Pre blocks |
| Inline code | `--code-inline-bg` | `--code-inline-bg` | Code spans |
| Tab border | `--tab-border` bottom 1px, active 2px `--accent-9` | same | Tab underline |
| Hairline | `--gray-5` | `--gray-6` | Dividers, list separators |
| Field border | `--gray-7` | `--gray-7` | Inputs, select |
| Headline / body | `--gray-12` / `--gray-12` | same steps | Text |
| Muted text | `--gray-9` | `--gray-9` | Descriptions, metadata, inline code text |
| Counter | `--counter-bg`, `--counter-text` | `--counter-bg`, `--counter-text` | Star counts, metrics |
| Language dots | `--green`, `--blue`, `--orange`, `--red`, `--purple` | brighter variants | Repository language indicators |
| Badge tints | `--green-pale`, `--blue-pale`, `--orange-pale`, `--red-pale`, `--purple-pale` with matching hue text | darker variants | Status labels, tags |

- Focus ring: `--aura-outline: var(--accent-9) solid 2px` with 2px offset.
- Links in prose use `--blue` (not accent green) to match source convention.
- Mobile nav: the menu toggle sits before the list in the DOM; Escape closes and returns focus; open menu is `--gray-1` surface with 1px top border.

> **Upstream limitation, `--gray-contrast: undefined`:** the shared generator writes `--gray-contrast: undefined` and Aura `main.css`/`globals.css` map `--aura-text-primary-inverse` to it, so `.button-fill` labels fall back to inherited text, which may lack contrast on a green fill. Setting `--aura-text-primary-inverse: var(--accent-contrast)` in `:root` is **required** for this flavor. The generator is not fixed by this flavor and generated files are never patched by hand.

### Dark mode

Reinterpret, do not invert, through semantic variables in one `.dark` block.

| Variable | Light | Dark |
| --- | --- | --- |
| `--band` | `#f6f8fa` | `#161b22` |
| `--card-bg` | `#ffffff` | `#0d1117` |
| `--card-border` | `#d1d9e0` | `#30363d` |
| `--code-bg` | `#f6f8fa` | `#161b22` |
| `--code-inline-bg` | `#eff1f3` | `#1c2128` |
| `--tab-active` | `#ffffff` | `#0d1117` |
| Accent | `#08872b` | `#3fb950` |
| Gray muted | `#57606a` | `#8b949e` |
| Blue link | `#0969da` | `#58a6ff` |

In dark mode, card borders remain visible at 1px `--card-border` (`#30363d`). Code blocks gain slightly lighter background than canvas to maintain hierarchy. Language dots shift to brighter, more saturated variants.

## Typography

- Display: IBM Plex Sans 600 throughout; no secondary display face.
- Mono: IBM Plex Mono 400 for all code.
- Hero `h1`: `--min: 2rem; --val: 6vw; --max: 4.5rem` (72px at desktop), line-height 1.1, `-0.03em`.
- Section `h2`: `--min: 1.5rem; --val: 3.5vw; --max: 2.5rem` (40px), line-height 1.2, `-0.02em`.
- Card titles `h3`: `--max: 1.25rem` (20px), weight 600, line-height 1.3, `-0.01em`.
- Body: IBM Plex Sans 400 16px/1.6; card descriptions 14px `text-sm`; nav links 14px 500.
- Labels: IBM Plex Sans 500 14px. Eyebrows: IBM Plex Sans 500 12px uppercase `tracking-wide` in `--gray-9`.
- Code blocks: IBM Plex Mono 400 14px/1.6 in `--code-bg`.
- Inline code: IBM Plex Mono 400 14px in `--code-inline-bg`, color `--gray-9`.
- Counters use `font-variant-numeric: tabular-nums`.

## Layout

| Source px | Aura step | px | Use |
| --- | --- | --- | --- |
| 1248 content | `max-w-96` | 1248 | Main wrap |
| 1024 narrow | `max-w-78.5` | 1020.5 | Text sections |
| 100–110 section | `py-8` | 104 | Section rhythm |
| 52 large gap | `gap-4` | 52 | Repository card grids |
| 32 medium gap | `gap-2.5` | 32.5 | Feature grids |
| 16 small gap | `gap-1` | 13 | Card internal spacing |
| 12 tight gap | `gap-1` | 13 | Tab items |
| 8 counter gap | `gap-0.5` | 6.5 | Icon + text in counters |

Verdantline uses a narrow column for prose (78.5 steps, about 1020px) but full width (96 steps, 1248px) for repository grids and feature cards. Section padding is 8 steps (104px vertical), creating a measured, spacious rhythm. Tab navigation sits in a `border-b` container with `--tab-border`; active tab gets `border-b-2 border-[--accent-9]` and `bg-[--tab-active]`. Repository cards are `rounded-md` (12px) with 1px `--card-border`, padding 1.5 steps (19.5px). Language dots are 8px circles, positioned inline before the language name.

## Elevation & Depth

Verdantline avoids shadows in favor of borders. Cards use 1px `--card-border` on all sides. Hover states lighten the card background slightly (`--ui-row-hover`). Sticky headers gain a 1px bottom border when scrolled. Dropdowns use 1px border and sit on `--gray-1` (light) or `--band` (dark). No drop shadows appear anywhere in the flavor.

## Shapes

- Buttons: 6px radius, height 2 steps (26px small), 2.5 steps (32.5px medium), 3 steps (39px large). Padding 1–2 steps horizontal.
- Cards: 12px radius (`rounded-lg`), 1px border, 1.5-step internal padding.
- Code blocks: 6px radius, 1px border.
- Inline code: 3px radius.
- Tabs: no border radius; only bottom border changes.
- Counters: 12px full radius (`rounded-full`), 4px vertical padding, 6px horizontal padding.
- Language dots: 8px circles (`rounded-full`).
- Inputs: 6px radius, 1px border.
- Badges: 12px radius, 2px vertical padding, 6px horizontal padding.

Consistency: all interactive elements use 6px base radius except counters and dots (full). Cards and surfaces use 12px. Avoid mixing radii within a component.

## Components

### Core Elements

| Element | Aura Token Class | Overrides |
|---------|------------------|-----------|
| Hero CTA Button | `Button variant="fill"` | `bg-[--accent-9] text-[--accent-contrast] rounded-sm` |
| Nav Signup Button | `Button variant="fill"` | `bg-[--accent-9] text-[--accent-contrast] rounded-sm` |
| Secondary Button | `Button variant="outline"` | `border-[--accent-7] text-[--accent-11] rounded-sm` |
| Section Container | `Container` | `max-w-7xl px-[--space-4] py-[--space-8]` |
| Heading (Hero) | `Text as="h1"` | `text-[--font-size-9] font-[--font-weight-bold] text-[--gray-12]` |
| Heading (Section) | `Text as="h2"` | `text-[--font-size-7] font-[--font-weight-bold] text-[--gray-12]` |
| Body Text | `Text` | `text-[--font-size-3] text-[--gray-11]` |
| Feature Card | `Card` | `bg-[--gray-1] border-[--gray-6] rounded-sm` |
| Input Field | `TextField.Root` | `bg-[--gray-2] border-[--gray-7] rounded-sm` |
| Nav Container | `Flex` | `justify-between items-center px-[--space-5] py-[--space-3]` |

## Reference

```tsx
import { Button, Container, Flex, Text } from '@radix-ui/themes';

export function HeroSection() {
  return (
    <Container size="4" className="py-[--space-9]">
      <Flex direction="column" align="center" gap="6" className="text-center">
        <Text 
          as="h1" 
          className="text-[--font-size-9] font-[--font-weight-bold] text-[--gray-12] leading-tight max-w-4xl"
        >
          Grow Your Business with Sustainable Technology
        </Text>
        
        <Text 
          className="text-[--font-size-4] text-[--gray-11] max-w-2xl leading-relaxed"
        >
          Verdantline helps forward-thinking companies build scalable infrastructure 
          while reducing their environmental impact. Join over 2,000 teams already 
          making a difference.
        </Text>

        <Flex gap="3" className="mt-[--space-2]">
          <Button 
            size="3" 
            variant="fill"
            className="bg-[--accent-9] text-[--accent-contrast] rounded-sm px-[--space-5]"
          >
            Start Free Trial
          </Button>
          
          <Button 
            size="3" 
            variant="outline"
            className="border-[--accent-7] text-[--accent-11] rounded-sm px-[--space-5]"
          >
            Watch Demo
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
}
```## Do's and Don'ts

**Do:**
- Use IBM Plex Sans for all UI text and IBM Plex Mono for all code.
- Apply 6px radius to buttons and inputs, 12px to cards.
- Use `--accent-9` (green) for primary actions only; `--blue` for links in prose.
- Show language dots as 8px circles in brand colors (`--green`, `--blue`, `--orange`, `--red`, `--purple`).
- Give repository cards 1px `--card-border`, 12px radius, 1.5-step padding.
- Use tab navigation with 2px bottom border (`--accent-9`) for active state.
- Apply `--gray-9` for muted text (descriptions, metadata, inline code).
- Use tabular numerals (`font-variant-numeric: tabular-nums`) for counters and stats.
- Alternate section backgrounds between `--gray-1` (white) and `--band` (soft gray).
- Place focus ring at 2px `--accent-9` solid with 2px offset.
- Use 1px borders (`--card-border`, `--gray-5`, `--gray-7`) for all elevation; no shadows.
- Ensure mobile nav toggle appears before list in DOM and closes on Escape.
- Check at 360px, in dark mode, and with `prefers-reduced-motion: reduce`.
- Override `--aura-text-primary-inverse: var(--accent-contrast)` in `:root` for button labels.

**Don't:**
- Don't use drop shadows anywhere in the flavor; rely on borders only.
- Don't mix system fonts; load IBM Plex Sans and IBM Plex Mono only.
- Don't apply green accent to hyperlinks in prose; use `--blue`.
- Don't use border radius other than 6px (buttons/inputs), 12px (cards), or full (counters/dots).
- Don't create new color tokens; use only the defined brand hues for labels and language dots.
- Don't make language dots larger than 8px or smaller than 6px.
- Don't place repository card descriptions longer than three lines without truncation.
- Don't use IBM Plex Mono for UI labels or body text; mono is for code only.
- Don't forget to set `line-height: 1.1` and `letter-spacing: -0.03em` on hero headlines.
- Don't invert colors for dark mode; reinterpret through semantic variables.
- Don't use box-shadow for focus; use 2px solid outline with 2px offset.
- Don't animate if `prefers-reduced-motion: reduce`.
- Don't import Verdantline's sample copy (fictional repositories, blog posts, testimonials) into an unrelated product.
- Don't patch generated CSS files by hand; override in component styles or additional blocks only.

## Motion

Verdantline uses restrained, functional motion. All transitions respect `prefers-reduced-motion: reduce`.

| Interaction | Duration | Easing | Property |
| --- | --- | --- | --- |
| Button hover | 150ms | ease | `background-color` |
| Card hover | 200ms | ease | `background-color` |
| Tab switch | 200ms | ease | `border-color`, `background-color` |
| Link hover | 100ms | ease | `color` |
| Accordion open | 250ms | ease-out | `height`, `opacity` |
| Input focus | 150ms | ease | `border-color`, `outline` |
| Marquee scroll | 12s | linear | `transform` (infinite) |
| Dropdown open | 200ms | ease-out | `opacity`, `transform` (translateY 4px) |
| Mobile nav | 250ms | ease-out | `transform` (translateY from -100%) |

No bounce, elastic or spring easings. Hover states lighten backgrounds by one step (`--gray-3` → `--gray-4`). Focus rings appear instantly (no transition). Skeleton loaders (if used) pulse between `--gray-3` and `--gray-4` at 1.5s ease-in-out infinite. Parallax, 3D transforms and scroll-driven animations are out of scope.

**Reduced motion:** in `prefers-reduced-motion: reduce`, disable marquee animation, set all transition durations to 0ms, and snap accordion/dropdown states instantly. Focus rings and hover color changes remain (they are not motion).
