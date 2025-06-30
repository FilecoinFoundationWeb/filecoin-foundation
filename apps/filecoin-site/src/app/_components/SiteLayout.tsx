import { Inter } from 'next/font/google'

import { SiteLayout as SharedSiteLayout } from '@filecoin-foundation/ui/SiteLayout'

import { Footer } from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

type SiteLayoutProps = {
  children: React.ReactNode
}

function BoxIconsLoader() {
  return (
    <>
      <link
        href="https://cdn.boxicons.com/fonts/basic/boxicons.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.boxicons.com/fonts/transformations.min.css"
        rel="stylesheet"
      />
    </>
  )
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <SharedSiteLayout
      font={inter}
      Navigation={() => <header className="bg-zinc-50 p-8">Header</header>}
      Footer={Footer}
      headElements={<BoxIconsLoader />}
    >
      {children}
    </SharedSiteLayout>
  )
}
