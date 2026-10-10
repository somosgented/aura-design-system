#!/usr/bin/env node
import { existsSync, mkdirSync, readdirSync, readFileSync, realpathSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

declare const isoDateBrand: unique symbol;
declare const sessionKeyBrand: unique symbol;

type IsoDate = string & { readonly [isoDateBrand]: true };
type SessionKey = string & { readonly [sessionKeyBrand]: true };

type SectionName = "Summary" | "Active" | "Sessions" | "Context";

const SECTIONS: readonly SectionName[] = ["Summary", "Active", "Sessions", "Context"];
const STALE_AFTER_DAYS = 30;
const SESSION_WORD_BUDGET = 120;
const SUMMARY_SENTENCE_BUDGET = 4;
const HEADING_DOT = " · ";

interface ProgressDoc {
  frontmatter: {
    title: "Internal Progress";
    retention: number;
    tags: string[];
  };
  summary: string;
  active: ActiveItem[];
  sessions: Session[];
  context: string;
}

interface ActiveItem {
  done: boolean;
  text: string;
  since: IsoDate;
}

interface Session {
  key: SessionKey;
  date: IsoDate;
  title: string;
  body: string;
  links: string[];
}

interface ArchiveMonth {
  month: string;
  sessions: Session[];
  closed: Array<ActiveItem & { closedOn: IsoDate }>;
}

type Warning =
  | { kind: "promote"; session: SessionKey; date: IsoDate; title: string }
  | { kind: "missing-link"; session: SessionKey; date: IsoDate; title: string }
  | { kind: "stale-active"; item: string; days: number }
  | { kind: "long-summary"; sentences: number }
  | { kind: "long-session"; session: SessionKey; words: number };

type ShapeError =
  | { kind: "unknown-section"; heading: string }
  | { kind: "duplicate-section"; heading: string }
  | { kind: "missing-section"; heading: SectionName }
  | { kind: "bad-session-heading"; line: number }
  | { kind: "loose-prose-in-sessions"; line: number }
  | { kind: "active-missing-since"; line: number }
  | { kind: "bad-retention"; value: unknown };

export function parseIsoDate(value: string): IsoDate | null {
  if (!isValidIsoDate(value)) return null;
  return value as IsoDate;
}

export function parseProgress(
  md: string,
): { ok: true; doc: ProgressDoc } | { ok: false; errors: ShapeError[] } {
  const lines = md.replace(/\r\n/g, "\n").replace(/\s+$/, "").split("\n");
  const errors: ShapeError[] = [];

  if (lines[0] !== "---") {
    errors.push({ kind: "bad-retention", value: null });
    return { ok: false, errors };
  }

  let cursor = 1;
  const frontLines: string[] = [];
  while (cursor < lines.length && lines[cursor] !== "---") {
    frontLines.push(lines[cursor]);
    cursor += 1;
  }
  if (lines[cursor] !== "---") {
    errors.push({ kind: "bad-retention", value: null });
    return { ok: false, errors };
  }
  cursor += 1;

  const retentionRaw = frontValue(frontLines, "retention");
  const retention = Number(retentionRaw);
  if (
    retentionRaw == null ||
    retentionRaw === "" ||
    !Number.isInteger(retention) ||
    retention < 1
  ) {
    errors.push({ kind: "bad-retention", value: retentionRaw ?? null });
  }

  const tags = parseTags(frontValue(frontLines, "tags"));

  const sections: { name: string; raw: string; headingLine: number; lines: string[] }[] = [];
  let current: (typeof sections)[number] | null = null;
  for (let index = cursor; index < lines.length; index += 1) {
    const line = lines[index];
    const heading = /^## ([^#].*)$/.exec(line);
    if (heading) {
      if (current) sections.push(current);
      const name = heading[1].trim();
      current = { name, raw: `## ${name}`, headingLine: index + 1, lines: [] };
      continue;
    }
    if (current) current.lines.push(line);
  }
  if (current) sections.push(current);

  const known = new Set<string>(SECTIONS);
  for (const section of sections) {
    if (!known.has(section.name)) {
      errors.push({ kind: "unknown-section", heading: section.raw });
    }
  }

  for (const name of SECTIONS) {
    const count = sections.filter((section) => section.name === name).length;
    if (count === 0) errors.push({ kind: "missing-section", heading: name });
    if (count > 1) errors.push({ kind: "duplicate-section", heading: name });
  }

  const knownInOrder = sections
    .map((section) => section.name)
    .filter((name): name is SectionName => known.has(name));
  if (
    !errors.some((error) => error.kind === "missing-section" || error.kind === "duplicate-section") &&
    knownInOrder.length === SECTIONS.length &&
    knownInOrder.some((name, index) => name !== SECTIONS[index])
  ) {
    errors.push({ kind: "missing-section", heading: SECTIONS[0] });
  }

  if (errors.length > 0) return { ok: false, errors };

  const byName = new Map(sections.map((section) => [section.name, section]));
  const summary = byName.get("Summary")!.lines.join("\n").trim();
  const context = byName.get("Context")!.lines.join("\n").trim();
  const activeSection = byName.get("Active")!;
  const sessionsSection = byName.get("Sessions")!;
  const activeParsed = parseActive(activeSection.lines, activeSection.headingLine);
  const sessionsParsed = parseSessions(sessionsSection.lines, sessionsSection.headingLine);
  errors.push(...activeParsed.errors, ...sessionsParsed.errors);
  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    doc: {
      frontmatter: {
        title: "Internal Progress",
        retention: retention,
        tags,
      },
      summary,
      active: activeParsed.items,
      sessions: sessionsParsed.sessions,
      context,
    },
  };
}

export function planRotation(
  doc: ProgressDoc,
  today: IsoDate,
): {
  live: ProgressDoc;
  evicted: Session[];
  closed: ActiveItem[];
  warnings: Warning[];
} {
  const ordered = doc.sessions
    .map((session, index) => ({ session, index }))
    .sort((a, b) => {
      if (a.session.date === b.session.date) return a.index - b.index;
      return a.session.date < b.session.date ? 1 : -1;
    })
    .map((row) => row.session);

  const seen = new Set<SessionKey>();
  const deduped: Session[] = [];
  for (const session of ordered) {
    if (seen.has(session.key)) continue;
    seen.add(session.key);
    deduped.push(session);
  }

  const liveSessions = deduped.slice(0, doc.frontmatter.retention);
  const evicted = deduped.slice(doc.frontmatter.retention);
  const closed = doc.active.filter((item) => item.done);
  const liveActive = doc.active.filter((item) => !item.done);
  const warnings: Warning[] = [];

  for (const session of evicted) {
    if (session.links.length === 0) {
      warnings.push({
        kind: "promote",
        session: session.key,
        date: session.date,
        title: session.title,
      });
    }
  }

  for (const session of liveSessions) {
    if (session.links.length === 0) {
      warnings.push({
        kind: "missing-link",
        session: session.key,
        date: session.date,
        title: session.title,
      });
    }
    const words = wordCount(session.body);
    if (words > SESSION_WORD_BUDGET) {
      warnings.push({ kind: "long-session", session: session.key, words });
    }
  }

  const sentences = sentenceCount(doc.summary);
  if (sentences > SUMMARY_SENTENCE_BUDGET) {
    warnings.push({ kind: "long-summary", sentences });
  }

  for (const item of liveActive) {
    const days = daysBetween(item.since, today);
    if (days > STALE_AFTER_DAYS) {
      warnings.push({ kind: "stale-active", item: item.text, days });
    }
  }

  return {
    live: {
      frontmatter: {
        title: "Internal Progress",
        retention: doc.frontmatter.retention,
        tags: [...doc.frontmatter.tags],
      },
      summary: doc.summary,
      active: liveActive,
      sessions: liveSessions,
      context: doc.context,
    },
    evicted,
    closed,
    warnings,
  };
}

export function mergeArchive(
  existing: ArchiveMonth | null,
  month: string,
  sessions: Session[],
  closed: ActiveItem[],
  today: IsoDate,
): ArchiveMonth {
  const base = existing ?? { month, sessions: [], closed: [] };
  const seen = new Set(base.sessions.map((session) => session.key));
  const mergedSessions = [...base.sessions];
  for (const session of sessions) {
    if (seen.has(session.key)) continue;
    seen.add(session.key);
    mergedSessions.push(session);
  }

  const closedSeen = new Set(base.closed.map((item) => closedKey(item)));
  const mergedClosed = [...base.closed];
  for (const item of closed) {
    const key = closedKey(item);
    if (closedSeen.has(key)) continue;
    closedSeen.add(key);
    mergedClosed.push({ ...item, closedOn: today });
  }

  return { month, sessions: mergedSessions, closed: mergedClosed };
}

export function renderProgress(doc: ProgressDoc, archiveMonths: string[], today: IsoDate): string {
  const date = doc.sessions[0]?.date ?? today;
  const tags = doc.frontmatter.tags.join(", ");
  const active = doc.active
    .map((item) => `- [${item.done ? "x" : " "}] ${item.text} (since ${item.since})`)
    .join("\n");
  const sessions = doc.sessions.map(renderSession).join("\n\n");
  const newest = [...archiveMonths].sort().at(-1);
  const pointer = newest ? `Older sessions: [[Progress-Archive/${newest}]]\n\n` : "";
  const sessionBlock = [sessions.trimEnd(), pointer.trimEnd()].filter(Boolean).join("\n\n");

  return [
    "---",
    "title: Internal Progress",
    `date: ${date}`,
    `retention: ${doc.frontmatter.retention}`,
    `tags: [${tags}]`,
    "---",
    "## Summary",
    doc.summary,
    "",
    "## Active",
    active,
    "",
    "## Sessions",
    sessionBlock,
    "",
    "## Context",
    doc.context,
    "",
  ].join("\n");
}

export function renderArchive(archive: ArchiveMonth): string {
  const sessions = archive.sessions.map(renderSession).join("\n\n").trimEnd();
  const closed = archive.closed
    .map(
      (item) =>
        `- [x] ${item.text} (since ${item.since}) (closed ${item.closedOn})`,
    )
    .join("\n");
  const front = [
    "---",
    `title: Progress Archive ${archive.month}`,
    `month: ${archive.month}`,
    "tags: [dev-log, logic, architecture]",
    "---",
  ].join("\n");

  return `${front}\n${headed("## Sessions", sessions)}\n\n${headed("## Closed", closed)}\n`;
}

function headed(heading: string, body: string): string {
  if (!body) return heading;
  return `${heading}\n${body}`;
}

export function parseArchive(md: string, month: string): ArchiveMonth {
  const parsed = splitArchive(md);
  const sessionsParsed = parseSessions(parsed.sessionLines, parsed.sessionHeadingLine);
  const closed: ArchiveMonth["closed"] = [];
  for (const line of parsed.closedLines) {
    if (!line.trim()) continue;
    const match = /^- \[x\] (.+) \(since (\d{4}-\d{2}-\d{2})\) \(closed (\d{4}-\d{2}-\d{2})\)$/.exec(
      line.trim(),
    );
    if (!match) continue;
    const since = parseIsoDate(match[2]);
    const closedOn = parseIsoDate(match[3]);
    if (!since || !closedOn) continue;
    closed.push({ done: true, text: match[1], since, closedOn });
  }
  return {
    month: parsed.month ?? month,
    sessions: sessionsParsed.sessions,
    closed,
  };
}

export function runBrainProgress(
  argv: string[],
  opts?: { root?: string; today?: string },
): number {
  const args = argv.slice(2);
  const check = args.includes("--check");
  const unknown = args.filter((arg) => arg !== "--check");
  if (unknown.length > 0) {
    if (unknown.includes("--adopt")) {
      console.error(
        "FAIL: --adopt is skipped. Write Internal-Progress.md in the closed shape, then run pnpm brain:progress so overflow is archived.",
      );
    } else {
      console.error(`FAIL: unknown argument ${unknown.join(" ")}`);
    }
    return 2;
  }

  const root = opts?.root ?? process.cwd();
  const today = opts?.today ? parseIsoDate(opts.today) : todayLocal();
  if (!today) {
    console.error("FAIL: today is not YYYY-MM-DD");
    return 2;
  }

  const { live, archiveDir } = vaultPaths(root);
  if (!existsSync(live)) {
    console.error(`FAIL: missing ${live}`);
    return 2;
  }

  const parsed = parseProgress(readFileSync(live, "utf8"));
  if (!parsed.ok) {
    for (const error of parsed.errors) console.error(formatShapeError(error));
    console.error(
      'Template: sections are ## Summary, ## Active, ## Sessions, ## Context. Session headings are "### YYYY-MM-DD · Title". Active lines end with "(since YYYY-MM-DD)".',
    );
    return 2;
  }

  const plan = planRotation(parsed.doc, today);
  const pending = plan.evicted.length > 0 || plan.closed.length > 0;

  if (check) {
    for (const line of formatWarnings(plan.warnings)) console.log(line);
    if (pending) {
      if (plan.evicted.length > 0) {
        console.error(
          `FAIL: rotation pending (${plan.evicted.length + plan.live.sessions.length} sessions > retention ${plan.live.frontmatter.retention})`,
        );
      }
      if (plan.closed.length > 0) {
        console.error(
          `FAIL: rotation pending (${plan.closed.length} closed Active item${plan.closed.length === 1 ? "" : "s"})`,
        );
      }
      return 1;
    }
    console.log(formatIdle(plan));
    console.log("OK");
    return 0;
  }

  const byMonth = new Map<string, Session[]>();
  for (const session of plan.evicted) {
    const month = session.date.slice(0, 7);
    const list = byMonth.get(month) ?? [];
    list.push(session);
    byMonth.set(month, list);
  }
  const closeMonth = today.slice(0, 7);
  if (plan.closed.length > 0 && !byMonth.has(closeMonth)) byMonth.set(closeMonth, []);

  const touched = persistArchivesThenLive({
    byMonth,
    closeMonth,
    closed: plan.closed,
    today,
    archiveDir,
    livePath: live,
    liveDoc: plan.live,
  });

  if (!pending) console.log(formatIdle(plan));
  else console.log(formatRotated(plan, touched));
  for (const line of formatWarnings(plan.warnings)) console.log(line);
  console.log("OK");
  return 0;
}

function persistArchivesThenLive(input: {
  byMonth: Map<string, Session[]>;
  closeMonth: string;
  closed: ActiveItem[];
  today: IsoDate;
  archiveDir: string;
  livePath: string;
  liveDoc: ProgressDoc;
}): string[] {
  const touched: string[] = [];
  for (const [month, sessions] of input.byMonth) {
    const path = join(input.archiveDir, `${month}.md`);
    const existing = existsSync(path) ? parseArchive(readFileSync(path, "utf8"), month) : null;
    const closed = month === input.closeMonth ? input.closed : [];
    const merged = mergeArchive(existing, month, sessions, closed, input.today);
    writeIfChanged(path, renderArchive(merged));
    touched.push(`00-General/Progress-Archive/${month}.md`);
  }
  const archiveMonths = listArchiveMonths(input.archiveDir);
  writeIfChanged(input.livePath, renderProgress(input.liveDoc, archiveMonths, input.today));
  return touched;
}

function formatIdle(plan: ReturnType<typeof planRotation>): string {
  return `Internal-Progress: ${plan.live.sessions.length} sessions, retention ${plan.live.frontmatter.retention}, nothing to archive`;
}

function formatRotated(plan: ReturnType<typeof planRotation>, touched: string[]): string {
  const before = plan.live.sessions.length + plan.evicted.length;
  const dest = touched.join(", ");
  const stale = plan.warnings.filter((warning) => warning.kind === "stale-active");
  const staleText =
    stale.length > 0
      ? ` (${stale.length} stale > 30d: ${stale.map((warning) => `"${warning.item}"`).join(", ")})`
      : "";
  return [
    `Internal-Progress: ${before} sessions → kept ${plan.live.sessions.length}, archived ${plan.evicted.length} → ${dest}`,
    `Active: ${plan.closed.length} closed items archived, ${plan.live.active.length} open${staleText}`,
  ].join("\n");
}

function formatWarnings(warnings: Warning[]): string[] {
  return warnings.flatMap((warning) => {
    if (warning.kind === "promote") {
      return [
        `PROMOTE ${warning.date}${HEADING_DOT}${warning.title} — no [[wikilink]]; durable fact may exist only in archive.`,
      ];
    }
    if (warning.kind === "missing-link") {
      return [
        `MISSING-LINK ${warning.date}${HEADING_DOT}${warning.title} — kept session has no [[wikilink]]`,
      ];
    }
    if (warning.kind === "stale-active") {
      return [`WARN stale Active (${warning.days}d): "${warning.item}"`];
    }
    if (warning.kind === "long-summary") {
      return [`WARN summary has ${warning.sentences} sentences`];
    }
    return [`WARN session ${warning.session} is ${warning.words} words`];
  });
}

function formatShapeError(error: ShapeError): string {
  switch (error.kind) {
    case "unknown-section":
      if (error.heading === "## Next steps") {
        return `FAIL: "## Next steps" is not a recognized section; open work belongs in "## Active"`;
      }
      return `FAIL: "${error.heading}" is not a recognized section`;
    case "duplicate-section":
      return `FAIL: duplicate section "## ${error.heading}"`;
    case "missing-section":
      return `FAIL: missing section "## ${error.heading}"`;
    case "bad-session-heading":
      return `FAIL: line ${error.line} is not a session heading "### YYYY-MM-DD · Title"`;
    case "loose-prose-in-sessions":
      return `FAIL: line ${error.line} is loose prose in ## Sessions`;
    case "active-missing-since":
      return `FAIL: line ${error.line} in ## Active must end with "(since YYYY-MM-DD)"`;
    case "bad-retention":
      return `FAIL: retention must be an integer ≥ 1 (found ${JSON.stringify(error.value)})`;
    default: {
      const neverError: never = error;
      return `FAIL: ${String(neverError)}`;
    }
  }
}

function parseActive(
  sectionLines: string[],
  headingLine: number,
): { items: ActiveItem[]; errors: ShapeError[] } {
  const items: ActiveItem[] = [];
  const errors: ShapeError[] = [];
  for (let index = 0; index < sectionLines.length; index += 1) {
    const line = sectionLines[index];
    if (!line.trim()) continue;
    const lineNo = headingLine + 1 + index;
    const match = /^- \[([ xX])\] (.*)$/.exec(line);
    const sinceMatch = match ? /\(since (\d{4}-\d{2}-\d{2})\)$/.exec(match[2].trim()) : null;
    const since = sinceMatch ? parseIsoDate(sinceMatch[1]) : null;
    if (!match || !since) {
      errors.push({ kind: "active-missing-since", line: lineNo });
      continue;
    }
    const text = match[2].trim().replace(/\(since \d{4}-\d{2}-\d{2}\)$/, "").trim();
    items.push({ done: match[1].toLowerCase() === "x", text, since });
  }
  return { items, errors };
}

function parseSessions(
  sectionLines: string[],
  headingLine: number,
): { sessions: Session[]; errors: ShapeError[] } {
  const sessions: Session[] = [];
  const errors: ShapeError[] = [];
  const pointer = /^Older sessions: \[\[Progress-Archive\/\d{4}-\d{2}\]\]\s*$/;
  let current: { date: IsoDate; title: string; bodyLines: string[] } | null = null;
  let seenHeading = false;

  const flush = () => {
    if (!current) return;
    const body = current.bodyLines.join("\n").trim();
    sessions.push({
      key: sessionKey(current.date, current.title),
      date: current.date,
      title: current.title,
      body,
      links: wikilinks(body),
    });
    current = null;
  };

  for (let index = 0; index < sectionLines.length; index += 1) {
    const line = sectionLines[index];
    if (pointer.test(line.trim())) continue;
    const heading = /^### (\d{4}-\d{2}-\d{2}) · (.+)$/.exec(line);
    if (heading) {
      const date = parseIsoDate(heading[1]);
      const title = heading[2].trim();
      if (!date || !title) {
        errors.push({ kind: "bad-session-heading", line: headingLine + 1 + index });
        continue;
      }
      flush();
      seenHeading = true;
      current = { date, title, bodyLines: [] };
      continue;
    }
    if (line.startsWith("### ")) {
      errors.push({ kind: "bad-session-heading", line: headingLine + 1 + index });
      continue;
    }
    if (!seenHeading) {
      if (line.trim()) errors.push({ kind: "loose-prose-in-sessions", line: headingLine + 1 + index });
      continue;
    }
    current?.bodyLines.push(line);
  }
  flush();
  return { sessions, errors };
}

function splitArchive(md: string): {
  month: string | null;
  sessionLines: string[];
  sessionHeadingLine: number;
  closedLines: string[];
} {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  let month: string | null = null;
  let cursor = 0;
  if (lines[0] === "---") {
    cursor = 1;
    const front: string[] = [];
    while (cursor < lines.length && lines[cursor] !== "---") {
      front.push(lines[cursor]);
      cursor += 1;
    }
    cursor += 1;
    const raw = frontValue(front, "month");
    if (raw && /^\d{4}-\d{2}$/.test(raw)) month = raw;
  }

  let mode: "none" | "sessions" | "closed" = "none";
  const sessionLines: string[] = [];
  const closedLines: string[] = [];
  let sessionHeadingLine = cursor;
  for (let index = cursor; index < lines.length; index += 1) {
    const line = lines[index];
    if (line === "## Sessions") {
      mode = "sessions";
      sessionHeadingLine = index + 1;
      continue;
    }
    if (line === "## Closed") {
      mode = "closed";
      continue;
    }
    if (mode === "sessions") sessionLines.push(line);
    if (mode === "closed") closedLines.push(line);
  }
  return { month, sessionLines, sessionHeadingLine, closedLines };
}

function renderSession(session: Session): string {
  if (!session.body) return `### ${session.date}${HEADING_DOT}${session.title}`;
  return `### ${session.date}${HEADING_DOT}${session.title}\n${session.body}`;
}

function sessionKey(date: IsoDate, title: string): SessionKey {
  return `${date}·${slug(title)}` as SessionKey;
}

function slug(title: string): string {
  return title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function wikilinks(body: string): string[] {
  const links: string[] = [];
  const pattern = /\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]/g;
  for (const match of body.matchAll(pattern)) links.push(match[1].trim());
  return links;
}

function wordCount(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

function sentenceCount(text: string): number {
  const prose = text.replace(/`[^`]*`/g, " ").replace(/(\w)\.(\w)/g, "$1 $2");
  return prose
    .split(/[.!?]+/)
    .map((part) => part.trim())
    .filter(Boolean).length;
}

function daysBetween(since: IsoDate, today: IsoDate): number {
  const start = Date.parse(`${since}T00:00:00Z`);
  const end = Date.parse(`${today}T00:00:00Z`);
  return Math.round((end - start) / 86_400_000);
}

function closedKey(item: ActiveItem): string {
  return `${item.text}\n${item.since}`;
}

function frontValue(lines: string[], key: string): string | null {
  const prefix = `${key}:`;
  const line = lines.find((entry) => entry.startsWith(prefix));
  if (!line) return null;
  return line.slice(prefix.length).trim();
}

function parseTags(raw: string | null): string[] {
  if (!raw) return ["dev-log", "logic", "architecture"];
  const match = /^\[(.*)\]$/.exec(raw);
  if (!match) return ["dev-log", "logic", "architecture"];
  return match[1]
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function isValidIsoDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day;
}

function todayLocal(): IsoDate | null {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return parseIsoDate(`${now.getFullYear()}-${month}-${day}`);
}

function vaultPaths(root: string): { live: string; archiveDir: string } {
  const wikiRoot = join(root, "wiki");
  if (existsSync(wikiRoot)) {
    const vaults = readdirSync(wikiRoot, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && entry.name.startsWith("obsidian-"))
      .map((entry) => entry.name)
      .sort();
    for (const vault of vaults) {
      const general = join(wikiRoot, vault, "00-General");
      const live = join(general, "Internal-Progress.md");
      if (existsSync(live)) {
        return { live, archiveDir: join(general, "Progress-Archive") };
      }
    }
  }

  const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8")) as {
    name?: string;
  };
  const name = pkg.name ?? "";
  const dash = name.indexOf("-");
  const suffix = dash === -1 ? name : name.slice(dash + 1);
  const general = join(root, "wiki", `obsidian-${suffix}`, "00-General");
  return {
    live: join(general, "Internal-Progress.md"),
    archiveDir: join(general, "Progress-Archive"),
  };
}

function listArchiveMonths(archiveDir: string): string[] {
  if (!existsSync(archiveDir)) return [];
  return readdirSync(archiveDir)
    .filter((name) => /^\d{4}-\d{2}\.md$/.test(name))
    .map((name) => name.slice(0, 7))
    .sort();
}

function writeIfChanged(path: string, next: string): void {
  const prev = existsSync(path) ? readFileSync(path, "utf8") : null;
  if (prev === next) return;
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, next);
}

function isDirectRun(): boolean {
  const entry = process.argv[1];
  if (!entry) return false;
  try {
    return fileURLToPath(import.meta.url) === realpathSync(entry);
  } catch {
    return pathToFileURL(entry).href === import.meta.url;
  }
}

if (isDirectRun()) {
  process.exit(runBrainProgress(process.argv));
}
