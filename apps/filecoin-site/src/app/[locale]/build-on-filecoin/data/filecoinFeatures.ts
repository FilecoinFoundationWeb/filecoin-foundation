import type { TranslationFunction } from '@/i18n/types'

export function getFilecoinFeatures(t: TranslationFunction) {
  return [
    {
      title: t('filecoinFeatures.archivalStorage.title'),
    },
    {
      title: t('filecoinFeatures.crossChainBridges.title'),
    },
    {
      title: t('filecoinFeatures.storageEnabledDapps.title'),
    },
  ]
}
