"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

function Masonry({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="masonry"
      className={cn("columns-2 gap-1", className)}
      {...props}
    />
  );
}

function MasonryItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="masonry-item"
      className={cn("mb-1 break-inside-avoid rounded-sm bg-gray-3 p-1", className)}
      {...props}
    />
  );
}

export { Masonry, MasonryItem };
