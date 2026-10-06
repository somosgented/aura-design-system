import { Listbox } from "../registry/default/components/ui/Listbox";

export const Default = () => {
  return (
    <Listbox
      defaultValue="type"
      items={[
        { value: "color", label: "Color" },
        { value: "type", label: "Typography" },
        { value: "space", label: "Spacing" },
      ]}
    />
  );
};
