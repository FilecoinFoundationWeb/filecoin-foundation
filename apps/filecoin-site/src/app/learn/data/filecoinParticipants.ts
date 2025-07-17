import { PATHS } from '@/constants/paths'

import type { SimpleCardData } from '@/components/SimpleCard'

export const filecoinParticipants: Array<SimpleCardData> = [
  {
    title: 'Protocol layer',
    description:
      'Verifies continuous data integrity, and enables secure, reliable operations across the system.',
    cta: {
      href: '#',
      text: 'Learn more',
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
      href: '#',
      text: 'Find a storage solution',
    },
  },
  {
    title: 'Clients',
    description:
      'Store and retrieve data, which is accessible and verifiable at all times.',
    cta: {
      href: PATHS.STORE_DATA.path,
      text: 'Store your data on Filecoin',
    },
  },
  {
    title: 'Developers',
    description:
      'Build innovative applications and services on Filecoin’s programmable data layer.',
    cta: {
      href: PATHS.BUILD_ON_FILECOIN.path,
      text: 'Build on Filecoin',
    },
  },
]
