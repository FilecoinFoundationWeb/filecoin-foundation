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
