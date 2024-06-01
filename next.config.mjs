/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/w780/**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
