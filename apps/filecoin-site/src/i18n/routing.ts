import { defineRouting } from 'next-intl/routing'

import { LOCALES, DEFAULT_LOCALE } from './locales'

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'as-needed',
  // Resolve the locale from the URL only. Disable auto-redirects based on the
  // `accept-language` header so visitors are not bounced to another locale
  // (e.g. an English deep link being redirected to `/zh-cn/...`).
  localeDetection: false,
})
