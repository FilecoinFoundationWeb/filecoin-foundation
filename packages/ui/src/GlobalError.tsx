'use client'

import { useEffect } from 'react'

import * as Sentry from '@sentry/nextjs'
import Error from 'next/error'

import { Button } from '@filecoin-foundation/ui/Button'
import { ErrorMessage } from '@filecoin-foundation/ui/ErrorMessage'

type GlobalErrorProps = {
  error: Error
  Layout: React.ComponentType<{ children: React.ReactNode }>
  cta?: React.ReactElement<typeof Button>
}

export function GlobalError({ error, Layout, cta }: GlobalErrorProps) {
  useEffect(() => {
    if (Sentry?.captureException) {
      Sentry.captureException(error)
    }
  }, [error])

  return (
    <Layout>
      <ErrorMessage
        kicker="500"
        title="Internal Server Error"
        message="Oops, something went wrong. Try to refresh this page or contact us if
        the problem persists."
        cta={cta}
      />
    </Layout>
  )
}
