import type { SimpleCardData } from '@filecoin-foundation/ui-filecoin/SimpleCard'

import { FILECOIN_DOCS_URL, FILECOIN_DOCS_URLS } from '@/constants/siteMetadata'

export const learnAboutFilecoinProtocol = [
  {
    title: 'Content addressing',
    description:
      'Files are retrieved via content identifiers (CIDs) instead of location-based URLs prone to deterioration.',
    cta: {
      href: 'https://docs.ipfs.tech/concepts/content-addressing/',
      text: 'See how content addressing works',
    },
  },
  {
    title: 'Storage & retrieval deals',
    description:
      'Clients make programmable deals with independent storage providers in a global marketplace.',
    cta: {
      href: FILECOIN_DOCS_URLS.storageModel,
      text: 'Learn about storage deals',
    },
  },
  {
    title: 'Proofs & verification',
    description:
      'Providers must cryptographically prove they are storing data.',
    cta: {
      href: FILECOIN_DOCS_URLS.proofs,
      text: 'Understand Filecoin proofs',
    },
  },
  {
    title: 'Token Incentives (FIL)',
    description:
      'The native token aligns economic incentives and rewards useful storage over time.',
    cta: {
      href: FILECOIN_DOCS_URLS.cryptoEconomics,
      text: 'Explore FIL token economics',
    },
  },
  {
    title: 'Filecoin Virtual Machine (FVM)',
    description:
      'The smart-contract layer that lets developers build logic, automation, and apps on top of Filecoin storage.',
    cta: {
      href: FILECOIN_DOCS_URLS.filecoinVirtualMachine,
      text: 'Discover the FVM',
    },
  },
  {
    title: 'Filecoin Plus (Fil+)',
    description:
      'An incentive system that aims to increase the amount of useful data stored on the Filecoin network.',
    cta: {
      href: `${FILECOIN_DOCS_URL}basics/how-storage-works/filecoin-plus`,
      text: 'Read about Filecoin Plus',
    },
  },
] as const satisfies Array<SimpleCardData>
