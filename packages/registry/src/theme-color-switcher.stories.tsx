import { ThemeColorSwitcher } from "../registry/default/components/ThemeColorSwitcher";

export const Default = () => {
  return (
    <div className="flex items-center gap-1">
      <ThemeColorSwitcher />
      <span className="inline-flex size-4 rounded-full bg-accent-9" />
      <span>Seed a full scheme, then switch light and dark.</span>
    </div>
  );
};
