import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { SiteLayout } from '@/components/SiteLayout'

import '@/styles/globals.css'

export const metadata = {
  title: 'Filecoin.io',
  description: 'The official Filecoin website.',
}

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
