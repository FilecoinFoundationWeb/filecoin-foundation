'use client'

import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { TextLink } from '@/components/TextLink'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

export default function GlobalError() {
  return (
    <html lang="en">
      <body className="m-auto flex max-w-[1032px] flex-col justify-between bg-brand-800 px-6 pb-6 pt-8 text-brand-100">
        <Navigation />
        <div className="xs:items-center xs:text-center m-auto flex max-w-xs flex-col gap-6 py-[104px]">
          <span className="text-8xl">500</span>
          <h2 className="text-3xl">Internal Server Error</h2>
          <p>
            Oops, something went wrong. Try to refresh this page or{' '}
            <TextLink href={FILECOIN_FOUNDATION_URLS.email}>
              contact us
            </TextLink>{' '}
            if the problem persists.
          </p>
        </div>
        <Footer />
      </body>
    </html>
  )
}
