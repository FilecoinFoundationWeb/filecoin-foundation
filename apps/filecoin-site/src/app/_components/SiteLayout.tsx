import localFont from 'next/font/local'

import { clsx } from 'clsx'

import { BreakpointDebugger } from '@filecoin-foundation/ui/BreakpointDebugger'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { ORGANIZATION_SCHEMA_BASE } from '@/constants/structuredDataConstants'

import { Footer } from '@/components/Footer/Footer'

import { DEFAULT_LOCALE } from '@/i18n/locales'
import type { Locale } from '@/i18n/types'

// funnelSans also has an italic version in the same directory. We don't use italics as of now so it's not imported here.
const funnelSans = localFont({
  src: '../_fonts/Funnel_Sans/FunnelSans[wght].woff2',
  display: 'swap',
  variable: '--font-funnel-sans',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
  preload: false,
})

const aspekta = localFont({
  src: '../_fonts/Aspekta/AspektaVF.woff2',
  display: 'swap',
  variable: '--font-aspekta',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
  preload: false,
})

type SiteLayoutProps = {
  children: React.ReactNode
  locale?: Locale
}

export function SiteLayout({
  children,
  locale = DEFAULT_LOCALE,
}: SiteLayoutProps) {
  return (
    <html
      lang={locale}
      className={clsx(aspekta.variable, funnelSans.variable, 'antialiased')}
    >
      <head>
        <StructuredDataScript structuredData={ORGANIZATION_SCHEMA_BASE} />
      </head>
      <body className="bg-white font-sans text-base/5.5">
        <main>{children}</main>
        <Footer />

        {process.env.NODE_ENV === 'development' && <BreakpointDebugger />}
      </body>
    </html>
  )
}
