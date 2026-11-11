#!/usr/bin/env python3
"""Generate ONE Aura icon via Claude Code CLI with validate-and-iterate.

The model receives taste + store/cross anchors + metaphor name only (no library paths).
After each draft: structural checks, then a Claude review. Failures regenerate with
feedback until pass or max attempts.

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

MAX_ATTEMPTS = 4
SVG_RE = re.compile(r"<svg[\s\S]*?</svg>", re.I)
JSON_RE = re.compile(r"\{[\s\S]*\}")

FAMILY_SIBLINGS: dict[str, tuple[str, ...]] = {
    "group": ("person",),
    "team": ("person",),
    "person-add": ("person",),
    "person-delete": ("person",),
    "person-check": ("person",),
    "face": ("person",),
    "id-card": ("person",),
    "contacts": ("person",),
}

METAPHOR_HINTS: dict[str, str] = {
    "group": "abstracted users-three: front person-language figure + two rear head/shoulder peeks; not three full person clones",
    "team": "small people cluster implying teammates, distinct from a single person",
    "person-add": "exact person.svg paths plus a plus badge",
    "person-delete": "exact person.svg paths plus a minus badge",
    "person-check": "exact person.svg paths plus a check badge",
    "face": "simple human face mark in the same weight family as person",
    "id-card": "identification card with a small person cue",
    "contacts": "address-book / contacts with a person cue",
}

PERSON_BADGE_VARIANTS: dict[str, str] = {
    "person-add": (
        '<path d="M 20.85 1.0 A 0.4 0.4 0 0 1 21.65 1.0 L 21.65 2.35 L 23.0 2.35 A 0.4 0.4 0 0 1 23.0 3.15 L 21.65 3.15 L 21.65 4.5 A 0.4 0.4 0 0 1 20.85 4.5 L 20.85 3.15 L 19.5 3.15 A 0.4 0.4 0 0 1 19.5 2.35 L 20.85 2.35 Z" fill="currentColor" />'
    ),
    "person-delete": (
        '<path d="M 19.5 2.35 L 23.0 2.35 A 0.4 0.4 0 0 1 23.0 3.15 L 19.5 3.15 A 0.4 0.4 0 0 1 19.5 2.35 Z" fill="currentColor" />'
    ),
    "person-check": (
        '<path d="M 20.65 3.334 L 19.833 2.517 A 0.4 0.4 0 0 0 19.267 3.083 L 20.367 4.183 A 0.4 0.4 0 0 0 20.933 4.183 L 23.283 1.833 A 0.4 0.4 0 0 0 22.717 1.267 Z" fill="currentColor" />'
    ),
}



def _transform_person_path_el(el: str, scale: float, tx: float, ty: float) -> str:
    match = re.search(r'\bd="([^"]*)"', el)
    if not match:
        return el
    tokens = re.findall(
        r"[MmLlHhVvCcSsQqTtAaZz]|[-+]?(?:\d*\.\d+|\d+)(?:[eE][-+]?\d+)?",
        match.group(1),
    )
    out: list[str] = []
    i = 0
    cmd = ""
    ox = oy = 12.0

    def fmt(n: float) -> str:
        s = f"{n:.4f}".rstrip("0").rstrip(".")
        return s if s else "0"

    def map_pt(x: float, y: float) -> tuple[float, float]:
        return (x - ox) * scale + ox + tx, (y - oy) * scale + oy + ty

    while i < len(tokens):
        t = tokens[i]
        if re.match(r"[A-Za-z]", t):
            cmd = t
            out.append(cmd)
            i += 1
            continue
        if cmd in "Aa":
            vals = [float(tokens[i + k]) for k in range(7)]
            i += 7
            rx, ry, xar, laf, sf, x, y = vals
            nx, ny = map_pt(x, y)
            out.extend(
                [fmt(rx * scale), fmt(ry * scale), fmt(xar), fmt(laf), fmt(sf), fmt(nx), fmt(ny)]
            )
        else:
            x = float(t)
            y = float(tokens[i + 1])
            i += 2
            nx, ny = map_pt(x, y)
            out.extend([fmt(nx), fmt(ny)])
    return el[: match.start(1)] + " ".join(out) + el[match.end(1) :]


def compose_group_from_person() -> str:
    person = (ICONS_DIR / "person.svg").read_text()
    paths = re.findall(r"<path\b[^>]*/?>", person)
    if len(paths) < 2:
        raise RuntimeError("person.svg must provide the base path elements")
    back_l = "".join(_transform_person_path_el(p, 0.48, -5.8, -2.0) for p in paths)
    back_r = "".join(_transform_person_path_el(p, 0.48, 5.8, -2.0) for p in paths)
    front = "".join(_transform_person_path_el(p, 0.66, 0.0, 2.1) for p in paths)
    body = back_l + back_r + front
    return (
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" '
        f'xmlns="http://www.w3.org/2000/svg">{body}</svg>'
    )


def compose_person_badge_variant(stem: str) -> str:
    person = (ICONS_DIR / "person.svg").read_text()
    paths = re.findall(r"<path\b[^>]*/?>", person)
    if len(paths) < 2:
        raise RuntimeError("person.svg must provide the base path elements")
    badge = PERSON_BADGE_VARIANTS[stem]
    body = "".join(paths) + badge
    return (
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" '
        f'xmlns="http://www.w3.org/2000/svg">{body}</svg>'
    )


def sibling_anchor_block(stem: str) -> str:
    names = FAMILY_SIBLINGS.get(stem, ())
    chunks: list[str] = []
    for name in names:
        path = ICONS_DIR / f"{name}.svg"
        if not path.exists():
            continue
        chunks.append(
            f"## {name}.svg (family sibling — match head/shoulder weight and ring construction; "
            f"vary only what the new metaphor needs)\n{path.read_text().strip()}"
        )
    return "\n\n".join(chunks)


def claude_text(system: str, user: str, timeout: int = 180) -> tuple[int, str, str, int]:
    started = time.time()
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
        timeout=timeout,
        env=os.environ.copy(),
    )
    elapsed = int((time.time() - started) * 1000)
    return proc.returncode, (proc.stdout or "").strip(), (proc.stderr or "").strip(), elapsed


def extract_svg(text: str) -> str | None:
    match = SVG_RE.search(text)
    if not match:
        return None
    svg = match.group(0).strip()
    if 'viewBox="0 0 24 24"' not in svg and "viewBox='0 0 24 24'" not in svg:
        return None
    if 'width="15"' not in svg and "width='15'" not in svg:
        return None
    if 'height="15"' not in svg and "height='15'" not in svg:
        return None
    if re.search(r'stroke="(?!none)[^"]+"', svg) or re.search(
        r"stroke='(?!none)[^']+'", svg
    ):
        return None
    if "currentColor" not in svg:
        return None
    if re.search(r"<(script|foreignObject|image|style)\b", svg, re.I):
        return None
    if not re.search(r"<path\b", svg, re.I):
        return None
    if not re.search(r'\bd="[^"]{8,}"', svg) and not re.search(r"\bd='[^']{8,}'", svg):
        return None
    return svg


def structural_issues(svg: str) -> list[str]:
    issues: list[str] = []
    if "fill=\"currentColor\"" not in svg and "fill='currentColor'" not in svg:
        issues.append("missing fill=currentColor on paths")
    if re.search(r'fill="(?!none|currentColor)[^"]+"', svg, re.I):
        issues.append("hard-coded fill color found")
    if len(svg) < 80:
        issues.append("svg too small / empty geometry")
    if len(svg) > 12000:
        issues.append("svg unusually large; simplify")
    return issues


def parse_review(text: str) -> dict:
    match = JSON_RE.search(text)
    if not match:
        return {
            "pass": False,
            "score": 0,
            "issues": ["review_did_not_return_json"],
            "requiredFixes": ["return valid JSON review"],
        }
    try:
        data = json.loads(match.group(0))
    except json.JSONDecodeError:
        return {
            "pass": False,
            "score": 0,
            "issues": ["review_json_parse_error"],
            "requiredFixes": ["return valid JSON review"],
        }
    issues = [str(x) for x in (data.get("issues") or []) if str(x).strip()]
    fixes = [str(x) for x in (data.get("requiredFixes") or []) if str(x).strip()]
    score = int(data.get("score") or 0)
    passed = bool(data.get("pass")) and score >= 7 and not issues and not fixes
    return {
        "pass": passed,
        "score": score,
        "issues": issues,
        "requiredFixes": fixes,
    }


def review_svg(
    stem: str,
    svg: str,
    taste: str,
    store: str,
    cross: str,
    siblings: str = "",
) -> dict:
    sibling_section = f"\n\n# Family siblings\n{siblings}\n" if siblings else ""
    family_rule = (
        "- Must clearly belong to the person family (same ring weight / head-shoulder language as person.svg)\n"
        if siblings
        else ""
    )
    system = f"""You are an Aura icon QA reviewer. Be strict.

# Taste
{taste}

# Style anchors (weight / construction reference only)
## store.svg
{store}

## cross.svg
{cross}
{sibling_section}"""
    user = f"""Review this candidate Aura icon.

Metaphor / filename: {stem}.svg ({stem.replace("-", " ")})
Metaphor hint: {METAPHOR_HINTS.get(stem, stem.replace("-", " "))}

Candidate SVG:
{svg}

Return ONLY one JSON object (no markdown), shape:
{{
  "pass": true or false,
  "score": 1-10,
  "issues": ["..."],
  "requiredFixes": ["..."]
}}

Pass only if ALL are true:
- Metaphor is obvious at ~15px
- Filled-outline / ring construction (no stroke paint)
- Soft smooth terminals
- Visual weight close to store/cross
- ~1–2 units padding from artboard edge; centered
- Original Aura geometry (not a paste of Radix/Lucide/Ant/Heroicons)
- One clear idea; no extra badges unless the metaphor is the badge
{family_rule}
Rules for the JSON:
- score >= 7 required for pass=true
- If anything is wrong, set pass=false and list concrete issues + requiredFixes
- If pass=true, issues and requiredFixes MUST be empty arrays
"""
    code, out, err, elapsed = claude_text(system, user, timeout=120)
    print(f"review {stem} {elapsed}ms exit={code}", flush=True)
    if code != 0:
        return {
            "pass": False,
            "score": 0,
            "issues": [f"review_cli_failed:{(err or out)[:200]}"],
            "requiredFixes": ["retry review"],
            "elapsedMs": elapsed,
        }
    result = parse_review(out)
    result["elapsedMs"] = elapsed
    return result


def sync_www(stem: str) -> int:
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
    print(f"synced src → http://localhost:4000/icons (search: {stem})", flush=True)
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


def main() -> int:
    if len(sys.argv) != 2:
        print("usage: generate-one.py <icon-stem>", file=sys.stderr)
        return 1
    if not os.environ.get("ANTHROPIC_API_KEY"):
        print("ANTHROPIC_API_KEY is not set", file=sys.stderr)
        return 1

    stem = sys.argv[1].removesuffix(".svg")
    filename = f"{stem}.svg"
    LOG_FILE.parent.mkdir(parents=True, exist_ok=True)

    if stem in PERSON_BADGE_VARIANTS:
        if not (ICONS_DIR / "person.svg").exists():
            print("person.svg is required as the base", file=sys.stderr)
            return 1
        svg = compose_person_badge_variant(stem)
        (ICONS_DIR / filename).write_text(svg + "\n")
        record = {
            "name": filename,
            "command": "compose-person-base",
            "ok": True,
            "bytes": len(svg),
            "startedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
            "mode": "person-family-compose",
            "baseIcon": "person.svg",
            "radixPathsProvided": False,
        }
        LOG_FILE.open("a").write(json.dumps(record) + "\n")
        print(f"OK {filename} composed from person.svg", flush=True)
        print(svg)
        return sync_www(stem)

    taste = TASTE_FILE.read_text()
    store = (ICONS_DIR / "store.svg").read_text().strip()
    cross = (ICONS_DIR / "cross.svg").read_text().strip()
    siblings = sibling_anchor_block(stem)
    sibling_section = f"\n\n# Family siblings\n{siblings}\n" if siblings else ""
    metaphor = METAPHOR_HINTS.get(stem, stem.replace("-", " "))

    gen_system = f"""You invent original Aura icon SVGs. You never copy another icon library's path data.

# Taste
{taste}

# Style anchors only (match weight and construction; do not copy their shapes for unrelated metaphors)
## store.svg
{store}

## cross.svg
{cross}
{sibling_section}
# Hard rules
- Output ONLY one SVG document. No markdown fences. No commentary.
- Shell: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">...</svg>
- fill="currentColor" paths only (filled outline / rings). No stroke= attributes.
- Soft smooth terminals. Original geometry for the requested metaphor.
- If family siblings are provided, keep the same construction language and only change what the new metaphor requires.
"""

    feedback: list[str] = []
    attempts_log: list[dict] = []
    best_svg: str | None = None
    best_score = -1

    for attempt in range(1, MAX_ATTEMPTS + 1):
        user = f"""Draw a brand-new Aura icon.

Filename: {filename}
Metaphor / subject: {metaphor}

Invent original filled-outline paths in Aura taste. Do not recall or paste Radix, Lucide, Ant Design, Heroicons, or any other library paths.
"""
        if feedback:
            user += (
                "\nPrevious draft failed QA. Fix ALL of these before redrawing:\n"
                + "\n".join(f"- {item}" for item in feedback)
                + "\nOutput a full replacement SVG, not a diff.\n"
            )

        print(f"claude -p --bare → {filename} (attempt {attempt}/{MAX_ATTEMPTS})", flush=True)
        code, out, err, elapsed = claude_text(gen_system, user)
        attempt_rec: dict = {
            "attempt": attempt,
            "generateMs": elapsed,
            "exitCode": code,
        }

        if code != 0:
            attempt_rec["ok"] = False
            attempt_rec["error"] = (err or out)[:500]
            attempts_log.append(attempt_rec)
            feedback = [f"generator failed: {(err or out)[:180]}"]
            print(attempt_rec["error"], file=sys.stderr)
            continue

        svg = extract_svg(out)
        if not svg:
            attempt_rec["ok"] = False
            attempt_rec["error"] = f"invalid_svg:{(out[:300])}"
            attempts_log.append(attempt_rec)
            feedback = [
                "SVG shell invalid: need width/height 15, viewBox 0 0 24 24, path fill=currentColor, no stroke paint",
                f"raw preview: {out[:180]}",
            ]
            print(attempt_rec["error"], file=sys.stderr)
            continue

        struct = structural_issues(svg)
        if struct:
            attempt_rec["ok"] = False
            attempt_rec["structuralIssues"] = struct
            attempts_log.append(attempt_rec)
            feedback = struct
            print(f"structural fail: {struct}", flush=True)
            continue

        review = review_svg(stem, svg, taste, store, cross, siblings)
        attempt_rec["review"] = {
            "pass": review["pass"],
            "score": review["score"],
            "issues": review["issues"],
            "requiredFixes": review["requiredFixes"],
            "elapsedMs": review.get("elapsedMs"),
        }
        print(
            f"QA score={review['score']} pass={review['pass']} issues={review['issues']}",
            flush=True,
        )

        if review["score"] > best_score:
            best_score = review["score"]
            best_svg = svg

        if review["pass"]:
            attempt_rec["ok"] = True
            attempts_log.append(attempt_rec)
            (ICONS_DIR / filename).write_text(svg + "\n")
            record = {
                "name": filename,
                "command": "claude -p --bare",
                "ok": True,
                "bytes": len(svg),
                "attempts": attempt,
                "score": review["score"],
                "startedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
                "mode": "generate-one-validate",
                "radixPathsProvided": False,
                "attemptLog": attempts_log,
            }
            LOG_FILE.open("a").write(json.dumps(record) + "\n")
            print(f"OK {filename} attempt={attempt} score={review['score']} bytes={len(svg)}", flush=True)
            print(svg)
            return sync_www(stem)

        attempt_rec["ok"] = False
        attempts_log.append(attempt_rec)
        feedback = []
        for issue in review["issues"]:
            feedback.append(str(issue))
        for fix in review["requiredFixes"]:
            feedback.append(str(fix))
        if not feedback:
            feedback = ["raise clarity and match store/cross weight; redraw cleanly"]

    if best_svg is not None and best_score >= 5:
        (ICONS_DIR / filename).write_text(best_svg + "\n")
        record = {
            "name": filename,
            "command": "claude -p --bare",
            "ok": False,
            "acceptedBestEffort": True,
            "bytes": len(best_svg),
            "attempts": MAX_ATTEMPTS,
            "score": best_score,
            "startedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
            "mode": "generate-one-validate",
            "radixPathsProvided": False,
            "attemptLog": attempts_log,
        }
        LOG_FILE.open("a").write(json.dumps(record) + "\n")
        print(
            f"BEST-EFFORT {filename} score={best_score} after {MAX_ATTEMPTS} attempts",
            flush=True,
        )
        print(best_svg)
        sync_www(stem)
        return 5

    record = {
        "name": filename,
        "command": "claude -p --bare",
        "ok": False,
        "error": "exhausted_attempts",
        "attempts": MAX_ATTEMPTS,
        "startedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "mode": "generate-one-validate",
        "radixPathsProvided": False,
        "attemptLog": attempts_log,
    }
    LOG_FILE.open("a").write(json.dumps(record) + "\n")
    print(f"FAILED {filename} after {MAX_ATTEMPTS} attempts", file=sys.stderr)
    return 3


if __name__ == "__main__":
    raise SystemExit(main())
