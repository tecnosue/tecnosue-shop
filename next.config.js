/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{
    output: 'standalone',
  }

}


module.exports = nextConfig
