/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Docker standalone deployment
  output: "standalone",
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "backend.cvg.construction",
      // },
      // Legacy hostname kept for backwards compatibility
      {
        protocol: "https",
        hostname: "cms.1ftt.com",
      },
    ],
  },
};

module.exports = nextConfig;