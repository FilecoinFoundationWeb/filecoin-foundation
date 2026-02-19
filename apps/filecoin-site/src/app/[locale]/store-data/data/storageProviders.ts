import Storacha from '@/assets/images/storacha.webp'
import AkaveMiniatureLogo from '@/assets/miniatures/akave-miniature.svg'
import CIDgravityMiniatureLogo from '@/assets/miniatures/cid-gravity-miniature.svg'
import LighthouseMiniatureLogo from '@/assets/miniatures/lighthouse-miniature.svg'
import RamoMiniatureLogo from '@/assets/miniatures/ramo-miniature.svg'
import SingularityMiniatureLogo from '@/assets/miniatures/singularity-miniature.svg'
import StorachaMiniatureLogo from '@/assets/miniatures/storacha-miniature.svg'

import type { TranslationFunction } from '@/i18n/types'

import type { StorageProviderCardProps } from '../components/StorageProviderCard/StorageProviderCard'
import type { StorageProviderCardWithImageProps } from '../components/StorageProviderCard/StorageProviderCardWithImage'

import PlaceholderLogo from './placeholder-logo-to-be-deleted.svg'

type FeaturedStorageProvider = Pick<
  StorageProviderCardWithImageProps,
  | 'name'
  | 'description'
  | 'labels'
  | 'cents'
  | 'keyFeatures'
  | 'url'
  | 'logo'
  | 'image'
> & {
  bestFor: Array<string>
}

type StorageProvider = Pick<
  StorageProviderCardProps,
  'name' | 'description' | 'labels' | 'cents' | 'keyFeatures' | 'url' | 'logo'
> & {
  bestFor: Array<string>
}

// todo: update price with actual prices
export function getFilecoinStorageProviders(t: TranslationFunction) {
  return [
    {
      name: 'Akave Cloud',
      description: t('providers.akave.description'),
      labels: [t('providers.akave.labels.0'), t('providers.akave.labels.1')],
      cents: 10_000,
      bestFor: [t('bestFor.enterprises'), t('bestFor.aiMlDevelopers')],
      keyFeatures: [
        t('providers.akave.keyFeatures.0'),
        t('providers.akave.keyFeatures.1'),
        t('providers.akave.keyFeatures.2'),
      ],
      url: 'https://www.akave.ai/',
      logo: AkaveMiniatureLogo,
    },
    {
      name: 'CIDgravity',
      description: t('providers.cidgravity.description'),
      labels: [t('providers.cidgravity.labels.0')],
      cents: 10_000,
      bestFor: [t('bestFor.developers')],
      keyFeatures: [
        t('providers.cidgravity.keyFeatures.0'),
        t('providers.cidgravity.keyFeatures.1'),
        t('providers.cidgravity.keyFeatures.2'),
      ],
      url: 'https://www.cidgravity.com/',
      logo: CIDgravityMiniatureLogo,
    },
    {
      name: 'Lighthouse',
      description: t('providers.lighthouse.description'),
      labels: [
        t('providers.lighthouse.labels.0'),
        t('providers.lighthouse.labels.1'),
      ],
      cents: 10_000,
      bestFor: [
        t('bestFor.developers'),
        t('bestFor.nftProjects'),
        t('bestFor.creators'),
      ],
      keyFeatures: [
        t('providers.lighthouse.keyFeatures.0'),
        t('providers.lighthouse.keyFeatures.1'),
        t('providers.lighthouse.keyFeatures.2'),
      ],
      url: 'https://www.lighthouse.storage/',
      logo: LighthouseMiniatureLogo,
    },
    {
      name: 'Ramo',
      description: t('providers.ramo.description'),
      labels: [t('providers.ramo.labels.0')],
      cents: 10_000,
      bestFor: [t('bestFor.developers')],
      keyFeatures: [
        t('providers.ramo.keyFeatures.0'),
        t('providers.ramo.keyFeatures.1'),
      ],
      url: 'https://use.ramo.computer/',
      logo: RamoMiniatureLogo,
    },
    {
      name: 'Singularity CLI',
      description: t('providers.singularity.description'),
      labels: [t('providers.singularity.labels.0')],
      cents: 10_000,
      bestFor: [t('bestFor.advancedTechnicalUsers')],
      keyFeatures: [
        t('providers.singularity.keyFeatures.0'),
        t('providers.singularity.keyFeatures.1'),
        t('providers.singularity.keyFeatures.2'),
      ],
      url: 'https://singularity.storage/',
      logo: SingularityMiniatureLogo,
    },
  ] satisfies Array<StorageProvider>
}

export function getFeaturedFilecoinStorageProvider(t: TranslationFunction) {
  return {
    image: {
      ...Storacha,
      alt: 'Storacha',
    },
    name: 'Storacha',
    description: t('providers.storacha.description'),
    labels: [t('providers.storacha.labels.0')],
    cents: 10_000,
    bestFor: [t('bestFor.developers')],
    keyFeatures: [
      t('providers.storacha.keyFeatures.0'),
      t('providers.storacha.keyFeatures.1'),
      t('providers.storacha.keyFeatures.2'),
      t('providers.storacha.keyFeatures.3'),
    ],
    url: 'https://storacha.network/',
    logo: StorachaMiniatureLogo,
  } satisfies FeaturedStorageProvider
}

export function getOtherFilecoinPoweredSolutions(t: TranslationFunction) {
  return [
    {
      name: 'Ipsum Storage A',
      description: t('providers.placeholderA.description'),
      labels: [t('providers.placeholderA.labels.0')],
      cents: 300,
      bestFor: [t('bestFor.developers')],
      keyFeatures: [
        t('providers.placeholderA.keyFeatures.0'),
        t('providers.placeholderA.keyFeatures.1'),
      ],
      url: '#',
      logo: PlaceholderLogo,
    },
    {
      name: 'Ipsum Storage B',
      description: t('providers.placeholderB.description'),
      labels: [t('providers.placeholderB.labels.0')],
      cents: 300,
      bestFor: [t('bestFor.developers')],
      keyFeatures: [
        t('providers.placeholderB.keyFeatures.0'),
        t('providers.placeholderB.keyFeatures.1'),
      ],
      url: '#',
      logo: PlaceholderLogo,
    },
    {
      name: 'Ipsum Storage C',
      description: t('providers.placeholderC.description'),
      labels: [t('providers.placeholderC.labels.0')],
      cents: 300,
      bestFor: [t('bestFor.developers')],
      keyFeatures: [
        t('providers.placeholderC.keyFeatures.0'),
        t('providers.placeholderC.keyFeatures.1'),
      ],
      url: '#',
      logo: PlaceholderLogo,
    },
  ] satisfies Array<StorageProvider>
}
