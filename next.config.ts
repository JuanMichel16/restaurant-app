import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/order/cafe',
        permanent: false
      },
      {
        source: '/order',
        destination: '/order/cafe',
        permanent: false
      }
    ]
  }
};

export default nextConfig;
