import { FILECOIN_URLS } from '@/constants/siteMetadata'

import type { SimpleCardData } from '@/components/SimpleCard'

const CTA_TEXT = 'Learn how it works'

export const filecoinStackFeatures: Array<SimpleCardData> = [
  {
    title: 'Proof of Replication (PoRep)',
    description:
      'Proves that a storage provider has created a unique copy of data.',
    cta: {
      href: `${FILECOIN_URLS.docs}basics/the-blockchain/proofs#proof-of-replication-porep`,
      text: CTA_TEXT,
    },
  },
  {
    title: 'Proof of Spacetime (PoSt)',
    description:
      'Verifies that the unique copy of data remains unchanged over time, with continuous proofs submitted to the network.',
    cta: {
      href: `${FILECOIN_URLS.docs}basics/the-blockchain/proofs#proof-of-spacetime-post#`,
      text: CTA_TEXT,
    },
  },
  {
    title: 'Proof of Data Possession (PDP)',
    description:
      'Allows a client to check that data is held by a provider, without needing to retrieve the entire file.',
    cta: {
      href: '#todo',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Filecoin Virtual Machine (FVM)',
    description:
      'Brings smart contracts and programmability to the newtwork, enabling custom logic and decentralized apps',
    cta: {
      href: `${FILECOIN_URLS.docs}smart-contracts/fundamentals/the-fvm`,
      text: CTA_TEXT,
    },
  },
  {
    title: 'Filecoin Plus (Fil+)',
    description:
      'An incentive system that aims to increase the amount of useful data stored on the Filecoin network.',
    cta: {
      href: `${FILECOIN_URLS.docs}basics/how-storage-works/filecoin-plus`,
      text: CTA_TEXT,
    },
  },
]
