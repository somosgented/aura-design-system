import { ChartTooltips } from "@/components/ui/ChartTooltips";

const variants = [
  "default",
  "line",
  "dashed",
  "none",
  "label",
  "icons",
  "formatter",
  "multiple",
] as const;


export const ChartTooltipsDemo = () => (
  <div className="flex w-full flex-col gap-2">
    {variants.map((variant) => (
      <ChartTooltips key={variant} variant={variant} />
    ))}
  </div>
)

export const ChartTooltipsDemoDot = () => <ChartTooltips variant="default" />;

export const ChartTooltipsDemoLine = () => <ChartTooltips variant="line" />;

export const ChartTooltipsDemoDashed = () => <ChartTooltips variant="dashed" />;

export const ChartTooltipsDemoNoIndicator = () => <ChartTooltips variant="none" />;

export const ChartTooltipsDemoLabel = () => <ChartTooltips variant="label" />;

export const ChartTooltipsDemoIcons = () => <ChartTooltips variant="icons" />;

export const ChartTooltipsDemoFormatter = () => <ChartTooltips variant="formatter" />;

export const ChartTooltipsDemoMultiple = () => <ChartTooltips variant="multiple" />;