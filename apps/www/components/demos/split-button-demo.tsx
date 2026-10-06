import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";
import { SplitButton, SplitButtonAction, SplitButtonMenu } from "@/components/ui/SplitButton";
import { DropdownMenuItem } from "@/components/ui/DropdownMenu";

export const SplitButtonDemo = () => {
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