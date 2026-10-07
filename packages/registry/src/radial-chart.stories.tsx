import { RadialChart } from "../registry/default/components/ui/RadialChart";

const variants = [
  "default",
  "label",
  "grid",
  "text",
  "shape",
  "stacked",
] as const;

export const Default = () => (
  <div className="flex w-full flex-col gap-2">
    {variants.map((variant) => (
      <RadialChart key={variant} variant={variant} />
    ))}
  </div>
);

export const Rings = () => <RadialChart variant="default" />;

export const Label = () => <RadialChart variant="label" />;

export const Grid = () => <RadialChart variant="grid" />;

export const Text = () => <RadialChart variant="text" />;

export const Shape = () => <RadialChart variant="shape" />;

export const Stacked = () => <RadialChart variant="stacked" />;
