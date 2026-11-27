"use client";

import { useSyncExternalStore } from "react";
import { Airplay, Moon, Sun } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";
import { useAuraThemeColors } from "@/hooks/use-aura-theme-colors";

export interface ThemeToggleProps {
  className?: string;
  mode?: "light-dark" | "light-dark-system";
}

const lightDarkItems = [
  { value: "light", label: "Light theme", Icon: Sun },
  { value: "dark", label: "Dark theme", Icon: Moon },
] as const;

const fullItems = [
  ...lightDarkItems,
  { value: "system", label: "System theme", Icon: Airplay },
] as const;

const itemClassName =
  "transition-transform duration-250 ease-[cubic-bezier(0.2,0.8,0.4,1)] data-[state=on]:border-accent-11 data-[state=on]:bg-accent-a4 data-[state=on]:text-accent-11 data-[state=on]:hover:bg-accent-a5";

const subscribeToNothing = () => () => {};

function useIsPastHydration() {
  return useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );
}

function readDocumentAppearance(): "light" | "dark" | undefined {
  const { classList } = document.documentElement;
  if (classList.contains("dark")) return "dark";
  if (classList.contains("light")) return "light";
  return undefined;
}

export function ThemeToggle({
  className,
  mode = "light-dark",
}: ThemeToggleProps) {
  const { setTheme, theme, resolvedTheme } = useAuraThemeColors();
  const isPastHydration = useIsPastHydration();

  const items = mode === "light-dark-system" ? fullItems : lightDarkItems;
  const activeValue = !isPastHydration
    ? ""
    : mode === "light-dark-system"
      ? theme ?? ""
      : resolvedTheme ?? readDocumentAppearance() ?? "";

  return (
    <ToggleGroup
      type="single"
      value={activeValue}
      onValueChange={(next) => {
        if (next) {
          setTheme(next);
        }
      }}
      aria-label="Theme"
      data-theme-toggle=""
      className={className}
    >
      {items.map(({ value, label, Icon }) => (
        <ToggleGroupItem
          key={value}
          value={value}
          size="icon"
          aria-label={label}
          className={itemClassName}
        >
          <Icon className="icon" aria-hidden />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
