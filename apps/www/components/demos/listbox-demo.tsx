import { Listbox } from "@/components/ui/Listbox";

export const ListboxDemo = () => {
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