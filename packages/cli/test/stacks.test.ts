import assert from "node:assert/strict";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import {
  applyBlueprintToProject,
  gitignoreLines,
  mergePackageJson,
  NEXT_PROFILE,
} from "../commands/blueprint.js";
import { sonarPropertiesFor } from "../commands/sonar.js";
import {
  detectProjectName,
  detectStack,
  parseModules,
  parseStack,
  resolveProfile,
} from "../utils/stack.js";

function withFiles(files: Record<string, string>, run: (root: string) => void | Promise<void>) {
  return async () => {
    const root = mkdtempSync(join(tmpdir(), "aura-stack-"));
    try {
      for (const [rel, content] of Object.entries(files)) {
        mkdirSync(dirname(join(root, rel)), { recursive: true });
        writeFileSync(join(root, rel), content);
      }
      await run(root);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  };
}

const quiet = { ...console };

function silence(): void {
  console.log = () => {};
  console.warn = () => {};
}

function restore(): void {
  console.log = quiet.log;
  console.warn = quiet.warn;
}

async function blueprint(root: string, options = {}): Promise<void> {
  silence();
  try {
    await applyBlueprintToProject(root, options);
  } finally {
    restore();
  }
}

const read = (root: string, rel: string) => readFileSync(join(root, rel), "utf8");
const exists = (root: string, rel: string) => existsSync(join(root, rel));

describe("stack detection", () => {
  it(
    "detects each language from its manifest",
    withFiles({}, (root) => {
      const cases: [string, string][] = [
        ["pyproject.toml", "python"],
        ["requirements.txt", "python"],
        ["go.mod", "go"],
        ["pom.xml", "jvm"],
        ["build.gradle.kts", "jvm"],
        ["Api.csproj", "dotnet"],
        ["composer.json", "php"],
        ["Gemfile", "ruby"],
        ["Cargo.toml", "rust"],
      ];
      for (const [file, stack] of cases) {
        const dir = join(root, stack + file.replace(/\W/g, ""));
        mkdirSync(dir);
        writeFileSync(join(dir, file), "{}");
        assert.equal(detectStack(dir), stack, file);
      }
      assert.equal(detectStack(root), "generic");
    }),
  );

  it(
    "prefers Next, then a server language, then plain Node",
    withFiles(
      {
        "next/package.json": JSON.stringify({ dependencies: { next: "15" } }),
        "next/requirements.txt": "",
        "laravel/package.json": JSON.stringify({ devDependencies: { vite: "6" } }),
        "laravel/composer.json": JSON.stringify({ require: { "laravel/framework": "^11" } }),
        "lib/package.json": JSON.stringify({ name: "lib" }),
      },
      (root) => {
        assert.equal(detectStack(join(root, "next")), "next");
        assert.equal(detectStack(join(root, "laravel")), "php");
        assert.equal(detectStack(join(root, "lib")), "node");
        const laravel = resolveProfile(join(root, "laravel"));
        assert.equal(laravel.backend, true);
        assert.equal(laravel.frontend, true);
        assert.equal(laravel.images, true);
        assert.equal(laravel.bruno, true);
      },
    ),
  );

  it(
    "reads the project name from each manifest",
    withFiles(
      {
        "py/pyproject.toml": '[project]\nname = "acme-billing"\n',
        "go/go.mod": "module github.com/acme/ledger\n\ngo 1.22\n",
        "jvm/pom.xml":
          "<project><parent><artifactId>spring-boot-starter-parent</artifactId></parent><artifactId>orders</artifactId></project>",
        "php/composer.json": JSON.stringify({ name: "acme/catalog" }),
        "rs/Cargo.toml": '[package]\nname = "edge"\n',
        "rb/Gemfile": "",
      },
      (root) => {
        assert.equal(detectProjectName(join(root, "py"), "python"), "acme-billing");
        assert.equal(detectProjectName(join(root, "go"), "go"), "ledger");
        assert.equal(detectProjectName(join(root, "jvm"), "jvm"), "orders");
        assert.equal(detectProjectName(join(root, "php"), "php"), "catalog");
        assert.equal(detectProjectName(join(root, "rs"), "rust"), "edge");
        assert.equal(detectProjectName(join(root, "rb"), "ruby"), "rb");
      },
    ),
  );

  it(
    "marks backends by framework and Next by its API routes",
    withFiles(
      {
        "api/requirements.txt": "fastapi==0.115\n",
        "lib/pyproject.toml": '[project]\nname = "util"\ndependencies = ["pydantic"]\n',
        "django/manage.py": "",
        "django/requirements.txt": "",
        "gin/go.mod": "module x\nrequire github.com/gin-gonic/gin v1.10.0\n",
        "web/Api.csproj": '<Project Sdk="Microsoft.NET.Sdk.Web"></Project>',
        "rails/Gemfile": 'gem "rails", "~> 7.1"\n',
        "axum/Cargo.toml": '[dependencies]\naxum = "0.7"\n',
        "spring/pom.xml": "<artifactId>spring-boot-starter-web</artifactId>",
        "express/package.json": JSON.stringify({ dependencies: { express: "4" } }),
        "next-api/package.json": JSON.stringify({ dependencies: { next: "15", react: "19" } }),
        "next-api/app/api/health/route.ts": "",
        "next/package.json": JSON.stringify({ dependencies: { next: "15", react: "19" } }),
      },
      (root) => {
        for (const dir of ["api", "django", "gin", "web", "rails", "axum", "spring", "express", "next-api"]) {
          assert.equal(resolveProfile(join(root, dir)).bruno, true, dir);
        }
        for (const dir of ["lib", "next"]) {
          assert.equal(resolveProfile(join(root, dir)).bruno, false, dir);
        }
      },
    ),
  );

  it(
    "enables Sonar only where SonarQube can scan",
    withFiles({ "Cargo.toml": '[dependencies]\naxum = "0.7"\n' }, (root) => {
      silence();
      try {
        assert.equal(resolveProfile(root).sonar, false);
        assert.equal(resolveProfile(root, { with: ["sonar"] }).sonar, false);
        assert.equal(resolveProfile(root, { stack: "go" }).sonar, true);
        assert.equal(resolveProfile(root, { without: ["bruno"] }).bruno, false);
        assert.equal(resolveProfile(root, { stack: "generic", with: ["bruno"] }).bruno, true);
      } finally {
        restore();
      }
    }),
  );

  it("rejects unknown stacks and modules", () => {
    assert.equal(parseStack("python"), "python");
    assert.deepEqual(parseModules("sonar, bruno"), ["sonar", "bruno"]);
    assert.throws(() => parseStack("cobol"), /Unknown stack/);
    assert.throws(() => parseModules("wiki"), /Unknown module/);
  });
});

describe("blueprint per stack", () => {
  it(
    "scaffolds agents, wiki, Sonar, and Bruno in a FastAPI backend without package.json",
    withFiles(
      { "pyproject.toml": '[project]\nname = "acme-billing"\ndependencies = ["fastapi"]\n' },
      async (root) => {
        await blueprint(root);

        assert.ok(exists(root, ".agents/rules/feature-map.mdc"));
        assert.ok(exists(root, ".agents/rules/no-comments.mdc"));
        assert.ok(exists(root, ".agents/skills/update-feature-map/SKILL.md"));
        assert.ok(exists(root, "wiki/obsidian-billing/Feature-Map/Feature-Map.base"));
        assert.equal(exists(root, "wiki/obsidian-billing/01-Identity/Image-Identity.md"), false);

        assert.match(read(root, "sonar-project.properties"), /sonar\.python\.version=3/);
        const sonar = read(root, "scripts/sonar.sh");
        assert.match(sonar, /PROJECT_KEY="acme-billing"/);
        assert.match(sonar, /SCANNER="cli"/);
        assert.equal(statSync(join(root, "scripts/sonar.sh")).mode & 0o111, 0o111);

        assert.match(read(root, "bruno/bruno.json"), /"name": "acme-billing"/);
        assert.match(read(root, "bruno/environments/local.bru"), /localhost:8000/);
        assert.match(read(root, "bruno/health.bru"), /\{\{baseUrl\}\}\/health/);
        assert.ok(exists(root, ".agents/rules/bruno.mdc"));

        const gitignore = read(root, ".gitignore").split("\n");
        for (const line of [".env", ".sonar-token", "bruno/.env"]) {
          assert.ok(gitignore.includes(line), line);
        }

        for (const rel of [
          "package.json",
          "scripts/preflight.ts",
          ".agents/skills/aura-forms",
          ".agents/skills/generate-brand-images",
          ".env.example",
          "proofs",
        ]) {
          assert.equal(exists(root, rel), false, rel);
        }
      },
    ),
  );

  it(
    "adds only agent files and the wiki for an unknown stack",
    withFiles({ "main.c": "int main(){}" }, async (root) => {
      await blueprint(root, { suffix: "firmware" });
      assert.ok(exists(root, ".agents/rules/feature-map.mdc"));
      assert.ok(exists(root, "wiki/obsidian-firmware/Feature-Map/Feature-Map.base"));
      for (const rel of ["sonar-project.properties", "scripts/sonar.sh", "bruno", "scripts/preflight.ts"]) {
        assert.equal(exists(root, rel), false, rel);
      }
      assert.equal(read(root, ".gitignore"), ".env\n");
    }),
  );

  it(
    "adds Bruno but no Sonar for a Rust backend",
    withFiles({ "Cargo.toml": '[package]\nname = "edge"\n[dependencies]\naxum = "0.7"\n' }, async (root) => {
      await blueprint(root);
      assert.match(read(root, "bruno/environments/local.bru"), /localhost:8080/);
      assert.equal(exists(root, "sonar-project.properties"), false);
      assert.equal(exists(root, "scripts/sonar.sh"), false);
    }),
  );

  it(
    "uses the .NET scanner without a properties file",
    withFiles({ "Api.csproj": '<Project Sdk="Microsoft.NET.Sdk.Web"></Project>' }, async (root) => {
      await blueprint(root);
      assert.equal(exists(root, "sonar-project.properties"), false);
      assert.match(read(root, "scripts/sonar.sh"), /SCANNER="dotnet"/);
      assert.ok(read(root, ".gitignore").split("\n").includes(".sonarqube/"));
      assert.match(read(root, "bruno/environments/local.bru"), /localhost:5000/);
    }),
  );

  it(
    "points JVM Sonar at the build tool output",
    withFiles({ "maven/pom.xml": "<project/>", "gradle/build.gradle.kts": "", "gradle/src/test/X.kt": "" }, (root) => {
      const maven = sonarPropertiesFor(join(root, "maven"), "jvm");
      const gradle = sonarPropertiesFor(join(root, "gradle"), "jvm");
      assert.match(maven, /sonar\.java\.binaries=target\/classes/);
      assert.doesNotMatch(maven, /sonar\.tests=/);
      assert.match(gradle, /sonar\.java\.binaries=build\/classes/);
      assert.match(gradle, /sonar\.tests=src\/test/);
    }),
  );

  it(
    "keeps every Next script and the Next Sonar config",
    withFiles({ "package.json": JSON.stringify({ name: "acme-shop" }) }, (root) => {
      silence();
      try {
        mergePackageJson(root, NEXT_PROFILE);
      } finally {
        restore();
      }
      const pkg = JSON.parse(read(root, "package.json"));
      assert.deepEqual(Object.keys(pkg.scripts), [
        "preflight",
        "ai:image",
        "dev:server",
        "dev",
        "typecheck",
        "sonar:up",
        "sonar:setup",
        "sonar:scan",
        "sonar:report",
        "sonar:full",
      ]);
      assert.deepEqual(Object.keys(pkg.devDependencies), ["sonarqube-scanner", "tsx"]);
      assert.deepEqual(gitignoreLines(NEXT_PROFILE), [
        ".env",
        ".sonar-token",
        "sonar-issues.json",
        ".scannerwork/",
      ]);
      assert.match(sonarPropertiesFor(root, "next"), /sonar\.typescript\.tsconfigPath/);
    }),
  );

  it(
    "gives a Node API the Node scripts without the Next dev server or images",
    withFiles({ "package.json": JSON.stringify({ name: "acme-api", dependencies: { express: "4" } }) }, (root) => {
      const profile = resolveProfile(root);
      assert.equal(profile.stack, "node");
      assert.equal(profile.images, false);
      assert.equal(profile.react, false);
      silence();
      try {
        mergePackageJson(root, profile);
      } finally {
        restore();
      }
      const scripts = Object.keys(JSON.parse(read(root, "package.json")).scripts);
      assert.ok(scripts.includes("preflight"));
      assert.ok(scripts.includes("sonar:scan"));
      for (const name of ["dev", "dev:server", "ai:image"]) {
        assert.equal(scripts.includes(name), false, name);
      }
    }),
  );
});

describe("bruno rule docs", () => {
  it("publishes every line of the CLI rule on the docs page", () => {
    const rule = readFileSync(
      fileURLToPath(new URL("../templates/agents/rules/bruno.mdc", import.meta.url)),
      "utf8",
    );
    const page = readFileSync(
      fileURLToPath(new URL("../../../apps/www/content/docs/rules/bruno.mdx", import.meta.url)),
      "utf8",
    );
    const body = rule.replace(/^---[\s\S]*?---\n/, "");
    for (const line of body.split("\n").filter((l) => l.trim())) {
      assert.ok(page.includes(line), line);
    }
  });
});
