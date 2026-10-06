import { Swap } from "../registry/default/components/ui/Swap";

export const Default = () => (
  <Swap>
    <div className="flex h-8 items-center rounded-sm bg-accent-3 px-1">Color scale</div>
    <div className="flex h-8 items-center rounded-sm bg-gray-3 px-1">Type scale</div>
  </Swap>
);
