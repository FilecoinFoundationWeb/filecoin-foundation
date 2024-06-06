'use client'

import ErrorMessage from '@/components/ErrorMessage'
import { SiteLayout } from '@/components/SiteLayout'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

export default function GlobalError() {
  return (
    <SiteLayout>
      <ErrorMessage
        kicker="500"
        title="Internal Server Error"
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
