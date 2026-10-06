import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import { SplitButton, SplitButtonAction, SplitButtonMenu } from "../registry/default/components/ui/SplitButton";
import { DropdownMenuItem } from "../registry/default/components/ui/DropdownMenu";

export const Default = () => {
  return (
    <SplitButton>
      <SplitButtonAction>Save</SplitButtonAction>
      <SplitButtonMenu>
        <DropdownMenuItem>
          <Pencil2Icon className="icon" />
          Save as draft
        </DropdownMenuItem>
        <DropdownMenuItem>
          <TrashIcon className="icon" />
          Discard
        </DropdownMenuItem>
      </SplitButtonMenu>
    </SplitButton>
  );
};
