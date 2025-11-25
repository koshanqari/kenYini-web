import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'keaprojects.com.au',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;

