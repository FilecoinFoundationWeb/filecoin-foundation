import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import PlausibleProvider from 'next-plausible'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import '@/styles/globals.css'

import {
  BASE_DOMAIN,
  BASE_URL,
  ORGANIZATION_NAME,
} from '@/constants/siteMetadata'

import { SiteLayout } from '@/components/SiteLayout'

export const metadata: Metadata = {
  title: {
    template: `%s | ${ORGANIZATION_NAME}`,
    default: ORGANIZATION_NAME,
  },
  metadataBase: new URL(BASE_URL),
}

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
        <SiteLayout>
          {children}
          <SpeedInsights />
        </SiteLayout>
      </PlausibleProvider>
    </NuqsAdapter>
  )
}
