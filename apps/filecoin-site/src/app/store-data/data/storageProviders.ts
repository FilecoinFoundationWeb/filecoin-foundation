import type { StorageProviderCardProps } from '../components/StorageProviderCard'

import type { StorageKey } from './storageCategories'

type StorageProvider = Pick<StorageProviderCardProps, 'name'> & {
  category: StorageKey
}

export const storageProviders = [
  {
    name: 'Akave',
    category: 's3-compatible',
  },
  {
    name: 'CID Gravity',
    category: 's3-compatible',
  },
  {
    name: 'Lighthouse',
    category: 'nft',
  },
  {
    name: 'GhostDrive',
    category: 'backup-recovery',
  },
  {
    name: 'Storacha',
    category: 'archival',
  },
  {
    name: 'Web3.Storage',
    category: 'drag-drop',
  },
  {
    name: 'IPFS Desktop',
    category: 'drag-drop',
  },
  {
    name: 'FilSwan',
    category: 's3-compatible',
  },
  {
    name: 'Estuary',
    category: 'archival',
  },
  {
    name: 'Spheron',
    category: 'backup-recovery',
  },
  {
    name: 'Chainsafe Storage',
    category: 'backup-recovery',
  },
  {
    name: 'Pinata',
    category: 'nft',
  },
  {
    name: 'NFT.Storage',
    category: 'nft',
  },
  {
    name: 'Fleek',
    category: 'drag-drop',
  },
  {
    name: 'ThirdWeb Storage',
    category: 'nft',
  },
  {
    name: 'Moralis IPFS',
    category: 'nft',
  },
  {
    name: 'Textile Buckets',
    category: 's3-compatible',
  },
  {
    name: 'Temporal',
    category: 'archival',
  },
  {
    name: 'Infura IPFS',
    category: 's3-compatible',
  },
  {
    name: 'ChainStack Storage',
    category: 'backup-recovery',
  },
  {
    name: 'Storj DCS',
    category: 's3-compatible',
  },
  {
    name: 'Arweave Deploy',
    category: 'archival',
  },
  {
    name: 'Bundlr Network',
    category: 'archival',
  },
  {
    name: 'IpfsCloud',
    category: 'drag-drop',
  },
  {
    name: 'Filebase',
    category: 's3-compatible',
  },
  {
    name: 'Eternum Storage',
    category: 'backup-recovery',
  },
] as const satisfies Array<StorageProvider>
