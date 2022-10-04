/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "img.zumpercdn.com",
      "assets.site-static.com",
      "cdngeneral.rentcafe.com",
      "cdn.vox-cdn.com",
      "img-2.homely.com.au",
    ],
  },
};

module.exports = nextConfig;
