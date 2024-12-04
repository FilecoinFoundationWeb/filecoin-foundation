import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import PlausibleProvider from 'next-plausible'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import '@/styles/globals.scss'

import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'

import { SiteLayout } from '@/components/SiteLayout'

export const revalidate = 86400

export const metadata: Metadata = {
  title: {
    template: `%s | ${ORGANIZATION_NAME}`,
    default: ORGANIZATION_NAME,
  },
  metadataBase: new URL(BASE_URL),
}

export type LayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <NuqsAdapter>
      <PlausibleProvider
        trackOutboundLinks
        hash
        trackFileDownloads
        domain="fil.org"
      >
        <SiteLayout>
          {children}
          <SpeedInsights />
        </SiteLayout>
      </PlausibleProvider>
    </NuqsAdapter>
  )
}
