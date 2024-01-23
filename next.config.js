/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
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
    domains: ["i.ibb.co", "duodigitalmarketing.000webhostapp.com"],
  },
};

module.exports = nextConfig;
