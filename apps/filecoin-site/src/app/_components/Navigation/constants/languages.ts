import type { Locale } from 'next-intl'

type Languages = Record<Locale, { label: string; name: string }>

export const LANGUAGES: Languages = {
  en: { label: 'EN', name: 'English' },
  ['zh-cn']: { label: '中文', name: 'Chinese' },
}
