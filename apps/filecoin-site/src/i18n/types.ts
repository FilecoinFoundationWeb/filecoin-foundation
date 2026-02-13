import { LOCALES } from './locales'

export type Locale = (typeof LOCALES)[number]
export type LocaleParams = { locale: Locale }
export type UnsanitizedLocaleParams = { locale: string }
export type TranslationFunction = (key: string) => string
