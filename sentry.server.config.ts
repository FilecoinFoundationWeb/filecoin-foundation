// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

if (process.env.NEXT_PUBLIC_DISABLE_SENTRY !== 'true') {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 0.05,
    debug: false,
    environment: process.env.NODE_ENV || 'production',
  })
} else {
  console.log('Sentry is disabled on the server.')
}
