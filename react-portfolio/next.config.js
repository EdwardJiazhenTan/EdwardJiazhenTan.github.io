/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/react-portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/react-portfolio' : '',
}

module.exports = nextConfig
