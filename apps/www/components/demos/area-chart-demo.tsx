import { AreaChart } from "@/components/ui/AreaChart";

const variants = [
  "default",
  "linear",
  "step",
  "stacked",
  "expanded",
  "legend",
  "icons",
  "gradient",
  "axes",
  "interactive",
] as const;


export const AreaChartDemo = () => (
  <div className="flex w-full flex-col gap-2">
    {variants.map((variant) => (
      <AreaChart key={variant} variant={variant} />
    ))}
  </div>
)

export const AreaChartDemoNatural = () => <AreaChart variant="default" />;

export const AreaChartDemoLinear = () => <AreaChart variant="linear" />;

export const AreaChartDemoStep = () => <AreaChart variant="step" />;

export const AreaChartDemoStacked = () => <AreaChart variant="stacked" />;

export const AreaChartDemoExpanded = () => <AreaChart variant="expanded" />;

export const AreaChartDemoLegend = () => <AreaChart variant="legend" />;

export const AreaChartDemoIcons = () => <AreaChart variant="icons" />;

export const AreaChartDemoGradient = () => <AreaChart variant="gradient" />;

export const AreaChartDemoAxes = () => <AreaChart variant="axes" />;

export const AreaChartDemoInteractive = () => <AreaChart variant="interactive" />;