import {
  ClockCounterClockwiseIcon,
  CurrencyDollarIcon,
  MapPinLineIcon,
  MegaphoneIcon,
} from '@phosphor-icons/react/dist/ssr'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import type { TranslationFunction } from '@/i18n/types'

export function getGetInvolvedOptions(t: TranslationFunction) {
  return [
    {
      title: t('getInvolved.applyGrant.title'),
      description: t('getInvolved.applyGrant.description'),
      href: FILECOIN_FOUNDATION_URLS.grants.href,
      icon: CurrencyDollarIcon,
    },
    {
      title: t('getInvolved.retroPGF.title'),
      description: t('getInvolved.retroPGF.description'),
      href: 'https://www.fil-retropgf.io/',
      icon: ClockCounterClockwiseIcon,
    },
    {
      title: t('getInvolved.orbitAmbassador.title'),
      description: t('getInvolved.orbitAmbassador.description'),
      href: FILECOIN_FOUNDATION_URLS.orbit.href,
      icon: MegaphoneIcon,
    },
    {
      title: t('getInvolved.communityEvents.title'),
      description: t('getInvolved.communityEvents.description'),
      href: FILECOIN_FOUNDATION_URLS.events.href,
      icon: MapPinLineIcon,
    },
  ]
}
