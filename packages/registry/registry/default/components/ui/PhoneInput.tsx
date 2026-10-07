"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";

const callingCodes = [
  { value: "1", label: "United States +1" },
  { value: "34", label: "Spain +34" },
  { value: "44", label: "United Kingdom +44" },
  { value: "52", label: "Mexico +52" },
  { value: "81", label: "Japan +81" },
];

function PhoneInput({
  className,
  code,
  defaultCode = "1",
  onCodeChange,
  label = "Phone",
  ...props
}: Omit<React.ComponentProps<"input">, "type"> & {
  code?: string;
  defaultCode?: string;
  onCodeChange?: (code: string) => void;
  label?: string;
}) {
  const [uncontrolledCode, setUncontrolledCode] = React.useState(defaultCode);
  const currentCode = code ?? uncontrolledCode;
  const id = React.useId();
  return (
    <div data-slot="phone-input" className={cn("flex w-full max-w-xl flex-col gap-0.5", className)}>
      <label htmlFor={id}>{label}</label>
      <div className="flex items-stretch gap-0.5">
        <select
          aria-label="Calling code"
          value={currentCode}
          className="default w-auto shrink-0 rounded-sm border border-gray-7 bg-gray-1 px-1 text-gray-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8"
          onChange={(event) => {
            if (code === undefined) setUncontrolledCode(event.target.value);
            onCodeChange?.(event.target.value);
          }}
        >
          {callingCodes.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <input
          id={id}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          className="default min-w-0 flex-1 rounded-sm border border-gray-7 bg-gray-1 px-1 py-0.5 text-gray-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8"
          {...props}
        />
      </div>
    </div>
  );
}

export { PhoneInput, callingCodes };
