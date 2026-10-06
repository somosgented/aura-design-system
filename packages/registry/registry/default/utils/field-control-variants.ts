import { cva, type VariantProps } from "class-variance-authority";

/**
 * Closed-field chrome shared by native controls.
 * `default` opts out of the legacy select height so the 48px tap target applies.
 * Focus uses the accent step reserved for focus rings.
 */
const fieldControlVariants = cva("", {
  variants: {
    variant: {
      primary:
        "default w-full appearance-none rounded-md border border-gray-7 bg-gray-3 p text-gray-12 shadow-none transition placeholder:text-gray-11 hover:border-gray-8 hover:bg-gray-4 focus-visible:border-accent-8 focus-visible:bg-gray-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8/25 disabled:cursor-not-allowed disabled:opacity-60",
      shell:
        "naked h-auto min-h-0 w-full border-0 bg-transparent p-0 p text-gray-12 shadow-none placeholder:font-normal placeholder:text-gray-11 focus-visible:outline-none focus-visible:ring-0",
      chip:
        "default h-auto min-h-0 w-auto cursor-pointer rounded-sm border border-gray-7 bg-gray-3 px-1 py-0.5 p text-gray-12 hover:bg-gray-4 focus-visible:border-accent-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8/25",
    },
    size: {
      md: "",
      sm: "",
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      size: "md",
      // eslint-disable-next-line shadcn/no-arbitrary-values -- 48px tap target is required and is not a 13px step
      className: "h-[48px] min-h-[48px] px-1.5 py-1",
    },
    {
      variant: "primary",
      size: "sm",
      // eslint-disable-next-line shadcn/no-arbitrary-values -- 48px tap target and 44px compact height are required and are not 13px steps
      className: "h-[48px] min-h-[48px] px-1 py-0.5 sm:h-[44px] sm:min-h-[44px] sm:px-1.5 sm:py-1",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type FieldControlVariantProps = VariantProps<typeof fieldControlVariants>;

export { fieldControlVariants };
export type { FieldControlVariantProps };
