import { withSentryConfig } from '@sentry/nextjs'

import {
  createSentryConfig,
  outputFileTracingIncludes,
  outputFileTracingExcludes,
  webpackRules as baseWebpackRules,
} from '@filecoin-foundation/next-config'

import { redirects } from './redirects.mjs'

/**
 * @type {import('next').NextConfig}
 */
const imageRemotePatterns = [
  {
    protocol: 'https',
    hostname: 'lh7-us.googleusercontent.com',
  },
]

const webpackRules = [
  ...baseWebpackRules,
  {
    test: /\.yml$/,
    use: 'yaml-loader',
  },
]

const nextConfig = {
  images: {
    remotePatterns: imageRemotePatterns,
  },
  experimental: {
    typedRoutes: true,
  },
  outputFileTracingIncludes,
  outputFileTracingExcludes,
  webpack: (config) => {
    config.module.rules.push(...webpackRules)
    return config
  },
  async redirects() {
    return redirects
  },
}

export default withSentryConfig(
  nextConfig,
  createSentryConfig('filecoin-foundation-site', 'SENTRY_AUTH_TOKEN_FF_SITE'),
)
