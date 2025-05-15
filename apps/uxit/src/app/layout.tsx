import '@/styles/globals.css'
import { ROOT_METADATA } from '@/constants/siteMetadata'

import { SiteLayout } from '@/components/SiteLayout'

export const metadata = ROOT_METADATA

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <SiteLayout>{children}</SiteLayout>
}
