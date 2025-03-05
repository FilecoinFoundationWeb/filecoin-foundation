import { redirects } from './redirects.mjs'

/**
 * @type {import('next').NextConfig}
 */
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
  webpack: (config) => {
    config.module.rules.push(...webpackRules)
    return config
  },
  async redirects() {
    return redirects
  },
}

export default nextConfig
