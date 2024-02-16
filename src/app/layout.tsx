import { Metadata } from 'next'

import '@/styles/globals.scss'

import { BreadCrumbs } from '@/components/BreadCrumbs'
import { Footer } from '@/components/Footer'
import { Navigation } from '@/components/Navigation'
import { NetlifyIdentityManager } from '@/components/NetlifyIdentityManager'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { baseOrganizationSchema } from '@/utils/structuredData'

import siteMetaData from '@/content/shared/site-metadata.yml'

import { BASE_URL } from '@/constants/siteMetadata'

const { seo } = siteMetaData

export const metadata: Metadata = {
  title: {
    template: `%s | ${seo.title}`,
    default: seo.title,
  },
  description: seo.description,
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
        <StructuredDataScript structuredData={baseOrganizationSchema} />
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
