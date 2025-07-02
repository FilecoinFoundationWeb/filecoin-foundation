import { Inter } from 'next/font/google'

import { BreakpointDebugger } from '@filecoin-foundation/ui/BreakpointDebugger'

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
    <html lang="en" className={inter.className}>
      <body className="site-layout min-h-screen tracking-wide">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />

        {process.env.NODE_ENV === 'development' && <BreakpointDebugger />}
      </body>
    </html>
  )
}
