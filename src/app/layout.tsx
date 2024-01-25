import { Metadata } from 'next'

import '@/styles/globals.scss'

import BreadCrumbs from '@/components/BreadCrumbs'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import NetlifyIdentityManager from '@/components/NetlifyIdentityManager'

import BASE_URL from '@/constants/baseURL'

export const metadata: Metadata = {
  title: {
    template: '%s | Filecoin Foundation',
    default: 'Filecoin Foundation',
  },
  description:
    'The Filecoin Foundation is a non-profit organization dedicated to building the Filecoin ecosystem and the decentralized web.',
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-6xl flex flex-col h-screen justify-between text-white bg-slate-900">
        <NetlifyIdentityManager />
        <Navigation />
        <main className="max-w-4xl flex flex-col flex-grow px-8 gap-6">
          <BreadCrumbs />
          <div>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
