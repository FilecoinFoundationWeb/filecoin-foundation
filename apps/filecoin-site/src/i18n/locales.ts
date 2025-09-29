export type Locale = (typeof LOCALES)[number]

export const LOCALES = ['en', 'zh_CN'] as const
export const DEFAULT_LOCALE = LOCALES[0]
