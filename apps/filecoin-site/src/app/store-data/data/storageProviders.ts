import type { StorageProviderCardProps } from '../components/StorageProviderCard/StorageProviderCard'

import type { StorageKey } from './storageCategories'

type StorageProvider = Pick<
  StorageProviderCardProps,
  'name' | 'description' | 'keyFeatures' | 'url'
> & {
  bestFor: Array<BestForType>
  category: StorageKey
}

type BestForType = 'S3Cloud' | 'Backup' | 'Archival'

export const storageProviders = [
  {
    name: 'Akave',
    category: 's3-compatible',
    description:
      'Akave is a protocol that enables businesses and users with a decentralized storage layer and data management tools to efficiently manage on-chain data lakes.',
    bestFor: ['S3Cloud', 'Backup', 'Archival'],
    keyFeatures: ['Free Tier Available'],
    url: 'https://www.akave.ai/',
  },
  {
    name: 'ChainSafe Storage',
    category: 'nft',
    description:
      'ChainSafe Storage makes it easy to store and retrieve files on decentralized networks like IPFS and Filecoin. It offers a simple, secure, and reliable way for developers and teams to manage data without relying on centralized providers.',
    bestFor: ['S3Cloud', 'Backup', 'Archival'],
    keyFeatures: ['Free Tier Available'],
    url: 'https://storage.chainsafe.io/',
  },
  {
    name: 'CID Gravity',
    category: 'backup-recovery',
    description:
      'A polished, enterprise-grade gateway that simplifies storage on IPFS and Filecoin built for businesses, independent software vendors (ISVs), and storage providers who want powerful tools.',
    bestFor: ['S3Cloud', 'Backup', 'Archival'],
    keyFeatures: ['Free Tier Available'],
    url: 'https://www.cidgravity.com/',
  },
  {
    name: 'Dcent',
    category: 'archival',
    description:
      'DCENT offers high-performance, eco-friendly decentralized storage and edge compute services in Europe, with top-tier hardware and green-certified infrastructure.',
    bestFor: ['S3Cloud', 'Backup', 'Archival'],
    keyFeatures: ['Free Tier Available'],
    url: 'https://dcent.nl/',
  },
  {
    name: 'Fileverse',
    category: 'drag-drop',
    description:
      'Fileverse is a privacy-first, peer-to-peer collaboration platform that replaces tools like Google Workspace and Notion with fully decentralized workspaces. It’s built on IPFS, Arweave, and blockchain smart contracts—so you stay in control of your data.',
    bestFor: ['S3Cloud', 'Backup', 'Archival'],
    keyFeatures: ['Free Tier Available'],
    url: 'https://fileverse.io/',
  },
  {
    name: 'Filedrive Labs',
    category: 's3-compatible',
    description:
      'FileDrive connects publishers of large datasets—like researchers and open-data platforms—with the Filecoin storage network, offering an easy path from raw data to decentralized storage with reliability, scalability, and speed.',
    bestFor: ['S3Cloud', 'Backup', 'Archival'],
    keyFeatures: ['Free Tier Available'],
    url: 'https://filedrive.io/',
  },
  {
    name: 'FileMarket',
    category: 'nft',
    description:
      'FileMarket.xyz is a Web3 platform that lets creators tokenize, sell, share, and manage digital files securely using blockchain and decentralized storage. Files are minted as Encrypted FileTokens (EFTs), stored on Filecoin via IPFS, and exchanged with full encryption and programmable access control.',
    bestFor: ['S3Cloud', 'Backup', 'Archival'],
    keyFeatures: ['Free Tier Available'],
    url: 'https://filemarket.xyz/',
  },
  {
    name: 'Future Tech Holdings',
    category: 'backup-recovery',
    description:
      'FTH delivers enterprise-grade decentralized cloud services—combining high-speed compute and resilient storage built on Web3 infrastructure. Perfect for startups and developers aiming to scale smart applications quickly and securely.',
    bestFor: ['S3Cloud', 'Backup', 'Archival'],
    keyFeatures: ['Free Tier Available'],
    url: 'https://future-tech-holdings.com/',
  },
  {
    name: 'Holon',
    category: 'archival',
    description:
      'Holon delivers sustainable, enterprise-grade decentralized storage and edge compute powered by Filecoin. With green energy, verifiable infrastructure, and regional presence across Asia-Pacific and the UAE, Holon blends performance with environmental stewardship.',
    bestFor: ['S3Cloud', 'Backup', 'Archival'],
    keyFeatures: ['Free Tier Available'],
    url: 'https://holon.investments/',
  },
  {
    name: 'Lighthouse',
    category: 'drag-drop',
    description:
      'Akave is a protocol that enables businesses and users with a decentralized storage layer and data management tools to efficiently manage on-chain data lakes. ',
    bestFor: ['S3Cloud', 'Backup', 'Archival'],
    keyFeatures: ['Free Tier Available'],
    url: 'https://www.lighthouse.storage/',
  },
  {
    name: 'ND Labs',
    category: 's3-compatible',
    description:
      'ND Labs is a global Web3 technology and decentralized storage services provider, specializing in building blockchain-based infrastructure—including Filecoin‑backed data systems—for enterprise and metaverse use cases. With a presence in Singapore, Poland, Hong Kong, the US, and Dubai, they support businesses worldwide.',
    bestFor: ['S3Cloud', 'Backup', 'Archival'],
    keyFeatures: ['Free Tier Available'],
    url: 'https://www.ndlabs.io/',
  },
  {
    name: 'Nebula Block',
    category: 'nft',
    description:
      'Nebula Block is a leading Web3 infrastructure provider, offering global GPU hosting, decentralized storage, and turnkey data‑center solutions. They’ve been a major Filecoin ecosystem participant in North America since 2020 and operate across four data centers with over 700 PiB of storage and more than 3,000 servers.',
    bestFor: ['S3Cloud', 'Backup', 'Archival'],
    keyFeatures: ['Free Tier Available'],
    url: 'https://www.nebulablock.com/',
  },
  {
    name: 'Swan',
    category: 'backup-recovery',
    description:
      'A decentralized AI and computing marketplace built on an Ethereum-compatible Layer 2 (using OP Stack). Swan Chain combines storage, computing, bandwidth, and payments into one seamless platform—designed to make AI and Web3 infrastructure accessible, efficient, and scalable.',
    bestFor: ['S3Cloud', 'Backup', 'Archival'],
    keyFeatures: ['Free Tier Available'],
    url: 'https://www.swanchain.io/',
  },
  {
    name: 'Titan Network',
    category: 'archival',
    description:
      'Titan Network is a Web3 infrastructure platform that transforms spare storage, compute, and bandwidth on everyday devices into a decentralized, enterprise-grade cloud service built on Filecoin. Over 650,000 nodes across 21+ countries are already in the network, supporting global clients like TikTok, Tencent, Bilibili, NetEase, iQIYI, and Volcengine.',
    bestFor: ['S3Cloud', 'Backup', 'Archival'],
    keyFeatures: ['Free Tier Available'],
    url: 'https://www.titannet.io/',
  },
  {
    name: 'Storacha',
    category: 'drag-drop',
    description:
      'Storacha is a next-generation storage network built by Protocol Labs. It offers fast, decentralized “hot” storage combined with the long-term durability of Filecoin—ideal for applications that need both instant access and blockchain-grade verifiable backup.',
    bestFor: ['S3Cloud', 'Backup', 'Archival'],
    keyFeatures: ['Free Tier Available'],
    url: 'https://storacha.network/',
  },
  {
    name: 'RAMO',
    category: 's3-compatible',
    description:
      'Ramo is an open-cloud infrastructure platform that lets anyone—individuals or enterprises—turn idle storage and compute hardware into revenue-generating assets. It delivers decentralized, S3-compatible storage and compute services by integrating multiple Web3 networks like Filecoin, Fluence, and others.',
    bestFor: ['S3Cloud', 'Backup', 'Archival'],
    keyFeatures: ['Free Tier Available'],
    url: 'https://www.ramo.io/',
  },
] as const satisfies Array<StorageProvider>
