/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
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
  async redirects() {
    return [
      {
        source: "/",
        destination: "/work",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
