"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";
import { Button } from "@/components/ui/Button";

type TourStep = {
  id: string;
  title: string;
  body: string;
};

type TourContextValue = {
  activeId?: string;
};

const TourContext = React.createContext<TourContextValue>({});

function Tour({
  className,
  steps,
  defaultOpen = false,
  children,
  label = "Tour",
}: {
  className?: string;
  steps: TourStep[];
  defaultOpen?: boolean;
  children?: React.ReactNode;
  label?: string;
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [index, setIndex] = React.useState(0);
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const titleId = React.useId();
  const step = steps[index];

  React.useEffect(() => {
    if (!open) return;
    dialogRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "ArrowRight") setIndex((current) => Math.min(steps.length - 1, current + 1));
      if (event.key === "ArrowLeft") setIndex((current) => Math.max(0, current - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, steps.length, index]);

  return (
    <TourContext.Provider value={{ activeId: open ? step?.id : undefined }}>
      <div data-slot="tour" className={cn("flex flex-col gap-1", className)}>
        {children}
        {open && step ? (
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="false"
            aria-label={label}
            aria-labelledby={titleId}
            tabIndex={-1}
            className="flex flex-col gap-0.5 rounded-sm border border-gray-6 bg-gray-1 p-1 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8"
          >
            <p id={titleId} className="m-0 font-medium">
              {step.title}
            </p>
            <p className="m-0 text-gray-11">{step.body}</p>
            <div className="flex items-center gap-0.5">
              <Button
                type="button"
                variant="pill"
                size="sm"
                disabled={index === 0}
                onClick={() => setIndex((current) => Math.max(0, current - 1))}
              >
                Back
              </Button>
              {index < steps.length - 1 ? (
                <Button
                  type="button"
                  size="sm"
                  onClick={() => setIndex((current) => Math.min(steps.length - 1, current + 1))}
                >
                  Next
                </Button>
              ) : (
                <Button type="button" size="sm" onClick={() => setOpen(false)}>
                  Done
                </Button>
              )}
              <span className="text-gray-11">
                {index + 1} / {steps.length}
              </span>
            </div>
          </div>
        ) : (
          <Button
            type="button"
            variant="pill"
            size="sm"
            className="w-fit"
            onClick={() => {
              setIndex(0);
              setOpen(true);
            }}
          >
            Start tour
          </Button>
        )}
      </div>
    </TourContext.Provider>
  );
}

function TourTarget({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const { activeId } = React.useContext(TourContext);
  const active = activeId === id;
  return (
    <div
      id={id}
      data-slot="tour-target"
      className={cn(
        "rounded-sm border border-gray-6 p-1",
        active && "ring-2 ring-accent-8",
        className,
      )}
    >
      {children}
    </div>
  );
}

export { Tour, TourTarget };
export type { TourStep };
