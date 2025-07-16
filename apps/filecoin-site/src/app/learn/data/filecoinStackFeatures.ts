import type { SimpleCardData } from '@/components/SimpleCard'

const CTA_TEXT = 'Learn more'

export const filecoinStackFeatures: Array<SimpleCardData> = [
  {
    title: 'Proof of Replication (PoRep)',
    description:
      'Proves a storage provider has created a unique, real copy of the data.',
    cta: {
      href: '#',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Proof of Spacetime (PoSt)',
    description:
      'Verifies over time that the data is continuously being stored, ensuring long-term reliability.',
    cta: {
      href: '#',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Piece Deal Proofs (PDP)',
    description:
      'Confirms that specific files are stored as promised, down to the byte.',
    cta: {
      href: '#',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Filecoin Virtual Machine (FVM)',
    description:
      'Enables smart contracts and programmable logic directly on Filecoin’s storage layer.',
    cta: {
      href: '#',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Filecoin Web Services (FWS)',
    description:
      'Developer-friendly APIs and services to make building on Filecoin fast and scalable.',
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
] as const
