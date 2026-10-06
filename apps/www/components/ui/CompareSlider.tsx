"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

function CompareSlider({
  className,
  before,
  after,
  label = "Compare",
  defaultValue = 50,
}: {
  className?: string;
  before: React.ReactNode;
  after: React.ReactNode;
  label?: string;
  defaultValue?: number;
}) {
  const [value, setValue] = React.useState(defaultValue);
  return (
    <div data-slot="compare-slider" className={cn("relative h-16 w-full overflow-hidden rounded-sm", className)}>
      <div className="absolute inset-0">{after}</div>
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
        {before}
      </div>
      <div
        aria-hidden
        className="absolute inset-y-0 w-0.5 bg-gray-12"
        style={{ left: `${value}%` }}
      />
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        aria-label={label}
        className="absolute inset-x-1 bottom-1"
        onChange={(event) => setValue(Number(event.target.value))}
      />
    </div>
  );
}

export { CompareSlider };
