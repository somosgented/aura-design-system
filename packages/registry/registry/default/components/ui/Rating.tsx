"use client";

import * as React from "react";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { cn } from "@/utils/class-names";

function Rating({
  className,
  value,
  defaultValue = 0,
  max = 5,
  onValueChange,
  label = "Rating",
  readOnly = false,
}: {
  className?: string;
  value?: number;
  defaultValue?: number;
  max?: number;
  onValueChange?: (value: number) => void;
  label?: string;
  readOnly?: boolean;
}) {
  const [uncontrolled, setUncontrolled] = React.useState(defaultValue);
  const current = value ?? uncontrolled;
  const set = (next: number) => {
    if (readOnly) return;
    if (value === undefined) setUncontrolled(next);
    onValueChange?.(next);
  };

  return (
    <div
      role="radiogroup"
      aria-label={label}
      data-slot="rating"
      className={cn("inline-flex items-center gap-0.5", className)}
      onKeyDown={(event) => {
        if (readOnly) return;
        if (event.key === "ArrowRight" || event.key === "ArrowUp") {
          event.preventDefault();
          set(Math.min(max, current + 1 || 1));
        } else if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
          event.preventDefault();
          set(Math.max(1, current - 1));
        }
      }}
    >
      {Array.from({ length: max }, (_, index) => {
        const score = index + 1;
        const filled = score <= current;
        const Icon = filled ? StarFilledIcon : StarIcon;
        return (
          <button
            key={score}
            type="button"
            role="radio"
            aria-checked={current === score}
            aria-label={`${score} of ${max}`}
            disabled={readOnly}
            className="inline-flex size-3 items-center justify-center rounded-sm text-accent-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8"
            onClick={() => set(score)}
          >
            <Icon className="icon" />
          </button>
        );
      })}
    </div>
  );
}

export { Rating };
