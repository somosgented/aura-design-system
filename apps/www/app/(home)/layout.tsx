import { baseOptions } from "@/utils/layout.shared";
import { DocsLayout } from "@/components/layout/docs";
import Footer from "@/components/Footer";
import { source } from "@/utils/source";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions()}>
      {children}
      <Footer />
    </DocsLayout>
  );
}
