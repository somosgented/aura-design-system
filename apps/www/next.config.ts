import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX({
  configPath: "source.config.ts",
  outDir: ".source",
  // Next 16.1 Turbopack rejects the default macro loader rules from fumadocs-mdx.
  macro: false,
});

const config: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    const utils = [
      "client-only",
      "direction",
      "hitbox",
      "pending",
      "portal",
      "presence",
      "visually-hidden",
      "visually-hidden-input",
    ];

    return [
      {
        source: "/docs/components/chart",
        destination: "/docs/charts",
        permanent: true,
      },
      ...["figma", "international", "voice"].map((slug) => ({
        source: `/docs/foundations/${slug}`,
        destination: "/docs/foundations",
        permanent: true,
      })),
      {
        source: "/docs/rules/self-documenting-system",
        destination: "/docs/rules/feature-map",
        permanent: true,
      },
      ...[
        "fundations-colors",
        "fundations-typography",
        "fundations-layout-spacing",
        "fundation-icons",
        "fundation-animations",
        "components-forms",
        "principles",
        "shadcn-lint",
        "aura-agent-surface",
      ].map((slug) => ({
        source: `/docs/rules/${slug}`,
        destination: "/docs/rules/aura-skill",
        permanent: true,
      })),
      {
        source: "/docs/components/app-bar",
        destination: "/docs/components",
        permanent: true,
      },
      {
        source: "/docs/components/attachment",
        destination: "/docs/components",
        permanent: true,
      },
      ...utils.map((slug) => ({
        source: `/docs/components/${slug}`,
        destination: `/docs/utils/${slug}`,
        permanent: true,
      })),
    ];
  },
  async rewrites() {
    return [
      {
        source: "/docs/:slug*.md",
        destination: "/llms.mdx/docs/:slug*/content.md",
      },
    ];
  },
};

export default withMDX(config);
