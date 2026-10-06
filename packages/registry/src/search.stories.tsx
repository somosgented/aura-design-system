import { Search } from "../registry/default/components/ui/Search";

const items = [
  { value: "tokens", label: "Color tokens" },
  { value: "type", label: "Typography" },
  { value: "space", label: "Spacing" },
  { value: "motion", label: "Motion" },
];

export const Default = () => {
  return <Search items={items} placeholder="Search foundations" defaultExpanded />;
};
