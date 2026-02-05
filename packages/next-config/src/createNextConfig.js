// @ts-check

import { withSentryConfig } from '@sentry/nextjs'
import {
  createSentryConfig,
  outputFileTracingIncludes,
  outputFileTracingExcludes,
  outputFileTracingRoot,
  webpackRules as baseWebpackRules,
} from '@filecoin-foundation/next-config'

/**
 * @param {object} params
 * @param {import('next/dist/shared/lib/image-config').RemotePattern[]} params.imageRemotePatterns
 * @param {import('next').NextConfig['redirects']} params.redirects
 * @param {import('webpack').RuleSetRule[]} [params.extraWebpackRules]
 * @param {string[]} [params.transpilePackages]
 * @param {{ project: string, authTokenEnvVar: string }} params.sentry
 * @returns {import('next').NextConfig}
 */
export function createNextConfig({
  imageRemotePatterns,
  redirects,
  extraWebpackRules = [],
  transpilePackages = [],
  sentry,
}) {
  return withSentryConfig(
    {
      transpilePackages,
      images: {
        remotePatterns: imageRemotePatterns,
        qualities: [75, 85, 100],
      },
      typedRoutes: true,
      outputFileTracingIncludes,
      outputFileTracingExcludes,
      outputFileTracingRoot,
      webpack: (config) => {
        config.module.rules.push(...baseWebpackRules, ...extraWebpackRules)
        return config
      },
      redirects,
    },
    createSentryConfig(sentry),
  )
}
