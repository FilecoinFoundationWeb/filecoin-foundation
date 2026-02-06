import createNextIntlPlugin from 'next-intl/plugin'

import { createNextConfig } from '@filecoin-foundation/next-config'

import { redirects as rawRedirects } from './redirects'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = createNextConfig({
  imageRemotePatterns: [],
  redirects: async () => rawRedirects,
  transpilePackages: ['@filecoin-foundation/ui-filecoin'],
  sentry: {
    project: 'filecoin-site',
    authTokenEnvVar: 'SENTRY_AUTH_TOKEN_FILECOIN_SITE',
  },
})

export default withNextIntl(nextConfig)
