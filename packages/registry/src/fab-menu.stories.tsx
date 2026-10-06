import { ImageIcon, Link2Icon } from "@radix-ui/react-icons";
import {
  FabMenu,
  FabMenuItem,
  FabMenuList,
  FabMenuTrigger,
} from "../registry/default/components/ui/FabMenu";

export const Default = () => {
  return (
    <FabMenu defaultOpen>
      <div className="relative h-24 w-full rounded-sm border border-gray-6 bg-gray-2">
        <FabMenuList position="absolute">
          <FabMenuItem label="Image">
            <ImageIcon className="icon" />
          </FabMenuItem>
          <FabMenuItem label="Link">
            <Link2Icon className="icon" />
          </FabMenuItem>
        </FabMenuList>
        <FabMenuTrigger position="absolute" />
      </div>
    </FabMenu>
  );
};
