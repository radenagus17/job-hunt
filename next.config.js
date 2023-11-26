/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pwbdmxxvqykxfnyssffl.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
