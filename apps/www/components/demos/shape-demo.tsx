import { Shape } from "@/components/ui/Shape";

export const ShapeDemo = () => {
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

export const ShapeDemoMask = () => {
  return <Shape name="arch" size="lg" role="img" aria-label="Arch mask" />;
};