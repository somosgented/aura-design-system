"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

function Timeline({ className, label = "Timeline", ...props }: React.ComponentProps<"ol"> & { label?: string }) {
  return (
    <ol
      aria-label={label}
      data-slot="timeline"
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  );
}

function TimelineItem({
  className,
  title,
  time,
  children,
}: {
  className?: string;
  title: string;
  time?: string;
  children?: React.ReactNode;
}) {
  return (
    <li data-slot="timeline-item" className={cn("flex gap-1", className)}>
      <span aria-hidden className="mt-0.5 size-1 shrink-0 rounded-full bg-accent-9" />
      <div className="flex flex-col gap-0.5">
        <div className="flex items-baseline gap-0.5">
          <span className="font-medium">{title}</span>
          {time ? <time className="text-gray-11">{time}</time> : null}
        </div>
        {children ? <p className="m-0 text-gray-11">{children}</p> : null}
      </div>
    </li>
  );
}

export { Timeline, TimelineItem };
