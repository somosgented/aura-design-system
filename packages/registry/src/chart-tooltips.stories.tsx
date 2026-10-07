import { ChartTooltips } from "../registry/default/components/ui/ChartTooltips";

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

export const Default = () => (
  <div className="flex w-full flex-col gap-2">
    {variants.map((variant) => (
      <ChartTooltips key={variant} variant={variant} />
    ))}
  </div>
);

export const Dot = () => <ChartTooltips variant="default" />;

export const Line = () => <ChartTooltips variant="line" />;

export const Dashed = () => <ChartTooltips variant="dashed" />;

export const NoIndicator = () => <ChartTooltips variant="none" />;

export const Label = () => <ChartTooltips variant="label" />;

export const Icons = () => <ChartTooltips variant="icons" />;

export const Formatter = () => <ChartTooltips variant="formatter" />;

export const Multiple = () => <ChartTooltips variant="multiple" />;
