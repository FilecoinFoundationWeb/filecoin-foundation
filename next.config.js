const { withSentryConfig } = require('@sentry/nextjs')

const redirects = require('./redirects')

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh7-us.googleusercontent.com',
      },
    ],
  },
  experimental: {
    typedRoutes: true,
    outputFileTracingIncludes: {
      '/': ['src/content/**'],
    },
    outputFileTracingExcludes: {
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
    },
  },
  async redirects() {
    return redirects
  },
  webpack: (config) => {
    // Handling Markdown files
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] },
    })

    // Handling SVG files - SVG as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    // Handling YAML files
    config.module.rules.push({
      test: /\.yml$/,
      use: 'yaml-loader',
    })

    return config
  },
}

module.exports = withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: 'filecoin-foundation-qk',
  project: 'filecoin-foundation-site',

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-side errors will fail.
  // tunnelRoute: "/monitoring",

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
})
