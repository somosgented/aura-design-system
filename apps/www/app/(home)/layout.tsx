import { baseOptions } from "@/utils/layout.shared";
import Footer from "@/components/Footer";
import { HomeLayout } from "@/components/layout/home";
import { source } from "@/utils/source";

import "@/styles/home.css";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout {...baseOptions()} tree={source.pageTree}>
      <div className="home-flavor">
        {children}
        <Footer />
      </div>
    </HomeLayout>
  );
}
