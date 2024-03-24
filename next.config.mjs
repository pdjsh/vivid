/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.mypinata.cloud",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.arweave.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "arweave.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.seadn.io",
        port: "",
      },
    ],
  },
};

export default nextConfig;
