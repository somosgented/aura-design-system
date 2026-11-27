"use client";

import type { CSSProperties, ReactNode } from "react";
import type * as PageTree from "fumadocs-core/page-tree";
import { TreeContextProvider } from "fumadocs-ui/contexts/tree";

import { DocsSidebarNav } from "@/components/site/DocsSidebarNav";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SidebarProvider, useSidebar } from "@/components/ui/Sidebar";
import { cn } from "@/utils/class-names";

export interface SiteShellProps {
  tree: PageTree.Root;
  variant: "docs" | "home";
  children: ReactNode;
}

function SiteShellInner({ tree, variant, children }: SiteShellProps) {
  const { state } = useSidebar();
  const expanded = state === "expanded";

  return (
    <>
      <SiteHeader tree={tree} />
      <DocsSidebarNav tree={tree} variant={variant} />
      {variant === "docs" ? (
        <main
          id="nd-docs-layout"
          className={cn(
            "fd-default-layout flex min-w-0 flex-1 flex-col pt-(--fd-nav-height) max-md:[--fd-sidebar-width:0px] xl:[--fd-toc-width:268px]",
            expanded
              ? "md:ps-(--sidebar-width) md:[--fd-sidebar-width:var(--sidebar-width)]"
              : "[--fd-sidebar-width:0px]",
          )}
        >
          {children}
        </main>
      ) : (
        <main
          id="nd-home-layout"
          className="flex min-w-0 flex-1 flex-col pt-(--fd-nav-height)"
        >
          {children}
        </main>
      )}
    </>
  );
}

export function SiteShell({ tree, variant, children }: SiteShellProps) {
  return (
    <TreeContextProvider tree={tree}>
      <SidebarProvider
        className="min-w-0 flex-col overflow-x-clip [--fd-nav-height:56px] md:[--fd-nav-height:100px]"
        style={{ "--sidebar-width": "17rem" } as CSSProperties}
      >
        <SiteShellInner tree={tree} variant={variant}>
          {children}
        </SiteShellInner>
      </SidebarProvider>
    </TreeContextProvider>
  );
}
