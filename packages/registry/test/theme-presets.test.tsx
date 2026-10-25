import { renderHook, act } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { beforeAll, describe, expect, it } from "vitest";

import {
  DEFAULT_THEME_COLORS,
  useAuraThemeColors,
} from "@/hooks/use-aura-theme-colors";
import { presets, resolvePreset } from "@/theme/presets";
import { canvasFromGray } from "@/utils/scheme-from-seed";

function themeWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => undefined,
      removeListener: () => undefined,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      dispatchEvent: () => false,
    }),
  });
});

describe("theme presets", () => {
  it("derives the same canvases as aura colors", () => {
    expect(canvasFromGray("#8c7375", "light")).toBe("#fcf9f9");
    expect(canvasFromGray("#8c7375", "dark")).toBe("#141011");
    expect(canvasFromGray("#7254cb", "light")).toBe("#faf9ff");
    expect(canvasFromGray("#7254cb", "dark")).toBe("#120e20");
  });

  it("gives every preset a light and a dark pair with the same brand seeds", () => {
    expect(presets.map((preset) => preset.id)).toEqual([
      "aura",
      "iris",
      "ember",
      "cobalt",
      "lime",
      "lagoon",
      "amber",
      "orchid",
      "signal",
      "sunbeam",
      "coral",
    ]);

    for (const preset of presets) {
      expect(preset.light.accent).toBe(preset.dark.accent);
      expect(preset.light.gray).toBe(preset.dark.gray);
      const resolved = resolvePreset(preset);
      expect(resolved.light.accent).toBe(preset.light.accent);
      expect(resolved.dark.accent).toBe(preset.dark.accent);
      expect(resolved.light.background).not.toBe(resolved.dark.background);
      expect(resolved.light.background).toBe(
        canvasFromGray(preset.light.gray, "light"),
      );
      expect(resolved.dark.background).toBe(
        canvasFromGray(preset.dark.gray, "dark"),
      );
    }
  });

  it("keeps a deeper accent on the bright presets aura colors accepts", () => {
    const accent = Object.fromEntries(
      presets.map((preset) => [preset.id, preset.light.accent]),
    );
    expect(accent.lime).toBe("#699b09");
    expect(accent.lagoon).toBe("#159e8d");
    expect(accent.signal).toBe("#04a53e");
    expect(accent.sunbeam).toBe("#9f9107");
  });

  it("aligns Coral and the Aura default with derived canvases", () => {
    const coral = presets.find((preset) => preset.id === "coral");
    expect(coral?.light).toEqual({ accent: "#f84657", gray: "#8c7375" });
    expect(coral?.dark).toEqual({ accent: "#f84657", gray: "#8c7375" });
    expect(resolvePreset(coral!).light.background).toBe("#fcf9f9");
    expect(resolvePreset(coral!).dark.background).toBe("#141011");
    expect(DEFAULT_THEME_COLORS).toEqual({
      light: {
        accent: "#4015ca",
        gray: "#7254cb",
        background: "#faf9ff",
      },
      dark: {
        accent: "#4015ca",
        gray: "#7254cb",
        background: "#120e20",
      },
    });
  });

  it("writes both modes and leaves the active appearance in place", () => {
    localStorage.clear();
    const coral = presets.find((preset) => preset.id === "coral");
    const { result } = renderHook(() => useAuraThemeColors(), {
      wrapper: themeWrapper,
    });

    act(() => {
      result.current.applyPreset(coral!);
    });

    expect(result.current.appearance).toBe("light");
    expect(result.current.themeColors.light).toEqual(
      resolvePreset(coral!).light,
    );
    expect(result.current.themeColors.dark).toEqual(
      resolvePreset(coral!).dark,
    );

    const saved = JSON.parse(
      localStorage.getItem("aura-theme-colors") ?? "{}",
    ) as {
      light: { background: string };
      dark: { background: string };
    };
    expect(saved.light.background).toBe("#fcf9f9");
    expect(saved.dark.background).toBe("#141011");
  });

  it("derives the active canvas from gray and leaves the other mode alone", () => {
    const { result } = renderHook(() => useAuraThemeColors(), {
      wrapper: themeWrapper,
    });
    const darkBefore = result.current.themeColors.dark;

    act(() => {
      result.current.setColor("background", "#ffffff");
      result.current.setColor("gray", "#86738c");
    });

    const derived = canvasFromGray("#86738c", "light");
    expect(result.current.appearance).toBe("light");
    expect(result.current.themeColors.light.gray).toBe("#86738c");
    expect(result.current.themeColors.light.background).toBe(derived);
    expect(derived).not.toBe("#ffffff");
    expect(result.current.themeColors.dark).toEqual(darkBefore);

    act(() => {
      result.current.setColor("accent", "#159e8d");
      result.current.setColor("gray", "nope");
    });

    expect(result.current.themeColors.light.accent).toBe("#159e8d");
    expect(result.current.themeColors.light.gray).toBe("#86738c");
    expect(result.current.themeColors.light.background).toBe(derived);
    expect(result.current.themeColors.dark).toEqual(darkBefore);
  });
});
