import { PieChart } from "@/components/ui/PieChart";

const variants = [
  "default",
  "joined",
  "label",
  "legend",
  "donut",
  "active",
  "text",
  "stacked",
] as const;


export const PieChartDemo = () => (
  <div className="flex w-full flex-col gap-2">
    {variants.map((variant) => (
      <PieChart key={variant} variant={variant} />
    ))}
  </div>
)

export const PieChartDemoPie = () => <PieChart variant="default" />;

export const PieChartDemoJoined = () => <PieChart variant="joined" />;

export const PieChartDemoLabel = () => <PieChart variant="label" />;

export const PieChartDemoLegend = () => <PieChart variant="legend" />;

export const PieChartDemoDonut = () => <PieChart variant="donut" />;

export const PieChartDemoActive = () => <PieChart variant="active" />;

export const PieChartDemoText = () => <PieChart variant="text" />;

export const PieChartDemoStacked = () => <PieChart variant="stacked" />;