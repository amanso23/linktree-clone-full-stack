import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "626a6b3cns.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
