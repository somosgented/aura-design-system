import { ColorSwatch } from "../registry/default/components/ui/ColorSwatch";

export const Default = () => {
  return (
    <div className="flex items-center gap-0.5">
      <ColorSwatch color="#964CE1" label="Violet" selected />
      <ColorSwatch color="#3D63DD" label="Blue" />
      <ColorSwatch color="#30A46C" label="Green" />
    </div>
  );
};
