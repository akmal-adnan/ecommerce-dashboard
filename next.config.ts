/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `
      @use "@/styles/variables" as *;
    `,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
