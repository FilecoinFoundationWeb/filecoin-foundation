import { Metadata } from 'next'

import '@/styles/globals.scss'

import { BreakpointDebbuger } from '@/components/_dev_BreakpointDebbuger'
import { BreadCrumbsWrapper as BreadCrumbs } from '@/components/BreadCrumbsWrapper'
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
      <body className="m-auto flex max-w-[1032px] flex-col justify-between bg-brand-800 px-6 pb-6 pt-8 text-brand-100">
        <StructuredDataScript structuredData={baseOrganizationSchema} />
        <NetlifyIdentityManager />
        <Navigation />

        <main className="flex flex-grow flex-col gap-6">
          <BreadCrumbs />
          <div>{children}</div>
        </main>

        <Footer />
        {process.env.NODE_ENV === 'development' && <BreakpointDebbuger />}
      </body>
    </html>
  )
}
