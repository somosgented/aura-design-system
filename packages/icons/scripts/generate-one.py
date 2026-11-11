#!/usr/bin/env python3
"""Generate ONE Aura icon via Claude Code CLI (sequential, no Radix path paste).

The model receives:
  - Aura taste rules
  - store.svg + cross.svg as style anchors only
  - the icon filename / metaphor name

It does NOT receive Radix SVG markup or path data.

Usage:
  set -a && source ../../.env && set +a
  python3 scripts/generate-one.py check
  python3 scripts/generate-one.py lock-open-1
"""

from __future__ import annotations

import json
import os
import re
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REPO = ROOT.parents[1]
ICONS_DIR = ROOT / "icons"
LOG_FILE = ROOT / ".generation" / "generation-log.jsonl"
TASTE_FILE = REPO / ".agents/skills/generate-aura-icons/reference/taste.md"

SVG_RE = re.compile(r"<svg[\s\S]*?</svg>", re.I)


def extract_svg(text: str) -> str | None:
    match = SVG_RE.search(text)
    if not match:
        return None
    svg = match.group(0).strip()
    if 'viewBox="0 0 24 24"' not in svg and "viewBox='0 0 24 24'" not in svg:
        return None
    if re.search(r'stroke="(?!none)[^"]+"', svg) or re.search(
        r"stroke='(?!none)[^']+'", svg
    ):
        return None
    if "currentColor" not in svg:
        return None
    return svg


def main() -> int:
    if len(sys.argv) != 2:
        print("usage: generate-one.py <icon-stem>", file=sys.stderr)
        return 1
    if not os.environ.get("ANTHROPIC_API_KEY"):
        print("ANTHROPIC_API_KEY is not set", file=sys.stderr)
        return 1

    stem = sys.argv[1].removesuffix(".svg")
    filename = f"{stem}.svg"
    taste = TASTE_FILE.read_text()
    store = (ICONS_DIR / "store.svg").read_text().strip()
    cross = (ICONS_DIR / "cross.svg").read_text().strip()

    system = f"""You invent original Aura icon SVGs. You never copy another icon library's path data.

# Taste
{taste}

# Style anchors only (match weight and construction; do not copy their shapes for unrelated metaphors)
## store.svg
{store}

## cross.svg
{cross}

# Hard rules
- Output ONLY one SVG document. No markdown fences. No commentary.
- Shell: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">...</svg>
- fill="currentColor" paths only (filled outline / rings). No stroke= attributes.
- Soft smooth terminals. Original geometry for the requested metaphor.
"""

    user = f"""Draw a brand-new Aura icon.

Filename: {filename}
Metaphor / subject: {stem.replace("-", " ")}

Invent original filled-outline paths in Aura taste. Do not recall or paste Radix, Lucide, Heroicons, or any other library paths.
"""

    started = time.time()
    print(f"claude -p --bare → {filename}", flush=True)
    proc = subprocess.run(
        [
            "claude",
            "-p",
            "--bare",
            "--output-format",
            "text",
            "--append-system-prompt",
            system,
            user,
        ],
        capture_output=True,
        text=True,
        timeout=180,
        env=os.environ.copy(),
    )
    elapsed = int((time.time() - started) * 1000)
    out = (proc.stdout or "").strip()
    record = {
        "name": filename,
        "command": "claude -p --bare",
        "exitCode": proc.returncode,
        "elapsedMs": elapsed,
        "startedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "mode": "generate-one",
        "radixPathsProvided": False,
    }

    LOG_FILE.parent.mkdir(parents=True, exist_ok=True)
    if proc.returncode != 0:
        record["ok"] = False
        record["error"] = ((proc.stderr or out)[:500])
        LOG_FILE.open("a").write(json.dumps(record) + "\n")
        print(record["error"], file=sys.stderr)
        return 2

    svg = extract_svg(out)
    if not svg:
        record["ok"] = False
        record["error"] = f"invalid_svg:{(out[:300])}"
        LOG_FILE.open("a").write(json.dumps(record) + "\n")
        print(record["error"], file=sys.stderr)
        return 3

    (ICONS_DIR / filename).write_text(svg + "\n")
    record["ok"] = True
    record["bytes"] = len(svg)
    LOG_FILE.open("a").write(json.dumps(record) + "\n")
    print(f"OK {filename} {elapsed}ms bytes={len(svg)}", flush=True)
    print(svg)

    sync = subprocess.run(
        ["pnpm", "exec", "tsx", "scripts/generate-src.ts"],
        cwd=ROOT,
        capture_output=True,
        text=True,
        timeout=60,
        env=os.environ.copy(),
    )
    if sync.returncode != 0:
        print(
            f"generate-src failed: {(sync.stderr or sync.stdout)[:400]}",
            file=sys.stderr,
        )
        return 4
    print(
        f"synced src → http://localhost:4000/icons (search: {stem})",
        flush=True,
    )

    try:
        subprocess.run(
            [
                "curl",
                "-fsS",
                "-o",
                "/dev/null",
                "-w",
                "www_icons_http=%{http_code}\n",
                "http://localhost:4000/icons",
            ],
            capture_output=True,
            text=True,
            timeout=15,
            check=False,
        )
    except (OSError, subprocess.TimeoutExpired):
        pass

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
