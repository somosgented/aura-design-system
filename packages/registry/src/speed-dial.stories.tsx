import { ImageIcon, Link2Icon } from "@radix-ui/react-icons";
import {
  SpeedDial,
  SpeedDialItem,
  SpeedDialList,
  SpeedDialTrigger,
} from "../registry/default/components/ui/SpeedDial";

export const Default = () => {
  return (
    <SpeedDial defaultOpen>
      <div className="relative h-24 w-full rounded-sm border border-gray-6 bg-gray-2">
        <SpeedDialList position="absolute">
          <SpeedDialItem label="Image">
            <ImageIcon className="icon" />
          </SpeedDialItem>
          <SpeedDialItem label="Link">
            <Link2Icon className="icon" />
          </SpeedDialItem>
        </SpeedDialList>
        <SpeedDialTrigger position="absolute" />
      </div>
    </SpeedDial>
  );
};
