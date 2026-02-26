import { getTranslations } from 'next-intl/server'

import { LOCALES } from './locales'

export type Locale = (typeof LOCALES)[number]
export type LocaleParams = { locale: Locale }
export type UnsanitizedLocaleParams = { locale: string }
export type TranslationFunction = Awaited<ReturnType<typeof getTranslations>>
