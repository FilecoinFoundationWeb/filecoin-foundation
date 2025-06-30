import { Inter } from 'next/font/google'

import { LogoLink } from '@filecoin-foundation/ui/LogoLink'
import { SiteLayout as SharedSiteLayout } from '@filecoin-foundation/ui/SiteLayout'

import { LogoFull } from '@/components/LogoFull'
import { LogoIcon } from '@/components/LogoIcon'


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
      Navigation={() => (
        <header className="bg-zinc-50 p-8">
          <LogoLink logo={LogoIcon} />
        </header>
      )}
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
