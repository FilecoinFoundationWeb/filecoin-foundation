import { Metadata } from 'next'

import '@/styles/globals.scss'

import { BreakpointDebugger } from '@/components/_dev_BreakpointDebugger'
import { BreadCrumbsWrapper as BreadCrumbs } from '@/components/BreadCrumbsWrapper'
import { Footer } from '@/components/Footer'
import LayoutWrapper from '@/components/LayoutWrapper'
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
    <LayoutWrapper>
      <StructuredDataScript structuredData={baseOrganizationSchema} />
      <NetlifyIdentityManager />
      <Navigation />

      <main className="flex flex-grow flex-col gap-6">
        <BreadCrumbs />
        {children}
      </main>

      <Footer />
      {process.env.NODE_ENV === 'development' && <BreakpointDebugger />}
    </LayoutWrapper>
  )
}
