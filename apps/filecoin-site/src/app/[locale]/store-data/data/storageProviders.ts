import type { TranslationFunction } from '@/i18n/types'

import AkaveMiniatureLogo from '@/assets/miniatures/akave-miniature.svg'
import CIDgravityMiniatureLogo from '@/assets/miniatures/cid-gravity-miniature.svg'
import LighthouseMiniatureLogo from '@/assets/miniatures/lighthouse-miniature.svg'
import RamoMiniatureLogo from '@/assets/miniatures/ramo-miniature.svg'
import StorachaMiniatureLogo from '@/assets/miniatures/storacha-miniature.svg'

import type { StorageProviderCardProps } from '../components/StorageProviderCard/StorageProviderCard'

type StorageProvider = Pick<
  StorageProviderCardProps,
  | 'name'
  | 'description'
  | 'labels'
  | 'cents'
  | 'keyFeatures'
  | 'url'
  | 'logo'
  | 'offer'
  | 'isFeatured'
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
      cents: 1_499,
      offer: t('providers.akave.offer'),
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
      // todo: update card content
      name: 'Aurora',
      description: t('providers.aurora.description'),
      labels: [t('providers.aurora.labels.0'), t('providers.aurora.labels.1')],
      cents: 100,
      bestFor: [t('bestFor.enterprises'), t('bestFor.aiMlDevelopers')],
      keyFeatures: [
        t('providers.aurora.keyFeatures.0'),
        t('providers.aurora.keyFeatures.1'),
        t('providers.aurora.keyFeatures.2'),
      ],
      url: 'https://www.aurora.storage/',
      logo: AkaveMiniatureLogo,
    },
    {
      name: 'CIDgravity',
      description: t('providers.cidgravity.description'),
      labels: [t('providers.cidgravity.labels.0')],
      cents: 500,
      offer: t('providers.cidgravity.offer'),
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
      cents: 1_200,
      offer: t('providers.lighthouse.offer'),
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
      cents: 499,
      offer: t('providers.ramo.offer'),
      bestFor: [t('bestFor.developers')],
      keyFeatures: [
        t('providers.ramo.keyFeatures.0'),
        t('providers.ramo.keyFeatures.1'),
      ],
      url: 'https://use.ramo.computer/',
      logo: RamoMiniatureLogo,
    },
    {
      name: 'Storacha',
      description: t('providers.storacha.description'),
      labels: [t('providers.storacha.labels.0')],
      cents: 10_000,
      offer: t('providers.storacha.offer'),
      bestFor: [t('bestFor.developers')],
      keyFeatures: [
        t('providers.storacha.keyFeatures.0'),
        t('providers.storacha.keyFeatures.1'),
        t('providers.storacha.keyFeatures.2'),
        t('providers.storacha.keyFeatures.3'),
      ],
      url: 'https://storacha.network/',
      logo: StorachaMiniatureLogo,
    },
  ] satisfies Array<StorageProvider>
}

export function getFeaturedFilecoinStorageProviders(t: TranslationFunction) {
  return [
    {
      name: 'Fil One',
      description: t('providers.filOne.description'),
      labels: [t('providers.filOne.labels.0'), t('providers.filOne.labels.1')],
      cents: 499,
      offer: t('providers.filOne.offer'),
      bestFor: [t('bestFor.developers')],
      keyFeatures: [
        t('providers.filOne.keyFeatures.0'),
        t('providers.filOne.keyFeatures.1'),
        t('providers.filOne.keyFeatures.2'),
      ],
      // todo: update url
      url: 'https://filecoin.io/',
      // todo: update logo
      logo: AkaveMiniatureLogo,
      isFeatured: true,
    },
    {
      // todo: update card content
      name: 'Filecoin Onchain Cloud',
      description: t('providers.filecoinOnchainCloud.description'),
      labels: [
        t('providers.filecoinOnchainCloud.labels.0'),
        t('providers.filecoinOnchainCloud.labels.1'),
      ],
      cents: 10_000,
      offer: t('providers.filecoinOnchainCloud.offer'),
      bestFor: [t('bestFor.developers')],
      keyFeatures: [
        t('providers.filecoinOnchainCloud.keyFeatures.0'),
        t('providers.filecoinOnchainCloud.keyFeatures.1'),
        t('providers.filecoinOnchainCloud.keyFeatures.2'),
      ],
      url: 'https://filecoin.cloud/',
      logo: AkaveMiniatureLogo,
      isFeatured: true,
    },
  ] satisfies Array<StorageProvider>
}
