'use client'

import { useEffect } from 'react'

import Error from 'next/error'

import { ErrorMessage } from '@filecoin-foundation/ui/ErrorMessage'
import * as Sentry from '@sentry/nextjs'

import { BASE_DOMAIN, FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { SiteLayout } from '@/components/SiteLayout'

type GlobalErrorProps = {
  error: Error
}

export default function GlobalError({ error }: GlobalErrorProps) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <SiteLayout>
      <ErrorMessage
        kicker="500"
        title="Internal Server Error"
        baseDomain={BASE_DOMAIN}
        cta={{
          href: FILECOIN_FOUNDATION_URLS.techSupportEmail.href,
          text: 'Contact Us',
        }}
      >
        Oops, something went wrong. Try to refresh this page or contact us if
        the problem persists.
      </ErrorMessage>
    </SiteLayout>
  )
}
