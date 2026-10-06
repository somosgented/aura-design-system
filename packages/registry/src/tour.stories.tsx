import { Tour, TourTarget } from "../registry/default/components/ui/Tour";

export const Default = () => (
  <Tour
    defaultOpen
    steps={[
      { id: "tour-color", title: "Color", body: "Accent steps carry the brand." },
      { id: "tour-type", title: "Type", body: "Headings use the fluid scale." },
    ]}
  >
    <div className="flex gap-1">
      <TourTarget id="tour-color">Color</TourTarget>
      <TourTarget id="tour-type">Type</TourTarget>
    </div>
  </Tour>
);
