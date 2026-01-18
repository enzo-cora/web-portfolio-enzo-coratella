import type { NextConfig } from "next";

const {NEXT_PUBLIC_BASE_PATH} = process.env
const repo = NEXT_PUBLIC_BASE_PATH || ""

const nextConfig: NextConfig = {
  output: "export",
  basePath: repo,
  assetPrefix: repo,
  images: { unoptimized: true },
};

export default nextConfig;
