import { Metadata } from 'next'

import '@/styles/globals.scss'

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

export type LayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return <SiteLayout>{children}</SiteLayout>
}
