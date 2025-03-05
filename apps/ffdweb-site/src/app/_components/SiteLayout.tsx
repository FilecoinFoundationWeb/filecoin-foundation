import { Manrope } from 'next/font/google'

import { SiteLayout as SharedSiteLayout } from '@filecoin-foundation/ui/SiteLayout'

import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation/Navigation'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})

type SiteLayoutProps = {
  children: React.ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <SharedSiteLayout font={manrope} Navigation={Navigation} Footer={Footer}>
      {children}
    </SharedSiteLayout>
  )
}
