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
