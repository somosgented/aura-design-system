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
  const reduced = useReduced();
  return (
    <div
      data-slot="marquee"
      aria-label={label}
      className={cn("overflow-hidden", className)}
    >
      <div data-animate={reduced ? undefined : "marquee"} className="flex w-max gap-2">
        <div className="flex gap-2">{children}</div>
        <div className="flex gap-2" aria-hidden>
          {children}
        </div>
      </div>
      <style>{`@keyframes aura-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } } [data-slot="marquee"] [data-animate="marquee"] { animation: aura-marquee 12s linear infinite; } @media (prefers-reduced-motion: reduce) { [data-slot="marquee"] [data-animate="marquee"] { animation: none; } }`}</style>
    </div>
  );
}

function useReduced() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return reduced;
}

export { Marquee };
