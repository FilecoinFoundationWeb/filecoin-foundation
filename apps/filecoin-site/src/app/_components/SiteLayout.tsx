import localFont from 'next/font/local'

import { clsx } from 'clsx'

import { BreakpointDebugger } from '@filecoin-foundation/ui/BreakpointDebugger'

import { Footer } from '@/components/Footer/Footer'

type SiteLayoutProps = {
  children: React.ReactNode
}

const funnelDisplay = localFont({
  src: '../_fonts/Funnel_Display/FunnelDisplay[wght].woff2',
  display: 'swap',
  variable: '--font-funnel-display',
})

const funnelSans = localFont({
  src: [
    {
      path: '../_fonts/Funnel_Sans/FunnelSans[wght].woff2',
      style: 'normal',
    },
    {
      path: '../_fonts/Funnel_Sans/FunnelSans-Italic[wght].woff2',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-funnel-sans',
})

const aspekta = localFont({
  src: '../_fonts/Aspekta/AspektaVF.woff2',
  display: 'swap',
  variable: '--font-aspekta',
})

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <html
      lang="en"
      className={clsx(
        aspekta.variable,
        funnelDisplay.variable,
        funnelSans.variable,
        'antialiased',
      )}
    >
      <body className="bg-white font-sans tracking-tight text-zinc-900">
        <main>{children}</main>
        <Footer />

        {process.env.NODE_ENV === 'development' && <BreakpointDebugger />}
      </body>
    </html>
  )
}
