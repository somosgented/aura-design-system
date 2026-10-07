import { RadialChart } from "@/components/ui/RadialChart";

const variants = [
  "default",
  "label",
  "grid",
  "text",
  "shape",
  "stacked",
] as const;


export const RadialChartDemo = () => (
  <div className="flex w-full flex-col gap-2">
    {variants.map((variant) => (
      <RadialChart key={variant} variant={variant} />
    ))}
  </div>
)

export const RadialChartDemoRings = () => <RadialChart variant="default" />;

export const RadialChartDemoLabel = () => <RadialChart variant="label" />;

export const RadialChartDemoGrid = () => <RadialChart variant="grid" />;

export const RadialChartDemoText = () => <RadialChart variant="text" />;

export const RadialChartDemoShape = () => <RadialChart variant="shape" />;

export const RadialChartDemoStacked = () => <RadialChart variant="stacked" />;