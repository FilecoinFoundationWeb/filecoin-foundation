import { FILECOIN_DOCS_URLS } from '@/constants/siteMetadata'

import type { SimpleCardData } from '@/components/SimpleCard'

export type TutorialsAndGuides = SimpleCardData & {
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
}

export const tutorialsAndGuides: Array<TutorialsAndGuides> = [
  {
    title: 'Understand Filecoin basics',
    description:
      "A quick intro to Filecoin's role as a decentralized, verifiable storage network and why developers use it.",
    difficulty: 'Beginner',
    cta: {
      href: FILECOIN_DOCS_URLS.basicsWhatIsFilecoin,
      text: 'Read the Filecoin basics guide',
    },
  },
  {
    title: 'Set up your development environment',
    description:
      'Install tools and create a Filecoin-compatible wallet (e.g., MetaMask) ready for development.',
    difficulty: 'Beginner',
    cta: {
      href: 'https://github.com/FIL-Builders/fil-frame',
      text: 'Follow the setup instructions',
    },
  },
  {
    title: 'Connect to the Filecoin network',
    description:
      'Use the Calibration testnet to build safely. Claim testFIL from the faucet and connect via an RPC endpoint.',
    difficulty: 'Beginner',
    cta: {
      href: FILECOIN_DOCS_URLS.builderCookbook,
      text: 'Connect to the testnet',
    },
  },
  {
    title: 'Store and retrieve your first file',
    description:
      'Upload a file using a storage API or SDK, get a CID, and retrieve it through an IPFS gateway.',
    difficulty: 'Beginner',
    cta: {
      href: FILECOIN_DOCS_URLS.builderCookbook,
      text: 'Try storing your first file',
    },
  },
  {
    title: 'Programmatic storage in your app',
    description:
      'Use the JavaScript SDK or HTTP API to store and retrieve files directly in your application logic.',
    difficulty: 'Intermediate',
    cta: {
      href: FILECOIN_DOCS_URLS.builderCookbook,
      text: 'See code examples',
    },
  },
  {
    title: 'Deploy your first smart contract on FVM',
    description:
      'Deploy a simple smart contract to store references to Filecoin data on the FEVM.',
    difficulty: 'Intermediate',
    cta: {
      href: FILECOIN_DOCS_URLS.builderCookbook,
      text: 'Deploy a sample contract',
    },
  },
  {
    title: 'Build your first dApp',
    description:
      'Create a minimal dApp with a frontend, storage backend, and FVM smart contract working together.',
    difficulty: 'Intermediate',
    cta: {
      href: FILECOIN_DOCS_URLS.builderCookbook,
      text: 'Start building a dApp',
    },
  },
  {
    title: 'Explore advanced use cases',
    description:
      'Learn patterns for NFTs, AI datasets, hybrid cloud storage, and cross-chain integrations.',
    difficulty: 'Advanced',
    cta: {
      href: FILECOIN_DOCS_URLS.builderCookbook,
      text: 'Explore advanced examples',
    },
  },
]
