// @ts-check

/**
 * @typedef {import('@sentry/nextjs').SentryBuildOptions} SentryBuildOptions
 */

/**
 * @typedef {{
 *   project: string,
 *   authTokenEnvVar: string
 * }} CreateSentryConfigParams
 */

/**
 * @param {CreateSentryConfigParams} params
 * @returns {SentryBuildOptions}
 */
export const createSentryConfig = ({ project, authTokenEnvVar }) => ({
  org: 'filecoin-foundation-qk',
  project,
  authToken: process.env[authTokenEnvVar] ?? '',
  silent: !process.env.CI,
  sourcemaps: {
    disable: true,
  },
  widenClientFileUpload: true,
  webpack: {
    treeshake: {
      removeDebugLogging: true,
    },
    automaticVercelMonitors: true,
  },
})
