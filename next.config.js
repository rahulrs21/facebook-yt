/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Here I included the <Image /> component's domain which is defined in Header.js(components)
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "avatars.githubusercontent.com",
      "rahuldxb.com",
      "platform-lookaside.fbsbx.com", //facebook
      "firebasestorage.googleapis.com", //firebase-storage
      "scontent-atl3-2.xx.fbcdn.net",
      "firebasestorage.googleapis.com",
    ]
  }
}

module.exports = nextConfig
