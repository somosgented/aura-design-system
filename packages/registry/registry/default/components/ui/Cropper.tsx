"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

type Crop = { x: number; y: number; w: number; h: number };

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function Cropper({
  className,
  label = "Crop image",
}: {
  className?: string;
  label?: string;
}) {
  const frame = React.useRef<HTMLDivElement>(null);
  const [crop, setCrop] = React.useState<Crop>({ x: 0.22, y: 0.18, w: 0.46, h: 0.5 });
  const drag = React.useRef<{ mode: "move" | "resize"; x: number; y: number; crop: Crop } | null>(null);

  const apply = (next: Crop) => {
    const w = clamp(next.w, 0.2, 1);
    const h = clamp(next.h, 0.2, 1);
    setCrop({
      w,
      h,
      x: clamp(next.x, 0, 1 - w),
      y: clamp(next.y, 0, 1 - h),
    });
  };

  const start = (mode: "move" | "resize", event: React.PointerEvent) => {
    event.stopPropagation();
    frame.current?.setPointerCapture(event.pointerId);
    drag.current = { mode, x: event.clientX, y: event.clientY, crop };
  };

  return (
    <div className={cn("flex flex-col gap-0.5", className)}>
      <div
        ref={frame}
        data-slot="cropper"
        role="group"
        aria-label={label}
        className="relative h-16 w-full overflow-hidden rounded-sm bg-accent-3"
        onPointerMove={(event) => {
          if (!drag.current || !frame.current) return;
          const rect = frame.current.getBoundingClientRect();
          const dx = (event.clientX - drag.current.x) / rect.width;
          const dy = (event.clientY - drag.current.y) / rect.height;
          const base = drag.current.crop;
          if (drag.current.mode === "move") {
            apply({ ...base, x: base.x + dx, y: base.y + dy });
          } else {
            apply({ ...base, w: base.w + dx, h: base.h + dy });
          }
        }}
        onPointerUp={() => {
          drag.current = null;
        }}
      >
        <svg className="absolute inset-0 size-full" viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <rect width="160" height="90" className="fill-accent-3" />
          <circle cx="124" cy="24" r="10" className="fill-accent-9" />
          <path d="M0 68 36 42 68 60 104 34 160 72V90H0Z" className="fill-accent-9" />
        </svg>
        <div
          role="slider"
          tabIndex={0}
          aria-label="Crop region. Drag to move. Arrow keys move. Shift and arrow keys resize."
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(crop.x * 100)}
          aria-valuetext={`${Math.round(crop.x * 100)}% across, ${Math.round(crop.y * 100)}% down, ${Math.round(crop.w * 100)}% wide`}
          className="absolute cursor-grab border-2 border-gray-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8"
          style={{
            left: `${crop.x * 100}%`,
            top: `${crop.y * 100}%`,
            width: `${crop.w * 100}%`,
            height: `${crop.h * 100}%`,
            boxShadow: "0 0 0 999px var(--gray-a9)",
          }}
          onPointerDown={(event) => start("move", event)}
          onKeyDown={(event) => {
            const step = event.shiftKey ? 0.08 : 0.02;
            const resize = event.shiftKey;
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              apply(resize ? { ...crop, w: crop.w - step } : { ...crop, x: crop.x - step });
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              apply(resize ? { ...crop, w: crop.w + step } : { ...crop, x: crop.x + step });
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              apply(resize ? { ...crop, h: crop.h - step } : { ...crop, y: crop.y - step });
            } else if (event.key === "ArrowDown") {
              event.preventDefault();
              apply(resize ? { ...crop, h: crop.h + step } : { ...crop, y: crop.y + step });
            }
          }}
        >
          <span
            aria-hidden
            className="absolute end-0 bottom-0 size-2 cursor-nwse-resize bg-gray-12"
            onPointerDown={(event) => start("resize", event)}
          />
        </div>
      </div>
      <p className="m-0 text-sm text-gray-11">Drag the frame to move it. Drag the corner to resize.</p>
    </div>
  );
}

export { Cropper };
