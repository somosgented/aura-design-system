import { Chip } from "../registry/default/components/ui/Chip";

export const Default = () => {
  return <Chip>Suggest a reply</Chip>;
};

export const Filter = () => {
  return (
    <div className="flex flex-wrap gap-0.5">
      <Chip variant="filter" selected>
        Open
      </Chip>
      <Chip variant="filter">Closed</Chip>
    </div>
  );
};

export const Input = () => {
  return (
    <Chip variant="input" removeLabel="Remove design">
      Design
    </Chip>
  );
};
