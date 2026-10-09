import { baseOptions } from "@/utils/layout.shared";
import { DocsLayout } from "@/components/layout/docs";
import Footer from "@/components/Footer";
import { source } from "@/utils/source";

import { ThemeColorSwitcher } from "@/components/ThemeColorSwitcher";

/**
 * Home uses DocsLayout (same LayoutBody / #nd-docs-layout as /docs), not
 * components/layout/home. Desktop sidebar collapse full-width and the mobile
 * drawer gutter fix therefore apply on `/` without a separate home shell.
 */
export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      themeSwitch={{
        enabled: true,
        component: <ThemeColorSwitcher />,
      }}
    >
      {children}
      <Footer />
    </DocsLayout>
  );
}
