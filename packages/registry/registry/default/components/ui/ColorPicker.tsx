"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";
import { ColorSwatch } from "@/components/ui/ColorSwatch";

const presets = ["#964CE1", "#3D63DD", "#30A46C", "#E54D2E", "#F5D90A", "#111111"];

function ColorPicker({
  className,
  value,
  defaultValue = "#964CE1",
  onValueChange,
  label = "Color",
}: {
  className?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  label?: string;
}) {
  const [uncontrolled, setUncontrolled] = React.useState(defaultValue);
  const [text, setText] = React.useState(value ?? defaultValue);
  const current = value ?? uncontrolled;
  const id = React.useId();

  const commit = (next: string) => {
    if (value === undefined) setUncontrolled(next);
    setText(next);
    onValueChange?.(next);
  };

  return (
    <div data-slot="color-picker" className={cn("flex w-fit flex-col gap-0.5", className)}>
      <label htmlFor={id}>{label}</label>
      <div className="flex items-center gap-0.5">
        <input
          type="color"
          aria-label={`${label} picker`}
          value={current}
          className="size-4 shrink-0 cursor-pointer bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8"
          onChange={(event) => commit(event.target.value)}
        />
        <input
          id={id}
          value={text}
          spellCheck={false}
          className="default w-12 rounded-sm border border-gray-7 bg-gray-1 px-1 py-0.5 text-gray-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8"
          onChange={(event) => {
            const next = event.target.value;
            setText(next);
            if (/^#[0-9a-fA-F]{6}$/.test(next)) commit(next);
          }}
        />
      </div>
      <div className="flex items-center gap-0.5" role="group" aria-label="Preset colors">
        {presets.map((preset) => (
          <ColorSwatch
            key={preset}
            color={preset}
            label={preset}
            selected={current.toLowerCase() === preset.toLowerCase()}
            onClick={() => commit(preset)}
          />
        ))}
      </div>
    </div>
  );
}

export { ColorPicker };
