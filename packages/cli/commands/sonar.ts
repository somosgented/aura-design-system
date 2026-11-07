import { chmodSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { isNodeStack, type Stack } from "../utils/stack.js";

export const SONAR_SCRIPT = join("scripts", "sonar.sh");

const SHARED_EXCLUSIONS = [
  "**/node_modules/**",
  "**/.scannerwork/**",
  "**/.agents/**",
  "**/.cursor/**",
  "**/wiki/**",
  "**/bruno/**",
];

function templatesRoot(): string {
  const here = dirname(fileURLToPath(import.meta.url));
  return join(here, "..", "templates");
}

function properties(entries: [string, string][], exclusions: string[]): string {
  const lines = [
    ...entries.map(([key, value]) => `${key}=${value}`),
    `sonar.exclusions=${[...exclusions, ...SHARED_EXCLUSIONS].join(",")}`,
  ];
  return lines.join("\n") + "\n";
}

function jvmProperties(root: string): string {
  const gradle =
    existsSync(join(root, "build.gradle")) || existsSync(join(root, "build.gradle.kts"));
  const entries: [string, string][] = [
    ["sonar.sources", "src/main"],
    ["sonar.sourceEncoding", "UTF-8"],
    ["sonar.java.binaries", gradle ? "build/classes" : "target/classes"],
    [
      "sonar.coverage.jacoco.xmlReportPaths",
      gradle
        ? "build/reports/jacoco/test/jacocoTestReport.xml"
        : "target/site/jacoco/jacoco.xml",
    ],
  ];
  if (existsSync(join(root, "src", "test"))) entries.push(["sonar.tests", "src/test"]);
  return properties(entries, ["**/target/**", "**/build/**", "**/.gradle/**"]);
}

export function sonarPropertiesFor(root: string, stack: Stack): string | null {
  switch (stack) {
    case "next":
    case "node":
      return readFileSync(join(templatesRoot(), "sonar-project.properties"), "utf-8");
    case "python":
      return properties(
        [
          ["sonar.sources", "."],
          ["sonar.sourceEncoding", "UTF-8"],
          ["sonar.python.version", "3"],
          ["sonar.python.coverage.reportPaths", "coverage.xml"],
        ],
        [
          "**/.venv/**",
          "**/venv/**",
          "**/__pycache__/**",
          "**/.pytest_cache/**",
          "**/.mypy_cache/**",
          "**/.ruff_cache/**",
          "**/build/**",
          "**/dist/**",
        ],
      );
    case "go":
      return properties(
        [
          ["sonar.sources", "."],
          ["sonar.sourceEncoding", "UTF-8"],
          ["sonar.tests", "."],
          ["sonar.test.inclusions", "**/*_test.go"],
          ["sonar.test.exclusions", "**/vendor/**"],
          ["sonar.go.coverage.reportPaths", "coverage.out"],
        ],
        ["**/*_test.go", "**/vendor/**", "**/testdata/**"],
      );
    case "jvm":
      return jvmProperties(root);
    case "php":
      return properties(
        [
          ["sonar.sources", "."],
          ["sonar.sourceEncoding", "UTF-8"],
          ["sonar.php.coverage.reportPaths", "coverage.xml"],
        ],
        ["**/vendor/**", "**/storage/**", "**/bootstrap/cache/**", "**/public/build/**"],
      );
    case "ruby":
      return properties(
        [
          ["sonar.sources", "."],
          ["sonar.sourceEncoding", "UTF-8"],
          ["sonar.ruby.coverage.reportPaths", "coverage/.resultset.json"],
        ],
        ["**/vendor/**", "**/tmp/**", "**/log/**", "**/coverage/**"],
      );
    default:
      return null;
  }
}

export function sonarGitignoreLines(stack: Stack): string[] {
  const lines = [".sonar-token", "sonar-issues.json", ".scannerwork/"];
  return stack === "dotnet" ? [...lines, ".sonarqube/"] : lines;
}

function writeIfMissing(path: string, content: string, label: string): boolean {
  if (existsSync(path)) {
    console.log(`  skip (exists): ${label}`);
    return false;
  }
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content, "utf-8");
  console.log(`  write: ${label}`);
  return true;
}

export function scaffoldSonar(root: string, stack: Stack, projectKey: string): void {
  const props = sonarPropertiesFor(root, stack);
  if (props !== null) {
    writeIfMissing(join(root, "sonar-project.properties"), props, "sonar-project.properties");
  }
  if (isNodeStack(stack)) return;

  const script = readFileSync(join(templatesRoot(), "sonar", "sonar.sh"), "utf-8")
    .split("{{PROJECT_KEY}}")
    .join(projectKey)
    .split("{{SCANNER}}")
    .join(stack === "dotnet" ? "dotnet" : "cli");
  const path = join(root, SONAR_SCRIPT);
  if (writeIfMissing(path, script, SONAR_SCRIPT)) chmodSync(path, 0o755);
}
