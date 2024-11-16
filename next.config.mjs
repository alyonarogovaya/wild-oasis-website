/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xsqaaoyugcgjgbnhkvyy.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/Cabins/**',
      },
    ],
  },
};

export default nextConfig;
