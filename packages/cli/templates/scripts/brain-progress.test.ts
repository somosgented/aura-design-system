import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import {
  mergeArchive,
  parseIsoDate,
  parseProgress,
  planRotation,
  renderArchive,
  renderProgress,
  runBrainProgress,
} from "./brain-progress";

const TODAY = parseIsoDate("2026-10-09");
if (!TODAY) throw new Error("fixture date");

function progress(body: { summary?: string; active?: string; sessions?: string; context?: string; extraSection?: string }): string {
  return `---
title: Internal Progress
date: 2026-10-09
retention: 5
tags: [dev-log, logic, architecture]
---
## Summary
${body.summary ?? "The system is up. One fact remains."}
${body.extraSection ?? ""}
## Active
${body.active ?? "- [ ] Stay open (since 2026-10-01)"}

## Sessions
${body.sessions ?? "### 2026-10-09 · Day\n- Work [[Note]]"}

## Context
${body.context ?? "- Related: [[Note]]"}
`;
}

function sessionsFor(dates: string[]): string {
  return dates.map((date) => `### ${date} · Day ${date}\n- Work [[Note]]`).join("\n\n");
}

describe("brain-progress", () => {
  it("counts prose sentences and ignores periods inside inline code", () => {
    const parsed = parseProgress(
      progress({
        summary:
          "Auth.js supplies EDI attributes to the PDP in `config/authorization.yml`. Classes come from API Service. Topics persist in Prisma. QA smoke covers moderation.",
      }),
    );
    if (!parsed.ok) throw new Error(JSON.stringify(parsed.errors));

    const plan = planRotation(parsed.doc, TODAY);

    expect(plan.warnings).toEqual([]);
  });

  it("rejects an unknown ## Status section", () => {
    const parsed = parseProgress(
      progress({
        extraSection: "## Status\n**Aura agent surface (2026-10-09):** rules and skills.\n\n",
      }),
    );

    expect(parsed.ok).toBe(false);
    if (parsed.ok) return;
    expect(parsed.errors).toContainEqual({ kind: "unknown-section", heading: "## Status" });
  });

  it("keeps five sessions and evicts the sixth", () => {
    const parsed = parseProgress(
      progress({
        sessions: sessionsFor([
          "2026-10-01",
          "2026-10-02",
          "2026-10-03",
          "2026-10-04",
          "2026-10-05",
          "2026-10-06",
        ]),
      }),
    );
    if (!parsed.ok) throw new Error(JSON.stringify(parsed.errors));

    const plan = planRotation(parsed.doc, TODAY);

    expect(plan.live.sessions.map((session) => session.title)).toEqual([
      "Day 2026-10-06",
      "Day 2026-10-05",
      "Day 2026-10-04",
      "Day 2026-10-03",
      "Day 2026-10-02",
    ]);
    expect(plan.evicted.map((session) => session.title)).toEqual(["Day 2026-10-01"]);
    expect(plan.warnings.map((warning) => warning.kind)).toEqual([]);
    expect(renderProgress(plan.live, ["2026-10"], TODAY)).toBe(`---
title: Internal Progress
date: 2026-10-06
retention: 5
tags: [dev-log, logic, architecture]
---
## Summary
The system is up. One fact remains.

## Active
- [ ] Stay open (since 2026-10-01)

## Sessions
### 2026-10-06 · Day 2026-10-06
- Work [[Note]]

### 2026-10-05 · Day 2026-10-05
- Work [[Note]]

### 2026-10-04 · Day 2026-10-04
- Work [[Note]]

### 2026-10-03 · Day 2026-10-03
- Work [[Note]]

### 2026-10-02 · Day 2026-10-02
- Work [[Note]]

Older sessions: [[Progress-Archive/2026-10]]

## Context
- Related: [[Note]]
`);
  });

  it("removes a closed Active item from the live file and archives it", () => {
    const parsed = parseProgress(
      progress({
        active: "- [x] Finished the migration (since 2026-10-02)\n- [ ] Stay open (since 2026-10-01)",
        sessions: "### 2026-10-06 · Day 2026-10-06\n- Work [[Note]]",
      }),
    );
    if (!parsed.ok) throw new Error(JSON.stringify(parsed.errors));

    const plan = planRotation(parsed.doc, TODAY);
    const archive = mergeArchive(null, "2026-10", plan.evicted, plan.closed, TODAY);

    expect(plan.live.active.map((item) => item.text)).toEqual(["Stay open"]);
    expect(plan.closed.map((item) => item.text)).toEqual(["Finished the migration"]);
    expect(renderProgress(plan.live, [], TODAY)).toContain("- [ ] Stay open (since 2026-10-01)");
    expect(renderArchive(archive)).toBe(`---
title: Progress Archive 2026-10
month: 2026-10
tags: [dev-log, logic, architecture]
---
## Sessions

## Closed
- [x] Finished the migration (since 2026-10-02) (closed 2026-10-09)
`);
  });

  it("leaves files unchanged on a second run", () => {
    const root = mkdtempSync(join(tmpdir(), "brain-progress-"));
    try {
      const general = join(root, "wiki", "obsidian-foros-desacoplado", "00-General");
      mkdirSync(general, { recursive: true });
      writeFileSync(join(root, "package.json"), JSON.stringify({ name: "next-foros-desacoplado" }));
      writeFileSync(
        join(general, "Internal-Progress.md"),
        progress({
          active: "- [x] Finished the migration (since 2026-10-02)\n- [ ] Stay open (since 2026-10-01)",
          sessions: sessionsFor([
            "2026-10-01",
            "2026-10-02",
            "2026-10-03",
            "2026-10-04",
            "2026-10-05",
            "2026-10-06",
          ]),
        }),
      );

      const first = runBrainProgress(["brain-progress"], { root, today: "2026-10-09" });
      const live = readFileSync(join(general, "Internal-Progress.md"), "utf8");
      const october = readFileSync(join(general, "Progress-Archive", "2026-10.md"), "utf8");
      const second = runBrainProgress(["brain-progress"], { root, today: "2026-10-09" });

      expect(first).toBe(0);
      expect(second).toBe(0);
      expect(readFileSync(join(general, "Internal-Progress.md"), "utf8")).toBe(live);
      expect(readFileSync(join(general, "Progress-Archive", "2026-10.md"), "utf8")).toBe(october);
      expect(live.match(/^### /gm)?.length).toBe(5);
      expect(live).toContain("- [ ] Stay open (since 2026-10-01)");
      expect(october).toContain("### 2026-10-01 · Day 2026-10-01");
      expect(october).toContain("- [x] Finished the migration (since 2026-10-02) (closed 2026-10-09)");
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});
