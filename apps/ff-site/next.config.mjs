// @ts-check
import { createNextConfig } from '@filecoin-foundation/next-config'

import { redirects as rawRedirects } from './redirects.mjs'

/** @type {import('next/dist/shared/lib/image-config').RemotePattern[]} */
const imageRemotePatterns = [
  {
    protocol: 'https',
    hostname: 'lh7-us.googleusercontent.com',
  },
]

const extraWebpackRules = [
  {
    test: /\.yml$/,
    use: 'yaml-loader',
  },
]

/** @type {import('next').NextConfig} */
export default createNextConfig({
  imageRemotePatterns,
  extraWebpackRules,
  redirects: async () => rawRedirects,
  sentry: {
    project: 'filecoin-foundation-site',
    authTokenEnvVar: 'SENTRY_AUTH_TOKEN_FF_SITE',
  },
})
