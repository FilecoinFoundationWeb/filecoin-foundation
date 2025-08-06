import { PATHS } from '@/constants/paths'

import type { SimpleCardData } from '@/components/SimpleCard'

export const filecoinParticipants: Array<SimpleCardData> = [
  {
    title: 'Blockchain',
    description:
      'Verifies continuous data integrity, and enables secure, reliable operations across the system.',
    cta: {
      href: 'https://docs.filecoin.io/basics/what-is-filecoin/blockchain',
      text: 'Learn about blockchain',
    },
  },
  {
    title: 'Storage providers',
    description:
      'Contribute storage capacity to the network and are rewarded for reliably storing and maintaining data.',
    cta: {
      href: PATHS.OFFER_STORAGE.path,
      text: 'Become a storage provider',
    },
  },
  {
    title: 'Storage solutions',
    description:
      'Support clients in onboarding and managing data, simplifying access to decentralized storage.',
    cta: {
      href: `${PATHS.STORE_DATA.path}#store-on-filecoin`,
      text: 'Find a storage solution',
    },
  },
  {
    title: 'Clients',
    description:
      'Store and retrieve data with consistent accessibility and verifiability.',
    cta: {
      href: PATHS.STORE_DATA.path,
      text: 'Store your data on Filecoin',
    },
  },
  {
    title: 'Developers',
    description:
      "Build innovative applications and services on Filecoin's programmable data layer.",
    cta: {
      href: PATHS.BUILD_ON_FILECOIN.path,
      text: 'Build on Filecoin',
    },
  },
]
