import {
  NativeSelect,
  NativeSelectGroup,
  NativeSelectOption,
} from "@/components/ui/NativeSelect";

export const NativeSelectDemo = () => {
  return (
    <NativeSelect aria-label="Meal" defaultValue="breakfast">
      <NativeSelectGroup label="Day">
        <NativeSelectOption value="breakfast">Breakfast</NativeSelectOption>
        <NativeSelectOption value="lunch">Lunch</NativeSelectOption>
        <NativeSelectOption value="dinner">Dinner</NativeSelectOption>
      </NativeSelectGroup>
    </NativeSelect>
  );
};