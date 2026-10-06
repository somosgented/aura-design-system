import { CheckIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { Icon } from "../registry/default/components/ui/Icon";

export const Default = () => {
  return (
    <div className="flex items-center gap-1">
      <Icon label="Saved">
        <CheckIcon className="icon" />
      </Icon>
      <Icon size="lg" label="Favorite">
        <StarFilledIcon className="icon" />
      </Icon>
    </div>
  );
};
