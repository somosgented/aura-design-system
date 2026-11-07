import type { Options } from "execa";

const INSTALL_TIMEOUT_MS = 5 * 60 * 1000;

export function installerOptions(cwd: string): Options {
  const interactive = Boolean(process.stdin.isTTY);
  return {
    cwd,
    stdio: interactive ? "inherit" : ["ignore", "inherit", "inherit"],
    env: interactive ? undefined : { CI: "1" },
    timeout: INSTALL_TIMEOUT_MS,
  };
}
