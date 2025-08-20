import type { StorageProviderCardProps } from '../components/StorageProviderCard/StorageProviderCard'

export type StorageProvider = Pick<
  StorageProviderCardProps,
  'name' | 'description' | 'keyFeatures' | 'url'
> & {
  bestFor: Array<BestForType>
}

type BestForType = 'S3Cloud' | 'Backup' | 'Archival'

export const storageProviders = [
  {
    name: 'Akave',
    description:
      'Akave is a protocol that enables businesses and users with a decentralized storage layer and data management tools to efficiently manage on-chain data lakes.',
    bestFor: ['S3Cloud', 'Backup', 'Archival'],
    keyFeatures: ['Free Tier Available'],
    url: 'https://www.akave.ai/',
  },
  {
    name: 'CID Gravity',
    description:
      'A polished, enterprise-grade gateway that simplifies storage on IPFS and Filecoin built for businesses, independent software vendors (ISVs), and storage providers who want powerful tools.',
    bestFor: ['S3Cloud', 'Backup', 'Archival'],
    keyFeatures: ['Free Tier Available'],
    url: 'https://www.cidgravity.com/',
  },
  {
    name: 'Lighthouse',
    description:
      'Akave is a protocol that enables businesses and users with a decentralized storage layer and data management tools to efficiently manage on-chain data lakes. ',
    bestFor: ['S3Cloud', 'Backup', 'Archival'],
    keyFeatures: ['Free Tier Available'],
    url: 'https://www.lighthouse.storage/',
  },
  {
    name: 'Storacha',
    description:
      'Storacha is a next-generation storage network built by Protocol Labs. It offers fast, decentralized “hot” storage combined with the long-term durability of Filecoin—ideal for applications that need both instant access and blockchain-grade verifiable backup.',
    bestFor: ['S3Cloud', 'Backup', 'Archival'],
    keyFeatures: ['Free Tier Available'],
    url: 'https://storacha.network/',
  },
] as const satisfies Array<StorageProvider>
