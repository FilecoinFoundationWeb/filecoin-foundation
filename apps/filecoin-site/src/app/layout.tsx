import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { ROOT_METADATA } from '@/constants/siteMetadata'

import { SiteLayout } from '@/components/SiteLayout'

import '@/styles/globals.css'

export const metadata = ROOT_METADATA

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <NuqsAdapter>
      <SiteLayout>{children}</SiteLayout>
    </NuqsAdapter>
  )
}
