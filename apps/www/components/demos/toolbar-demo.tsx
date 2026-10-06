import { FontBoldIcon, FontItalicIcon, UnderlineIcon } from "@radix-ui/react-icons";
import { Toolbar, ToolbarButton, ToolbarSeparator } from "@/components/ui/Toolbar";

export const ToolbarDemo = () => {
  return (
    <Toolbar label="Formatting">
      <ToolbarButton aria-label="Bold">
        <FontBoldIcon className="icon" />
      </ToolbarButton>
      <ToolbarButton aria-label="Italic">
        <FontItalicIcon className="icon" />
      </ToolbarButton>
      <ToolbarSeparator />
      <ToolbarButton aria-label="Underline">
        <UnderlineIcon className="icon" />
      </ToolbarButton>
    </Toolbar>
  );
};