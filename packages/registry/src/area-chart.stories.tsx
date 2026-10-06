import { AreaChart } from "../registry/default/components/ui/AreaChart";

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

export const Default = () => (
  <div className="flex w-full flex-col gap-2">
    {variants.map((variant) => (
      <AreaChart key={variant} variant={variant} />
    ))}
  </div>
);

export const Natural = () => <AreaChart variant="default" />;

export const Linear = () => <AreaChart variant="linear" />;

export const Step = () => <AreaChart variant="step" />;

export const Stacked = () => <AreaChart variant="stacked" />;

export const Expanded = () => <AreaChart variant="expanded" />;

export const Legend = () => <AreaChart variant="legend" />;

export const Icons = () => <AreaChart variant="icons" />;

export const Gradient = () => <AreaChart variant="gradient" />;

export const Axes = () => <AreaChart variant="axes" />;

export const Interactive = () => <AreaChart variant="interactive" />;
