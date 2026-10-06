import { PlusIcon } from "@radix-ui/react-icons";
import { Fab } from "@/components/ui/Fab";

export const FabDemo = () => {
  return (
    <div className="relative h-16 w-full rounded-sm border border-gray-6 bg-gray-2">
      <Fab position="absolute" aria-label="Create">
        <PlusIcon className="icon" />
      </Fab>
    </div>
  );
};

export const FabDemoExtended = () => {
  return (
    <div className="relative h-16 w-full rounded-sm border border-gray-6 bg-gray-2">
      <Fab position="absolute" label="Create">
        <PlusIcon className="icon" />
      </Fab>
    </div>
  );
};