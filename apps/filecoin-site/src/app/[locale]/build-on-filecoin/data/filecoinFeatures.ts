import {
  IntersectThreeIcon,
  StackIcon,
  SquaresFourIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { TranslationFunction } from '@/i18n/types'

export function getFilecoinFeatures(t: TranslationFunction) {
  return [
    {
      title: t('filecoinFeatures.archivalStorage.title'),
      icon: StackIcon,
    },
    {
      title: t('filecoinFeatures.crossChainBridges.title'),
      icon: IntersectThreeIcon,
    },
    {
      title: t('filecoinFeatures.storageEnabledDapps.title'),
      icon: SquaresFourIcon,
    },
  ]
}
