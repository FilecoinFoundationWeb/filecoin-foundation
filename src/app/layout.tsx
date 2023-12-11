import '@/styles/globals.scss'

import BreadCrumbs from '@/components/BreadCrumbs'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import NetlifyIdentityManager from '@/components/NetlifyIdentityManager'

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
