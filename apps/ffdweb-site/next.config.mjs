import { redirects } from './redirects.mjs'

/**
 * @type {import('next').NextConfig}
 */
const imageRemotePatterns = [
  {
    protocol: 'https',
    hostname: 'lh5-us.googleusercontent.com',
  },
  {
    protocol: 'https',
    hostname: 'lh7-us.googleusercontent.com',
  },
]

const webpackRules = [
  {
    test: /\.md$/,
    loader: 'frontmatter-markdown-loader',
    options: {
      mode: ['body', 'attributes', 'react-component'],
    },
  },
  {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  },
]

const nextConfig = {
  images: {
    remotePatterns: imageRemotePatterns,
  },
  webpack: (config) => {
    config.module.rules.push(...webpackRules)
    return config
  },
  async redirects() {
    return redirects
  },
}

export default nextConfig
