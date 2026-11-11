# Aura Icons

A crisp set of 24×24 Aura glyphs, rendered at icon size. Source SVGs live in `icons/`; React components are generated into `src/`.

Browse the set at [auradesignsystem.com/icons](https://auradesignsystem.com/icons).

## Install

```bash
npm install @aura-design/react-icons
```

```tsx
import { MagnifyingGlassIcon } from "@aura-design/react-icons";

<MagnifyingGlassIcon className="icon" />
```

Size icons with Aura’s `icon` class (`icon`, `icon h4`, `icon h1`). Do not pass `width`, `height`, or `size`.

## Develop

1. Add or edit an SVG in `icons/` (viewBox `0 0 24 24`, `currentColor`, kebab-case filename).
2. Run `pnpm generate-src` from this package.
3. Confirm the icon on `/icons` in `apps/www`.

The first set was extracted from `sprite_glyphs-3.ai` (PDF-compatible Illustrator). Prefer exporting **SVG** from Illustrator when you add icons — cleaner than re-parsing `.ai`.

Product UI still defaults to `@radix-ui/react-icons` until this set is ready to replace it in `DESIGN.md`.

## License

MIT © Somos Gente Digital
