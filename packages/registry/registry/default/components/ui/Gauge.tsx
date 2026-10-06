"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

function Gauge({
  className,
  value = 0,
  min = 0,
  max = 100,
  label = "Gauge",
}: {
  className?: string;
  value?: number;
  min?: number;
  max?: number;
  label?: string;
}) {
  const span = max - min || 1;
  const ratio = Math.min(1, Math.max(0, (value - min) / span));
  const angle = -180 + ratio * 180;
  return (
    <div
      role="meter"
      aria-label={label}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      data-slot="gauge"
      className={cn("inline-flex w-16 flex-col items-center", className)}
    >
      <svg viewBox="0 0 100 58" className="w-full" aria-hidden="true">
        <path d="M8 52 A42 42 0 0 1 92 52" fill="none" strokeWidth="8" className="stroke-gray-4" />
        <path
          d="M8 52 A42 42 0 0 1 92 52"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          className="stroke-accent-9"
          pathLength={100}
          strokeDasharray={`${ratio * 100} 100`}
        />
        <line
          x1="50"
          y1="52"
          x2="50"
          y2="22"
          className="stroke-gray-12"
          strokeWidth="2"
          transform={`rotate(${angle} 50 52)`}
        />
      </svg>
      <span>{value}</span>
    </div>
  );
}

export { Gauge };
