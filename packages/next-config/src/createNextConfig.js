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
export const createNextConfig = ({
  imageRemotePatterns,
  redirects,
  extraWebpackRules = [],
  sentry,
}) =>
  withSentryConfig(
    {
      images: {
        remotePatterns: imageRemotePatterns,
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
