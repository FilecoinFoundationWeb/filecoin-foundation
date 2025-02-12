import { Manrope } from 'next/font/google'

import type { Metadata } from 'next'
import '@/styles/globals.css'

import { BASE_URL, ORGANIZATION_NAME } from '@/constants/siteMetadata'

export const metadata: Metadata = {
  title: {
    template: `%s | ${ORGANIZATION_NAME}`,
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
      <body>{children}</body>
    </html>
  )
}
