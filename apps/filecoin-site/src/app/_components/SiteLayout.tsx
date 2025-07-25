import { Inter } from 'next/font/google'

import { BreakpointDebugger } from '@filecoin-foundation/ui/BreakpointDebugger'

import { Footer } from '@/components/Footer/Footer'
import { NavigationThemeWrapper } from '@/components/Navigation/NavigationThemeWrapper'

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
      <body className="flex min-h-screen flex-col bg-white text-zinc-900">
        <NavigationThemeWrapper />
        <main className="flex-1">{children}</main>
        <Footer />

        {process.env.NODE_ENV === 'development' && <BreakpointDebugger />}
      </body>
    </html>
  )
}
