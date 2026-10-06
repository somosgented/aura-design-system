"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

function Stack({ className, children, ...props }: React.ComponentProps<"div">) {
  const items = React.Children.toArray(children);
  return (
    <div data-slot="stack" className={cn("relative h-16 w-16", className)} {...props}>
      {items.map((child, index) => (
        <div
          key={index}
          className="absolute inset-0 rounded-sm border border-gray-6 bg-gray-1 p-1 shadow-sm"
          style={{ transform: `translate(${index * 8}px, ${index * 8}px)` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

export { Stack };
