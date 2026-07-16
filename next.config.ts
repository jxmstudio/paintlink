import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The gallery was replaced by the Recent Projects page after launch.
      { source: "/gallery", destination: "/projects", permanent: true },
    ];
  },
};

export default nextConfig;
