import { existsSync, mkdirSync, writeFileSync } from "fs";
import { dirname } from "path";
import { Command } from "commander";
import inquirer from "inquirer";
import { executeColors, resolveGlobalsCssPath } from "../utils/color-theme.js";

function writeTextFile(filePath: string, contents: string): void {
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, contents, "utf-8");
}

export function writeGlobalsCss(cwd: string, css: string): string {
  const globalsPath = resolveGlobalsCssPath({
    cwd,
    isFile: (filePath) => existsSync(filePath),
  });
  writeTextFile(globalsPath, css);
  return globalsPath;
}

async function askOnConsole(message: string): Promise<string> {
  const answers = await inquirer.prompt<{ value: string }>([
    {
      type: "input",
      name: "value",
      message,
    },
  ]);
  return answers.value;
}

export function registerColorsCommand(program: Command) {
  program
    .command("colors")
    .description("Generate Aura colors and write globals.css when the WCAG report passes")
    .option("--accent <hex>", "Accent seed")
    .option("--gray <hex>", "Gray seed")
    .option("--background <hex>", "Optional light canvas")
    .action(async (options: { accent?: string; gray?: string; background?: string }) => {
      const result = await executeColors(
        {
          accent: options.accent,
          gray: options.gray,
          background: options.background,
        },
        {
          cwd: process.cwd(),
          isFile: (filePath) => existsSync(filePath),
          writeFile: writeTextFile,
          ask: askOnConsole,
          log: (line) => {
            console.log(line);
          },
        },
      );
      process.exitCode = result.exitCode;
    });
}
