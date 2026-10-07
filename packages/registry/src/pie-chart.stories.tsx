import { PieChart } from "../registry/default/components/ui/PieChart";

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

export const Default = () => (
  <div className="flex w-full flex-col gap-2">
    {variants.map((variant) => (
      <PieChart key={variant} variant={variant} />
    ))}
  </div>
);

export const Pie = () => <PieChart variant="default" />;

export const Joined = () => <PieChart variant="joined" />;

export const Label = () => <PieChart variant="label" />;

export const Legend = () => <PieChart variant="legend" />;

export const Donut = () => <PieChart variant="donut" />;

export const Active = () => <PieChart variant="active" />;

export const Text = () => <PieChart variant="text" />;

export const Stacked = () => <PieChart variant="stacked" />;
