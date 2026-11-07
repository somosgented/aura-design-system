import { existsSync, readdirSync, readFileSync } from "fs";
import { basename, join } from "path";

export const STACKS = [
  "next",
  "node",
  "python",
  "go",
  "jvm",
  "dotnet",
  "php",
  "ruby",
  "rust",
  "generic",
] as const;

export type Stack = (typeof STACKS)[number];

export const OPTIONAL_MODULES = ["sonar", "bruno", "images"] as const;

export type OptionalModule = (typeof OPTIONAL_MODULES)[number];

export const SONAR_STACKS: ReadonlySet<Stack> = new Set<Stack>([
  "next",
  "node",
  "python",
  "go",
  "jvm",
  "dotnet",
  "php",
  "ruby",
]);

export type ProjectProfile = {
  stack: Stack;
  name: string;
  frontend: boolean;
  backend: boolean;
  react: boolean;
  sonar: boolean;
  bruno: boolean;
  images: boolean;
};

export type ProfileOverrides = {
  stack?: Stack;
  with?: OptionalModule[];
  without?: OptionalModule[];
};

const FRONTEND_NODE_DEPS = [
  "next",
  "react",
  "vue",
  "nuxt",
  "svelte",
  "@sveltejs/kit",
  "astro",
  "@angular/core",
  "solid-js",
  "preact",
  "@remix-run/react",
  "vite",
];

const BACKEND_NODE_DEPS = [
  "express",
  "fastify",
  "@nestjs/core",
  "koa",
  "hono",
  "@hapi/hapi",
  "elysia",
  "@trpc/server",
  "@apollo/server",
];

const NEXT_API_DIRS = ["app/api", "src/app/api", "pages/api", "src/pages/api"];

type LanguageStack = Exclude<Stack, "next" | "node" | "generic">;

const LANGUAGE_MARKERS: { stack: LanguageStack; files: string[]; extensions?: string[] }[] = [
  { stack: "python", files: ["pyproject.toml", "requirements.txt", "setup.py", "Pipfile"] },
  { stack: "go", files: ["go.mod"] },
  { stack: "jvm", files: ["pom.xml", "build.gradle", "build.gradle.kts"] },
  { stack: "dotnet", files: [], extensions: [".sln", ".csproj", ".fsproj"] },
  { stack: "php", files: ["composer.json"] },
  { stack: "ruby", files: ["Gemfile"] },
  { stack: "rust", files: ["Cargo.toml"] },
];

const BACKEND_FRAMEWORKS: Record<LanguageStack, RegExp> = {
  python:
    /\b(fastapi|django|flask|starlette|litestar|aiohttp|sanic|tornado|falcon|quart)\b/,
  go: /(gin-gonic\/gin|labstack\/echo|gofiber\/fiber|go-chi\/chi|gorilla\/mux|connectrpc\.com|grpc-gateway|julienschmidt\/httprouter)/,
  jvm: /(spring-boot|quarkus|micronaut|io\.ktor|javalin|jakarta\.ws\.rs|dropwizard|vertx-web)/,
  dotnet: /(microsoft\.net\.sdk\.web|microsoft\.aspnetcore)/,
  php: /(laravel\/framework|laravel\/lumen-framework|symfony\/framework-bundle|slim\/slim|laminas\/laminas-mvc|cakephp\/cakephp|yiisoft\/yii2)/,
  ruby: /gem\s+["'](rails|sinatra|hanami|grape|roda)["']/,
  rust: /^\s*(actix-web|axum|rocket|warp|poem|tide|salvo)\s*=/m,
};

type PackageJson = {
  name?: string;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
};

function readText(path: string): string {
  return existsSync(path) ? readFileSync(path, "utf-8") : "";
}

function readPackageJson(root: string): PackageJson | null {
  const path = join(root, "package.json");
  if (!existsSync(path)) return null;
  return JSON.parse(readFileSync(path, "utf-8")) as PackageJson;
}

function packageDeps(pkg: PackageJson | null): Record<string, string> {
  if (!pkg) return {};
  return { ...pkg.dependencies, ...pkg.devDependencies };
}

function rootFilesWithExtension(root: string, extensions: string[]): string[] {
  return readdirSync(root).filter((entry) =>
    extensions.some((ext) => entry.endsWith(ext)),
  );
}

function manifestFiles(root: string, stack: LanguageStack): string[] {
  const marker = LANGUAGE_MARKERS.find((m) => m.stack === stack);
  const named = marker.files.filter((file) => existsSync(join(root, file)));
  const byExtension = marker.extensions
    ? rootFilesWithExtension(root, marker.extensions)
    : [];
  return [...named, ...byExtension];
}

function manifestText(root: string, stack: LanguageStack): string {
  return manifestFiles(root, stack)
    .map((file) => readText(join(root, file)))
    .join("\n")
    .toLowerCase();
}

function detectLanguageStack(root: string): LanguageStack | null {
  for (const { stack } of LANGUAGE_MARKERS) {
    if (manifestFiles(root, stack).length > 0) return stack;
  }
  return null;
}

export function detectStack(root: string): Stack {
  const pkg = readPackageJson(root);
  if (packageDeps(pkg).next) return "next";
  const language = detectLanguageStack(root);
  if (language) return language;
  if (pkg) return "node";
  return "generic";
}

function firstMatch(text: string, pattern: RegExp): string | null {
  const match = pattern.exec(text);
  return match ? match[1].trim() : null;
}

function lastSegment(value: string): string {
  return value.split("/").filter(Boolean).pop() ?? value;
}

function languageProjectName(root: string, stack: Stack): string | null {
  switch (stack) {
    case "python":
      return firstMatch(readText(join(root, "pyproject.toml")), /^\s*name\s*=\s*["']([^"']+)["']/m);
    case "go": {
      const module = firstMatch(readText(join(root, "go.mod")), /^module\s+(\S+)/m);
      return module ? lastSegment(module) : null;
    }
    case "jvm": {
      const pom = readText(join(root, "pom.xml"))
        .replace(/<parent>[\s\S]*?<\/parent>/, "")
        .replace(/<dependencies>[\s\S]*<\/dependencies>/, "");
      return (
        firstMatch(pom, /<artifactId>([^<]+)<\/artifactId>/) ??
        firstMatch(
          readText(join(root, "settings.gradle")) + readText(join(root, "settings.gradle.kts")),
          /rootProject\.name\s*=\s*["']([^"']+)["']/,
        )
      );
    }
    case "dotnet": {
      const [project] = rootFilesWithExtension(root, [".sln", ".csproj", ".fsproj"]);
      return project ? project.replace(/\.(sln|csproj|fsproj)$/, "") : null;
    }
    case "php": {
      const name = (JSON.parse(readText(join(root, "composer.json")) || "{}") as { name?: string }).name;
      return name ? lastSegment(name) : null;
    }
    case "rust":
      return firstMatch(readText(join(root, "Cargo.toml")), /^\s*name\s*=\s*["']([^"']+)["']/m);
    default:
      return null;
  }
}

export function detectProjectName(root: string, stack: Stack): string {
  return (
    readPackageJson(root)?.name ??
    languageProjectName(root, stack) ??
    basename(root)
  );
}

function isBackend(root: string, stack: Stack, pkg: PackageJson | null): boolean {
  const deps = packageDeps(pkg);
  if (BACKEND_NODE_DEPS.some((dep) => deps[dep])) return true;
  if (stack === "next") {
    return NEXT_API_DIRS.some((dir) => existsSync(join(root, dir)));
  }
  if (stack === "node" || stack === "generic") return false;
  if (stack === "python" && existsSync(join(root, "manage.py"))) return true;
  return BACKEND_FRAMEWORKS[stack].test(manifestText(root, stack));
}

export function resolveProfile(
  root: string,
  overrides: ProfileOverrides = {},
): ProjectProfile {
  const stack = overrides.stack ?? detectStack(root);
  const pkg = readPackageJson(root);
  const deps = packageDeps(pkg);
  const frontend = FRONTEND_NODE_DEPS.some((dep) => deps[dep]);
  const backend = isBackend(root, stack, pkg);
  const modules: Record<OptionalModule, boolean> = {
    sonar: SONAR_STACKS.has(stack),
    bruno: backend,
    images: frontend,
  };

  for (const module of overrides.with ?? []) {
    if (module === "sonar" && !SONAR_STACKS.has(stack)) {
      console.warn(`  sonar: SonarQube cannot scan the ${stack} stack, skipping`);
      continue;
    }
    modules[module] = true;
  }
  for (const module of overrides.without ?? []) {
    modules[module] = false;
  }

  return {
    stack,
    name: detectProjectName(root, stack),
    frontend,
    backend,
    react: Boolean(deps.react) || existsSync(join(root, "components.json")),
    ...modules,
  };
}

export function isNodeStack(stack: Stack): boolean {
  return stack === "next" || stack === "node";
}

export function parseStack(value: string): Stack {
  if ((STACKS as readonly string[]).includes(value)) return value as Stack;
  throw new Error(`Unknown stack "${value}". Use one of: ${STACKS.join(", ")}`);
}

export function parseModules(value: string): OptionalModule[] {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => {
      if ((OPTIONAL_MODULES as readonly string[]).includes(item)) {
        return item as OptionalModule;
      }
      throw new Error(
        `Unknown module "${item}". Use one of: ${OPTIONAL_MODULES.join(", ")}`,
      );
    });
}
