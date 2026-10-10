"use client";

import { useEffect, useId, useState } from "react";
import { DownloadIcon, MixerHorizontalIcon, UploadIcon } from "@radix-ui/react-icons";

import { presets } from "@/components/theme/presets";
import { Button } from "@/components/ui/Button";
import {
  FileUpload,
  FileUploadDropzone,
} from "@/components/ui/FileUpload";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover";
import {
  normalizeHex,
  toColorInputValue,
  useAuraThemeColors,
  type ThemeColors,
} from "@/hooks/use-aura-theme-colors";
import { cn } from "@/utils/class-names";
import { schemeFromSeed, seedFromImage } from "@/utils/scheme-from-seed";

function colorsMatch(
  current: ThemeColors,
  preset: { accent: string; gray: string; background: string }
) {
  return (
    normalizeHex(current.accent) === normalizeHex(preset.accent) &&
    normalizeHex(current.gray) === normalizeHex(preset.gray) &&
    normalizeHex(current.background) === normalizeHex(preset.background)
  );
}

export function ThemeColorSwitcher() {
  const {
    appearance,
    currentColors,
    setTheme,
    setColor,
    applyScheme,
    applyPreset,
    resetDefaults,
    downloadCSS,
  } = useAuraThemeColors();
  const presetsLabelId = useId();
  const seedId = useId();
  const accentId = useId();
  const grayId = useId();
  const backgroundId = useId();

  const [accentInput, setAccentInput] = useState(currentColors.accent);
  const [grayInput, setGrayInput] = useState(currentColors.gray);
  const [backgroundInput, setBackgroundInput] = useState(
    currentColors.background
  );
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  useEffect(() => {
    setAccentInput(currentColors.accent);
    setGrayInput(currentColors.gray);
    setBackgroundInput(currentColors.background);
  }, [currentColors.accent, currentColors.gray, currentColors.background]);

  const handleColorChange = (value: string, field: keyof ThemeColors) => {
    if (field === "accent") setAccentInput(value);
    if (field === "gray") setGrayInput(value);
    if (field === "background") setBackgroundInput(value);
    setColor(field, value);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          aria-label="Customize colors"
          type="button"
          size="icon"
          variant="pill"
        >
          <MixerHorizontalIcon className="icon" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-24 max-w-full overflow-x-hidden overflow-y-auto"
        align="end"
      >
        <div className="flex max-h-48 min-w-0 flex-col gap-1 overflow-y-auto p-1">
          <div className="flex items-center justify-between gap-0.5">
            <p className="text-sm font-semibold text-gray-12">Theme Settings</p>
            <div className="flex rounded-sm bg-gray-3 p-0">
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={cn(
                  "cursor-pointer rounded border-none px-0.5 py-0.5 text-xs font-medium",
                  appearance === "light"
                    ? "bg-gray-1 text-gray-12 shadow-sm"
                    : "bg-transparent text-gray-11"
                )}
              >
                Light
              </button>
              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={cn(
                  "cursor-pointer rounded border-none px-0.5 py-0.5 text-xs font-medium",
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
                const active = colorsMatch(currentColors, preset);
                return (
                  <button
                    key={preset.id}
                    type="button"
                    aria-pressed={active}
                    aria-label={`${preset.name} color preset`}
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
                        className="size-1.5"
                        style={{ backgroundColor: preset.accent }}
                      />
                      <span
                        className="size-1.5"
                        style={{ backgroundColor: preset.gray }}
                      />
                      <span
                        className="size-1.5"
                        style={{ backgroundColor: preset.background }}
                      />
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
            placeholder="#100b21"
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
      </PopoverContent>
    </Popover>
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
