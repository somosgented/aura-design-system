import "@/app/globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Gabarito } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SidebarProvider } from "@/components/layout/contexts/sidebar";
import { DocsI18nProvider } from "@/components/layout/contexts/i18n";
import { AuraThemeProvider } from "@/components/theme/AuraThemeProvider";
import { ThemeBootScript } from "@/components/theme/ThemeBootScript";
import { AURA_THEME_BOOT_SCRIPT } from "@/lib/aura-theme-boot";
import { siteDescription, siteName, siteOgImage } from "@/utils/site";

const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-gabarito",
});

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    siteName,
    images: [siteOgImage],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={gabarito.variable} suppressHydrationWarning>
      <head>
        <ThemeBootScript html={AURA_THEME_BOOT_SCRIPT} />
      </head>
      <body className="font-sans flex flex-col min-h-screen">
        <RootProvider
          search={{ enabled: false }}
          theme={{ disableTransitionOnChange: false }}
        >
          <AuraThemeProvider>
            <DocsI18nProvider>
              <SidebarProvider>{children}</SidebarProvider>
            </DocsI18nProvider>
          </AuraThemeProvider>
        </RootProvider>
        <Analytics />
      </body>
    </html>
  );
}
