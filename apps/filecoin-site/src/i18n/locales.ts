export type Locale = (typeof LOCALES)[number]

export const LOCALES = ['en', 'zh-cn'] as const
export const DEFAULT_LOCALE = LOCALES[0]
