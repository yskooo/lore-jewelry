import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname)
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "down-my.img.susercontent.com"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "*.ttcdn-us.com"
      }
    ]
  }
};

export default nextConfig;
