import AkaveMiniatureLogo from '@/assets/miniatures/akave-miniature.svg'
import CIDgravityMiniatureLogo from '@/assets/miniatures/cid-gravity-miniature.svg'
import LighthouseMiniatureLogo from '@/assets/miniatures/lighthouse-miniature.svg'
import RamoMiniatureLogo from '@/assets/miniatures/ramo-miniature.svg'
import SingularityMiniatureLogo from '@/assets/miniatures/singularity-miniature.svg'
import StorachaMiniatureLogo from '@/assets/miniatures/storacha-miniature.svg'

import type { StorageProviderCardProps } from '../components/StorageProviderCard/StorageProviderCard'

export type StorageProvider = Pick<
  StorageProviderCardProps,
  'featured' | 'name' | 'description' | 'keyFeatures' | 'url' | 'logo'
> & {
  bestFor: Array<BestForType>
}

type BestForType =
  | 'AI/ML developers'
  | 'Archival storage'
  | 'Advanced technical users'
  | 'Creators'
  | 'Developers'
  | 'Enterprises'
  | 'NFT projects'

export const filecoinStorageProviders = [
  {
    featured: false,
    name: 'Akave Cloud',
    description: 'Enterprise-grade hot storage for AI & data lakes.',
    bestFor: ['Enterprises', 'AI/ML developers'],
    keyFeatures: [
      'S3-compatible API',
      'Client-side encryption',
      'Access control',
    ],
    url: 'https://www.akave.ai/',
    logo: AkaveMiniatureLogo,
  },
  {
    featured: false,
    name: 'CIDgravity',
    description: 'Simple decentralized storage backend for Nextcloud.',
    bestFor: ['Developers'],
    keyFeatures: [
      'Nextcloud integration',
      'File sync and share',
      'REST API for programmatic access',
    ],
    url: 'https://www.cidgravity.com/',
    logo: CIDgravityMiniatureLogo,
  },
  {
    featured: false,
    name: 'Lighthouse',
    description: 'Perpetual, long-term data storage.',
    bestFor: ['Developers', 'NFT projects', 'Creators'],
    keyFeatures: [
      '"Pay once, store forever" pricing mode',
      'Simple web app',
      'Developer SDK/CLI',
    ],
    url: 'https://www.lighthouse.storage/',
    logo: LighthouseMiniatureLogo,
  },
  {
    featured: false,
    name: 'Ramo',
    description: 'An open-access decentralized cloud network.',
    bestFor: ['Developers', 'Archival storage'],
    keyFeatures: ['S3-compatible API', 'Developer SDK/CLI'],
    url: 'https://use.ramo.computer/',
    logo: RamoMiniatureLogo,
  },
  {
    featured: false,
    name: 'Singularity CLI',
    description: 'Directly manage the full deal-making lifecycle on Filecoin.',
    bestFor: ['Advanced technical users'],
    keyFeatures: [
      'Prepare and upload files using the CLI',
      'Retrieve files with Lassie',
      'Direct negotiation with storage providers',
    ],
    url: 'https://singularity.storage/',
    logo: SingularityMiniatureLogo,
  },
  {
    featured: true,
    name: 'Storacha',
    description: 'High-speed hot storage for fast data retrieval.',
    bestFor: ['Developers'],
    keyFeatures: [
      'Fast access to data',
      'Tightly integrated with IPFS',
      'Optimized for content delivery and streaming',
    ],
    url: 'https://storacha.network/',
    logo: StorachaMiniatureLogo,
  },
] as const satisfies Array<StorageProvider>

// export const otherStorageProviders = [
//   {},
// ] as const satisfies Array<StorageProvider>
