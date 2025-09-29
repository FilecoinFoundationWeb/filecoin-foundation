import { notFound } from 'next/navigation'

import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { ROOT_METADATA } from '@/constants/siteMetadata'

import { SiteLayout } from '@/components/SiteLayout'

import { routing } from '@/i18n/routing'

import '@/styles/globals.css'

export const metadata = ROOT_METADATA

type RootLayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <NextIntlClientProvider>
      <NuqsAdapter>
        <SiteLayout locale={locale}>{children}</SiteLayout>
      </NuqsAdapter>
    </NextIntlClientProvider>
  )
}
