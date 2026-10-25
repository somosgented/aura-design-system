import { canvasFromGray } from "@/utils/scheme-from-seed";

export type ThemePresetMode = {
  accent: string;
  gray: string;
  background?: string;
};

export type ThemePreset = {
  id: string;
  name: string;
  light: ThemePresetMode;
  dark: ThemePresetMode;
};

export type ResolvedThemeColors = {
  accent: string;
  gray: string;
  background: string;
};

function pairedPreset(
  id: string,
  name: string,
  accent: string,
  gray: string,
): ThemePreset {
  return {
    id,
    name,
    light: { accent, gray },
    dark: { accent, gray },
  };
}

export const presets: ThemePreset[] = [
  pairedPreset("aura", "Aura", "#4015ca", "#7254cb"),
  pairedPreset("iris", "Iris", "#584dff", "#79767a"),
  pairedPreset("ember", "Ember", "#f75000", "#54524e"),
  pairedPreset("cobalt", "Cobalt", "#0040e6", "#858585"),
  pairedPreset("lime", "Lime", "#aeff00", "#71706e"),
  pairedPreset("lagoon", "Lagoon", "#43ceb9", "#8c8c8c"),
  pairedPreset("amber", "Amber", "#c38133", "#b3b3b3"),
  pairedPreset("orchid", "Orchid", "#8d30ad", "#86738c"),
  pairedPreset("signal", "Signal", "#18f260", "#738c7b"),
  pairedPreset("sunbeam", "Sunbeam", "#ffea28", "#757575"),
  pairedPreset("coral", "Coral", "#f84657", "#8c7375"),
];

export function resolvePresetMode(
  mode: ThemePresetMode,
  appearance: "light" | "dark",
): ResolvedThemeColors {
  return {
    accent: mode.accent,
    gray: mode.gray,
    background: mode.background ?? canvasFromGray(mode.gray, appearance),
  };
}

export function resolvePreset(preset: ThemePreset): {
  light: ResolvedThemeColors;
  dark: ResolvedThemeColors;
} {
  return {
    light: resolvePresetMode(preset.light, "light"),
    dark: resolvePresetMode(preset.dark, "dark"),
  };
}
