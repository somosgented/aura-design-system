"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

function Fps({ className, label = "Frames per second" }: { className?: string; label?: string }) {
  const [fps, setFps] = React.useState(0);

  React.useEffect(() => {
    let frames = 0;
    let last = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      frames += 1;
      const elapsed = now - last;
      if (elapsed >= 250) {
        setFps(Math.round((frames * 1000) / elapsed));
        frames = 0;
        last = now;
      }
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <span
      role="meter"
      aria-label={label}
      aria-valuemin={0}
      aria-valuenow={fps}
      data-slot="fps"
      className={cn("inline-flex items-center gap-0.5 rounded-sm border border-gray-6 bg-gray-2 px-1 py-0.5", className)}
    >
      <span aria-hidden className="size-1 rounded-full bg-accent-9" />
      {fps} fps
    </span>
  );
}

export { Fps };
