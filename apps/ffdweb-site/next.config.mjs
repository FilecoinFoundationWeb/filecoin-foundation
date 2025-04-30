import { withSentryConfig } from '@sentry/nextjs'

import {
  outputFileTracingIncludes,
  outputFileTracingExcludes,
  webpackRules,
} from '@filecoin-foundation/next-config'

import { redirects } from './redirects.mjs'

/**
 * @type {import('next').NextConfig}
 */
const imageRemotePatterns = [
  {
    protocol: 'https',
    hostname: 'lh5.googleusercontent.com',
  },
  {
    protocol: 'https',
    hostname: 'lh5-us.googleusercontent.com',
  },
  {
    protocol: 'https',
    hostname: 'lh7-us.googleusercontent.com',
  },
]

const nextConfig = {
  images: {
    remotePatterns: imageRemotePatterns,
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

export default withSentryConfig(nextConfig, {
  org: 'filecoin-foundation-qk',
  project: 'ffdweb-site',
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
  authToken: process.env.SENTRY_AUTH_TOKEN_FFDWEB_SITE,
})
