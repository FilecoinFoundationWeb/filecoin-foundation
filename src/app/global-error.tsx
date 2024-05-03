'use client'

import ErrorMessage from '@/components/ErrorMessage'
import { Footer } from '@/components/Footer'
import LayoutWrapper from '@/components/LayoutWrapper'
import { Navigation } from '@/components/Navigation'
import { TextLink } from '@/components/TextLink'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

export default function GlobalError() {
  return (
    <LayoutWrapper>
      <Navigation />
      <ErrorMessage statusCode="500" title="Internal Server Error">
        <p>
          Oops, something went wrong. Try to refresh this page or{' '}
          <TextLink href={FILECOIN_FOUNDATION_URLS.email}>contact us</TextLink>{' '}
          if the problem persists.
        </p>
      </ErrorMessage>
      <Footer />
    </LayoutWrapper>
  )
}
