import type { NextConfig } from "next";

// Static export for GitHub Pages.
// BASE_PATH is set by the deploy workflow ("/nginetech" on *.github.io,
// empty once a custom domain is configured).
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
