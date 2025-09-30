import * as Sentry from '@sentry/nextjs'

import { ignoredClientErrors } from '@filecoin-foundation/sentry-config'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.05,
  debug: false,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.01,
  environment: process.env.NODE_ENV,
  ignoreErrors: ignoredClientErrors,
})

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
export const onRequestError = Sentry.captureRequestError
