import type { NextConfig } from "next";

const repo = process.env.NEXT_PUBLIC_BASE_PATH || `/${process.env.NEXT_PUBLIC_REPO || ""}`;

const nextConfig: NextConfig = {
  output: "export",
  basePath: repo,
  assetPrefix: repo,
  images: { unoptimized: true },
};

export default nextConfig;
