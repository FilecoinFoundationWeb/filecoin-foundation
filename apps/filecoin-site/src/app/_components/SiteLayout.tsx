import { Inter } from 'next/font/google'

import { LogoLink } from '@filecoin-foundation/ui/LogoLink'
import { SiteLayout as SharedSiteLayout } from '@filecoin-foundation/ui/SiteLayout'

import { LogoBlue } from '@/components/LogoBlue'
import { LogoWhiteWithText } from '@/components/LogoWhiteWithText'

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
          <LogoLink logo={LogoBlue} />
        </header>
      )}
      Footer={() => (
        <footer className="bg-zinc-900 p-8">
          <LogoLink logo={LogoWhiteWithText} />
        </footer>
      )}
    >
      {children}
    </SharedSiteLayout>
  )
}
