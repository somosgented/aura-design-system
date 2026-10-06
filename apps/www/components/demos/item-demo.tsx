import { Button } from "@/components/ui/Button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/Item";
import { FileIcon } from "@radix-ui/react-icons";

export const ItemDemo = () => {
  return (
    <ItemGroup className="w-full">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <FileIcon className="icon" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Care plan</ItemTitle>
          <ItemDescription>Updated this morning</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button type="button" variant="pill" size="sm">
            Open
          </Button>
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Lab results</ItemTitle>
          <ItemDescription>Waiting on review</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  );
};