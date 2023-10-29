/** @type {import('next').NextConfig} */
const nextConfig = {};

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
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'myBlack': '#333333',
      'gray': '#4C4C4C',
      'white': '#D0D0D0',
    },
  },
  nextConfig,
};
