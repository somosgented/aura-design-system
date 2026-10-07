import { LineChart } from "../registry/default/components/ui/LineChart";

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

export const Default = () => (
  <div className="flex w-full flex-col gap-2">
    {variants.map((variant) => (
      <LineChart key={variant} variant={variant} />
    ))}
  </div>
);

export const Natural = () => <LineChart variant="default" />;

export const Linear = () => <LineChart variant="linear" />;

export const Step = () => <LineChart variant="step" />;

export const Multiple = () => <LineChart variant="multiple" />;

export const Dots = () => <LineChart variant="dots" />;

export const CustomDots = () => <LineChart variant="custom" />;

export const Label = () => <LineChart variant="label" />;

export const Interactive = () => <LineChart variant="interactive" />;
