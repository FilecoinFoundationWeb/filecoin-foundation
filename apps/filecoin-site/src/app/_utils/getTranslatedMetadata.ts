import { getTranslations } from 'next-intl/server'

import type { NextRouteWithoutLocale } from '@/constants/paths'

export async function getTranslatedMetadata(namespace: NextRouteWithoutLocale) {
  const t = await getTranslations(namespace)

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  }
}
