/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "www.pexels.com",
      "i.pinimg.com",
    ],
  },
};

export default nextConfig;
