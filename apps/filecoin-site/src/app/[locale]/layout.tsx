import { notFound } from 'next/navigation'

import { routing } from '@/i18n/routing'
import type { UnsanitizedLocaleParams } from '@/i18n/types'

import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { ROOT_METADATA } from '@/constants/siteMetadata'

import { SiteLayout } from '@/components/SiteLayout'


import '@/styles/globals.css'

export const metadata = ROOT_METADATA

type RootLayoutProps = {
  children: React.ReactNode
  params: Promise<UnsanitizedLocaleParams>
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  return (
    <NextIntlClientProvider>
      <NuqsAdapter>
        <SiteLayout locale={locale}>{children}</SiteLayout>
      </NuqsAdapter>
    </NextIntlClientProvider>
  )
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
