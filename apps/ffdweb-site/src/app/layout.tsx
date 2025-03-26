import PlausibleProvider from 'next-plausible'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import '@/styles/globals.css'

import { BASE_DOMAIN, ROOT_METADATA } from '@/constants/siteMetadata'

import { SiteLayout } from '@/components/SiteLayout'

export const metadata = ROOT_METADATA

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <NuqsAdapter>
      <PlausibleProvider
        trackOutboundLinks
        hash
        trackFileDownloads
        domain={BASE_DOMAIN}
      >
        <SiteLayout>{children}</SiteLayout>
      </PlausibleProvider>
    </NuqsAdapter>
  )
}
