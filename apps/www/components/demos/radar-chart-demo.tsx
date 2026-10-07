import { RadarChart } from "@/components/ui/RadarChart";

const variants = [
  "default",
  "dots",
  "lines",
  "multiple",
  "legend",
  "circle",
  "filled",
  "icons",
] as const;


export const RadarChartDemo = () => (
  <div className="flex w-full flex-col gap-2">
    {variants.map((variant) => (
      <RadarChart key={variant} variant={variant} />
    ))}
  </div>
)

export const RadarChartDemoDefaultGrid = () => <RadarChart variant="default" />;

export const RadarChartDemoDots = () => <RadarChart variant="dots" />;

export const RadarChartDemoLines = () => <RadarChart variant="lines" />;

export const RadarChartDemoMultiple = () => <RadarChart variant="multiple" />;

export const RadarChartDemoLegend = () => <RadarChart variant="legend" />;

export const RadarChartDemoCircle = () => <RadarChart variant="circle" />;

export const RadarChartDemoFilled = () => <RadarChart variant="filled" />;

export const RadarChartDemoIcons = () => <RadarChart variant="icons" />;