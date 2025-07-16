import type { SimpleCardData } from '@/components/SimpleCard'

const CTA_TEXT = 'Learn more'

export const filecoinStackFeatures: Array<SimpleCardData> = [
  {
    title: 'Proof of Replication (PoRep)',
    description:
      'Proves that a storage provider has created a unique copy of data.',
    cta: {
      href: '#',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Proof of Spacetime (PoSt)',
    description:
      'Verifies that the unique copy of data remains unchanged over time, with continuous proofs submitted to the network.',
    cta: {
      href: '#',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Proof of Data Possession (PDP)',
    description:
      'Allows a client to check that data is held by a provider, without needing to retrieve the entire file.',
    cta: {
      href: '#',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Filecoin Virtual Machine (FVM)',
    description:
      'Brings smart contracts and programmability to the newtwork, enabling custom logic and decentralized apps',
    cta: {
      href: '#',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Filecoin Plus (Fil+)',
    description:
      'A social trust system that rewards useful, verifiable data with storage incentives.',
    cta: {
      href: '#',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Filecoin Programmable Cloud (FPC)',
    description:
      'A set of open APIs and tools that make it easy for developers to integrate Filecoin storage into apps and workflows.',
    cta: {
      href: '#',
      text: CTA_TEXT,
    },
  },
] as const
