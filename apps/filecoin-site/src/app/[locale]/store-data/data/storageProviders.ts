import type { TranslationFunction } from '@/i18n/types'

import AkaveMiniatureLogo from '@/assets/miniatures/akave-miniature.svg'
import AuroraMiniatureLogo from '@/assets/miniatures/aurora-miniature.svg'
import CIDgravityMiniatureLogo from '@/assets/miniatures/cid-gravity-miniature.svg'
import FilOneMiniatureLogo from '@/assets/miniatures/fil-one-miniature.svg'
import FilecoinOnchainCloudMiniatureLogo from '@/assets/miniatures/filecoin-onchain-cloud-miniature.svg'
import LighthouseMiniatureLogo from '@/assets/miniatures/lighthouse-miniature.svg'
import RamoMiniatureLogo from '@/assets/miniatures/ramo-miniature.svg'
import StorachaMiniatureLogo from '@/assets/miniatures/storacha-miniature.svg'

import type { StorageProviderCardProps } from '../components/StorageProviderCard/StorageProviderCard'

type StorageProvider = Pick<
  StorageProviderCardProps,
  | 'name'
  | 'description'
  | 'labels'
  | 'keyFeatures'
  | 'url'
  | 'logo'
  | 'pricing'
  | 'isFeatured'
> & {
  bestFor: Array<string>
}

export function getFilecoinStorageProviders(t: TranslationFunction) {
  return [
    {
      name: 'Akave Cloud',
      description: t('providers.akave.description'),
      labels: [t('providers.akave.labels.0'), t('providers.akave.labels.1')],
      pricing: {
        cents: 1_499,
        monthlyStorageRate: t('providers.akave.monthlyStorageRate'),
        offer: t('providers.akave.offer'),
      },
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
      name: 'Aurora',
      description: t('providers.aurora.description'),
      labels: [t('providers.aurora.labels.0'), t('providers.aurora.labels.1')],
      bestFor: [
        t('bestFor.enterprises'),
        t('bestFor.aiMlDevelopers'),
        t('bestFor.developers'),
      ],
      keyFeatures: [
        t('providers.aurora.keyFeatures.0'),
        t('providers.aurora.keyFeatures.1'),
        t('providers.aurora.keyFeatures.2'),
      ],
      url: 'https://www.aurora.storage/',
      logo: AuroraMiniatureLogo,
    },
    {
      name: 'CIDgravity',
      description: t('providers.cidgravity.description'),
      labels: [t('providers.cidgravity.labels.0')],
      pricing: {
        cents: 500,
        monthlyStorageRate: t('providers.cidgravity.monthlyStorageRate'),
        offer: t('providers.cidgravity.offer'),
      },
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
      pricing: {
        cents: 1_200,
        monthlyStorageRate: t('providers.lighthouse.monthlyStorageRate'),
        offer: t('providers.lighthouse.offer'),
      },
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
      pricing: {
        cents: 1_000,
        monthlyStorageRate: t('providers.storacha.monthlyStorageRate'),
        offer: t('providers.storacha.offer'),
      },
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
      pricing: {
        cents: 499,
        monthlyStorageRate: t('providers.filOne.monthlyStorageRate'),
        offer: t('providers.filOne.offer'),
      },
      bestFor: [t('bestFor.enterprises')],
      keyFeatures: [
        t('providers.filOne.keyFeatures.0'),
        t('providers.filOne.keyFeatures.1'),
        t('providers.filOne.keyFeatures.2'),
      ],
      url: 'https://fil.one/',
      logo: FilOneMiniatureLogo,
      isFeatured: true,
    },
    {
      name: 'Filecoin Onchain Cloud',
      description: t('providers.filecoinOnchainCloud.description'),
      labels: [
        t('providers.filecoinOnchainCloud.labels.0'),
        t('providers.filecoinOnchainCloud.labels.1'),
      ],
      pricing: {
        cents: 250,
        monthlyStorageRate: t(
          'providers.filecoinOnchainCloud.monthlyStorageRate',
        ),
      },
      bestFor: [t('bestFor.developers')],
      keyFeatures: [
        t('providers.filecoinOnchainCloud.keyFeatures.0'),
        t('providers.filecoinOnchainCloud.keyFeatures.1'),
        t('providers.filecoinOnchainCloud.keyFeatures.2'),
      ],
      url: 'https://filecoin.cloud/',
      logo: FilecoinOnchainCloudMiniatureLogo,
      isFeatured: true,
    },
  ] satisfies Array<StorageProvider>
}
