const { withSentryConfig } = require('@sentry/nextjs')

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
    return [
      // PAGE REDIRECTS
      { source: '/board', destination: '/about', permanent: true },
      { source: '/careers', destination: '/about', permanent: true },
      {
        source: '/community',
        destination: '/ecosystem-explorer',
        permanent: true,
      },
      { source: '/contact', destination: '/about', permanent: true },
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
        source: '/ecosystem/%5C%22',
        destination: '/ecosystem-explorer',
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
        source: '/filplus/%20%22Filecoin%20Plus%22',
        destination: '/filecoin-plus',
        permanent: true,
      },
      { source: '/filplus', destination: '/filecoin-plus', permanent: true },
      {
        source: '/fips',
        destination:
          '/blog/participating-in-the-filecoin-ecosystem-bounties-microgrants-and-fips',
        permanent: true,
      },
      { source: '/get-involved', destination: '/', permanent: true },
      {
        source: '/governance/fips/:path*',
        destination: '/governance',
        permanent: true,
      },
      {
        source: '/governance/proposing',
        destination: '/governance',
        permanent: true,
      },
      { source: '/philosophy', destination: '/about', permanent: true },
      { source: '/policy', destination: '/privacy-policy', permanent: true },
      { source: '/public-data', destination: '/', permanent: true },
      { source: '/public-data/:path*', destination: '/', permanent: true },
      { source: '/publicdata/awards', destination: '/grants', permanent: true },
      {
        source: '/research/research-text.htm',
        destination: '/',
        permanent: true,
      },
      {
        source: '/security/bug-bounty',
        destination: 'https://immunefi.com/bug-bounty/filecoin/',
        permanent: false,
      },
      { source: '/team', destination: '/about', permanent: true },
      { source: '/terms', destination: '/terms-of-use', permanent: true },
      {
        source: '/admin',
        destination: '/admin/index.html',
        permanent: true,
      },

      // BLOG POST REDIRECTS
      {
        source:
          '/blog/announcing-%E2%80%98watermelon%E2%80%99-nv21-upgrade-extended-sector-commitments-synthetic-porep-fvm-enhancements-and-more',
        destination:
          '/blog/announcing-watermelon-nv21-upgrade-extended-sector-commitments-synthetic-porep-fvm-enhancements-and-more',
        permanent: true,
      },
      {
        source:
          '/blog/deep-dive-on-messari%E2%80%99s-q1-filecoin-ecosystem-report',
        destination: '/blog/deep-dive-on-messaris-q1-filecoin-ecosystem-report',
        permanent: true,
      },
      {
        source:
          '/blog/democracy%E2%80%99s-library-announces-more-than-a-petabyte-of-government-data-uploaded-to-the-filecoin-network',
        destination:
          '/blog/democracys-library-announces-more-than-a-petabyte-of-government-data-uploaded-to-the-filecoin-network',
        permanent: true,
      },
      {
        source:
          '/blog/ecosystem-spotlight-ghostdrive%E2%80%99s-secure-decentralized-storage-now-on-mobile',
        destination:
          '/blog/ecosystem-spotlight-ghostdrives-secure-decentralized-storage-now-on-mobile',
        permanent: true,
      },
      {
        source:
          '/blog/guest-post-if-the-library-of-alexandra-were-built-better',
        destination:
          '/blog/guest-post-if-the-library-of-alexandria-were-built-better',
        permanent: true,
      },
      {
        source:
          '/blog/pilecoin-foundation-successfully-deploys-interflanetary-pile-system-IFPS-in-space',
        destination:
          '/blog/filecoin-foundation-successfully-deploys-interplanetary-file-system-ipfs-in-space',
        permanent: true,
      },
      {
        source:
          '/blog/what%E2%80%99s-new-with-the-filecoin-plus-notary-election-and-filecoin-day-highlights-from-labweek23',
        destination:
          '/blog/whats-new-with-the-filecoin-plus-notary-election-and-filecoin-day-highlights-from-labweek23',
        permanent: true,
      },

      // ECOSYSTEM PROJECTS REDIRECTS
      {
        source: '/ecosystem-explorer/solmedia/%E2%80%A6',
        destination: '/ecosystem-explorer/solmedia',
        permanent: true,
      },
      {
        source: '/ecosystem-explorer/bildo',
        destination: '/ecosystem-explorer/bidlo',
        permanent: true,
      },
      {
        source: '/ecosystem/project/bela-supernova',
        destination:
          '/blog/bela-supernova-awarded-chainlink-filecoin-joint-grant-to-support-public-health-data-oracle',
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
