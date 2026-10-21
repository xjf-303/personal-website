import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    // Placeholder photographs only. Once the real files live in `public/`,
    // these entries can go — see PLACEHOLDERS.md.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/seed/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
