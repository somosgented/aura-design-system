import Footer from "@/components/Footer";
import { SiteShell } from "@/components/site/SiteShell";
import { source } from "@/utils/source";

import "@/styles/home.css";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <SiteShell tree={source.pageTree} variant="home">
      <div className="home-flavor">
        {children}
        <Footer />
      </div>
    </SiteShell>
  );
}
