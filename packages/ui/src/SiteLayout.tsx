import type { NextFont } from 'next/dist/compiled/@next/font'

import { BreakpointDebugger } from '@filecoin-foundation/ui/BreakpointDebugger'

export type SiteLayoutProps = {
  font: NextFont
  Navigation: React.ComponentType
  Footer: React.ComponentType
  children: React.ReactNode
}

export function SiteLayout({
  font,
  Navigation,
  Footer,
  children,
}: SiteLayoutProps) {
  return (
    <html lang="en" className={font.className}>
      <body className="site-layout m-auto flex max-w-[1032px] flex-col justify-between px-6 pb-8 pt-8 tracking-wide">
        <Navigation />
        <main>{children}</main>
        <Footer />

        {process.env.NODE_ENV === 'development' && <BreakpointDebugger />}
      </body>
    </html>
  )
}
