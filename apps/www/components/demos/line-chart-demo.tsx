import { LineChart } from "@/components/ui/LineChart";

const variants = [
  "default",
  "linear",
  "step",
  "multiple",
  "dots",
  "custom",
  "label",
  "interactive",
] as const;


export const LineChartDemo = () => (
  <div className="flex w-full flex-col gap-2">
    {variants.map((variant) => (
      <LineChart key={variant} variant={variant} />
    ))}
  </div>
)

export const LineChartDemoNatural = () => <LineChart variant="default" />;

export const LineChartDemoLinear = () => <LineChart variant="linear" />;

export const LineChartDemoStep = () => <LineChart variant="step" />;

export const LineChartDemoMultiple = () => <LineChart variant="multiple" />;

export const LineChartDemoDots = () => <LineChart variant="dots" />;

export const LineChartDemoCustomDots = () => <LineChart variant="custom" />;

export const LineChartDemoLabel = () => <LineChart variant="label" />;

export const LineChartDemoInteractive = () => <LineChart variant="interactive" />;