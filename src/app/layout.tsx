import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import PlausibleProvider from 'next-plausible'

import '@/styles/globals.scss'

import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'

import { SiteLayout } from '@/components/SiteLayout'

const REVALIDATE_TIME_IN_SECONDS = 24 * 60 * 60

export const revalidate = REVALIDATE_TIME_IN_SECONDS

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
    <PlausibleProvider domain="fil.org">
      <SiteLayout>
        {children}
        <SpeedInsights />
      </SiteLayout>
    </PlausibleProvider>
  )
}
