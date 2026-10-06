"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

type ScrollSpyItem = { id: string; label: string };

function ScrollSpy({
  className,
  items,
  label = "On this page",
}: {
  className?: string;
  items: ScrollSpyItem[];
  label?: string;
}) {
  const [active, setActive] = React.useState(items[0]?.id);
  const signature = items.map((item) => item.id).join("|");
  React.useEffect(() => {
    const nodes = signature
      .split("|")
      .filter(Boolean)
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [signature]);

  return (
    <nav aria-label={label} data-slot="scroll-spy" className={cn("flex flex-col gap-0.5", className)}>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          aria-current={active === item.id ? "true" : undefined}
          className="rounded-sm px-1 py-0.5 text-gray-11 hover:bg-gray-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8 aria-[current=true]:bg-accent-3 aria-[current=true]:text-accent-11"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export { ScrollSpy };
export type { ScrollSpyItem };
