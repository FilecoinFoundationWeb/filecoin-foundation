import { defineRouting } from 'next-intl/routing'

import { LOCALES, DEFAULT_LOCALE } from './locales'

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'as-needed',
  localeDetection: false, // To remove
})
