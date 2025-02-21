import { Manrope } from 'next/font/google'

import type { Metadata } from 'next'
import '@/styles/globals.css'

import {
  BASE_URL,
  ORGANIZATION_NAME,
  ORGANIZATION_NAME_SHORT,
} from '@/constants/siteMetadata'

import { BreakpointDebugger } from '@filecoin-foundation/ui/BreakpointDebugger'

export const metadata: Metadata = {
  title: {
    template: `${ORGANIZATION_NAME_SHORT} | %s`,
    default: ORGANIZATION_NAME,
  },
  metadataBase: new URL(BASE_URL),
}

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={manrope.className}>
      <body className="m-auto flex max-w-[1032px] flex-col justify-between bg-neutral-950 px-6 pb-6 pt-8 tracking-wide text-neutral-100">
        <main>{children}</main>

        {process.env.NODE_ENV === 'development' && <BreakpointDebugger />}
      </body>
    </html>
  )
}
