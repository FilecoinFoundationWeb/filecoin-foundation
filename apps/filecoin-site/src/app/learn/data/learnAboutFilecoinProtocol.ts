import {
  FILECOIN_DOCS_BASE_URL,
  FILECOIN_DOCS_URLS,
} from '@/constants/siteMetadata'

import type { SimpleCardData } from '@/components/SimpleCard'

const CTA_TEXT = 'Learn more'

export const learnAboutFilecoinProtocol: Array<SimpleCardData> = [
  {
    title: 'Content addressing',
    description:
      'Files are retrieved via content identifiers (CIDs) instead of location-based URLs prone to deterioration.',
    cta: {
      href: FILECOIN_DOCS_URLS.basicsBlockhainPoRep,
      text: CTA_TEXT,
    },
  },
  {
    title: 'Storage & retrieval deals',
    description:
      'Clients make programmable deals with independent storage providers in a global marketplace.',
    cta: {
      href: FILECOIN_DOCS_URLS.basicsBlockhainPoSt,
      text: CTA_TEXT,
    },
  },
  {
    title: 'Proofs & verification',
    description:
      'Providers must cryptographically prove they are storing data.',
    cta: {
      href: `#`,
      text: CTA_TEXT,
    },
  },
  {
    title: 'Token Incentives (FIL)',
    description:
      'The native token aligns economic incentives and rewards useful storage over time.',
    cta: {
      href: FILECOIN_DOCS_URLS.smartContractFundamentalsFVM,
      text: CTA_TEXT,
    },
  },
  {
    title: 'Filecoin Virtual Machine (FVM)',
    description:
      'The smart-contract layer that lets developers build logic, automation, and apps on top of Filecoin storage.',
    cta: {
      href: FILECOIN_DOCS_URLS.smartContractFundamentalsFVM,
      text: CTA_TEXT,
    },
  },
  {
    title: 'Filecoin Plus (Fil+)',
    description:
      'An incentive system that aims to increase the amount of useful data stored on the Filecoin network.',
    cta: {
      href: `${FILECOIN_DOCS_BASE_URL}basics/how-storage-works/filecoin-plus`,
      text: CTA_TEXT,
    },
  },
]
