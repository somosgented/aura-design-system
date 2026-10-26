"use client";

import { useLayoutEffect, type ReactNode } from "react";
import { useTheme } from "next-themes";

import {
  armThemeColorTransition,
  consumePaintAppearance,
  consumeThemeTransitionRequest,
  readStoredAppearance,
  requestThemeTransition,
  syncDocumentTheme,
  useAuraThemeColors,
} from "@/hooks/use-aura-theme-colors";
import { AURA_THEME_MODE_KEY } from "@/lib/aura-theme-boot";

export function AuraThemeProvider({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();
  const { themeColors } = useAuraThemeColors();

  useLayoutEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem(AURA_THEME_MODE_KEY);
      } catch {
        return;
      }
      if (stored === "light" || stored === "dark") return;
      requestThemeTransition();
      armThemeColorTransition();
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useLayoutEffect(() => {
    const domMode = document.documentElement.classList.contains("dark")
      ? "dark"
      : document.documentElement.classList.contains("light")
        ? "light"
        : undefined;
    const hinted =
      resolvedTheme === "light" || resolvedTheme === "dark"
        ? resolvedTheme
        : (domMode ?? readStoredAppearance() ?? undefined);
    const mode = consumePaintAppearance(hinted);
    if (!mode) return;
    if (consumeThemeTransitionRequest()) armThemeColorTransition();
    syncDocumentTheme(mode, themeColors);
  }, [resolvedTheme, themeColors]);

  return children;
}
