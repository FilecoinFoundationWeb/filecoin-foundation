import type { Metadata } from 'next'
import PlausibleProvider from 'next-plausible'

import '@/styles/globals.css'

import {
  BASE_URL,
  ORGANIZATION_NAME,
  ORGANIZATION_NAME_SHORT,
} from '@/constants/siteMetadata'

import { SiteLayout } from '@/components/SiteLayout'

export const metadata: Metadata = {
  title: {
    template: `${ORGANIZATION_NAME_SHORT} | %s`,
    default: ORGANIZATION_NAME,
  },
  metadataBase: new URL(BASE_URL),
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <PlausibleProvider
      trackOutboundLinks
      hash
      trackFileDownloads
      domain="ffdweb.org"
    >
      <SiteLayout>{children}</SiteLayout>
    </PlausibleProvider>
  )
}
