import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Konfigurasi untuk Cloudflare Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Enable experimental features untuk performa yang lebih baik
  experimental: {
    optimizeCss: true,
  },
  // Compress untuk ukuran bundle yang lebih kecil
  compress: true,
  // Generate ETags
  generateEtags: true,
  // PoweredByHeader false untuk keamanan
  poweredByHeader: false,
};

export default nextConfig;
