import { FILECOIN_URLS } from '@/constants/siteMetadata'

import type { SimpleCardData } from '@/components/SimpleCard'

export type BlockExplorer = SimpleCardData & {
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
}

const CTA_TEXT = 'Learn more'

export const blockExplorers: Array<BlockExplorer> = [
  {
    title: 'Understand Filecoin basics',
    description:
      'A quick intro to Filecoin’s role as a decentralized, verifiable storage network and why developers use it.',
    difficulty: 'Beginner',
    cta: {
      href: `${FILECOIN_URLS.docs}basics/what-is-filecoin`,
      text: CTA_TEXT,
    },
  },
  {
    title: 'Set up your development environment',
    description:
      'Install tools and create a Filecoin-compatible wallet (e.g., MetaMask) ready for development.',
    difficulty: 'Beginner',
    cta: {
      href: 'https://github.com/FIL-Builders/fil-frame',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Connect to the Filecoin network',
    description:
      'Use the Calibration testnet to build safely. Claim testFIL from the faucet and connect via an RPC endpoint.',
    difficulty: 'Beginner',
    cta: {
      href: `${FILECOIN_URLS.docs}builder-cookbook/overview`,
      text: CTA_TEXT,
    },
  },
  {
    title: 'Store and retrieve your first file',
    description:
      'Upload a file using a storage API or SDK, get a CID, and retrieve it through an IPFS gateway.',
    difficulty: 'Beginner',
    cta: {
      href: `${FILECOIN_URLS.docs}builder-cookbook/overview`,
      text: CTA_TEXT,
    },
  },
  {
    title: 'Programmatic storage in your app',
    description:
      'Use the JavaScript SDK or HTTP API to store and retrieve files directly in your application logic.',
    difficulty: 'Intermediate',
    cta: {
      href: `${FILECOIN_URLS.docs}builder-cookbook/overview`,
      text: CTA_TEXT,
    },
  },
  {
    title: 'Deploy your first smart contract on FVM',
    description:
      'Deploy a simple smart contract to store references to Filecoin data on the FEVM.',
    difficulty: 'Intermediate',
    cta: {
      href: `${FILECOIN_URLS.docs}builder-cookbook/overview`,
      text: CTA_TEXT,
    },
  },
  {
    title: 'Build your first dApp',
    description:
      'Create a minimal dApp with a frontend, storage backend, and FVM smart contract working together.',
    difficulty: 'Intermediate',
    cta: {
      href: `${FILECOIN_URLS.docs}builder-cookbook/overview`,
      text: CTA_TEXT,
    },
  },
  {
    title: 'Explore advanced use cases',
    description:
      'Learn patterns for NFTs, AI datasets, hybrid cloud storage, and cross-chain integrations.',
    difficulty: 'Advanced',
    cta: {
      href: `${FILECOIN_URLS.docs}builder-cookbook/overview`,
      text: CTA_TEXT,
    },
  },
]
