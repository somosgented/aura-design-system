import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { StatusDot } from "@/components/ui/StatusDot";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/docs", label: "Get started" },
      { href: "/docs/cli", label: "CLI" },
      { href: "/docs/components", label: "Components" },
      { href: "/docs/forms", label: "Forms" },
    ],
  },
  {
    title: "Guides",
    links: [
      { href: "/docs/handbook", label: "Handbook" },
      { href: "/docs/rules", label: "Rules" },
      { href: "/docs/foundations", label: "Foundations" },
      { href: "/docs/utils", label: "Utils" },
    ],
  },
  {
    title: "Agents",
    links: [
      { href: "/docs#agent-harness", label: "Harness" },
      { href: "/docs#own-files", label: "Files" },
      { href: "/docs#gdp-ts", label: "gdp-ts" },
      { href: "/docs#feature-map", label: "Feature map" },
    ],
  },
  {
    title: "Source",
    links: [
      {
        href: "https://github.com/somosgented/aura-design-system",
        label: "GitHub",
        external: true,
      },
      {
        href: "https://design-md.auradesignsystem.com/",
        label: "DESIGN.md",
        external: true,
      },
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="home-footer bg-accent-9 text-accent-contrast">
      <div className="home-column">
        <div className="home-footer-grid">
          <div className="home-footer-cell flex flex-col gap-1 p-2">
            <h4 className="h6 text-accent-contrast">
              Aura Design System © {new Date().getFullYear()}
            </h4>
            <div className="flex flex-col gap-1 text-sm">
              <span>
                <Link href="/docs" className="home-footer-link">
                  Get started
                </Link>
                {" · "}
                <Link href="/docs/rules" className="home-footer-link">
                  Rules
                </Link>
              </span>
              <div className="flex items-center gap-0.5">
                <StatusDot state="ready" />
                <span>Registry nominal</span>
              </div>
            </div>
          </div>
          {columns.map((column) => (
            <div key={column.title} className="home-footer-cell p-2">
              <h4 className="h6 mb-1 text-accent-contrast">{column.title}</h4>
              <ul className="flex flex-col gap-1">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="home-footer-link inline-flex items-center gap-0.5 text-sm"
                    >
                      {link.label}
                      {"external" in link && link.external ? (
                        <>
                          <ExternalLinkIcon className="icon" aria-hidden />
                          <span className="sr-only"> (opens in a new tab)</span>
                        </>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="home-hatch home-wordmark" aria-hidden>
          Aura
        </div>
      </div>
    </footer>
  );
}
