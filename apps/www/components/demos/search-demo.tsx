import { Search } from "@/components/ui/Search";

const items = [
  { value: "tokens", label: "Color tokens" },
  { value: "type", label: "Typography" },
  { value: "space", label: "Spacing" },
  { value: "motion", label: "Motion" },
];


export const SearchDemo = () => {
  return <Search items={items} placeholder="Search foundations" defaultExpanded />;
};