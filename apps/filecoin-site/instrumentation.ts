import { Link } from '@/i18n/navigation'

import * as Sentry from '@sentry/nextjs'

import { setUIConfig } from '@filecoin-foundation/ui-filecoin/config/ui-config'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

export const onRequestError = Sentry.captureRequestError

export async function register() {
  setUIConfig({
    baseDomain: BASE_DOMAIN,
    Link: Link,
  })

  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config')
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./sentry.edge.config')
  }
}
