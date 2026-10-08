import { ColorSwatch } from "@/components/ui/ColorSwatch";

export const ColorSwatchDemo = () => {
  return (
    <div className="flex items-center gap-0.5">
      <ColorSwatch color="#4015ca" label="Indigo" selected />
      <ColorSwatch color="#3D63DD" label="Blue" />
      <ColorSwatch color="#30A46C" label="Green" />
    </div>
  );
};