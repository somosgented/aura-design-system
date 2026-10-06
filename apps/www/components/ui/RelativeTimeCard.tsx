"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

function relativeLabel(date: Date, now = new Date()) {
  const minutes = Math.round((date.getTime() - now.getTime()) / 60000);
  const abs = Math.abs(minutes);
  const formatter = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" });
  if (abs < 60) return formatter.format(minutes, "minute");
  const hours = Math.round(minutes / 60);
  if (Math.abs(hours) < 24) return formatter.format(hours, "hour");
  return formatter.format(Math.round(hours / 24), "day");
}

function RelativeTimeCard({
  className,
  date,
  label = "Time",
}: {
  className?: string;
  date: Date;
  label?: string;
}) {
  const time = date.getTime();
  const iso = new Date(time).toISOString();
  const [relative, setRelative] = React.useState(iso);
  const [absolute, setAbsolute] = React.useState(iso);

  React.useEffect(() => {
    const value = new Date(time);
    setRelative(relativeLabel(value));
    setAbsolute(value.toLocaleString());
  }, [time]);

  return (
    <span data-slot="relative-time-card" className={cn("inline-flex flex-col gap-0.5", className)}>
      <time dateTime={iso} aria-label={label}>
        {relative}
      </time>
      <span className="rounded-sm border border-gray-6 bg-gray-2 px-1 py-0.5 text-gray-11">{absolute}</span>
    </span>
  );
}

export { RelativeTimeCard };
