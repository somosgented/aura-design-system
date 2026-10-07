import { RadarChart } from "../registry/default/components/ui/RadarChart";

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

export const Default = () => (
  <div className="flex w-full flex-col gap-2">
    {variants.map((variant) => (
      <RadarChart key={variant} variant={variant} />
    ))}
  </div>
);

export const DefaultGrid = () => <RadarChart variant="default" />;

export const Dots = () => <RadarChart variant="dots" />;

export const Lines = () => <RadarChart variant="lines" />;

export const Multiple = () => <RadarChart variant="multiple" />;

export const Legend = () => <RadarChart variant="legend" />;

export const Circle = () => <RadarChart variant="circle" />;

export const Filled = () => <RadarChart variant="filled" />;

export const Icons = () => <RadarChart variant="icons" />;
