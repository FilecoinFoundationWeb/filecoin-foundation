import type { NextConfig } from 'next'

const webpackRules = [
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
