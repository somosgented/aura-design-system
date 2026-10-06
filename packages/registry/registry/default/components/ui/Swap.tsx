"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";
import { Button } from "@/components/ui/Button";

function Swap({
  className,
  children,
  label = "Swap",
}: {
  className?: string;
  children: React.ReactNode;
  label?: string;
}) {
  const items = React.Children.toArray(children);
  const [index, setIndex] = React.useState(0);
  const current = items.length ? index % items.length : 0;

  return (
    <div data-slot="swap" className={cn("flex flex-col items-start gap-0.5", className)}>
      <div className="relative min-h-8 w-full">
        {items.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className={cn(
              "transition duration-300 motion-reduce:transition-none",
              itemIndex === current ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0",
            )}
            aria-hidden={itemIndex === current ? undefined : true}
          >
            {item}
          </div>
        ))}
      </div>
      <Button
        type="button"
        variant="pill"
        size="sm"
        aria-label={label}
        onClick={() => setIndex((value) => (items.length ? (value + 1) % items.length : 0))}
      >
        {label}
      </Button>
    </div>
  );
}

export { Swap };
