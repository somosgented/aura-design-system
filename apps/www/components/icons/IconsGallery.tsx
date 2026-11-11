"use client";

import * as React from "react";
import { iconCatalog } from "@aura-design/react-icons";

import { Input } from "@/components/ui/Input";

export function IconsGallery() {
  const [query, setQuery] = React.useState("");
  const [copied, setCopied] = React.useState<string | null>(null);

  const needle = query.trim().toLowerCase();
  const filtered = needle
    ? iconCatalog.filter((entry) => {
        const haystack = [entry.name, entry.fileName, ...entry.tags]
          .join(" ")
          .toLowerCase();
        return haystack.includes(needle);
      })
    : iconCatalog;

  async function copyImport(name: string) {
    const snippet = `import { ${name} } from "@aura-design/react-icons";`;
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(name);
      window.setTimeout(() => {
        setCopied((current) => (current === name ? null : current));
      }, 1500);
    } catch {
      setCopied(null);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
        <label className="flex w-full max-w-md flex-col gap-0.5">
          <span className="text-sm text-gray-11">Search</span>
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Name or tag"
            aria-label="Search icons"
          />
        </label>
        <p className="p text-gray-11">
          {filtered.length} of {iconCatalog.length}
          {copied ? ` · Copied ${copied}` : " · Click to copy import"}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="p text-gray-11">No icons match that search.</p>
      ) : (
        <ul className="grid grid-cols-2 border-t border-l border-gray-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filtered.map((entry) => {
            const Glyph = entry.Icon;
            return (
              <li key={entry.name} className="border-b border-r border-gray-6">
                <button
                  type="button"
                  onClick={() => copyImport(entry.name)}
                  className="flex h-full w-full flex-col items-center justify-center gap-1 p-2 text-gray-12 transition-colors hover:bg-gray-a3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8 focus-visible:ring-inset"
                >
                  <Glyph className="icon h4" aria-hidden />
                  <span className="text-sm text-gray-11">{entry.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
