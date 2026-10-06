"use client";
/**
 * @description A native select. The closed control uses the same field chrome as other inputs.
 */
import * as React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { cn } from "@/utils/class-names";
import {
  fieldControlVariants,
  type FieldControlVariantProps,
} from "@/utils/field-control-variants";

type NativeSelectProps = Omit<React.ComponentProps<"select">, "size"> &
  FieldControlVariantProps;

function NativeSelect({
  className,
  children,
  variant = "primary",
  size = "md",
  ...props
}: NativeSelectProps) {
  return (
    <div
      data-slot="native-select-wrapper"
      className="relative w-full min-w-0 has-[select:disabled]:opacity-60"
    >
      <select
        data-slot="native-select"
        className={cn(
          fieldControlVariants({ variant, size }),
          "pe-3",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute inset-y-0 end-1 flex items-center">
        <ChevronDownIcon className="icon" aria-hidden />
      </span>
    </div>
  );
}

NativeSelect.displayName = "NativeSelect";

function NativeSelectGroup(props: React.ComponentProps<"optgroup">) {
  return <optgroup data-slot="native-select-group" {...props} />;
}

function NativeSelectOption(props: React.ComponentProps<"option">) {
  return <option data-slot="native-select-option" {...props} />;
}

export { NativeSelect, NativeSelectGroup, NativeSelectOption };
