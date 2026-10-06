import { Scroller } from "../registry/default/components/ui/Scroller";

const pages = ["Color", "Type", "Space", "Motion", "Icons", "Layout"];

export const Default = () => (
  <Scroller>
    {pages.map((page) => (
      <div
        key={page}
        className="flex h-8 w-12 shrink-0 items-center justify-center rounded-sm bg-accent-3"
      >
        {page}
      </div>
    ))}
  </Scroller>
);
