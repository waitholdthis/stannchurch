import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/stannchurch" : undefined,
  assetPrefix: isGithubPages ? "/stannchurch/" : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? "/stannchurch" : "",
  },
  images: {
    unoptimized: isGithubPages,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploads.weconnect.com",
      },
    ],
  },
};

export default nextConfig;
