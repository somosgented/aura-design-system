"use client";

import { type RefObject, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import type * as PageTree from "fumadocs-core/page-tree";

import { SidebarNodesList } from "@/components/site/DocsSidebarNav";
import { ThemeColorSwitcher } from "@/components/ThemeColorSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/Sheet";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/Sidebar";
import {
  getActiveSection,
  getDocsSections,
  normalizePathname,
} from "@/utils/docs-sections";
import { externalNavLinks } from "@/utils/site-nav";

export interface MobileMenuProps {
  tree: PageTree.Root;
  variant: "docs" | "home";
  triggerRef: RefObject<HTMLButtonElement | null>;
}

export function MobileMenu({ tree, variant, triggerRef }: MobileMenuProps) {
  const { isMobile, openMobile, setOpenMobile } = useSidebar();
  const contentRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const normalizedPathname = normalizePathname(pathname);

  const sections = useMemo(() => getDocsSections(tree), [tree]);
  const activeSection = useMemo(
    () => getActiveSection(sections, pathname),
    [sections, pathname],
  );

  useEffect(() => {
    if (!isMobile && openMobile) {
      setOpenMobile(false);
    }
  }, [isMobile, openMobile, setOpenMobile]);

  if (!isMobile) {
    return null;
  }

  const defaultSection =
    sections.find((section) => section.title === "Get Started") ?? sections[0];
  const displaySection =
    variant === "home" ? defaultSection : (activeSection ?? defaultSection);

  const handleNavigate = () => {
    setOpenMobile(false);
  };

  const handleOutsideEvent = (event: {
    target: EventTarget | null;
    preventDefault: () => void;
  }) => {
    const target = event.target;
    if (target instanceof Node && triggerRef.current?.contains(target)) {
      event.preventDefault();
    }
  };

  return (
    <Sheet open={openMobile} onOpenChange={setOpenMobile}>
      <SheetContent
        ref={contentRef}
        id="docs-mobile-menu"
        side="top"
        aria-describedby={undefined}
        className="top-(--fd-nav-height) bottom-0 h-auto inset-x-0 gap-0 border-b-0 shadow-none bg-gray-2 text-gray-12 data-[state=open]:animate-none data-[state=closed]:animate-none [&>button]:hidden"
        onOpenAutoFocus={(event) => {
          event.preventDefault();
          const firstLink =
            navRef.current?.querySelector<HTMLAnchorElement>("a[href]");
          if (firstLink) {
            firstLink.focus();
            return;
          }
          contentRef.current?.focus();
        }}
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          triggerRef.current?.focus();
        }}
        onPointerDownOutside={handleOutsideEvent}
        onInteractOutside={handleOutsideEvent}
      >
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <nav ref={navRef} aria-label="Docs">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs uppercase tracking-wide text-gray-11">
                Sections
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sections.map((section) => {
                    const isActive = activeSection?.id === section.id;
                    return (
                      <SidebarMenuItem key={section.id}>
                        <SidebarMenuButton
                          asChild
                          size="lg"
                          isActive={isActive}
                          className="text-base"
                        >
                          <Link
                            href={section.url}
                            aria-current={isActive ? "page" : undefined}
                            onClick={handleNavigate}
                          >
                            <span>{section.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                  {externalNavLinks.map((link) => (
                    <SidebarMenuItem key={link.url}>
                      <SidebarMenuButton
                        asChild
                        size="lg"
                        className="text-base"
                      >
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={handleNavigate}
                        >
                          <span>{link.text}</span>
                          <ArrowTopRightIcon
                            className="icon ms-auto"
                            aria-hidden
                          />
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {displaySection ? (
              <SidebarGroup>
                <SidebarGroupLabel className="text-xs uppercase tracking-wide text-gray-11">
                  {displaySection.title}
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarNodesList
                      nodes={displaySection.nodes}
                      pathname={pathname}
                      normalizedPathname={normalizedPathname}
                      mobile
                      onNavigate={handleNavigate}
                    />
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ) : null}
          </nav>
        </div>
        <div className="flex shrink-0 items-center justify-between gap-0.5 border-t border-gray-a6 p-1">
          <ThemeColorSwitcher />
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
}
