import type { StorageProviderCardProps } from '../components/StorageProviderCard/StorageProviderCard'

import AkaveMiniatureLogo from '@/assets/miniatures/akave-miniature.png'
import CIDgravityMiniatureLogo from '@/assets/miniatures/cid-gravity-miniature.png'
import LighthouseMiniatureLogo from '@/assets/miniatures/lighthouse-miniature.png'
import RamoMiniatureLogo from '@/assets/miniatures/ramo-miniature.png'
import SingularityMiniatureLogo from '@/assets/miniatures/singularity-miniature.png'
import StorachaMiniatureLogo from '@/assets/miniatures/storacha-miniature.png'

export type StorageProvider = Pick<
  StorageProviderCardProps,
  'name' | 'description' | 'keyFeatures' | 'url' | 'logo'
> & {
  bestFor: Array<BestForType>
}

type BestForType =
  | 'AI/ML developers'
  | 'Advanced technical users'
  | 'DePIN'
  | 'Developers'
  | 'Enterprises'
  | 'Personal Storage'
  | 'SaaS'
  | 'Web3'

export const storageProviders = [
  {
    name: 'Akave Cloud',
    description:
      'Enterprise-grade, hot storage designed for AI, data-intensive workloads, and on-chain data lakes.',
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
    bestFor: ['Enterprises', 'AI/ML developers', 'DePIN', 'SaaS', 'Web3'],
    keyFeatures: [
      'S3-compatible API',
      'Client-side encryption',
      'Access control',
    ],
    url: 'https://www.cidgravity.com/',
    logo: CIDgravityMiniatureLogo,
  },
  {
    name: 'Lighthouse',
    description: 'Perpetual, long-term data storage.',
    bestFor: ['Enterprises', 'Developers', 'Personal Storage'],
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
    description: 'Embrace the future of decentralized storage',
    bestFor: ['Enterprises', 'AI/ML developers', 'DePIN', 'SaaS', 'Web3'],
    keyFeatures: [
      'S3-compatible API',
      'Client-side encryption',
      'Access control',
    ],
    url: 'https://use.ramo.computer/',
    logo: RamoMiniatureLogo,
  },
  {
    name: 'Singularity CLI',
    description: 'Directly manage the full deal-making lifecycle on Filecoin.',
    bestFor: ['Advanced technical users'],
    keyFeatures: [
      'S3-compatible API',
      'Client-side encryption',
      'Access control',
    ],
    url: 'https://singularity.storage/',
    logo: SingularityMiniatureLogo,
  },
  {
    name: 'Storacha',
    description: 'High-speed hot storage for fast data retrieval.',
    bestFor: ['Enterprises', 'AI/ML developers', 'DePIN', 'SaaS', 'Web3'],
    keyFeatures: [
      'S3-compatible API',
      'Client-side encryption',
      'Access control',
    ],
    url: 'https://storacha.network/',
    logo: StorachaMiniatureLogo,
  },
] as const satisfies Array<StorageProvider>
