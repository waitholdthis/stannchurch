import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uploads.weconnect.com",
      },
    ],
  },
};

export default nextConfig;
