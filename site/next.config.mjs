/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    unoptimized: true,
  },
};

export default nextConfig;
