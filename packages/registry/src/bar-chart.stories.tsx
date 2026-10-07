import { BarChart } from "../registry/default/components/ui/BarChart";

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

export const Default = () => (
  <div className="flex w-full flex-col gap-2">
    {variants.map((variant) => (
      <BarChart key={variant} variant={variant} />
    ))}
  </div>
);

export const Vertical = () => <BarChart variant="default" />;

export const Horizontal = () => <BarChart variant="horizontal" />;

export const Multiple = () => <BarChart variant="multiple" />;

export const Stacked = () => <BarChart variant="stacked" />;

export const Label = () => <BarChart variant="label" />;

export const CustomLabel = () => <BarChart variant="custom" />;

export const Mixed = () => <BarChart variant="mixed" />;

export const Active = () => <BarChart variant="active" />;

export const Negative = () => <BarChart variant="negative" />;
