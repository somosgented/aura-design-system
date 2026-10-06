"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/utils/class-names";

function Scroller({
  className,
  label = "Scroller",
  children,
}: {
  className?: string;
  label?: string;
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const move = (direction: number) => {
    const root = ref.current;
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.scrollBy({ left: direction * root.clientWidth * 0.8, behavior: reduced ? "auto" : "smooth" });
  };
  return (
    <div data-slot="scroller" className={cn("flex items-center gap-0.5", className)}>
      <button
        type="button"
        aria-label="Scroll back"
        className="inline-flex size-3 items-center justify-center rounded-sm border border-gray-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8"
        onClick={() => move(-1)}
      >
        <ChevronLeftIcon className="icon" />
      </button>
      <div
        ref={ref}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="flex gap-0.5 overflow-x-auto"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") move(1);
          if (event.key === "ArrowLeft") move(-1);
        }}
      >
        {children}
      </div>
      <button
        type="button"
        aria-label="Scroll forward"
        className="inline-flex size-3 items-center justify-center rounded-sm border border-gray-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8"
        onClick={() => move(1)}
      >
        <ChevronRightIcon className="icon" />
      </button>
    </div>
  );
}

export { Scroller };
