import { Archivo } from 'next/font/google'

import PlausibleProvider from 'next-plausible'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { SiteLayout as SharedSiteLayout } from '@filecoin-foundation/ui/SiteLayout'

import { BASE_DOMAIN } from '@/constants/siteMetadata'

import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation/Navigation'

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
})

type SiteLayoutProps = {
  children: React.ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <SharedSiteLayout font={archivo} Navigation={Navigation} Footer={Footer}>
      <NuqsAdapter>
        <PlausibleProvider
          trackOutboundLinks
          hash
          trackFileDownloads
          domain={BASE_DOMAIN}
        >
          {children}
        </PlausibleProvider>
      </NuqsAdapter>
    </SharedSiteLayout>
  )
}
