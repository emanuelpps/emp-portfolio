/** @type {import('next').NextConfig} */
const nextConfig = { fastRefresh: false };

module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/work",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "duodigitalmarketing.000webhostapp.com",
      },
    ],
  },
  nextConfig,
};
