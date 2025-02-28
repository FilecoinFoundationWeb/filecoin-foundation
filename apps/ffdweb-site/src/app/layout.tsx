import { Manrope } from 'next/font/google'

import { SiteLayout } from '@filecoin-foundation/ui/SiteLayout'
import type { Metadata } from 'next'

import '@/styles/globals.css'

import {
  BASE_URL,
  ORGANIZATION_NAME,
  ORGANIZATION_NAME_SHORT,
} from '@/constants/siteMetadata'

import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'

export const metadata: Metadata = {
  title: {
    template: `${ORGANIZATION_NAME_SHORT} | %s`,
    default: ORGANIZATION_NAME,
  },
  metadataBase: new URL(BASE_URL),
}

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <SiteLayout font={manrope} Navigation={Navigation} Footer={Footer}>
      {children}
    </SiteLayout>
  )
}
