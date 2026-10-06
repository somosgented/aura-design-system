import {
  NativeSelect,
  NativeSelectGroup,
  NativeSelectOption,
} from "../registry/default/components/ui/NativeSelect";

export const Default = () => {
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

export const Small = () => {
  return (
    <NativeSelect aria-label="Meal" size="sm" defaultValue="lunch">
      <NativeSelectOption value="breakfast">Breakfast</NativeSelectOption>
      <NativeSelectOption value="lunch">Lunch</NativeSelectOption>
    </NativeSelect>
  );
};
