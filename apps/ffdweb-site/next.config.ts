import type { NextConfig } from 'next'

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

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push(...webpackRules)
    return config
  },
}

export default nextConfig
