'use client'

import Error from 'next/error'
import { useEffect } from 'react'
import * as Sentry from '@sentry/nextjs'

import { FILECOIN_FOUNDATION_URLS } from '@filecoin-foundation/utils/constants/appMetadata'
import { ErrorMessage } from '@filecoin-foundation/ui/ErrorMessage'

type GlobalErrorProps = {
  error: Error
  baseDomain: string
  Layout: React.ComponentType<{ children: React.ReactNode }>
}

export function GlobalError({ error, baseDomain, Layout }: GlobalErrorProps) {
  useEffect(() => {
    Sentry.captureException(error)
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
