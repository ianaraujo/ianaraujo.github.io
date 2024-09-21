/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: '/ianaraujo.com',
  assetPrefix: '/ianaraujo.com/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
