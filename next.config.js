/** @type {import('next').NextConfig} */
const nextConfig = {
  // Konfigurasi untuk Cloudflare Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;