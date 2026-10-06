"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

function CircularProgress({
  className,
  value = 0,
  max = 100,
  label = "Progress",
  ...props
}: React.ComponentProps<"div"> & {
  value?: number;
  max?: number;
  label?: string;
}) {
  const safeMax = max > 0 ? max : 100;
  const ratio = Math.min(1, Math.max(0, value / safeMax));
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-valuenow={Math.round(value)}
      data-slot="circular-progress"
      className={cn("relative inline-flex size-4 items-center justify-center", className)}
      {...props}
    >
      <svg viewBox="0 0 40 40" className="size-4 -rotate-90" aria-hidden="true">
        <circle cx="20" cy="20" r={radius} fill="none" strokeWidth="3" className="stroke-gray-4" />
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          className="stroke-accent-9"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - ratio)}
        />
      </svg>
      <span className="absolute text-xs text-gray-12">{Math.round(ratio * 100)}</span>
    </div>
  );
}

export { CircularProgress };
