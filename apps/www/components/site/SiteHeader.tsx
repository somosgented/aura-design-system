"use client";

import { type FocusEvent, type RefObject, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowTopRightIcon,
  Cross2Icon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
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
import { useSidebar } from "@/components/ui/Sidebar";
import { cn } from "@/utils/class-names";
import { getActiveSection, getDocsSections } from "@/utils/docs-sections";
import { externalNavLinks, githubUrl } from "@/utils/site-nav";

export interface SiteHeaderProps {
  tree: PageTree.Root;
  menuTriggerRef?: RefObject<HTMLButtonElement | null>;
}

function scrollFocusedTabIntoView(event: FocusEvent<HTMLDivElement>) {
  if (event.target instanceof HTMLElement) {
    event.target.scrollIntoView({ block: "nearest", inline: "nearest" });
  }
}

export function SiteHeader({ tree, menuTriggerRef }: SiteHeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const { openMobile, setOpenMobile } = useSidebar();
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
        data-menu-open={openMobile ? "" : undefined}
        className={cn(
          "fixed inset-x-0 top-0 border-b border-gray-a6 bg-gray-2",
          openMobile ? "pointer-events-auto z-[60]" : "z-40",
        )}
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
              className="lg:hidden"
              aria-label="Search docs"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="icon" aria-hidden />
            </Button>
            <Button
              type="button"
              variant="pill"
              size="sm"
              className="hidden lg:inline-flex"
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
            <Button
              ref={menuTriggerRef}
              type="button"
              variant="pill"
              size="icon"
              className="lg:hidden"
              aria-label="Menu"
              aria-haspopup="dialog"
              aria-expanded={openMobile}
              aria-controls="docs-mobile-menu"
              onClick={() => setOpenMobile(!openMobile)}
            >
              <span className="relative inline-flex size-[1em] items-center justify-center">
                <HamburgerMenuIcon
                  className={cn(
                    "icon absolute transition-[opacity,transform,rotate] duration-100 ease-out motion-reduce:transition-none",
                    openMobile
                      ? "rotate-90 opacity-0"
                      : "rotate-0 opacity-100",
                  )}
                  aria-hidden
                />
                <Cross2Icon
                  className={cn(
                    "icon absolute transition-[opacity,transform,rotate] duration-100 ease-out motion-reduce:transition-none",
                    openMobile
                      ? "rotate-0 opacity-100"
                      : "-rotate-90 opacity-0",
                  )}
                  aria-hidden
                />
              </span>
            </Button>
          </div>
        </div>
        <div
          className="no-scrollbar hidden min-w-0 overflow-x-auto border-t border-gray-a6 px-1 lg:flex lg:items-stretch lg:px-2"
          style={{ height: 44 }}
          onFocus={scrollFocusedTabIntoView}
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
                          "inline-flex h-full items-center whitespace-nowrap border-b-2 px-1 py-0 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-8",
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
                      className="inline-flex h-full items-center gap-0.5 whitespace-nowrap border-b-2 border-transparent px-1 py-0 text-sm font-medium text-gray-11 transition-colors hover:text-gray-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-8"
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
