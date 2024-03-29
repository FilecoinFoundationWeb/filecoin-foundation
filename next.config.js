const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh7-us.googleusercontent.com'
      }
    ]
  },
  experimental: {
    typedRoutes: true
  },
  webpack: (config) => {
    // Handling Markdown files
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] }
    })

    // Handling SVG files - SVG as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    // Handling YAML files
    config.module.rules.push({
      test: /\.yml$/,
      use: 'yaml-loader'
    })

    return config
  }
}

module.exports = nextConfig
