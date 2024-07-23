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
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <PlausibleProvider domain="fil.org">
      <SiteLayout>{children}</SiteLayout>
    </PlausibleProvider>
  )
}
