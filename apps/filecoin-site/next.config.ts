import { createNextConfig } from '@filecoin-foundation/next-config'

import { redirects as rawRedirects } from './redirects.js'

/** @type {import('next').NextConfig} */
export default createNextConfig({
  imageRemotePatterns: [],
  redirects: async () => rawRedirects,
  sentry: {
    project: 'filecoin-site',
    authTokenEnvVar: 'SENTRY_AUTH_TOKEN_FILECOIN_SITE',
  },
  images: {
    qualities: [75, 80, 100],
  },
})
