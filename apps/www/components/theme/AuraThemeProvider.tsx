"use client";

import { useLayoutEffect, type ReactNode } from "react";
import { useTheme } from "next-themes";

import {
  consumePaintAppearance,
  getSnapshot,
  injectThemeColors,
  useAuraThemeColors,
} from "@/hooks/use-aura-theme-colors";

export function AuraThemeProvider({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();
  const { themeColors } = useAuraThemeColors();

  useLayoutEffect(() => {
    const domMode = document.documentElement.classList.contains("dark")
      ? "dark"
      : document.documentElement.classList.contains("light")
        ? "light"
        : undefined;
    const hinted =
      resolvedTheme === "light" || resolvedTheme === "dark"
        ? resolvedTheme
        : domMode;
    const mode = consumePaintAppearance(hinted);
    if (!mode) return;
    injectThemeColors(mode, getSnapshot()[mode]);
  }, [resolvedTheme, themeColors]);

  return children;
}
