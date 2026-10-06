"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";
import { Button } from "@/components/ui/Button";

function useReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return reduced;
}

function ExpressiveCarousel({
  className,
  label = "Carousel",
  children,
  ...props
}: React.ComponentProps<"div"> & { label?: string }) {
  const scroller = React.useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const layout = React.useCallback(() => {
    const root = scroller.current;
    if (!root) return;
    const center = root.scrollLeft + root.clientWidth / 2;
    const items = root.querySelectorAll<HTMLElement>(
      "[data-slot='expressive-carousel-item']",
    );
    items.forEach((item) => {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(center - itemCenter);
      const scale = reduced
        ? 1
        : Math.max(0.84, 1 - distance / (root.clientWidth * 1.4));
      item.style.transform = `scale(${scale})`;
    });
  }, [reduced]);

  React.useEffect(() => {
    layout();
  }, [layout, children]);

  const scrollByDir = (direction: number) => {
    const root = scroller.current;
    if (!root) return;
    root.scrollBy({
      left: direction * root.clientWidth * 0.6,
      behavior: reduced ? "auto" : "smooth",
    });
  };

  return (
    <div data-slot="expressive-carousel-frame" className="flex flex-col gap-0.5">
      <div className="flex items-center justify-end gap-0.5">
        <Button type="button" variant="pill" size="sm" onClick={() => scrollByDir(-1)}>
          Previous
        </Button>
        <Button type="button" size="sm" onClick={() => scrollByDir(1)}>
          Next
        </Button>
      </div>
    <div
      ref={scroller}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      data-slot="expressive-carousel"
      className={cn(
        "flex snap-x snap-mandatory gap-1 overflow-x-auto py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8",
        className,
      )}
      {...props}
      onScroll={(event) => {
        props.onScroll?.(event);
        layout();
      }}
      onKeyDown={(event) => {
        props.onKeyDown?.(event);
        if (event.defaultPrevented) return;
        const root = scroller.current;
        if (!root) return;
        const delta = root.clientWidth * 0.6;
        if (event.key === "ArrowRight") {
          event.preventDefault();
          root.scrollBy({ left: delta, behavior: reduced ? "auto" : "smooth" });
        } else if (event.key === "ArrowLeft") {
          event.preventDefault();
          root.scrollBy({ left: -delta, behavior: reduced ? "auto" : "smooth" });
        }
      }}
    >
      {children}
    </div>
    </div>
  );
}

function ExpressiveCarouselItem({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="expressive-carousel-item"
      className={cn(
        "w-16 shrink-0 snap-center origin-center transition-transform motion-reduce:transition-none",
        className,
      )}
      {...props}
    />
  );
}

export { ExpressiveCarousel, ExpressiveCarouselItem };
