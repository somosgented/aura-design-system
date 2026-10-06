"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

const shapePaths = {
  circle: "circle(50% at 50% 50%)",
  square: "inset(0% round 12%)",
  diamond: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
  arch: "polygon(0% 100%, 0% 42%, 18% 14%, 50% 0%, 82% 14%, 100% 42%, 100% 100%)",
  pill: "inset(18% 0% round 999px)",
} as const;

type ShapeName = keyof typeof shapePaths;

function Shape({
  className,
  name = "circle",
  size = "default",
  ...props
}: React.ComponentProps<"div"> & {
  name?: ShapeName;
  size?: "sm" | "default" | "lg";
}) {
  return (
    <div
      data-slot="shape"
      data-shape={name}
      data-size={size}
      style={{ clipPath: shapePaths[name] }}
      className={cn(
        "bg-accent-9 transition duration-300 ease-in-out motion-reduce:transition-none",
        size === "sm" && "size-3",
        size === "default" && "size-8",
        size === "lg" && "size-12",
        className,
      )}
      {...props}
    />
  );
}

function ShapeMorph({
  names = ["circle", "diamond", "arch", "pill", "square"],
  interval = 900,
}: {
  names?: ShapeName[];
  interval?: number;
}) {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (query.matches) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % names.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [interval, names.length]);

  return <Shape name={names[index]} size="sm" />;
}

export { Shape, ShapeMorph, shapePaths };
export type { ShapeName };
