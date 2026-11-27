"use client";

import { type ReactNode, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import type * as PageTree from "fumadocs-core/page-tree";
import { ChevronRight } from "lucide-react";

import { ThemeColorSwitcher } from "@/components/ThemeColorSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/Collapsible";
import { ScrollArea } from "@/components/ui/ScrollArea";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/Sidebar";
import { cn } from "@/utils/class-names";
import {
  folderContainsPath,
  getActiveSection,
  getDocsSections,
  normalizePathname,
} from "@/utils/docs-sections";
import { externalNavLinks } from "@/utils/site-nav";

export interface DocsSidebarNavProps {
  tree: PageTree.Root;
  variant: "docs" | "home";
}

function SidebarItemIcon({
  icon,
  reserveSlot,
}: {
  icon?: ReactNode;
  reserveSlot: boolean;
}) {
  if (!icon && !reserveSlot) {
    return null;
  }

  return (
    <span
      className="inline-flex size-1 shrink-0 items-center justify-center [&_svg]:size-1 [&_svg]:shrink-0"
      aria-hidden
    >
      {icon}
    </span>
  );
}

function listHasIcons(nodes: PageTree.Node[], indexItem?: PageTree.Item): boolean {
  if (indexItem?.icon) {
    return true;
  }
  return nodes.some(
    (node) => (node.type === "page" || node.type === "folder") && Boolean(node.icon),
  );
}

function SidebarPageLink({
  item,
  normalizedPathname,
  sub = false,
  reserveIconSlot = false,
  onNavigate,
}: {
  item: PageTree.Item;
  normalizedPathname: string;
  sub?: boolean;
  reserveIconSlot?: boolean;
  onNavigate?: () => void;
}) {
  const isActive =
    !item.external && normalizePathname(item.url) === normalizedPathname;

  const labelContent = (
    <span className="flex min-w-0 flex-1 items-center gap-0.5">
      <SidebarItemIcon icon={item.icon} reserveSlot={reserveIconSlot} />
      <span className="truncate">{item.name}</span>
    </span>
  );

  const content = item.external ? (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      onClick={onNavigate}
    >
      {labelContent}
      <ArrowTopRightIcon className="icon ms-auto shrink-0" aria-hidden />
    </a>
  ) : (
    <Link
      href={item.url}
      aria-current={isActive ? "page" : undefined}
      onClick={onNavigate}
    >
      {labelContent}
    </Link>
  );

  if (sub) {
    return (
      <SidebarMenuSubItem>
        <SidebarMenuSubButton asChild isActive={isActive}>
          {content}
        </SidebarMenuSubButton>
      </SidebarMenuSubItem>
    );
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={isActive}>
        {content}
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

function SidebarFolderItem({
  folder,
  pathname,
  normalizedPathname,
  sub = false,
  reserveIconSlot = false,
  onNavigate,
}: {
  folder: PageTree.Folder;
  pathname: string;
  normalizedPathname: string;
  sub?: boolean;
  reserveIconSlot?: boolean;
  onNavigate?: () => void;
}) {
  const containsActive = folderContainsPath(folder, pathname);
  const [open, setOpen] = useState(
    Boolean(folder.defaultOpen || containsActive),
  );

  useEffect(() => {
    if (containsActive) {
      setOpen(true);
    }
  }, [containsActive]);

  const ItemWrapper = sub ? SidebarMenuSubItem : SidebarMenuItem;
  const subHasIcons = listHasIcons(folder.children, folder.index);

  return (
    <Collapsible open={open} onOpenChange={setOpen} asChild>
      <ItemWrapper>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton aria-expanded={open}>
            <span className="flex min-w-0 flex-1 items-center gap-0.5">
              <SidebarItemIcon
                icon={folder.icon}
                reserveSlot={reserveIconSlot}
              />
              <span className="truncate">{folder.name}</span>
            </span>
            <span
              className="ms-auto inline-flex size-1 shrink-0 items-center justify-center [&_svg]:size-1 [&_svg]:shrink-0"
              aria-hidden
            >
              <ChevronRight
                className={cn(
                  "transition-transform motion-reduce:transition-none",
                  open && "rotate-90",
                )}
              />
            </span>
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {folder.index ? (
              <SidebarPageLink
                item={folder.index}
                normalizedPathname={normalizedPathname}
                sub
                reserveIconSlot={subHasIcons}
                onNavigate={onNavigate}
              />
            ) : null}
            <SidebarNodesList
              nodes={folder.children}
              pathname={pathname}
              normalizedPathname={normalizedPathname}
              sub
              reserveIconSlot={subHasIcons}
              onNavigate={onNavigate}
            />
          </SidebarMenuSub>
        </CollapsibleContent>
      </ItemWrapper>
    </Collapsible>
  );
}

function SidebarNodesList({
  nodes,
  pathname,
  normalizedPathname,
  sub = false,
  reserveIconSlot,
  onNavigate,
}: {
  nodes: PageTree.Node[];
  pathname: string;
  normalizedPathname: string;
  sub?: boolean;
  reserveIconSlot?: boolean;
  onNavigate?: () => void;
}) {
  const ItemWrapper = sub ? SidebarMenuSubItem : SidebarMenuItem;
  const hasIcons = reserveIconSlot ?? listHasIcons(nodes);

  return (
    <>
      {nodes.map((node, index) => {
        if (node.type === "separator") {
          return (
            <ItemWrapper key={node.$id ?? `separator-${index}`}>
              <SidebarGroupLabel>{node.name}</SidebarGroupLabel>
            </ItemWrapper>
          );
        }

        if (node.type === "folder") {
          return (
            <SidebarFolderItem
              key={node.$id ?? `folder-${index}`}
              folder={node}
              pathname={pathname}
              normalizedPathname={normalizedPathname}
              sub={sub}
              reserveIconSlot={hasIcons}
              onNavigate={onNavigate}
            />
          );
        }

        return (
          <SidebarPageLink
            key={node.$id ?? node.url}
            item={node}
            normalizedPathname={normalizedPathname}
            sub={sub}
            reserveIconSlot={hasIcons}
            onNavigate={onNavigate}
          />
        );
      })}
    </>
  );
}

export function DocsSidebarNav({ tree, variant }: DocsSidebarNavProps) {
  const { isMobile, setOpenMobile } = useSidebar();
  const pathname = usePathname();
  const normalizedPathname = normalizePathname(pathname);

  const sections = useMemo(() => getDocsSections(tree), [tree]);
  const activeSection = useMemo(
    () => getActiveSection(sections, pathname),
    [sections, pathname],
  );

  useEffect(() => {
    setOpenMobile(false);
  }, [pathname, setOpenMobile]);

  if (variant === "home" && !isMobile) {
    return null;
  }

  const defaultSection =
    sections.find((section) => section.title === "Get Started") ?? sections[0];
  const displaySection =
    variant === "home" ? defaultSection : (activeSection ?? defaultSection);

  const handleNavigate = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar
      collapsible="offcanvas"
      className="top-(--fd-nav-height) h-[calc(100svh-var(--fd-nav-height))]"
    >
      <SidebarContent>
        <ScrollArea className="min-h-0 flex-1">
          <nav aria-label="Docs">
            {isMobile ? (
              <SidebarGroup>
                <SidebarGroupLabel>Sections</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {sections.map((section) => {
                      const isActive = activeSection?.id === section.id;
                      return (
                        <SidebarMenuItem key={section.id}>
                          <SidebarMenuButton asChild isActive={isActive}>
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
                        <SidebarMenuButton asChild>
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
            ) : null}

            {displaySection ? (
              <SidebarGroup>
                <SidebarGroupLabel>{displaySection.title}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarNodesList
                      nodes={displaySection.nodes}
                      pathname={pathname}
                      normalizedPathname={normalizedPathname}
                      onNavigate={handleNavigate}
                    />
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ) : null}
          </nav>
        </ScrollArea>
      </SidebarContent>
      {isMobile ? (
        <SidebarFooter className="sm:hidden">
          <div className="flex items-center justify-between gap-0.5 border-t border-gray-a6 px-1 pt-1">
            <ThemeColorSwitcher />
            <ThemeToggle />
          </div>
        </SidebarFooter>
      ) : null}
    </Sidebar>
  );
}
