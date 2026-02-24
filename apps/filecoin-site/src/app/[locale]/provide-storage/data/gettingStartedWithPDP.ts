import {
  CubeIcon,
  RocketLaunchIcon,
  UserPlusIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { TranslationFunction } from '@/i18n/types'

export function getGettingStartedWithPDP(t: TranslationFunction) {
  return [
    {
      title: t('gettingStarted.lowestHardware.title'),
      description: t('gettingStarted.lowestHardware.description'),
      icon: CubeIcon,
    },
    {
      title: t('gettingStarted.fastestPath.title'),
      description: t('gettingStarted.fastestPath.description'),
      icon: RocketLaunchIcon,
    },
    {
      title: t('gettingStarted.idealForNew.title'),
      description: t('gettingStarted.idealForNew.description'),
      icon: UserPlusIcon,
    },
  ]
}
