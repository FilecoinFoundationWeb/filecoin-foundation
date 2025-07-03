import { Inter } from 'next/font/google'

import { SiteLayout as SharedSiteLayout } from '@filecoin-foundation/ui/SiteLayout'

import { Footer } from '@/components/Footer/Footer'
import { Navigation } from '@/components/Navigation/Navigation'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

type SiteLayoutProps = {
  children: React.ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <SharedSiteLayout font={inter} Navigation={Navigation} Footer={Footer}>
      {children}
    </SharedSiteLayout>
  )
}
