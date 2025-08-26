// @ts-check

import { withSentryConfig } from '@sentry/nextjs'
import {
  createSentryConfig,
  outputFileTracingIncludes,
  outputFileTracingExcludes,
  webpackRules as baseWebpackRules,
} from '@filecoin-foundation/next-config'

/**
 * @param {object} params
 * @param {import('next/dist/shared/lib/image-config').RemotePattern[]} params.imageRemotePatterns
 * @param {import('next').NextConfig['redirects']} params.redirects
 * @param {import('webpack').RuleSetRule[]} [params.extraWebpackRules]
 * @param {{ project: string, authTokenEnvVar: string }} params.sentry
 * @returns {import('next').NextConfig}
 */
export function createNextConfig({
  imageRemotePatterns,
  redirects,
  extraWebpackRules = [],
  sentry,
}) {
  return withSentryConfig(
    {
      images: {
        remotePatterns: imageRemotePatterns,
        qualities: [75, 85, 100],
      },
      experimental: {
        typedRoutes: true,
      },
      outputFileTracingIncludes,
      outputFileTracingExcludes,
      webpack: (config) => {
        config.module.rules.push(...baseWebpackRules, ...extraWebpackRules)
        return config
      },
      redirects,
    },
    createSentryConfig(sentry),
  )
}
