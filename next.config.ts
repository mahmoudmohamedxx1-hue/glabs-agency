import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    // Fail the build on type errors — the codebase is clean, keep it that way.
    ignoreBuildErrors: false,
  },
  reactStrictMode: false,
};

export default nextConfig;
