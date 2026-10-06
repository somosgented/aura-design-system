"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

function SideSheet({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="side-sheet"
      className={cn("flex h-full min-h-0 min-w-0", className)}
      {...props}
    />
  );
}

function SideSheetMain({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="side-sheet-main"
      className={cn("min-w-0 flex-1", className)}
      {...props}
    />
  );
}

function SideSheetPanel({
  className,
  open = true,
  side = "end",
  label = "Side panel",
  ...props
}: React.ComponentProps<"aside"> & {
  open?: boolean;
  side?: "start" | "end";
  label?: string;
}) {
  return (
    <aside
      aria-label={label}
      data-slot="side-sheet-panel"
      data-state={open ? "open" : "closed"}
      hidden={!open}
      className={cn(
        "flex w-20 shrink-0 flex-col gap-1 bg-gray-1 p-1.5",
        side === "end" ? "order-2 border-s border-gray-6" : "order-1 border-e border-gray-6",
        className,
      )}
      {...props}
    />
  );
}

export { SideSheet, SideSheetMain, SideSheetPanel };
