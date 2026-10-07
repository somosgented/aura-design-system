import { BarChart } from "@/components/ui/BarChart";

const variants = [
  "default",
  "horizontal",
  "multiple",
  "stacked",
  "label",
  "custom",
  "mixed",
  "active",
  "negative",
] as const;


export const BarChartDemo = () => (
  <div className="flex w-full flex-col gap-2">
    {variants.map((variant) => (
      <BarChart key={variant} variant={variant} />
    ))}
  </div>
)

export const BarChartDemoVertical = () => <BarChart variant="default" />;

export const BarChartDemoHorizontal = () => <BarChart variant="horizontal" />;

export const BarChartDemoMultiple = () => <BarChart variant="multiple" />;

export const BarChartDemoStacked = () => <BarChart variant="stacked" />;

export const BarChartDemoLabel = () => <BarChart variant="label" />;

export const BarChartDemoCustomLabel = () => <BarChart variant="custom" />;

export const BarChartDemoMixed = () => <BarChart variant="mixed" />;

export const BarChartDemoActive = () => <BarChart variant="active" />;

export const BarChartDemoNegative = () => <BarChart variant="negative" />;