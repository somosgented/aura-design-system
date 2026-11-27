import { SiteShell } from "@/components/site/SiteShell";
import { source } from "@/utils/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <SiteShell tree={source.pageTree} variant="docs">
      {children}
    </SiteShell>
  );
}
