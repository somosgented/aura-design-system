import { Shape } from "../registry/default/components/ui/Shape";

export const Default = () => {
  return (
    <div className="flex flex-wrap items-center gap-1">
      <Shape name="circle" />
      <Shape name="square" />
      <Shape name="diamond" />
      <Shape name="arch" />
      <Shape name="pill" />
    </div>
  );
};

export const Mask = () => {
  return <Shape name="arch" size="lg" role="img" aria-label="Arch mask" />;
};
