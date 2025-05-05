// @ts-check
import { outputFileTracingExcludes } from '@filecoin-foundation/next-config'

const webpackRules = [
  {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  },
]

const outputFileTracingIncludes = {
  '/': ['src/app/**'],
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes,
  outputFileTracingExcludes,
  webpack: (config) => {
    config.module.rules.push(...webpackRules)
    return config
  },
  async rewrites() {
    return [
      {
        source: '/site-audit-reports/:site',
        destination: '/site-audit-reports/:site/index.html',
      },
    ]
  },
}

export default nextConfig
