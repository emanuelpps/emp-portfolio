/** @type {import('next').NextConfig} */

const nextConfig = {
  output:'export',
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
};

module.exports = nextConfig;