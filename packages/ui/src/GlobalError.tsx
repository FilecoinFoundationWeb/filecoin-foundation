'use client'

import { useEffect } from 'react'

import * as Sentry from '@sentry/nextjs'
import Error from 'next/error'

import { ErrorMessage } from '@filecoin-foundation/ui/ErrorMessage'
import { FILECOIN_FOUNDATION_URLS } from '@filecoin-foundation/utils/constants/appMetadata'

type GlobalErrorProps = {
  error: Error
  baseDomain: string
  Layout: React.ComponentType<{ children: React.ReactNode }>
}

export function GlobalError({ error, baseDomain, Layout }: GlobalErrorProps) {
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
        baseDomain={baseDomain}
        cta={{
          href: FILECOIN_FOUNDATION_URLS.techSupportEmail.href,
          text: 'Contact Us',
        }}
      >
        Oops, something went wrong. Try to refresh this page or contact us if
        the problem persists.
      </ErrorMessage>
    </Layout>
  )
}
