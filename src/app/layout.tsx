import { Metadata } from 'next'
import PlausibleProvider from 'next-plausible'

import '@/styles/globals.scss'

import { SiteLayout } from '@/components/SiteLayout'

import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'

export const metadata: Metadata = {
  title: {
    template: `%s | ${ORGANIZATION_NAME}`,
    default: ORGANIZATION_NAME,
  },
  metadataBase: new URL(BASE_URL),
}

export type LayoutProps = {
  children: React.ReactNode
  includeNetlifyManager?: boolean
}

export default function RootLayout({
  children,
  includeNetlifyManager = true,
}: LayoutProps) {
  return (
    <PlausibleProvider domain="fil.org">
      <SiteLayout includeNetlifyManager={includeNetlifyManager}>
        {children}
      </SiteLayout>
    </PlausibleProvider>
  )
}
