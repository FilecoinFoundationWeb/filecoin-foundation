import { Inter } from 'next/font/google'

import { SiteLayout as SharedSiteLayout } from '@filecoin-foundation/ui/SiteLayout'

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
      Navigation={() => <header className="bg-zinc-50 p-8">Header</header>}
      Footer={() => <footer className="bg-zinc-50 p-8">Footer</footer>}
    >
      {children}
    </SharedSiteLayout>
  )
}
