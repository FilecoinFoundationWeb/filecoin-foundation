import { notFound } from 'next/navigation'

import { routing } from '@/i18n/routing'
import type { UnsanitizedLocaleParams } from '@/i18n/types'

import { hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

import { ROOT_METADATA } from '@/constants/siteMetadata'

import { PersistedBanner } from '@/components/PersistedBanner'
import { SiteLayout } from '@/components/SiteLayout'

import '@/styles/globals.css'

export const metadata = ROOT_METADATA

const BANNER_TEXT =
  '本翻译由 Claude 提供的 AI 翻译生成，未经人工译者核实。AI 翻译仅供参考，不应用于依赖关键信息的场景。'
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

  setRequestLocale(locale)

  return (
    <SiteLayout
      locale={locale}
      banner={locale === 'zh-cn' && <PersistedBanner text={BANNER_TEXT} />}
    >
      {children}
    </SiteLayout>
  )
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
