import { Archivo } from 'next/font/google'

import { SiteLayout as SharedSiteLayout } from '@filecoin-foundation/ui/SiteLayout'

import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation/Navigation'

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
})

type SiteLayoutProps = {
  children: React.ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <SharedSiteLayout font={archivo} Navigation={Navigation} Footer={Footer}>
      {children}
    </SharedSiteLayout>
  )
}
