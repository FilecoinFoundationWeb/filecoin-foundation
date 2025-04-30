import { withSentryConfig } from '@sentry/nextjs'

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
  {
    test: /\.yml$/,
    use: 'yaml-loader',
  },
]

const outputFileTracingIncludes = {
  '/': ['src/content/**'],
}

const outputFileTracingExcludes = {
  '/': [
    '.git/**',
    '.github/**',
    '.next/cache/**',
    '.vscode/**',
    'cypress/**',
    'public/**',
    'scripts/**',
    'src/app/**',
  ],
}

const nextConfig = {
  images: {
    remotePatterns: imageRemotePatterns,
  },
  experimental: {
    typedRoutes: true,
  },
  outputFileTracingIncludes,
  outputFileTracingExcludes,
  async redirects() {
    return redirects
  },
  webpack: (config) => {
    config.module.rules.push(...webpackRules)
    return config
  },
}

export default withSentryConfig(nextConfig, {
  org: 'filecoin-foundation-qk',
  project: 'filecoin-foundation-site',
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
  authToken: process.env.SENTRY_AUTH_TOKEN_FF_SITE,
})
