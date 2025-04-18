import type { Metadata } from 'next'

import '@/styles/globals.css'
import { SiteLayout } from '@/components/SiteLayout'

export const metadata: Metadata = {
  title: 'UXIT',
  description: 'UXIT',
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return <SiteLayout>{children}</SiteLayout>
}
