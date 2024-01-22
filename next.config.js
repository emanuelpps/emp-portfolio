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
  themes: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      myBlack: "#333333",
      gray: "#4C4C4C",
      white: "#D0D0D0",
    },
  },
  image: {
    domains: ["i.ibb.co", "duodigitalmarketing.000webhostapp.com"],
  },
  nextConfig,
};
