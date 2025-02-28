import { Archivo } from 'next/font/google'

import { SiteLayout as AppSiteLayout } from '@filecoin-foundation/ui/SiteLayout'

import { Footer } from './Footer'
import { Navigation } from './Navigation'

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
})

type SiteLayoutProps = {
  children: React.ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <AppSiteLayout font={archivo} Navigation={Navigation} Footer={Footer}>
      {children}
    </AppSiteLayout>
  )
}
