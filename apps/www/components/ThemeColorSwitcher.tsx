"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  Cross2Icon,
  DownloadIcon,
  MixerHorizontalIcon,
  UploadIcon,
} from "@radix-ui/react-icons";

import { Button } from "@/components/ui/Button";
import {
  FileUpload,
  FileUploadDropzone,
} from "@/components/ui/FileUpload";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { SideSheet, SideSheetPanel } from "@/components/ui/SideSheet";
import {
  normalizeHex,
  toColorInputValue,
  useAuraThemeColors,
  type ThemeColors,
  type ThemeColorsByMode,
} from "@/hooks/use-aura-theme-colors";
import {
  presets,
  resolvePreset,
  type ThemePreset,
} from "@/components/theme/presets";
import { cn } from "@/utils/class-names";
import { schemeFromSeed, seedFromImage } from "@/utils/scheme-from-seed";

function colorsMatch(current: ThemeColors, next: ThemeColors) {
  return (
    normalizeHex(current.accent) === normalizeHex(next.accent) &&
    normalizeHex(current.gray) === normalizeHex(next.gray) &&
    normalizeHex(current.background) === normalizeHex(next.background)
  );
}

function presetMatches(themeColors: ThemeColorsByMode, preset: ThemePreset) {
  const resolved = resolvePreset(preset);
  return (
    colorsMatch(themeColors.light, resolved.light) &&
    colorsMatch(themeColors.dark, resolved.dark)
  );
}

export function ThemeColorSwitcher() {
  const {
    appearance,
    themeColors,
    currentColors,
    setTheme,
    setColor,
    applyScheme,
    applyPreset,
    resetDefaults,
    downloadCSS,
  } = useAuraThemeColors();
  const presetsLabelId = useId();
  const panelId = useId();
  const seedId = useId();
  const accentId = useId();
  const grayId = useId();
  const backgroundId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [accentInput, setAccentInput] = useState(currentColors.accent);
  const [grayInput, setGrayInput] = useState(currentColors.gray);
  const [backgroundInput, setBackgroundInput] = useState(
    currentColors.background
  );
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setAccentInput(currentColors.accent);
    setGrayInput(currentColors.gray);
    setBackgroundInput(currentColors.background);
  }, [currentColors.accent, currentColors.gray, currentColors.background]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleColorChange = (value: string, field: keyof ThemeColors) => {
    if (field === "accent") setAccentInput(value);
    if (field === "gray") setGrayInput(value);
    if (field === "background") setBackgroundInput(value);
    setColor(field, value);
  };

  const panel = (
    <SideSheet className="fixed inset-y-0 end-0 z-50 h-dvh w-36 max-w-full">
      <SideSheetPanel
        id={panelId}
        open
        side="end"
        label="Theme settings"
        className="h-full w-full overflow-y-auto"
      >
        <div className="flex min-w-0 flex-col gap-1">
          <div className="flex items-start justify-between gap-0.5">
            <div className="flex min-w-0 flex-col gap-0.5">
              <h2 className="text-sm font-semibold text-gray-12">
                Theme settings
              </h2>
              <p className="text-sm text-gray-11">
                Presets store a light pair and a dark pair.
              </p>
            </div>
            <Button
              ref={closeRef}
              type="button"
              variant="pill"
              size="icon"
              aria-label="Close theme settings"
              onClick={() => setOpen(false)}
            >
              <Cross2Icon className="icon" />
            </Button>
          </div>

          <div className="flex items-center justify-between gap-0.5">
            <p className="text-sm text-gray-12">Appearance</p>
            <div
              className="flex rounded-sm bg-gray-3 p-0"
              role="group"
              aria-label="Appearance"
            >
              <button
                type="button"
                aria-pressed={appearance === "light"}
                onClick={() => setTheme("light")}
                className={cn(
                  "cursor-pointer rounded border-none px-0.5 py-0.5 text-xs font-medium",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-8",
                  appearance === "light"
                    ? "bg-gray-1 text-gray-12 shadow-sm"
                    : "bg-transparent text-gray-11"
                )}
              >
                Light
              </button>
              <button
                type="button"
                aria-pressed={appearance === "dark"}
                onClick={() => setTheme("dark")}
                className={cn(
                  "cursor-pointer rounded border-none px-0.5 py-0.5 text-xs font-medium",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-8",
                  appearance === "dark"
                    ? "bg-gray-1 text-gray-12 shadow-sm"
                    : "bg-transparent text-gray-11"
                )}
              >
                Dark
              </button>
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-0.5">
            <p id={presetsLabelId} className="text-sm text-gray-12">
              Presets
            </p>
            <div
              className="grid grid-cols-2 gap-0.5"
              role="group"
              aria-labelledby={presetsLabelId}
            >
              {presets.map((preset) => {
                const resolved = resolvePreset(preset);
                const active = presetMatches(themeColors, preset);
                return (
                  <button
                    key={preset.id}
                    type="button"
                    aria-pressed={active}
                    aria-label={`${preset.name} preset, light and dark`}
                    onClick={() => applyPreset(preset)}
                    className={cn(
                      "flex min-w-0 items-center gap-0.5 rounded border px-0.5 py-0.5 text-start text-sm text-gray-12",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-8",
                      active
                        ? "border-accent-8 bg-accent-3"
                        : "border-gray-6 bg-gray-1"
                    )}
                  >
                    <span
                      className="flex shrink-0 overflow-hidden rounded-sm border border-gray-6"
                      aria-hidden
                    >
                      <span
                        className="flex size-1.5 items-center justify-center"
                        style={{ backgroundColor: resolved.light.background }}
                      >
                        <span
                          className="size-0.5 rounded-full"
                          style={{ backgroundColor: resolved.light.accent }}
                        />
                      </span>
                      <span
                        className="flex size-1.5 items-center justify-center"
                        style={{ backgroundColor: resolved.dark.background }}
                      >
                        <span
                          className="size-0.5 rounded-full"
                          style={{ backgroundColor: resolved.dark.accent }}
                        />
                      </span>
                    </span>
                    <span className="truncate">{preset.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-0.5">
            <Label htmlFor={seedId}>Seed color</Label>
            <div className="flex min-w-0 items-center gap-0.5">
              <input
                id={seedId}
                type="color"
                value={toColorInputValue(currentColors.accent)}
                aria-label="Seed color"
                className="size-4 shrink-0 cursor-pointer border border-gray-6 bg-transparent p-0"
                onChange={(event) =>
                  applyScheme(schemeFromSeed(event.target.value))
                }
              />
              <span className="text-sm text-gray-12">From image</span>
            </div>
            <FileUpload
              accept="image/*"
              maxFiles={1}
              label="From image"
              className="w-full min-w-0"
              value={imageFiles}
              onValueChange={(next) => {
                setImageFiles(next);
                const file = next[0];
                if (!file) return;
                void seedFromImage(file)
                  .then((seed) => applyScheme(schemeFromSeed(seed)))
                  .catch(() => undefined)
                  .finally(() => setImageFiles([]));
              }}
            >
              <FileUploadDropzone className="w-full min-w-0">
                <UploadIcon className="icon" />
                <span className="min-w-0 text-center text-sm text-gray-11">
                  Drop an image or browse
                </span>
              </FileUploadDropzone>
            </FileUpload>
          </div>

          <ColorField
            id={accentId}
            label="Accent Color"
            value={accentInput}
            color={currentColors.accent}
            placeholder="#4015ca"
            onChange={(value) => handleColorChange(value, "accent")}
          />
          <ColorField
            id={grayId}
            label="Gray Color"
            value={grayInput}
            color={currentColors.gray}
            placeholder="#7254cb"
            onChange={(value) => handleColorChange(value, "gray")}
          />
          <ColorField
            id={backgroundId}
            label="Background Color"
            value={backgroundInput}
            color={currentColors.background}
            placeholder="#faf9ff"
            onChange={(value) => handleColorChange(value, "background")}
          />

          <div className="grid grid-cols-2 gap-0.5">
            <Button
              type="button"
              variant="pill"
              className="w-full"
              onClick={resetDefaults}
            >
              Reset Defaults
            </Button>
            <Button
              type="button"
              variant="pill"
              className="w-full"
              onClick={downloadCSS}
            >
              <DownloadIcon className="icon" />
              Download CSS
            </Button>
          </div>
        </div>
      </SideSheetPanel>
    </SideSheet>
  );

  return (
    <>
      <Button
        type="button"
        variant="pill"
        size="sm"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={() => setOpen((value) => !value)}
      >
        <MixerHorizontalIcon className="icon" />
        Theme
      </Button>
      {mounted && open ? createPortal(panel, document.body) : null}
    </>
  );
}

function ColorField({
  id,
  label,
  value,
  color,
  placeholder,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  color: string;
  placeholder: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-0.5">
      <Label htmlFor={id}>{label}</Label>
      <div className="flex min-w-0 items-center gap-0.5">
        <div className="min-w-0 flex-1">
          <Input
            id={id}
            type="text"
            value={value}
            placeholder={placeholder}
            spellCheck={false}
            autoCapitalize="off"
            onChange={(event) => onChange(event.target.value)}
            className="w-full"
          />
        </div>
        <input
          type="color"
          aria-label={label}
          value={toColorInputValue(color, placeholder)}
          onChange={(event) => onChange(event.target.value)}
          className="size-4 shrink-0 cursor-pointer border border-gray-6 bg-transparent p-0"
        />
      </div>
    </div>
  );
}
