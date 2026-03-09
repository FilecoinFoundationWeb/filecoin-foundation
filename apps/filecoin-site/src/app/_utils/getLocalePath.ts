import { DEFAULT_LOCALE } from '@/i18n/locales'

import { getLocale } from 'next-intl/server'

import { PATHS } from '@/constants/paths'

export async function getLocalePath(path: `/${string}`) {
  const locale = await getLocale()
  if (locale === DEFAULT_LOCALE) return path
  if (path === PATHS.HOME.path) return `/${locale}` as const
  return `/${locale}${path}` as const
}
