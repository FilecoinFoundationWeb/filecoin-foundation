// @ts-check

import { createNextConfig } from '@filecoin-foundation/next-config'

import { redirects as rawRedirects } from './redirects.mjs'

/** @type {import('next/dist/shared/lib/image-config').RemotePattern[]} */
const imageRemotePatterns = [
  {
    protocol: 'https',
    hostname: 'lh5.googleusercontent.com',
  },
  {
    protocol: 'https',
    hostname: 'lh5-us.googleusercontent.com',
  },
  {
    protocol: 'https',
    hostname: 'lh7-us.googleusercontent.com',
  },
]

/** @type {import('next').NextConfig} */
export default createNextConfig({
  imageRemotePatterns,
  redirects: async () => rawRedirects,
  sentry: {
    project: 'ffdweb-site',
    authTokenEnvVar: 'SENTRY_AUTH_TOKEN_FFDWEB_SITE',
  },
})
