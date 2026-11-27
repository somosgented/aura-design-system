import type * as PageTree from "fumadocs-core/page-tree";

export interface DocsSection {
  id: string;
  title: string;
  url: string;
  nodes: PageTree.Node[];
}

export function normalizePathname(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function findFirstPageUrl(nodes: PageTree.Node[]): string | undefined {
  for (const node of nodes) {
    if (node.type === "page") {
      return node.url;
    }
    if (node.type === "folder") {
      if (node.index) {
        return node.index.url;
      }
      const nested = findFirstPageUrl(node.children);
      if (nested) {
        return nested;
      }
    }
  }
  return undefined;
}

function nodesContainPathname(
  nodes: PageTree.Node[],
  normalizedTarget: string,
): boolean {
  for (const node of nodes) {
    if (node.type === "page") {
      if (normalizePathname(node.url) === normalizedTarget) {
        return true;
      }
    } else if (node.type === "folder") {
      if (
        node.index &&
        normalizePathname(node.index.url) === normalizedTarget
      ) {
        return true;
      }
      if (nodesContainPathname(node.children, normalizedTarget)) {
        return true;
      }
    }
  }
  return false;
}

export function folderContainsPath(
  folder: PageTree.Folder,
  pathname: string,
): boolean {
  const normalizedTarget = normalizePathname(pathname);
  if (
    folder.index &&
    normalizePathname(folder.index.url) === normalizedTarget
  ) {
    return true;
  }
  return nodesContainPathname(folder.children, normalizedTarget);
}

export function getDocsSections(tree: PageTree.Root): DocsSection[] {
  const rawSections: Array<{ title: string; nodes: PageTree.Node[] }> = [];
  let current: { title: string; nodes: PageTree.Node[] } = {
    title: "Get Started",
    nodes: [],
  };
  let sectionIndex = 0;

  for (const node of tree.children) {
    if (node.type === "separator") {
      if (current.nodes.length > 0) {
        rawSections.push(current);
      }
      const title =
        typeof node.name === "string" && node.name.trim().length > 0
          ? node.name.trim()
          : String(sectionIndex);
      sectionIndex += 1;
      current = { title, nodes: [] };
      continue;
    }

    current.nodes.push(node);
  }

  if (current.nodes.length > 0) {
    rawSections.push(current);
  }

  const sections: DocsSection[] = [];
  for (const raw of rawSections) {
    const url = findFirstPageUrl(raw.nodes);
    if (!url) {
      continue;
    }
    const id = slugifyTitle(raw.title) || String(sections.length);
    sections.push({
      id,
      title: raw.title,
      url,
      nodes: raw.nodes,
    });
  }

  return sections;
}

function isUrlPrefix(prefix: string, target: string): boolean {
  if (prefix === target) {
    return true;
  }
  if (prefix === "/") {
    return target.startsWith("/");
  }
  return target.startsWith(`${prefix}/`);
}

export function getActiveSection(
  sections: DocsSection[],
  pathname: string,
): DocsSection | undefined {
  const normalizedTarget = normalizePathname(pathname);

  const exactMatch = sections.find((section) =>
    nodesContainPathname(section.nodes, normalizedTarget),
  );
  if (exactMatch) {
    return exactMatch;
  }

  let bestMatch: DocsSection | undefined;
  let bestLength = -1;

  for (const section of sections) {
    const normalizedUrl = normalizePathname(section.url);
    if (
      isUrlPrefix(normalizedUrl, normalizedTarget) &&
      normalizedUrl.length > bestLength
    ) {
      bestMatch = section;
      bestLength = normalizedUrl.length;
    }
  }

  return bestMatch;
}
