'use client'

import { useEffect } from 'react'

import Error from 'next/error'

import * as Sentry from '@sentry/nextjs'

import { GlobalError as AppGlobalError } from '@filecoin-foundation/ui/GlobalError'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { FILECOIN_FOUNDATION_URLS } from '@filecoin-foundation/utils/constants/appMetadata'

import { SiteLayout } from '@/components/SiteLayout'

type GlobalErrorProps = {
  error: Error
}

export default function GlobalError({ error }: GlobalErrorProps) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <AppGlobalError
      error={error}
      Layout={SiteLayout}
      cta={
        <Button
          variant="primary"
          href={FILECOIN_FOUNDATION_URLS.techSupportEmail.href}
        >
          {FILECOIN_FOUNDATION_URLS.techSupportEmail.label}
        </Button>
      }
    />
  )
}
