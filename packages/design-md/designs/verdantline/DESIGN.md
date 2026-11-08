---
version: "alpha"
name: "Verdantline"
description: "A clean, open developer platform home with crisp green accents, monospaced code blocks, email signup, and subdued gray prose. An Aura flavor for code hosts, API docs and developer portals, observed November 2026."
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
      ui-row-hover: "#f3f4f6"
    dark:
      band: "#161b22"
      band-alt: "#1c2128"
      card-bg: "#0d1117"
      card-border: "#30363d"
      code-bg: "#161b22"
      code-inline-bg: "#1c2128"
      code-border: "#30363d"
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
      ui-row-hover: "#1c2128"
---

# Verdantline

> A clean, open developer platform home with crisp green accents, monospaced code blocks, email signup, and subdued gray prose. Built on Aura.

Source flavor: https://github.com/ (observed 2026-11-08). This file adapts its visual language to Aura. It is a **theme over Aura**, not a separate system: it changes color seeds, type, radius, shape, motion and voice. Everything it does not mention follows the base Aura spec at `extends`, resolved against this file's URL (13px grid, accent/gray step roles, Radix icons, forms, accessibility). Verdantline is a fictional developer platform demo; no name, logo, wordmark, mascot, copy, testimonial, person, blog post or platform mark of the source is reused, and every product vignette is an original drawing.

## Asset Licenses

| Asset | License | Source |
| --- | --- | --- |
| IBM Plex Sans | OFL 1.1 | https://github.com/IBM/plex |
| IBM Plex Mono | OFL 1.1 | https://github.com/IBM/plex |
| Radix Icons | MIT | https://icons.radix-ui.com/ |

## Observed CSS Snapshot

| Kind | What |
| --- | --- |
| Observed (measured) | IBM Plex Sans body (16px/1.6); IBM Plex Mono for code (14px/1.6); display headings 72px weight 600 with tracking `-0.03em`, section heads 40px/1.2 weight 600; green accent light / dark; soft rounded corners 6px buttons, 12px cards; subtle gray bands, code blocks with background, inline code; content max-width about 1248px; section padding about 100–110px; email signup input with adjacent green CTA; primary CTA labeled "Sign up for GitHub" (adapted as "Sign up" in Verdantline) |
| Adapted by Verdantline | All type set in IBM Plex Sans and IBM Plex Mono (source uses system fonts and SFMono); every spacing value rounded to the 13px grid; original brand hue set (green, blue, orange, red, purple) for labels and status indicators; all copy; the shared Aura skeleton placed into the source's visual rhythm |
| Not legible | Exact animation keyframes for hover states, any authenticated flows |

**Dark mode note:** The reference was captured in `prefers-color-scheme: dark` only; no independent logged-out dark reference was observed (the page appeared light-themed in the screenshot). Dark mode values in this spec are designed adaptations based on typical developer platform patterns and semantic variable naming, not measured from a dark-mode reference screenshot.

## Apply to an Aura project

An agent that receives this file's link inside an Aura project does this, in order:

1. Save this file as `DESIGN.theme.md` at the project root. Keep the root `DESIGN.md` (Aura base). Where the two disagree, this file wins on color, type, radius, shape, motion and voice; the base wins on grid, accessibility, icons and forms.
2. Fetch the sibling `theme.css` (same URL, `DESIGN.md` → `theme.css`). Paste its `@import`, `@theme inline` block, `:root` block, dark media block and `.dark` block **after** the existing ones in the project's `globals.css`. Do not hand-edit the generated values. After those blocks, set `--aura-text-primary-inverse: var(--accent-contrast)` in `:root` (required, see **Upstream limitation**).
3. If the app uses `next/font`, load `IBM Plex Sans` (400, 500, 600) and `IBM Plex Mono` (400, 500) there instead of the `@import`, and point `--font-sans`, `--font-display` and `--font-label` at the IBM Plex Sans variable, and `--font-mono` at the IBM Plex Mono variable.
4. Restyle with Aura components and token classes only, following **Components** below. No new literals in components.
5. Keep the product's content. Do not import Verdantline's sample copy into an unrelated product.
6. Verify at 360px, in dark mode and with `prefers-reduced-motion: reduce`, then check the Don't list and see signature-checklist.md for signature-work guidelines.

> **Gray contrast:** Verdantline uses a neutral gray scale with cooler undertones. In light mode, `--gray-9` provides the subdued muted text role; in dark mode `--gray-9` becomes a lighter value. Inline code and metadata use this step. Body text uses `--gray-12` for full contrast.

## Overview

Verdantline is a crisp, functional page with a developer-first aesthetic. The hero is paper: a bold centered headline (one or two lines), a muted subline explaining the platform's purpose, an email input field with placeholder text (observed: "you@domain.com"), and a green "Sign up" button adjacent to the input. Below, content alternates between white and soft gray bands. Code blocks appear frequently, with light gray backgrounds and monospaced type. Section headlines are left-aligned, bold, and spacious. Color is restrained: green for primary actions and success states, blue for links, orange for warnings, red for errors, purple for special labels—all appearing sparingly. The page feels open, organized, and technically competent.

## Colors

The accent is **green**: the source's primary action is a green button, so `accent-9` fills primary buttons, success badges, and verified indicators. Brand hues are custom tokens for status and labels only. Exact steps come from `theme.css`.

| Role | Light | Dark | Use |
| --- | --- | --- | --- |
| Canvas | `--gray-1` | `--gray-1` (near-black) | Page |
| Green button | `--accent-9`, hover `--accent-10`, label `--accent-contrast` | same steps (brighter green, dark label) | Primary buttons, success |
| Soft button | `--gray-3`, hover `--gray-4` | `--gray-3`, hover `--gray-4` | Secondary buttons |
| Band | `--band` | `--band` | Alternating section backgrounds |
| Card | `--card-bg`, 1px `--card-border` | `--card-bg`, 1px `--card-border` | Feature boxes |
| Code block | `--code-bg`, 1px `--code-border` | `--code-bg`, 1px `--code-border` | Pre blocks |
| Inline code | `--code-inline-bg` | `--code-inline-bg` | Code spans |
| Hairline | `--gray-5` | `--gray-6` | Dividers, list separators |
| Field border | `--gray-7` | `--gray-7` | Inputs, select |
| Headline / body | `--gray-12` / `--gray-12` | same steps | Text |
| Muted text | `--gray-9` | `--gray-9` | Descriptions, metadata, inline code text |
| Badge tints | `--green-pale`, `--blue-pale`, `--orange-pale`, `--red-pale`, `--purple-pale` with matching hue text | darker variants | Status labels, tags |

- Focus ring: `--aura-outline: var(--accent-9) solid 2px` with 2px offset.
- Links in prose use `--blue` (not accent green) to match source convention.
- Mobile nav: the menu toggle sits before the list in the DOM; Escape closes and returns focus; open menu is `--gray-1` surface with 1px top border.

> **Upstream limitation, `--gray-contrast: undefined`:** the shared generator writes `--gray-contrast: undefined` and Aura `main.css`/`globals.css` map `--aura-text-primary-inverse` to it, so `.button-fill` labels fall back to inherited text, which may lack contrast on a green fill. Setting `--aura-text-primary-inverse: var(--accent-contrast)` in `:root` is **required** for this flavor. The generator is not fixed by this flavor and generated files are never patched by hand.

### Dark mode

Reinterpret, do not invert, through semantic variables in one `.dark` block.

| Variable | Light | Dark |
| --- | --- | --- |
| `--band` | light gray | darker gray |
| `--card-bg` | white | near-black |
| `--card-border` | light border | darker border |
| `--code-bg` | light gray | darker gray |
| `--code-inline-bg` | lighter gray | dark gray |
| Accent | green dark | green bright |
| Gray muted | mid-gray | lighter gray |
| Blue link | blue dark | blue bright |

In dark mode, card borders remain visible at 1px `--card-border`. Code blocks gain slightly lighter background than canvas to maintain hierarchy.

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

## Layout

| Source px | Aura step | px | Use |
| --- | --- | --- | --- |
| 1248 content | `max-w-96` | 1248 | Main wrap |
| 1024 narrow | `max-w-78.5` | 1020.5 | Text sections |
| 100–110 section | `py-8` | 104 | Section rhythm |
| 32 medium gap | `gap-2.5` | 32.5 | Feature grids |
| 16 small gap | `gap-1` | 13 | Card internal spacing |
| 8 inline cluster gap | `gap-0.5` | 6.5 | Icon + text in marquee |

Verdantline uses a narrow column for prose (78.5 steps, about 1020px) but full width (96 steps, 1248px) for feature cards. Section padding is 8 steps (104px vertical), creating a measured, spacious rhythm.

## Elevation & Depth

Verdantline avoids shadows in favor of borders. Cards use 1px `--card-border` on all sides. Hover states lighten the card background slightly (`--ui-row-hover`). Sticky headers gain a 1px bottom border when scrolled. Dropdowns use 1px border and sit on `--gray-1` (light) or `--band` (dark). No drop shadows appear anywhere in the flavor.

## Shapes

- Buttons: 6px radius, height 2 steps (26px small), 2.5 steps (32.5px medium), 3 steps (39px large). Padding 1–2 steps horizontal.
- Cards: 12px radius (`rounded-lg`), 1px border, 1.5-step internal padding.
- Code blocks: 6px radius, 1px border.
- Inline code: 3px radius.
- Inputs: 6px radius, 1px border.
- Badges: 12px radius, 2px vertical padding, 6px horizontal padding.

Consistency: interactive controls use 6px base radius; cards and surfaces use 12px. Avoid mixing radii within a component.

## Components

All components below use Aura primitives and semantic tokens only. No literals beyond format strings.

### Hero (Paper)

Centered on `--gray-1`, max-width 78.5 steps (prose column). Headline `h1.h1`, muted `p.lead`. Email input + CTA wrapper is `.hero-email` with 1px `--gray-7` border, 6px radius. Input placeholder must meet 4.5:1 vs `--aura-input-bg` in both themes (changed to `--gray-11` in light, `--gray-10` in dark to meet CA-14). On keyboard focus, `.hero-email:focus-within` shows 2px `--accent-9` outline at 2px offset. Input itself has no border (border:0). Adjacent green CTA uses `.btn-hero-primary`. Mobile (<600px) stacks vertically, input gains border and full width.

### Nav search

Same focus treatment as hero email but on the input directly: 2px `--accent-9` box-shadow on focus.

---

*All references to "counters" on product pages removed per patch instructions.*
