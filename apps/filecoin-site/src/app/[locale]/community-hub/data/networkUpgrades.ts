import type { TranslationFunction } from '@/i18n/types'

import nv27GoldenWeekImage from '@/assets/images/filecoin-governance-nv27-upgrade.webp'
import nv28GoldenWeekImage from '@/assets/images/filecoin-governance-nv28-upgrade.webp'

import type { SimpleCardWithImageProps } from '@/components/SimpleCardWithImage'

export type NetworkUpgrade = Pick<
  SimpleCardWithImageProps,
  'title' | 'description' | 'cta' | 'image'
> & {
  label: string
  labelKey: 'Current upgrade' | 'Upcoming upgrade'
}

export function getNetworkUpgrades(t: TranslationFunction) {
  return [
    {
      title: t('networkUpgrades.nv27.title'),
      description: t('networkUpgrades.nv27.description'),
      label: t('networkUpgrades.currentUpgrade'),
      labelKey: 'Current upgrade' as const,
      cta: {
        href: 'https://fil.org/blog/announcing-the-filecoin-network-v27-golden-week-upgrade',
        text: t('networkUpgrades.nv27.cta'),
      },
      image: {
        src: nv27GoldenWeekImage,
        alt: t('networkUpgrades.nv27.alt'),
      },
    },
    {
      title: t('networkUpgrades.nv28.title'),
      description: t('networkUpgrades.nv28.description'),
      label: t('networkUpgrades.upcomingUpgrade'),
      labelKey: 'Upcoming upgrade' as const,
      cta: {
        href: 'https://github.com/filecoin-project/core-devs/discussions/205',
        text: t('networkUpgrades.nv28.cta'),
      },
      image: {
        src: nv28GoldenWeekImage,
        alt: t('networkUpgrades.nv28.alt'),
      },
    },
  ] satisfies Array<NetworkUpgrade>
}
