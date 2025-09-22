import { createNextConfig } from '@filecoin-foundation/next-config'

import { redirects as rawRedirects } from './redirects'

/** @type {import('next').NextConfig} */
export default createNextConfig({
  imageRemotePatterns: [
    {
      protocol: 'https',
      hostname: 'assets.tina.io',
    },
  ],
  redirects: async () => rawRedirects,
  sentry: {
    project: 'filecoin-site',
    authTokenEnvVar: 'SENTRY_AUTH_TOKEN_FILECOIN_SITE',
  },
})
