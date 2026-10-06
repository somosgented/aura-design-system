import { Chip } from "@/components/ui/Chip";

export const ChipDemo = () => {
  return <Chip>Suggest a reply</Chip>;
};

export const ChipDemoFilter = () => {
  return (
    <div className="flex flex-wrap gap-0.5">
      <Chip variant="filter" selected>
        Open
      </Chip>
      <Chip variant="filter">Closed</Chip>
    </div>
  );
};

export const ChipDemoInput = () => {
  return (
    <Chip variant="input" removeLabel="Remove design">
      Design
    </Chip>
  );
};