import { Inter } from 'next/font/google'

import { SiteLayout as SharedSiteLayout } from '@filecoin-foundation/ui/SiteLayout'

import { Footer } from '@/components/Footer/Footer'

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
      Footer={Footer}
    >
      {children}
    </SharedSiteLayout>
  )
}
