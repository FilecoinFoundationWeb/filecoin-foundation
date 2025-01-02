const { withSentryConfig } = require('@sentry/nextjs')

const redirects = require('./redirects')

const imageRemotePatterns = [
  {
    protocol: 'https',
    hostname: 'lh7-us.googleusercontent.com',
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

// Export configuration with Sentry integration
module.exports = withSentryConfig(nextConfig, {
  org: 'filecoin-foundation-qk',
  project: 'filecoin-foundation-site',
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
})
