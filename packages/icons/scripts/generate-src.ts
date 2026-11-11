import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const iconsDir = path.join(root, "icons");
const srcDir = path.join(root, "src");

type SvgPath = {
  d: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
  strokeLinecap?: string;
  strokeLinejoin?: string;
};

function toPascalCase(value: string) {
  return value
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function attr(source: string, name: string) {
  const match = source.match(new RegExp(`${name}="([^"]*)"`, "i"));
  return match?.[1];
}

function extractPaths(svg: string): SvgPath[] {
  const matches = [...svg.matchAll(/<path\b([^>]*)\/?>/gi)];
  if (matches.length === 0) {
    throw new Error("No path elements found in SVG");
  }
  return matches.map((match) => {
    const raw = match[1] ?? "";
    const d = attr(raw, "d");
    if (!d) {
      throw new Error("Path missing d=");
    }
    return {
      d,
      fill: attr(raw, "fill"),
      stroke: attr(raw, "stroke"),
      strokeWidth: attr(raw, "stroke-width") ?? attr(raw, "strokeWidth"),
      strokeLinecap: attr(raw, "stroke-linecap") ?? attr(raw, "strokeLinecap"),
      strokeLinejoin: attr(raw, "stroke-linejoin") ?? attr(raw, "strokeLinejoin"),
    };
  });
}

function extractViewBox(svg: string) {
  return attr(svg, "viewBox") ?? "0 0 15 15";
}

function jsxPath(pathNode: SvgPath) {
  const props = [`d="${pathNode.d}"`];
  if (pathNode.fill && pathNode.fill !== "none") {
    props.push(
      pathNode.fill === "currentColor" ? "fill={color}" : `fill="${pathNode.fill}"`,
    );
  } else {
    props.push('fill="none"');
  }
  if (pathNode.stroke) {
    props.push(
      pathNode.stroke === "currentColor"
        ? "stroke={color}"
        : `stroke="${pathNode.stroke}"`,
    );
  }
  if (pathNode.strokeWidth) {
    props.push(`strokeWidth="${pathNode.strokeWidth}"`);
  }
  if (pathNode.strokeLinecap) {
    props.push(`strokeLinecap="${pathNode.strokeLinecap}"`);
  }
  if (pathNode.strokeLinejoin) {
    props.push(`strokeLinejoin="${pathNode.strokeLinejoin}"`);
  }
  return `        <path ${props.join(" ")} />`;
}

function componentSource(name: string, viewBox: string, paths: SvgPath[]) {
  return `import * as React from "react";
import type { IconProps } from "./types";

export const ${name} = React.forwardRef<SVGSVGElement, IconProps>(
  function ${name}({ color = "currentColor", ...props }, forwardedRef) {
    return (
      <svg
        width="15"
        height="15"
        viewBox="${viewBox}"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
${paths.map(jsxPath).join("\n")}
      </svg>
    );
  },
);

export default ${name};
`;
}

function catalogSource(
  entries: { componentName: string; fileName: string; tags: string[] }[],
) {
  const imports = entries
    .map(
      (entry) =>
        `import { ${entry.componentName} } from "./${entry.componentName}";`,
    )
    .join("\n");

  const items = entries
    .map(
      (entry) => `  {
    name: "${entry.componentName}",
    fileName: "${entry.fileName}",
    tags: ${JSON.stringify(entry.tags)},
    Icon: ${entry.componentName},
  },`,
    )
    .join("\n");

  return `import type * as React from "react";
${imports}
import type { IconProps } from "./types";

export type IconCatalogEntry = {
  name: string;
  fileName: string;
  tags: string[];
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
};

export const iconCatalog: IconCatalogEntry[] = [
${items}
];
`;
}

function indexSource(componentNames: string[]) {
  const lines = componentNames.map(
    (name) => `export { default as ${name} } from "./${name}";`,
  );
  return `${lines.join("\n")}
export type { IconProps } from "./types";
export { iconCatalog } from "./catalog";
export type { IconCatalogEntry } from "./catalog";
`;
}

const svgFiles = fs
  .readdirSync(iconsDir)
  .filter((file) => file.endsWith(".svg"))
  .sort();

if (svgFiles.length === 0) {
  throw new Error(`No SVG files found in ${iconsDir}`);
}

fs.mkdirSync(srcDir, { recursive: true });

for (const file of fs.readdirSync(srcDir)) {
  if (file.endsWith("Icon.tsx") || file === "catalog.tsx" || file === "index.tsx") {
    fs.unlinkSync(path.join(srcDir, file));
  }
}

const typesPath = path.join(srcDir, "types.tsx");
if (!fs.existsSync(typesPath)) {
  fs.writeFileSync(
    typesPath,
    `import type * as React from "react";

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  children?: never;
  color?: string;
}
`,
  );
}

const entries = svgFiles.map((file) => {
  const fileName = file.replace(/\.svg$/, "");
  const componentName = `${toPascalCase(fileName)}Icon`;
  const svg = fs.readFileSync(path.join(iconsDir, file), "utf8");
  const paths = extractPaths(svg);
  const viewBox = extractViewBox(svg);
  fs.writeFileSync(
    path.join(srcDir, `${componentName}.tsx`),
    componentSource(componentName, viewBox, paths),
  );
  return {
    componentName,
    fileName,
    tags: fileName.split("-"),
    relativePath: `icons/${file}`,
  };
});

fs.writeFileSync(path.join(srcDir, "catalog.tsx"), catalogSource(entries));
fs.writeFileSync(
  path.join(srcDir, "index.tsx"),
  indexSource(entries.map((entry) => entry.componentName)),
);

fs.writeFileSync(
  path.join(root, "manifest.json"),
  `${JSON.stringify(
    {
      icons: Object.fromEntries(
        entries.map((entry) => [entry.fileName, entry.relativePath]),
      ),
    },
    null,
    2,
  )}\n`,
);

console.log(`Generated ${entries.length} icons into src/`);
