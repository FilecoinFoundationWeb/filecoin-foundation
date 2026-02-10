import translations from '@/i18n/translations/en.json'

import { getTranslations } from 'next-intl/server'

type Translations = typeof translations
type TranslationKey = keyof Translations

export async function getTranslatedMetadata(namespace: TranslationKey) {
  const t = await getTranslations(namespace)

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  }
}
