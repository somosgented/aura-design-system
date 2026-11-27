"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import type * as PageTree from "fumadocs-core/page-tree";
import { Search } from "lucide-react";

import { BrandLockup } from "@/components/brand/BrandLockup";
import { SearchDialog } from "@/components/SearchDialog";
import { ThemeColorSwitcher } from "@/components/ThemeColorSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Kbd, KbdGroup } from "@/components/ui/Kbd";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/NavigationMenu";
import { SidebarTrigger } from "@/components/ui/Sidebar";
import { cn } from "@/utils/class-names";
import { getActiveSection, getDocsSections } from "@/utils/docs-sections";
import { externalNavLinks, githubUrl } from "@/utils/site-nav";

export interface SiteHeaderProps {
  tree: PageTree.Root;
}

export function SiteHeader({ tree }: SiteHeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  const sections = useMemo(() => getDocsSections(tree), [tree]);
  const activeSection = useMemo(
    () => getActiveSection(sections, pathname),
    [sections, pathname],
  );

  return (
    <>
      <header
        id="nd-nav"
        className="fixed inset-x-0 top-0 z-40 border-b border-gray-a6 bg-gray-2"
      >
        <div
          className="flex min-w-0 items-center gap-0.5 px-1 md:px-2"
          style={{ height: 56 }}
        >
          <BrandLockup href="/" compact className="min-w-0" />
          <div className="ms-auto flex shrink-0 items-center gap-0.5">
            <Button
              type="button"
              variant="pill"
              size="icon"
              className="md:hidden"
              aria-label="Search docs"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="icon" aria-hidden />
            </Button>
            <Button
              type="button"
              variant="pill"
              size="sm"
              className="hidden md:inline-flex"
              aria-label="Search docs"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="icon" aria-hidden />
              <span>Search</span>
              <KbdGroup>
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </KbdGroup>
            </Button>
            <Button asChild variant="pill" size="icon">
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub repository"
              >
                <GitHubLogoIcon className="icon" aria-hidden />
              </a>
            </Button>
            <div className="hidden items-center gap-0.5 sm:flex">
              <ThemeColorSwitcher />
              <ThemeToggle />
            </div>
            <SidebarTrigger
              variant="pill"
              size="icon"
              aria-label="Open menu"
              className="md:hidden"
            />
          </div>
        </div>
        <div
          className="no-scrollbar hidden min-w-0 overflow-x-auto border-t border-gray-a6 px-1 md:flex md:items-stretch md:px-2"
          style={{ height: 44 }}
        >
          <NavigationMenu
            aria-label="Documentation sections"
            className="flex h-full min-w-0 items-stretch *:h-full"
          >
            <NavigationMenuList className="flex h-full items-stretch">
              {sections.map((section) => {
                const isActive = activeSection?.id === section.id;
                return (
                  <NavigationMenuItem
                    key={section.id}
                    className="flex h-full items-stretch"
                  >
                    <NavigationMenuLink asChild active={isActive}>
                      <Link
                        href={section.url}
                        className={cn(
                          "inline-flex h-full items-center whitespace-nowrap border-b-2 px-1 py-0 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8",
                          isActive
                            ? "border-accent-9 text-gray-12"
                            : "border-transparent text-gray-11 hover:text-gray-12",
                        )}
                      >
                        {section.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
              {externalNavLinks.map((link) => (
                <NavigationMenuItem
                  key={link.url}
                  className="flex h-full items-stretch"
                >
                  <NavigationMenuLink asChild>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-full items-center gap-0.5 whitespace-nowrap border-b-2 border-transparent px-1 py-0 text-sm font-medium text-gray-11 transition-colors hover:text-gray-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-8"
                    >
                      <span>{link.text}</span>
                      <ArrowTopRightIcon className="icon" aria-hidden />
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
