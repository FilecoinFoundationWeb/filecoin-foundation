import { Inter } from 'next/font/google'

import { LogoLink } from '@filecoin-foundation/ui/LogoLink'
import { SiteLayout as SharedSiteLayout } from '@filecoin-foundation/ui/SiteLayout'

import { LogoFull } from '@/components/LogoFull'
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
    <SharedSiteLayout
      font={inter}
      Navigation={Navigation}
      Footer={() => (
        <footer className="bg-zinc-900 p-8">
          <LogoLink logo={LogoFull} />
        </footer>
      )}
    >
      {children}
    </SharedSiteLayout>
  )
}
