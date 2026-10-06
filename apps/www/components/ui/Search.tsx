"use client";

import * as React from "react";
import { cn } from "@/utils/class-names";
import {
  Command,
  CommandCollection,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
} from "@/components/ui/Command";

type SearchItem = {
  value: string;
  label: string;
};

function Search({
  className,
  items,
  placeholder = "Search",
  label = "Search",
  empty = "No results.",
  defaultExpanded = false,
}: {
  className?: string;
  items: SearchItem[];
  placeholder?: string;
  label?: string;
  empty?: string;
  defaultExpanded?: boolean;
}) {
  const [expanded, setExpanded] = React.useState(defaultExpanded);
  return (
    <div
      data-slot="search"
      data-expanded={expanded ? "true" : "false"}
      className={cn("w-full max-w-xl rounded-sm border border-gray-6 bg-gray-1", className)}
    >
      <Command items={[{ value: "Results", items }]} open={expanded} onOpenChange={setExpanded}>
        <CommandInput
          aria-label={label}
          placeholder={placeholder}
          onFocus={() => setExpanded(true)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setExpanded(false);
          }}
        />
        {expanded ? (
          <CommandPanel>
            <CommandEmpty>{empty}</CommandEmpty>
            <CommandList>
              {(group: { value: string; items: SearchItem[] }) => (
                <CommandGroup key={group.value} items={group.items}>
                  <CommandCollection>
                    {(item: SearchItem) => (
                      <CommandItem
                        key={item.value}
                        value={item.value}
                        onClick={() => setExpanded(false)}
                      >
                        {item.label}
                      </CommandItem>
                    )}
                  </CommandCollection>
                </CommandGroup>
              )}
            </CommandList>
          </CommandPanel>
        ) : null}
      </Command>
    </div>
  );
}

export { Search };
export type { SearchItem };
