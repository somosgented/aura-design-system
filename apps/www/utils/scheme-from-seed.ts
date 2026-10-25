import Color from "colorjs.io";

type ThemeTriple = {
  accent: string;
  gray: string;
  background: string;
};

const LIGHT_CANVAS = { l: 0.985, cMax: 0.015, cScale: 0.08 } as const;
const DARK_CANVAS = { l: 0.18, cMax: 0.04, cScale: 0.2 } as const;

function hex(color: Color) {
  return color.to("srgb").toString({ format: "hex" }).toLowerCase();
}

function finiteOrZero(value: number) {
  return Number.isFinite(value) ? value : 0;
}

function canvasFromGray(gray: string, appearance: "light" | "dark") {
  const parsed = gray.startsWith("#") ? gray : `#${gray}`;
  const grayColor = new Color(parsed).to("oklch");
  const chroma = finiteOrZero(grayColor.coords[1]);
  const hue = finiteOrZero(grayColor.coords[2]);
  const spec = appearance === "light" ? LIGHT_CANVAS : DARK_CANVAS;
  return hex(
    new Color("oklch", [spec.l, Math.min(spec.cMax, chroma * spec.cScale), hue]),
  );
}

function schemeFromSeed(seed: string) {
  const base = new Color(seed.startsWith("#") ? seed : `#${seed}`).to("oklch");
  const chroma = Number.isFinite(base.coords[1]) ? base.coords[1] : 0.12;
  const hue = Number.isFinite(base.coords[2]) ? base.coords[2] : 280;

  const light: ThemeTriple = {
    accent: hex(new Color("oklch", [0.55, Math.min(0.18, Math.max(0.08, chroma)), hue])),
    gray: hex(new Color("oklch", [0.42, Math.min(0.04, chroma * 0.2), hue])),
    background: hex(new Color("oklch", [0.985, Math.min(0.015, chroma * 0.08), hue])),
  };

  const dark: ThemeTriple = {
    accent: hex(new Color("oklch", [0.72, Math.min(0.16, Math.max(0.08, chroma)), hue])),
    gray: hex(new Color("oklch", [0.72, Math.min(0.03, chroma * 0.15), hue])),
    background: hex(new Color("oklch", [0.18, Math.min(0.04, chroma * 0.2), hue])),
  };

  return { light, dark };
}

async function seedFromImage(file: Blob) {
  const bitmap = await createImageBitmap(file);
  const size = 24;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) {
    bitmap.close();
    throw new Error("Canvas is unavailable.");
  }
  context.drawImage(bitmap, 0, 0, size, size);
  bitmap.close();
  const { data } = context.getImageData(0, 0, size, size);
  let red = 0;
  let green = 0;
  let blue = 0;
  let count = 0;
  for (let index = 0; index < data.length; index += 4) {
    if (data[index + 3] < 128) continue;
    red += data[index];
    green += data[index + 1];
    blue += data[index + 2];
    count += 1;
  }
  if (!count) return "#4015ca";
  const channel = (value: number) =>
    Math.round(value / count)
      .toString(16)
      .padStart(2, "0");
  return `#${channel(red)}${channel(green)}${channel(blue)}`;
}

export { canvasFromGray, schemeFromSeed, seedFromImage };
export type { ThemeTriple };
