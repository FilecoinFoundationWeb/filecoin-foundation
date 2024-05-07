import { Metadata } from 'next'

import '@/styles/globals.scss'

import { BreadCrumbsWrapper as BreadCrumbs } from '@/components/BreadCrumbsWrapper'
import { SiteLayout } from '@/components/SiteLayout'

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
    <SiteLayout>
      <div className="flex flex-grow flex-col gap-6">
        <BreadCrumbs />
        {children}
      </div>
    </SiteLayout>
  )
}
