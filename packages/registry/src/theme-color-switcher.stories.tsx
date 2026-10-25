import { ThemeColorSwitcher } from "../registry/default/components/ThemeColorSwitcher";

export const Default = () => {
  return (
    <div className="flex min-h-24 items-start gap-1">
      <ThemeColorSwitcher />
      <span className="inline-flex size-4 rounded-full bg-accent-9" />
      <span>Open Theme, apply a preset, then switch light and dark.</span>
    </div>
  );
};
