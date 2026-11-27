"use client";

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

export function ThemeToggle({
  className,
  mode = "light-dark",
}: ThemeToggleProps) {
  const { setTheme, theme, resolvedTheme, mounted } = useAuraThemeColors();

  const items = mode === "light-dark-system" ? fullItems : lightDarkItems;
  const activeValue = mounted
    ? (mode === "light-dark-system" ? theme : resolvedTheme) ?? ""
    : "";

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
        >
          <Icon className="icon" aria-hidden />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
