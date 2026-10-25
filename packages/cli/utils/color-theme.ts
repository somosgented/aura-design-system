import * as RadixColors from "@radix-ui/colors";
import Color from "colorjs.io";
import BezierEasing from "bezier-easing";
import path from "path";

type ArrayOf12<T> = [T, T, T, T, T, T, T, T, T, T, T, T];
const arrayOf12 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as const;

const grayScaleNames = ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'] as const;

const scaleNames = [...grayScaleNames, 'tomato', 'red', 'ruby', 'crimson', 'pink',
'plum', 'purple', 'violet', 'iris', 'indigo', 'blue', 'cyan', 'teal', 'jade', 'green',
'grass', 'brown', 'orange', 'sky', 'mint', 'lime', 'yellow', 'amber'] as const;

const lightColors = Object.fromEntries(
	scaleNames.map((scaleName) => [
		scaleName,
		Object.values(RadixColors[`${scaleName}P3`]).map((str) =>
			new Color(str).to("oklch"),
		),
	]),
) as Record<(typeof scaleNames)[number], ArrayOf12<Color>>;

const darkColors = Object.fromEntries(
	scaleNames.map((scaleName) => [
		scaleName,
		Object.values(RadixColors[`${scaleName}DarkP3`]).map((str) =>
			new Color(str).to("oklch"),
		),
	]),
) as Record<(typeof scaleNames)[number], ArrayOf12<Color>>;

const lightGrayColors = Object.fromEntries(
	grayScaleNames.map((scaleName) => [
		scaleName,
		Object.values(RadixColors[`${scaleName}P3`]).map((str) =>
			new Color(str).to("oklch"),
		),
	]),
) as Record<(typeof grayScaleNames)[number], ArrayOf12<Color>>;

const darkGrayColors = Object.fromEntries(
	grayScaleNames.map((scaleName) => [
		scaleName,
		Object.values(RadixColors[`${scaleName}DarkP3`]).map((str) =>
			new Color(str).to("oklch"),
		),
	]),
) as Record<(typeof grayScaleNames)[number], ArrayOf12<Color>>;

const darkModeEasing = [1, 0, 1, 0] as [number, number, number, number];
const lightModeEasing = [0, 2, 0, 2] as [number, number, number, number];

const DARK_CANVAS_MAX_L = 0.5;

const generateRadixColors = ({
	appearance,
	...args
}: {
	appearance: "light" | "dark";
	accent: HexColor;
	gray: HexColor;
	background: HexColor;
}) => {
	const allScales = appearance === "light" ? lightColors : darkColors;
	const grayScales = appearance === "light" ? lightGrayColors : darkGrayColors;
	const backgroundColor = new Color(args.background).to("oklch");
	if (appearance === "dark" && backgroundColor.coords[0] >= DARK_CANVAS_MAX_L) {
		throw new Error("Dark appearance received a background with OKLCH lightness >= 0.5");
	}

	const grayBaseColor = new Color(args.gray).to("oklch");
	const grayScaleColors = getScaleFromColor(
		grayBaseColor,
		grayScales,
		backgroundColor,
	);

	const accentBaseColor = new Color(args.accent).to("oklch");

	let accentScaleColors = getScaleFromColor(
		accentBaseColor,
		allScales,
		backgroundColor,
	);

	const backgroundHex = backgroundColor.to("srgb").toString({ format: "hex" });

	const accentBaseHex = accentBaseColor.to("srgb").toString({ format: "hex" });
	if (accentBaseHex === "#000" || accentBaseHex === "#fff") {
		accentScaleColors = grayScaleColors.map((color) =>
			color.clone(),
		) as ArrayOf12<Color>;
	}

	const accent9Color = getStep9Colors(accentScaleColors, accentBaseColor);

	accentScaleColors[8] = accent9Color;
	accentScaleColors[9] = getButtonHoverColor(accent9Color, [accentScaleColors]);

	accentScaleColors[10].coords[1] = Math.min(
		Math.max(accentScaleColors[8].coords[1], accentScaleColors[7].coords[1]),
		accentScaleColors[10].coords[1],
	);
	accentScaleColors[11].coords[1] = Math.min(
		Math.max(accentScaleColors[8].coords[1], accentScaleColors[7].coords[1]),
		accentScaleColors[11].coords[1],
	);

	const accentScaleHex = accentScaleColors.map((color) =>
		color.to("srgb").toString({ format: "hex" }),
	) as ArrayOf12<string>;

	const accentScaleWideGamut = accentScaleColors.map(
		toOklchString,
	) as ArrayOf12<string>;

	const accentScaleAlphaHex = accentScaleHex.map((color) =>
		getAlphaColorSrgb(color, backgroundHex),
	) as ArrayOf12<string>;

	const accentScaleAlphaWideGamutString = accentScaleHex.map((color) =>
		getAlphaColorP3(color, backgroundHex),
	) as ArrayOf12<string>;

	const grayScaleHex = grayScaleColors.map((color) =>
		color.to("srgb").toString({ format: "hex" }),
	) as ArrayOf12<string>;

	const accentContrast = inkForFills([accentScaleHex[8], accentScaleHex[9]]);
	const grayContrast = inkForFills([grayScaleHex[8]]);

	const grayScaleWideGamut = grayScaleColors.map(
		toOklchString,
	) as ArrayOf12<string>;

	const grayScaleAlphaHex = grayScaleHex.map((color) =>
		getAlphaColorSrgb(color, backgroundHex),
	) as ArrayOf12<string>;

	const grayScaleAlphaWideGamutString = grayScaleHex.map((color) =>
		getAlphaColorP3(color, backgroundHex),
	) as ArrayOf12<string>;

	const accentSurfaceHex =
		appearance === "light"
			? getAlphaColorSrgb(accentScaleHex[1], backgroundHex, 0.8)
			: getAlphaColorSrgb(accentScaleHex[1], backgroundHex, 0.5);

	const accentSurfaceWideGamutString =
		appearance === "light"
			? getAlphaColorP3(accentScaleWideGamut[1], backgroundHex, 0.8)
			: getAlphaColorP3(accentScaleWideGamut[1], backgroundHex, 0.5);

	return {
		accentScale: accentScaleHex,
		accentScaleAlpha: accentScaleAlphaHex,
		accentScaleWideGamut: accentScaleWideGamut,
		accentScaleAlphaWideGamut: accentScaleAlphaWideGamutString,
		accentContrast,

		grayScale: grayScaleHex,
		grayScaleAlpha: grayScaleAlphaHex,
		grayScaleWideGamut: grayScaleWideGamut,
		grayScaleAlphaWideGamut: grayScaleAlphaWideGamutString,
		grayContrast,

		graySurface: appearance === "light" ? "#ffffffcc" : "rgba(0, 0, 0, 0.05)",
		graySurfaceWideGamut:
			appearance === "light"
				? "color(display-p3 1 1 1 / 80%)"
				: "color(display-p3 0 0 0 / 5%)",

		accentSurface: accentSurfaceHex,
		accentSurfaceWideGamut: accentSurfaceWideGamutString,

		background: backgroundHex,
	};
};

function getStep9Colors(
	scale: ArrayOf12<Color>,
	accentBaseColor: Color,
): Color {
	const referenceBackgroundColor = scale[0];
	const distance = accentBaseColor.deltaEOK(referenceBackgroundColor) * 100;

	if (distance < 25) {
		return scale[8];
	}

	return accentBaseColor;
}

function getButtonHoverColor(source: Color, scales: ArrayOf12<Color>[]) {
	const [L, C, H] = source.coords;
	const newL = L > 0.4 ? L - 0.03 / (L + 0.1) : L + 0.03 / (L + 0.1);
	const newC = L > 0.4 && !isNaN(H) ? C * 0.93 + 0 : C;
	const buttonHoverColor = new Color("oklch", [newL, newC, H]);

	let closestColor = buttonHoverColor;
	let minDistance = Infinity;

	scales.forEach((scale) => {
		for (const color of scale) {
			const distance = buttonHoverColor.deltaEOK(color);
			if (distance < minDistance) {
				minDistance = distance;
				closestColor = color;
			}
		}
	});

	buttonHoverColor.coords[1] = closestColor.coords[1];
	buttonHoverColor.coords[2] = closestColor.coords[2];
	return buttonHoverColor;
}

function getScaleFromColor(
	source: Color,
	scales: Record<string, ArrayOf12<Color>>,
	backgroundColor: Color,
) {
	let allColors: { scale: string; color: Color; distance: number }[] = [];

	Object.entries(scales).forEach(([name, scale]) => {
		for (const color of scale) {
			const distance = source.deltaEOK(color);
			allColors.push({ scale: name, distance, color });
		}
	});

	allColors.sort((a, b) => a.distance - b.distance);

	let closestColors = allColors.filter(
		(color, i, arr) =>
			i === arr.findIndex((value) => value.scale === color.scale),
	);

	const grayScaleNamesStr = grayScaleNames as readonly string[];
	const allAreGrays = closestColors.every((color) =>
		grayScaleNamesStr.includes(color.scale),
	);
	if (!allAreGrays && grayScaleNamesStr.includes(closestColors[0].scale)) {
		while (grayScaleNamesStr.includes(closestColors[1].scale)) {
			closestColors.splice(1, 1);
		}
	}

	let colorA = closestColors[0];
	let colorB = closestColors[1];

	const a = colorB.distance;
	const b = colorA.distance;
	const c = colorA.color.deltaEOK(colorB.color);

	const cosA = (b ** 2 + c ** 2 - a ** 2) / (2 * b * c);
	const radA = Math.acos(cosA);
	const sinA = Math.sin(radA);

	const cosB = (a ** 2 + c ** 2 - b ** 2) / (2 * a * c);
	const radB = Math.acos(cosB);
	const sinB = Math.sin(radB);

	const tanC1 = cosA / sinA;
	const tanC2 = cosB / sinB;

	const ratio = Math.max(0, tanC1 / tanC2) * 0.5;

	const scaleA = scales[colorA.scale];
	const scaleB = scales[colorB.scale];
	const scale = arrayOf12.map((i) =>
		new Color(Color.mix(scaleA[i], scaleB[i], ratio)).to("oklch"),
	) as ArrayOf12<Color>;

	const baseColor = scale
		.slice()
		.sort((a, b) => source.deltaEOK(a) - source.deltaEOK(b))[0];

	const ratioC = source.coords[1] / baseColor.coords[1];

	scale.forEach((color) => {
		color.coords[1] = Math.min(
			source.coords[1] * 1.5,
			color.coords[1] * ratioC,
		);
		color.coords[2] = source.coords[2];
	});

	if (scale[0].coords[0] > 0.5) {
		const lightnessScale = scale.map(({ coords }) => coords[0]);
		const backgroundL = Math.max(0, Math.min(1, backgroundColor.coords[0]));
		const newLightnessScale = transposeProgressionStart(
			backgroundL,
			[1, ...lightnessScale],
			lightModeEasing,
		);

		newLightnessScale.shift();

		newLightnessScale.forEach((lightness, i) => {
			scale[i].coords[0] = lightness;
		});

		return scale;
	}

	let ease: typeof darkModeEasing = [...darkModeEasing];
	const referenceBackgroundColorL = scale[0].coords[0];
	const backgroundColorL = Math.max(0, Math.min(1, backgroundColor.coords[0]));

	const ratioL = backgroundColorL / referenceBackgroundColorL;

	if (ratioL > 1) {
		const maxRatio = 1.5;

		for (let i = 0; i < ease.length; i++) {
			const metaRatio = (ratioL - 1) * (maxRatio / (maxRatio - 1));
			ease[i] = ratioL > maxRatio ? 0 : Math.max(0, ease[i] * (1 - metaRatio));
		}
	}

	const lightnessScale = scale.map(({ coords }) => coords[0]);
	const backgroundL = backgroundColor.coords[0];
	const newLightnessScale = transposeProgressionStart(
		backgroundL,
		lightnessScale,
		ease,
	);

	newLightnessScale.forEach((lightness, i) => {
		scale[i].coords[0] = lightness;
	});

	return scale;
}

function getAlphaColor(
	targetRgb: number[],
	backgroundRgb: number[],
	rgbPrecision: number,
	alphaPrecision: number,
	targetAlpha?: number,
) {
	const [tr, tg, tb] = targetRgb.map((c) => Math.round(c * rgbPrecision));
	const [br, bg, bb] = backgroundRgb.map((c) => Math.round(c * rgbPrecision));

	if (
		tr === undefined ||
		tg === undefined ||
		tb === undefined ||
		br === undefined ||
		bg === undefined ||
		bb === undefined
	) {
		throw Error("Color is undefined");
	}

	let desiredRgb = 0;
	if (tr > br || tg > bg || tb > bb) {
		desiredRgb = rgbPrecision;
	}

	const alphaR = (tr - br) / (desiredRgb - br);
	const alphaG = (tg - bg) / (desiredRgb - bg);
	const alphaB = (tb - bb) / (desiredRgb - bb);

	const isPureGray = [alphaR, alphaG, alphaB].every(
		(alpha) => alpha === alphaR,
	);

	if (!targetAlpha && isPureGray) {
		const V = desiredRgb / rgbPrecision;
		return [V, V, V, alphaR] as const;
	}

	const clampRgb = (n: number) =>
		isNaN(n) ? 0 : Math.min(rgbPrecision, Math.max(0, n));
	const clampA = (n: number) =>
		isNaN(n) ? 0 : Math.min(alphaPrecision, Math.max(0, n));
	const maxAlpha = targetAlpha ?? Math.max(alphaR, alphaG, alphaB);

	const A = clampA(Math.ceil(maxAlpha * alphaPrecision)) / alphaPrecision;
	let R = clampRgb(((br * (1 - A) - tr) / A) * -1);
	let G = clampRgb(((bg * (1 - A) - tg) / A) * -1);
	let B = clampRgb(((bb * (1 - A) - tb) / A) * -1);

	R = Math.ceil(R);
	G = Math.ceil(G);
	B = Math.ceil(B);

	const blendedR = blendAlpha(R, A, br);
	const blendedG = blendAlpha(G, A, bg);
	const blendedB = blendAlpha(B, A, bb);

	if (desiredRgb === 0) {
		if (tr <= br && tr !== blendedR) {
			R = tr > blendedR ? R + 1 : R - 1;
		}
		if (tg <= bg && tg !== blendedG) {
			G = tg > blendedG ? G + 1 : G - 1;
		}
		if (tb <= bb && tb !== blendedB) {
			B = tb > blendedB ? B + 1 : B - 1;
		}
	}

	if (desiredRgb === rgbPrecision) {
		if (tr >= br && tr !== blendedR) {
			R = tr > blendedR ? R + 1 : R - 1;
		}
		if (tg >= bg && tg !== blendedG) {
			G = tg > blendedG ? G + 1 : G - 1;
		}
		if (tb >= bb && tb !== blendedB) {
			B = tb > blendedB ? B + 1 : B - 1;
		}
	}

	R = R / rgbPrecision;
	G = G / rgbPrecision;
	B = B / rgbPrecision;

	return [R, G, B, A] as const;
}

function blendAlpha(
	foreground: number,
	alpha: number,
	background: number,
	round = true,
) {
	if (round) {
		return (
			Math.round(background * (1 - alpha)) + Math.round(foreground * alpha)
		);
	}
	return background * (1 - alpha) + foreground * alpha;
}

function getAlphaColorSrgb(
	targetColor: string,
	backgroundColor: string,
	targetAlpha?: number,
) {
	const [r, g, b, a] = getAlphaColor(
		new Color(targetColor).to("srgb").coords,
		new Color(backgroundColor).to("srgb").coords,
		255,
		255,
		targetAlpha,
	);

	return formatHex(new Color("srgb", [r, g, b], a).toString({ format: "hex" }));
}

function getAlphaColorP3(
	targetColor: string,
	backgroundColor: string,
	targetAlpha?: number,
) {
	const [r, g, b, a] = getAlphaColor(
		new Color(targetColor).to("p3").coords,
		new Color(backgroundColor).to("p3").coords,
		255,
		1000,
		targetAlpha,
	);

	return (
		new Color("p3", [r, g, b], a)
			.toString({ precision: 4 })
			.replace("color(p3 ", "color(display-p3 ")
	);
}

function formatHex(str: string) {
	if (!str.startsWith("#")) {
		return str;
	}

	if (str.length === 4) {
		const hash = str.charAt(0);
		const r = str.charAt(1);
		const g = str.charAt(2);
		const b = str.charAt(3);
		return hash + r + r + g + g + b + b;
	}

	if (str.length === 5) {
		const hash = str.charAt(0);
		const r = str.charAt(1);
		const g = str.charAt(2);
		const b = str.charAt(3);
		const a = str.charAt(4);
		return hash + r + r + g + g + b + b + a + a;
	}

	return str;
}

function transposeProgressionStart(
	to: number,
	arr: number[],
	curve: [number, number, number, number],
) {
	return arr.map((n, i, arr) => {
		const lastIndex = arr.length - 1;
		const diff = arr[0] - to;
		const fn = BezierEasing(...curve);
		return n - diff * fn(1 - i / lastIndex);
	});
}

function toOklchString(color: Color) {
	const L = +(color.coords[0] * 100).toFixed(1);
	return color
		.to("oklch")
		.toString({ precision: 4 })
		.replace(/(\S+)(.+)/, `oklch(${L}%$2`);
}

declare const hexBrand: unique symbol;

export type HexColor = string & { readonly [hexBrand]: true };

export class ColorSeedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ColorSeedError";
  }
}

export type RawColorSeeds = {
  readonly accent: string;
  readonly gray: string;
  readonly lightBackground?: string;
};

export type ColorSeeds = {
  readonly accent: HexColor;
  readonly gray: HexColor;
  readonly lightBackground?: HexColor;
};

export type ColorFlags = {
  readonly accent?: string;
  readonly gray?: string;
  readonly background?: string;
};

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type ScaleName = "accent" | "gray";

export type StatusName = "info" | "success" | "danger" | "warning";

type TokenRef =
  | { readonly kind: "step"; readonly scale: ScaleName; readonly step: Step }
  | { readonly kind: "ink"; readonly scale: ScaleName }
  | {
      readonly kind: "status";
      readonly name: StatusName;
      readonly part: "surface" | "contrast";
    };

type ContrastRole = "text" | "ui";

type PairScope = "light" | "dark" | "both" | "static";

type ContrastPair = {
  readonly scope: PairScope;
  readonly foreground: TokenRef;
  readonly background: TokenRef;
  readonly role: ContrastRole;
  readonly gate: "fail" | "warn";
};

export type PairStatus = "pass" | "warn" | "fail";

export type ResolvedScope = "light" | "dark" | "static";

export type PairResult = {
  readonly id: string;
  readonly scope: ResolvedScope;
  readonly ratio: number;
  readonly minimum: 4.5 | 3;
  readonly status: PairStatus;
};

export type ContrastReport = {
  readonly pairs: readonly PairResult[];
};

export type Scale12 = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];

export type AppearanceColors = {
  readonly accentScale: Scale12;
  readonly accentScaleAlpha: Scale12;
  readonly accentContrast: string;
  readonly accentSurface: string;
  readonly grayScale: Scale12;
  readonly grayScaleAlpha: Scale12;
  readonly grayContrast: string;
  readonly graySurface: string;
  readonly background: string;
};

export type StatusPair = {
  readonly name: StatusName;
  readonly surface: string;
  readonly contrast: string;
};

export type AuraColorTheme = {
  readonly seeds: ColorSeeds;
  readonly canvases: { readonly light: HexColor; readonly dark: HexColor };
  readonly light: AppearanceColors;
  readonly dark: AppearanceColors;
  readonly status: {
    readonly light: readonly StatusPair[];
    readonly dark: readonly StatusPair[];
  };
  readonly report: ContrastReport;
};

type MeasuredTheme = Omit<AuraColorTheme, "report">;

export type GlobalsFs = {
  readonly cwd: string;
  isFile(filePath: string): boolean;
  writeFile(filePath: string, contents: string): void;
};

export type ColorCommandIO = GlobalsFs & {
  ask(message: string): Promise<string>;
  log(line: string): void;
};

const MINIMUM_RATIO: Record<ContrastRole, 4.5 | 3> = {
  text: 4.5,
  ui: 3,
};

const BORDERLINE_MARGIN = 0.5;

const INK_CANDIDATES = ["#ffffff", "#000000"] as const;

const LIGHT_CANVAS = { l: 0.985, cMax: 0.015, cScale: 0.08 } as const;

const DARK_CANVAS = { l: 0.18, cMax: 0.04, cScale: 0.2 } as const;

const GLOBALS_CSS_CANDIDATES = [
  "app/globals.css",
  "src/app/globals.css",
  "styles/globals.css",
  "src/styles/globals.css",
] as const;

const LIGHT_STATUS: readonly StatusPair[] = [
  { name: "info", surface: "#e8ebfe", contrast: "#0927ec" },
  { name: "success", surface: "#e8fef7", contrast: "#045d3c" },
  { name: "danger", surface: "#feefe8", contrast: "#8e3106" },
  { name: "warning", surface: "#fefbe8", contrast: "#5d5104" },
];

const DARK_STATUS: readonly StatusPair[] = [
  { name: "info", surface: "#0d2157", contrast: "#8cb4ff" },
  { name: "success", surface: "#0b2e1e", contrast: "#67cf9d" },
  { name: "danger", surface: "#3c1405", contrast: "#ff9469" },
  { name: "warning", surface: "#2a2402", contrast: "#efe08e" },
];

const STATUS_COLORS = {
  light: LIGHT_STATUS,
  dark: DARK_STATUS,
} as const;

const CONTRAST_PAIRS: readonly ContrastPair[] = [
  {
    scope: "both",
    foreground: { kind: "ink", scale: "accent" },
    background: { kind: "step", scale: "accent", step: 9 },
    role: "text",
    gate: "fail",
  },
  {
    scope: "both",
    foreground: { kind: "ink", scale: "accent" },
    background: { kind: "step", scale: "accent", step: 10 },
    role: "text",
    gate: "fail",
  },
  {
    scope: "both",
    foreground: { kind: "ink", scale: "gray" },
    background: { kind: "step", scale: "gray", step: 9 },
    role: "text",
    gate: "fail",
  },
  {
    scope: "both",
    foreground: { kind: "step", scale: "gray", step: 12 },
    background: { kind: "step", scale: "gray", step: 1 },
    role: "text",
    gate: "fail",
  },
  {
    scope: "both",
    foreground: { kind: "step", scale: "gray", step: 12 },
    background: { kind: "step", scale: "gray", step: 2 },
    role: "text",
    gate: "fail",
  },
  {
    scope: "both",
    foreground: { kind: "step", scale: "gray", step: 11 },
    background: { kind: "step", scale: "gray", step: 2 },
    role: "text",
    gate: "fail",
  },
  {
    scope: "both",
    foreground: { kind: "step", scale: "accent", step: 11 },
    background: { kind: "step", scale: "gray", step: 1 },
    role: "text",
    gate: "fail",
  },
  {
    scope: "light",
    foreground: { kind: "step", scale: "accent", step: 9 },
    background: { kind: "step", scale: "gray", step: 1 },
    role: "ui",
    gate: "fail",
  },
  {
    scope: "dark",
    foreground: { kind: "step", scale: "accent", step: 9 },
    background: { kind: "step", scale: "gray", step: 1 },
    role: "ui",
    gate: "warn",
  },
  {
    scope: "both",
    foreground: { kind: "status", name: "info", part: "contrast" },
    background: { kind: "status", name: "info", part: "surface" },
    role: "text",
    gate: "fail",
  },
  {
    scope: "both",
    foreground: { kind: "status", name: "success", part: "contrast" },
    background: { kind: "status", name: "success", part: "surface" },
    role: "text",
    gate: "fail",
  },
  {
    scope: "both",
    foreground: { kind: "status", name: "danger", part: "contrast" },
    background: { kind: "status", name: "danger", part: "surface" },
    role: "text",
    gate: "fail",
  },
  {
    scope: "both",
    foreground: { kind: "status", name: "warning", part: "contrast" },
    background: { kind: "status", name: "warning", part: "surface" },
    role: "text",
    gate: "fail",
  },
];

const LIGHT_ROOT_ALIASES = `  --primary: var(--accent-9);
  --primary-foreground: var(--accent-contrast);
  --secundary: var(--accent-8);
  --secundary-foreground: var(--accent-contrast);

  --chart-1: var(--accent-9);
  --chart-2: var(--info-contrast);
  --chart-3: var(--success-contrast);
  --chart-4: var(--warning-contrast);
  --chart-5: var(--danger-contrast);
  --ecru: #debc7a;

  --aura: 13px;
  --aura-font-stack: var(--font-gabarito, "Gabarito"), -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  --aura-font-quotes: serif;

  --aura-bg: var(--gray-1);
  --aura-text-primary: var(--accent-12);
  --aura-text-primary-inverse: var(--gray-contrast);

  --aura-accents-primary: var(--accent-9);
  --aura-accents-secondary: var(--accent-9);

  --aura-input-radius: 6.5px;
  --aura-button-radius: 6.5px;
  --aura-input-bg: var(--accent-2);
  --aura-input-placeholder-color: var(--gray-11);
  --aura-radius: 0.5rem;
  --aura-opacity: 0.5;
  --aura-outline: var(--accent-9) solid 2px;
  --aura-button-hover: var(--accent-10);
  --aura-link: var(--gray-12);
  --aura-link-hover: var(--accent-2);
  --aura-selector: var(--accent-surface);
  --aura-loader: var(--primary);
  --aura-skeleton-start: var(--gray-8);
  --aura-skeleton-end: var(--gray-5);
  --radius: 0.5rem;`;

export function createAuraColorTheme(raw: RawColorSeeds): AuraColorTheme {
  const seeds = parseColorSeeds(raw);
  const canvases = deriveCanvases(seeds.gray, seeds.lightBackground);
  const light = appearanceFromRamp(
    generateRadixColors({
      appearance: "light",
      accent: seeds.accent,
      gray: seeds.gray,
      background: canvases.light,
    }),
  );
  const dark = appearanceFromRamp(
    generateRadixColors({
      appearance: "dark",
      accent: seeds.accent,
      gray: seeds.gray,
      background: canvases.dark,
    }),
  );
  const measured: MeasuredTheme = {
    seeds,
    canvases,
    light,
    dark,
    status: STATUS_COLORS,
  };
  return {
    ...measured,
    report: assessContrast(measured),
  };
}

export function generateGlobalsCss(theme: AuraColorTheme): string {
  const darkBlock = darkDeclarations(theme);
  return `@import "tailwindcss";

@theme inline {
  --spacing: 13px;
  --font-sans: var(--font-gabarito, "Gabarito"), sans-serif;
${statusDeclarations(theme.status.light, "  ")}
  --radius-sm: calc(var(--spacing) * 0.5);
  --radius-md: calc(var(--spacing) * 1);
  --radius-lg: calc(var(--spacing) * 1.5);
  --radius-xl: calc(var(--spacing) * 2);
  --aura-loader: var(--aura-loader);
  --color-warning-contrast: var(--warning-contrast);
  --color-warning: var(--warning);
  --color-danger-contrast: var(--danger-contrast);
  --color-danger: var(--danger);
  --color-success-contrast: var(--success-contrast);
  --color-success: var(--success);
  --color-info-contrast: var(--info-contrast);
  --color-info: var(--info);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-ecru: var(--ecru);
  --secundary-foreground: var(--secundary-foreground);
  --secundary: var(--secundary);
  --primary-foreground: var(--primary-foreground);
  --primary: var(--primary);
  --color-gray-track: var(--gray-track);
  --color-gray-indicator: var(--gray-indicator);
  --color-gray-surface: var(--gray-surface);
  --color-gray-contrast: var(--gray-contrast);
  --color-gray-a12: var(--gray-a12);
  --color-gray-a11: var(--gray-a11);
  --color-gray-a10: var(--gray-a10);
  --color-gray-a9: var(--gray-a9);
  --color-gray-a8: var(--gray-a8);
  --color-gray-a7: var(--gray-a7);
  --color-gray-a6: var(--gray-a6);
  --color-gray-a5: var(--gray-a5);
  --color-gray-a4: var(--gray-a4);
  --color-gray-a3: var(--gray-a3);
  --color-gray-a2: var(--gray-a2);
  --color-gray-a1: var(--gray-a1);
  --color-gray-12: var(--gray-12);
  --color-gray-11: var(--gray-11);
  --color-gray-10: var(--gray-10);
  --color-gray-9: var(--gray-9);
  --color-gray-8: var(--gray-8);
  --color-gray-7: var(--gray-7);
  --color-gray-6: var(--gray-6);
  --color-gray-5: var(--gray-5);
  --color-gray-4: var(--gray-4);
  --color-gray-3: var(--gray-3);
  --color-gray-2: var(--gray-2);
  --color-gray-1: var(--gray-1);
  --color-accent-track: var(--accent-track);
  --color-accent-indicator: var(--accent-indicator);
  --color-accent-surface: var(--accent-surface);
  --color-accent-contrast: var(--accent-contrast);
  --color-accent-a12: var(--accent-a12);
  --color-accent-a11: var(--accent-a11);
  --color-accent-a10: var(--accent-a10);
  --color-accent-a9: var(--accent-a9);
  --color-accent-a8: var(--accent-a8);
  --color-accent-a7: var(--accent-a7);
  --color-accent-a6: var(--accent-a6);
  --color-accent-a5: var(--accent-a5);
  --color-accent-a4: var(--accent-a4);
  --color-accent-a3: var(--accent-a3);
  --color-accent-a2: var(--accent-a2);
  --color-accent-a1: var(--accent-a1);
  --color-accent-12: var(--accent-12);
  --color-accent-11: var(--accent-11);
  --color-accent-10: var(--accent-10);
  --color-accent-9: var(--accent-9);
  --color-accent-8: var(--accent-8);
  --color-accent-7: var(--accent-7);
  --color-accent-6: var(--accent-6);
  --color-accent-5: var(--accent-5);
  --color-accent-4: var(--accent-4);
  --color-accent-3: var(--accent-3);
  --color-accent-2: var(--accent-2);
  --color-accent-1: var(--accent-1);
}

:root {
${scaleDeclarations(theme.light, "  ")}

${LIGHT_ROOT_ALIASES}
}

@media (prefers-color-scheme: dark) {
  :root:not(.light) {
${darkBlock}
  }
}

.dark {
${darkBlock}
  }
}

@layer base {
  html {
    font-size: 17px;
  }
  main {
    background-color: var(--gray-1);
  }
}

/*
 * Mobile UX: editable controls must stay ≥17px (iOS focus-zoom).
 * Outside @layer so this beats Tailwind text-sm/text-xs. Also in styles/main.css.
 */
input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="file"]):not([type="hidden"]):not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="image"]):not([type="color"]),
textarea,
select {
  font-size: max(1rem, 17px);
}

@layer components {
}
`;
}

export function resolveGlobalsCssPath(fs: Pick<GlobalsFs, "cwd" | "isFile">): string {
  for (const candidate of GLOBALS_CSS_CANDIDATES) {
    const fullPath = path.join(fs.cwd, candidate);
    if (fs.isFile(fullPath)) return fullPath;
  }
  return path.join(fs.cwd, GLOBALS_CSS_CANDIDATES[0]);
}

export async function executeColors(
  flags: ColorFlags,
  io: ColorCommandIO,
): Promise<{ exitCode: 0 | 1 }> {
  try {
    const accentFlag = flags.accent !== undefined ? parseHex(flags.accent, "Accent") : undefined;
    const grayFlag = flags.gray !== undefined ? parseHex(flags.gray, "Gray") : undefined;
    const lightBackground = flags.background !== undefined
      ? parseHex(flags.background, "Light background")
      : undefined;
    const accent = accentFlag ?? await askHex(io, "Accent", "Accent color (hex):");
    const gray = grayFlag ?? await askHex(io, "Gray", "Gray color (hex):");
    const theme = createAuraColorTheme({
      accent,
      gray,
      lightBackground,
    });
    for (const line of formatContrastReport(theme)) {
      io.log(line);
    }
    if (theme.report.pairs.some((pair) => pair.status === "fail")) {
      io.log("globals.css was not changed");
      return { exitCode: 1 };
    }
    const globalsPath = resolveGlobalsCssPath(io);
    io.writeFile(globalsPath, generateGlobalsCss(theme));
    io.log(globalsPath);
    return { exitCode: 0 };
  } catch (error) {
    if (error instanceof ColorSeedError) {
      io.log(error.message);
      return { exitCode: 1 };
    }
    throw error;
  }
}

function parseHex(value: string, label: string): HexColor {
  const match = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.exec(value);
  if (!match?.[1]) {
    throw new ColorSeedError(`${label} must be a #rgb or #rrggbb hex color.`);
  }
  const digits = match[1];
  const expanded = digits.length === 3
    ? digits.split("").map((char) => char + char).join("")
    : digits;
  return `#${expanded.toLowerCase()}` as HexColor;
}

async function askHex(io: ColorCommandIO, label: string, message: string): Promise<HexColor> {
  for (;;) {
    const answer = await io.ask(message);
    try {
      return parseHex(answer, label);
    } catch (error) {
      if (!(error instanceof ColorSeedError)) throw error;
      io.log(error.message);
    }
  }
}

function parseColorSeeds(raw: RawColorSeeds): ColorSeeds {
  const accent = parseHex(raw.accent, "Accent");
  const gray = parseHex(raw.gray, "Gray");
  if (raw.lightBackground === undefined) {
    return { accent, gray };
  }
  return {
    accent,
    gray,
    lightBackground: parseHex(raw.lightBackground, "Light background"),
  };
}

function finiteOrZero(value: number): number {
  return Number.isFinite(value) ? value : 0;
}

function oklchHex(lightness: number, chroma: number, hue: number): HexColor {
  const serialized = new Color("oklch", [lightness, chroma, hue])
    .to("srgb")
    .toString({ format: "hex" });
  return parseHex(serialized, "Canvas");
}

function deriveCanvases(
  gray: HexColor,
  lightOverride: HexColor | undefined,
): { readonly light: HexColor; readonly dark: HexColor } {
  const grayColor = new Color(gray).to("oklch");
  const chroma = finiteOrZero(grayColor.coords[1]);
  const hue = finiteOrZero(grayColor.coords[2]);
  const dark = oklchHex(
    DARK_CANVAS.l,
    Math.min(DARK_CANVAS.cMax, chroma * DARK_CANVAS.cScale),
    hue,
  );
  const light = lightOverride ?? oklchHex(
    LIGHT_CANVAS.l,
    Math.min(LIGHT_CANVAS.cMax, chroma * LIGHT_CANVAS.cScale),
    hue,
  );
  return { light, dark };
}

function wcag21Contrast(foreground: string, background: string): number {
  return new Color(background).contrast(foreground, "WCAG21");
}

function minimumContrast(ink: string, fills: readonly string[]): number {
  return Math.min(...fills.map((fill) => wcag21Contrast(ink, fill)));
}

function inkForFills(fills: readonly string[]): (typeof INK_CANDIDATES)[number] {
  let chosen: (typeof INK_CANDIDATES)[number] = INK_CANDIDATES[0];
  let chosenScore = minimumContrast(chosen, fills);
  for (let index = 1; index < INK_CANDIDATES.length; index += 1) {
    const candidate = INK_CANDIDATES[index];
    const score = minimumContrast(candidate, fills);
    if (score > chosenScore) {
      chosen = candidate;
      chosenScore = score;
    }
  }
  return chosen;
}

function appearanceFromRamp(ramp: ReturnType<typeof generateRadixColors>): AppearanceColors {
  return {
    accentScale: ramp.accentScale,
    accentScaleAlpha: ramp.accentScaleAlpha,
    accentContrast: ramp.accentContrast,
    accentSurface: ramp.accentSurface,
    grayScale: ramp.grayScale,
    grayScaleAlpha: ramp.grayScaleAlpha,
    grayContrast: ramp.grayContrast,
    graySurface: ramp.graySurface,
    background: ramp.background,
  };
}

function tokenLabel(ref: TokenRef): string {
  if (ref.kind === "step") return `${ref.scale}-${ref.step}`;
  if (ref.kind === "ink") return `${ref.scale}-contrast`;
  if (ref.part === "contrast") return `${ref.name}-contrast`;
  return ref.name;
}

function pairLabel(pair: ContrastPair): string {
  return `${tokenLabel(pair.foreground)}/${tokenLabel(pair.background)}`;
}

function resolvedScopes(scope: PairScope): readonly ResolvedScope[] {
  if (scope === "both") return ["light", "dark"];
  if (scope === "light") return ["light"];
  if (scope === "dark") return ["dark"];
  return ["static"];
}

function appearanceName(scope: ResolvedScope): "light" | "dark" {
  return scope === "dark" ? "dark" : "light";
}

function tokenHex(theme: MeasuredTheme, scope: ResolvedScope, ref: TokenRef): string {
  if (ref.kind === "status") {
    const pair = theme.status[appearanceName(scope)].find((item) => item.name === ref.name);
    if (!pair) {
      throw new Error(`Missing status color ${ref.name}`);
    }
    return ref.part === "surface" ? pair.surface : pair.contrast;
  }
  const appearance = theme[appearanceName(scope)];
  if (ref.kind === "ink") {
    return ref.scale === "accent" ? appearance.accentContrast : appearance.grayContrast;
  }
  return appearance[ref.scale === "accent" ? "accentScale" : "grayScale"][ref.step - 1];
}

function assessContrast(theme: MeasuredTheme): ContrastReport {
  const pairs: PairResult[] = [];
  for (const pair of CONTRAST_PAIRS) {
    const minimum = MINIMUM_RATIO[pair.role];
    for (const scope of resolvedScopes(pair.scope)) {
      const ratio = wcag21Contrast(
        tokenHex(theme, scope, pair.foreground),
        tokenHex(theme, scope, pair.background),
      );
      const status: PairStatus = ratio < minimum
        ? pair.gate === "fail"
          ? "fail"
          : "warn"
        : ratio < minimum + BORDERLINE_MARGIN
          ? "warn"
          : "pass";
      pairs.push({
        id: pairLabel(pair),
        scope,
        ratio,
        minimum,
        status,
      });
    }
  }
  return { pairs };
}

function formatContrastReport(theme: AuraColorTheme): readonly string[] {
  const lines = [
    `accent ${theme.seeds.accent}`,
    `gray ${theme.seeds.gray}`,
    `light ${theme.canvases.light}`,
    `dark ${theme.canvases.dark}`,
  ];
  for (const pair of theme.report.pairs) {
    lines.push(`${pair.status} ${pair.scope} ${pair.id} ${pair.ratio.toFixed(2)} min ${pair.minimum}`);
  }
  return lines;
}

function stepLines(indent: string, prefix: string, scale: Scale12): string[] {
  return scale.map((hex, index) => `${indent}--${prefix}${index + 1}: ${hex};`);
}

function scaleDeclarations(colors: AppearanceColors, indent: string): string {
  return [
    ...stepLines(indent, "accent-", colors.accentScale),
    "",
    ...stepLines(indent, "accent-a", colors.accentScaleAlpha),
    "",
    `${indent}--accent-contrast: ${colors.accentContrast};`,
    `${indent}--accent-surface: ${colors.accentSurface};`,
    `${indent}--accent-indicator: ${colors.accentScale[8]};`,
    `${indent}--accent-track: ${colors.accentScale[8]};`,
    "",
    ...stepLines(indent, "gray-", colors.grayScale),
    "",
    ...stepLines(indent, "gray-a", colors.grayScaleAlpha),
    "",
    `${indent}--gray-contrast: ${colors.grayContrast};`,
    `${indent}--gray-surface: ${colors.graySurface};`,
    `${indent}--gray-indicator: ${colors.grayScale[8]};`,
    `${indent}--gray-track: ${colors.grayScale[8]};`,
  ].join("\n");
}

function statusDeclarations(pairs: readonly StatusPair[], indent: string): string {
  return pairs
    .flatMap((pair) => [
      `${indent}--${pair.name}: ${pair.surface};`,
      `${indent}--${pair.name}-contrast: ${pair.contrast};`,
    ])
    .join("\n");
}

function darkDeclarations(theme: AuraColorTheme): string {
  return [
    scaleDeclarations(theme.dark, "    "),
    "",
    statusDeclarations(theme.status.dark, "    "),
    "    --chart-1: var(--accent-11);",
  ].join("\n");
}
