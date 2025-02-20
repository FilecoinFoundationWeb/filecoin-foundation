import { Archivo } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation/Navigation'

import type { LayoutProps } from '@/layout'

import { BreakpointDebugger } from '@filecoin-foundation/ui/BreakpointDebugger'

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
})

export function SiteLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={archivo.className}>
      <body className="m-auto flex max-w-[1032px] flex-col justify-between bg-brand-800 px-6 pt-8 pb-6 tracking-wide text-brand-100">
        <Navigation />
        <main>{children}</main>
        <Footer />

        {process.env.NODE_ENV === 'development' && <BreakpointDebugger />}
      </body>
    </html>
  )
}
