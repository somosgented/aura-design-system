# Motion

Detail in `DESIGN.md`. Animate to clarify cause and effect.

## Contents

- Reduced motion
- CSS, transform, opacity
- Enter, exit, hover

---

## Reduced motion

Honor `prefers-reduced-motion` with a reduced variant. Motion stays interruptible and input-driven. No decorative autoplay.

---

## CSS, transform, opacity

Prefer CSS (`@theme` animation tokens and `@keyframes` in `@layer components`) over the Web Animations API or a JS motion library.

**Incorrect:**

```css
.panel {
  animation: slide 400ms linear infinite;
}
@keyframes slide {
  to {
    top: 20px;
    left: 12px;
    width: 100%;
  }
}
```

**Correct:**

```css
.panel {
  transform-origin: top center;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.6, 1), opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (prefers-reduced-motion: reduce) {
  .panel {
    transition: none;
  }
}
```

Animate `transform` and `opacity` only. The exception is accordion or collapsible height to `var(--radix-*-content-height)`. Set `transform-origin` so motion starts where it physically should.

---

## Enter, exit, hover

Enter and exit content with `opacity` and `transform: scale()`. Overlays use opacity only.

Interactive hover uses `scale(1.03)`. Active uses `scale(0.97)`, with `transition: transform …`.

Use about 250ms. Match easing to the change: tooltips `ease-in-out`, dialogs `cubic-bezier(0.16, 1, 0.3, 1)`, accordion `ease`, buttons `cubic-bezier(0.4, 0, 0.6, 1)`.
