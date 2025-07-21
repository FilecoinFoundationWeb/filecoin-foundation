import type { StorageProviderCardProps } from '../components/StorageProviderCard'

import type { StorageKey } from './storageCategories'

type StorageProvider = Pick<
  StorageProviderCardProps,
  'name' | 'description' | 'bestFor' | 'keyFeatures'
> & {
  category: StorageKey
}

export const storageProviders = [
  {
    name: 'Akave',
    category: 's3-compatible',
    description:
      'Akave is the first L2 storage chain, enabling on-chain data lakes for scalable and decentralized AI.',
    bestFor: ['AI', 'Data Lakes', 'Decentralized Storage'],
    keyFeatures: [
      'On-chain Data Lakes',
      'Scalable Storage',
      'Decentralized AI',
    ],
  },
  {
    name: 'CID Gravity',
    category: 's3-compatible',
    description:
      'CID Gravity is a marketplace streamlining enterprise and ISV data onboarding onto Filecoin, providing a cost-effective and automated pathway using a zero-knowledge solution.',
    bestFor: ['Enterprise', 'ISV', 'Data Onboarding'],
    keyFeatures: [
      'Cost-Effective',
      'Automated Onboarding',
      'Zero-Knowledge Solution',
    ],
  },
  {
    name: 'Lighthouse',
    category: 'nft',
    description:
      'Lighthouse is a platform for storing and retrieving data on the Filecoin network, with a focus on NFTs and Web3 applications.',
    bestFor: ['NFTs', 'Web3 Applications', 'Data Storage'],
    keyFeatures: ['NFT Storage', 'Web3 Applications', 'Decentralized Storage'],
  },
  {
    name: 'GhostDrive',
    category: 'backup-recovery',
    description:
      'GhostDrive is a data storage platform prioritizing privacy and security through encryption, decentralization, and novel storage optimization techniques.',
    bestFor: ['Privacy', 'Security', 'Decentralized Storage'],
    keyFeatures: [
      'Client-Side Encryption',
      'Decentralized Storage',
      'Storage Optimization',
    ],
  },
  {
    name: 'Storacha',
    category: 'archival',
    description:
      'Storacha is a decentralized hot data storage and retrieval system built on the Filecoin network, optimized for large-scale data on the open web.',
    bestFor: ['Hot Storage', 'Large-Scale Data', 'Open Web'],
    keyFeatures: ['Hot Storage', 'Large-Scale Data', 'Open Web'],
  },
  {
    name: 'Web3.Storage',
    category: 'drag-drop',
    description:
      'Web3.Storage is a suite of APIs and services for developers and storage clients to interact with data that’s not physically stored.',
    bestFor: ['Drag & Drop', 'Ease of Use', 'Web3 Applications'],
    keyFeatures: ['Drag & Drop', 'Ease of Use', 'Web3 Applications'],
  },
  {
    name: 'IPFS Desktop',
    category: 'drag-drop',
    description:
      'IPFS Desktop is a desktop application for managing and interacting with IPFS data.',
    bestFor: ['Drag & Drop', 'Ease of Use', 'IPFS'],
    keyFeatures: ['Drag & Drop', 'Ease of Use', 'IPFS'],
  },
  {
    name: 'FilSwan',
    category: 's3-compatible',
    description:
      'FilSwan is a storage provider that specializes in edge data and goes to great lengths to bring data closer to the data source.',
    bestFor: ['Edge Data', 'Data Closer to Source', 'S3 Compatibility'],
    keyFeatures: ['Edge Data', 'Data Closer to Source', 'S3 Compatibility'],
  },
  {
    name: 'Estuary',
    category: 'archival',
    description:
      'Estuary is a data storage platform that provides a simple and easy-to-use interface for developers to store and retrieve data on the Filecoin network.',
    bestFor: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
    keyFeatures: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
  },
  {
    name: 'Spheron',
    category: 'backup-recovery',
    description:
      'Spheron is a data storage platform that provides a simple and easy-to-use interface for developers to store and retrieve data on the Filecoin network.',
    bestFor: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
    keyFeatures: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
  },
  {
    name: 'Chainsafe Storage',
    category: 'backup-recovery',
    description:
      'Chainsafe Storage is a data storage platform that provides a simple and easy-to-use interface for developers to store and retrieve data on the Filecoin network.',
    bestFor: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
    keyFeatures: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
  },
  {
    name: 'Pinata',
    category: 'nft',
    description:
      'Pinata is a data storage platform that provides a simple and easy-to-use interface for developers to store and retrieve data on the Filecoin network.',
    bestFor: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
    keyFeatures: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
  },
  {
    name: 'NFT.Storage',
    category: 'nft',
    description:
      'NFT.Storage is a data storage platform that provides a simple and easy-to-use interface for developers to store and retrieve data on the Filecoin network.',
    bestFor: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
    keyFeatures: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
  },
  {
    name: 'Fleek',
    category: 'drag-drop',
    description:
      'Fleek is a data storage platform that provides a simple and easy-to-use interface for developers to store and retrieve data on the Filecoin network.',
    bestFor: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
    keyFeatures: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
  },
  {
    name: 'ThirdWeb Storage',
    category: 'nft',
    description:
      'ThirdWeb Storage is a data storage platform that provides a simple and easy-to-use interface for developers to store and retrieve data on the Filecoin network.',
    bestFor: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
    keyFeatures: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
  },
  {
    name: 'Moralis IPFS',
    category: 'nft',
    description:
      'Moralis IPFS is a data storage platform that provides a simple and easy-to-use interface for developers to store and retrieve data on the Filecoin network.',
    bestFor: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
    keyFeatures: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
  },
  {
    name: 'Textile Buckets',
    category: 's3-compatible',
    description:
      'Textile Buckets is a data storage platform that provides a simple and easy-to-use interface for developers to store and retrieve data on the Filecoin network.',
    bestFor: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
    keyFeatures: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
  },
  {
    name: 'Temporal',
    category: 'archival',
    description:
      'Temporal is a data storage platform that provides a simple and easy-to-use interface for developers to store and retrieve data on the Filecoin network.',
    bestFor: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
    keyFeatures: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
  },
  {
    name: 'Infura IPFS',
    category: 's3-compatible',
    description:
      'Infura IPFS is a data storage platform that provides a simple and easy-to-use interface for developers to store and retrieve data on the Filecoin network.',
    bestFor: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
    keyFeatures: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
  },
  {
    name: 'ChainStack Storage',
    category: 'backup-recovery',
    description:
      'ChainStack Storage is a data storage platform that provides a simple and easy-to-use interface for developers to store and retrieve data on the Filecoin network.',
    bestFor: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
    keyFeatures: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
  },
  {
    name: 'Storj DCS',
    category: 's3-compatible',
    description:
      'Storj DCS is a data storage platform that provides a simple and easy-to-use interface for developers to store and retrieve data on the Filecoin network.',
    bestFor: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
    keyFeatures: ['Ease of Use', 'Developer-Friendly', 'Data Storage'],
  },
  {
    name: 'Arweave Deploy',
    category: 'archival',
    description:
      'Arweave Deploy provides permanent, immutable storage solutions with a focus on long-term data preservation and decentralized archival services.',
    bestFor: ['Permanent Storage', 'Data Archival', 'Immutable Records'],
    keyFeatures: [
      'Permanent Storage',
      'Immutable Data',
      'Decentralized Archive',
    ],
  },
  {
    name: 'Bundlr Network',
    category: 'archival',
    description:
      'Bundlr Network is a decentralized storage network that enables instant data uploads and permanent storage with guaranteed data availability.',
    bestFor: [
      'Instant Uploads',
      'Guaranteed Availability',
      'Permanent Storage',
    ],
    keyFeatures: [
      'Instant Data Upload',
      'Guaranteed Availability',
      'Permanent Storage',
    ],
  },
  {
    name: 'IpfsCloud',
    category: 'drag-drop',
    description:
      'IpfsCloud offers a user-friendly cloud storage interface with drag-and-drop functionality for seamless file management on IPFS.',
    bestFor: ['Cloud Storage', 'User-Friendly Interface', 'File Management'],
    keyFeatures: ['Drag & Drop Interface', 'Cloud Storage', 'IPFS Integration'],
  },
  {
    name: 'Filebase',
    category: 's3-compatible',
    description:
      'Filebase provides S3-compatible object storage built on decentralized networks, offering enterprise-grade storage solutions with familiar APIs.',
    bestFor: ['Object Storage', 'Enterprise Solutions', 'S3 Compatibility'],
    keyFeatures: ['S3-Compatible API', 'Object Storage', 'Enterprise-Grade'],
  },
  {
    name: 'Eternum Storage',
    category: 'backup-recovery',
    description:
      'Eternum Storage specializes in secure backup and recovery solutions with advanced encryption and redundancy for critical data protection.',
    bestFor: ['Secure Backup', 'Data Recovery', 'Critical Data Protection'],
    keyFeatures: ['Secure Backup', 'Advanced Encryption', 'Data Redundancy'],
  },
] as const satisfies Array<StorageProvider>
