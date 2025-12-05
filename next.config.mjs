/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a fully static export that can be served by Nginx
  output: 'export',
  images: {
    // Required for static export when using next/image
    unoptimized: true,
  },
};

export default nextConfig;
