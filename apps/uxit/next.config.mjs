/** @type {import('next').NextConfig} */
const webpackRules = [
  {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  },
]

const nextConfig = {
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
