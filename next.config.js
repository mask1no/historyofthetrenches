/** @type {import('next').NextConfig} */
const isWindows = process.platform === "win32";

const nextConfig = {
  reactStrictMode: true,
  ...(isWindows ? {} : { output: "standalone" })
};

module.exports = nextConfig;

