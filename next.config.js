/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "duodigitalmarketing.000webhostapp.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    loader: "custom",
    loaderFile: './components/loader/loader.js',
  },
};

module.exports = nextConfig;
