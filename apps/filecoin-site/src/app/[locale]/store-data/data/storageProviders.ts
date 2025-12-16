import Storacha from '@/assets/images/storacha.webp'
import AkaveMiniatureLogo from '@/assets/miniatures/akave-miniature.svg'
import CIDgravityMiniatureLogo from '@/assets/miniatures/cid-gravity-miniature.svg'
import LighthouseMiniatureLogo from '@/assets/miniatures/lighthouse-miniature.svg'
import RamoMiniatureLogo from '@/assets/miniatures/ramo-miniature.svg'
import SingularityMiniatureLogo from '@/assets/miniatures/singularity-miniature.svg'
import StorachaMiniatureLogo from '@/assets/miniatures/storacha-miniature.svg'

import PlaceholderLogo from './placeholder-logo-to-be-deleted.svg'

import type { StorageProviderCardProps } from '../components/StorageProviderCard/StorageProviderCard'
import type { StorageProviderCardWithImageProps } from '../components/StorageProviderCard/StorageProviderCardWithImage'

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
  bestFor: Array<BestForType>
}

type StorageProvider = Pick<
  StorageProviderCardProps,
  'name' | 'description' | 'labels' | 'cents' | 'keyFeatures' | 'url' | 'logo'
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

// todo: update price with actual prices
export const filecoinStorageProviders = [
  {
    name: 'Akave Cloud',
    description: 'Enterprise-grade hot storage for AI & data lakes.',
    labels: ['Drag and drop', 'S3-compatible'],
    cents: 10_000,
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
    name: 'CIDgravity',
    description: 'Simple decentralized storage backend for Nextcloud.',
    labels: ['Drag and drop'],
    cents: 10_000,
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
    name: 'Lighthouse',
    description: 'Perpetual, long-term data storage.',
    labels: ['Archival', 'Drag and drop'],
    cents: 10_000,
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
    name: 'Ramo',
    description: 'An open-access decentralized cloud network.',
    labels: ['S3-compatible'],
    cents: 10_000,
    bestFor: ['Developers'],
    keyFeatures: ['S3-compatible API', 'Developer SDK/CLI'],
    url: 'https://use.ramo.computer/',
    logo: RamoMiniatureLogo,
  },
  {
    name: 'Singularity CLI',
    description: 'Directly manage the full deal-making lifecycle on Filecoin.',
    labels: ['Archival'],
    cents: 10_000,
    bestFor: ['Advanced technical users'],
    keyFeatures: [
      'Prepare and upload files using the CLI',
      'Retrieve files with Lassie',
      'Direct negotiation with storage providers',
    ],
    url: 'https://singularity.storage/',
    logo: SingularityMiniatureLogo,
  },
] as const satisfies Array<StorageProvider>

export const featuredFilecoinStorageProvider = {
  image: {
    ...Storacha,
    alt: 'Storacha',
  },
  name: 'Storacha',
  description: 'High-speed hot storage for fast data retrieval.',
  labels: ['Drag and drop'],
  cents: 10_000,
  bestFor: ['Developers'],
  keyFeatures: [
    'Fast access to data',
    'Tightly integrated with IPFS',
    'Optimized for content delivery and streaming',
    'Decentralized permissions with UCANs',
  ],
  url: 'https://storacha.network/',
  logo: StorachaMiniatureLogo,
} as const satisfies FeaturedStorageProvider

export const otherFilecoinPoweredSolutions = [
  {
    name: 'Ipsum Storage A',
    description: 'Lorem ipsum dolor sit amet.',
    labels: ['Lorem ipsum'],
    cents: 300,
    bestFor: ['Developers'],
    keyFeatures: ['Lorem ipsum A', 'Lorem ipsum B'],
    url: '#',
    logo: AkaveMiniatureLogo,
  },
  {
    name: 'Ipsum Storage B',
    description: 'Lorem ipsum dolor sit amet.',
    labels: ['Lorem ipsum'],
    cents: 300,
    bestFor: ['Developers'],
    keyFeatures: ['Lorem ipsum A', 'Lorem ipsum B'],
    url: '#',
    logo: PlaceholderLogo,
  },
  {
    name: 'Ipsum Storage C',
    description: 'Lorem ipsum dolor sit amet.',
    labels: ['Lorem ipsum'],
    cents: 300,
    bestFor: ['Developers'],
    keyFeatures: ['Lorem ipsum A', 'Lorem ipsum B'],
    url: '#',
    logo: PlaceholderLogo,
  },
] as const satisfies Array<StorageProvider>
