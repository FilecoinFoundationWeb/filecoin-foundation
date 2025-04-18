'use client'

import { useEffect } from 'react'

import Error from 'next/error'

import { GlobalError as AppGlobalError } from '@filecoin-foundation/ui/GlobalError'
import * as Sentry from '@sentry/nextjs'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

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
      baseDomain={BASE_DOMAIN}
      Layout={SiteLayout}
    />
  )
}
