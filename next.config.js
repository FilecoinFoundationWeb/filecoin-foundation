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
        '.netlify/**',
        'public/**',
        'scripts/**',
        'src/app/**',
      ],
    },
  },
  async redirects() {
    return [
      {
        source:
          '/blog/ecosystem-spotlight-ghostdrive%E2%80%99s-secure-decentralized-storage-now-on-mobile',
        destination:
          '/blog/ecosystem-spotlight-ghostdrives-secure-decentralized-storage-now-on-mobile',
        permanent: true,
      },
      {
        source:
          '/blog/guest-post-if-the-library-of-alexandra-were-built-better/',
        destination:
          '/blog/guest-post-if-the-library-of-alexandria-were-built-better',
        permanent: true,
      },
      {
        source: '/davos',
        destination: '/events/the-filecoin-sanctuary-davos-2024',
        permanent: true,
      },
      {
        source: '/davos-registration',
        destination: '/events/the-filecoin-sanctuary-davos-2024',
        permanent: true,
      },
      {
        source: '/ecosystem',
        destination: '/ecosystem-explorer/',
        permanent: true,
      },
      {
        source: '/ecosystem-projects/:path*',
        destination: '/ecosystem-explorer/:path*',
        permanent: true,
      },
      {
        source: '/filaustin',
        destination: '/events/fil-austin',
        permanent: true,
      },
      {
        source: '/get-involved',
        destination: '/',
        permanent: true,
      },
      {
        source: '/governance/fips/:path*',
        destination: '/governance',
        permanent: true,
      },
      {
        source: '/policy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/public-data',
        destination: '/',
        permanent: true,
      },
      {
        source: '/public-data/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-of-use',
        permanent: true,
      },
    ]
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

module.exports = nextConfig

// Injected content via Sentry wizard below

const { withSentryConfig } = require('@sentry/nextjs')

module.exports = withSentryConfig(module.exports, {
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
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
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
