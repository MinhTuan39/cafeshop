import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 requires explicit qualities list
    qualities: [25, 50, 75, 100],
    remotePatterns: [
      // Allow placehold.co for placeholder product images
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
