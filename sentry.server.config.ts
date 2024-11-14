// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN
const environment = process.env.NODE_ENV

// If dsn is undefined, Sentry SDK will be disabled
Sentry.init({
  dsn,
  tracesSampleRate: 0.05,
  debug: false,
  environment,
})

if (dsn) {
  console.log(`✅ Sentry is enabled in ${environment}`)
} else {
  console.log(
    `ℹ️ Sentry is disabled in ${environment}: To enable it, set NEXT_PUBLIC_SENTRY_DSN in the associated .env for this environment`,
  )
}
