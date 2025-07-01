import type { NextConfig } from 'next'

import {
  outputFileTracingExcludes,
  outputFileTracingIncludes,
  webpackRules,
} from '@filecoin-foundation/next-config'

// To replace with createNextConfig once Sentry is set up
const nextConfig: NextConfig = {
  outputFileTracingIncludes,
  outputFileTracingExcludes,
  webpack: (config) => {
    config.module.rules.push(...webpackRules)
    return config
  },
}

export default nextConfig
