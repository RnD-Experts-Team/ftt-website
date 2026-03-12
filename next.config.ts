/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Docker standalone deployment
  output: "standalone",
  images: {
    // Allow Next image optimizer to fetch local dev CMS assets.
    dangerouslyAllowLocalIP: true,
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
      // Allow local dev backend serving images on port 8000
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/storage/**",
      },
    ],
  },
};

module.exports = nextConfig;