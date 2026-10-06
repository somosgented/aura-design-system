"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

function Marquee({
  className,
  children,
  label = "Marquee",
}: {
  className?: string;
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <div
      data-slot="marquee"
      aria-label={label}
      tabIndex={0}
      className={cn("overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8", className)}
    >
      <div data-animate="marquee" className="flex w-max gap-2">
        <div className="flex gap-2">{children}</div>
        <div className="flex gap-2" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

export { Marquee };
