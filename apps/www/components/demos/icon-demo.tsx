import { CheckIcon } from "@radix-ui/react-icons";
import { Icon } from "@/components/ui/Icon";
import { createIcon } from "@/utils/create-icon";

const Mark = createIcon(
  "Mark",
  <path d="M7.5 1 9.2 5.2 13.8 5.6 10.3 8.6 11.4 13.1 7.5 10.8 3.6 13.1 4.7 8.6 1.2 5.6 5.8 5.2 7.5 1Z" />,
);


export const IconDemo = () => {
  return (
    <div className="flex items-center gap-1">
      <Icon label="Saved">
        <CheckIcon className="icon" />
      </Icon>
      <Icon size="lg">
        <Mark />
      </Icon>
    </div>
  );
};