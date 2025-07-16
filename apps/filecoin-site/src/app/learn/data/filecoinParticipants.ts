import { PATHS } from '@/constants/paths'

import type { SimpleCardProps } from '@/components/SimpleCard'

export type FilecoinRole = Pick<
  SimpleCardProps,
  'title' | 'description' | 'cta'
>

export const filecoinParticipants: Array<FilecoinRole> = [
  {
    title: 'Protocol layer',
    description:
      'The foundation of the network. It manages storage deals, verifies data, and ensures everything runs securely.',
    cta: {
      href: '#',
      text: 'Learn more',
    },
  },
  {
    title: 'Storage providers',
    description:
      'Individuals or organizations that offer storage space and earn rewards for storing data reliably.',
    cta: {
      href: PATHS.OFFER_STORAGE.path,
      text: 'Become a storage provider',
    },
  },
  {
    title: 'Storage solutions',
    description:
      'Interfaces like apps, websites, or integrations that connect users and providers to the network.',
    cta: {
      href: '#',
      text: 'Find a storage solution',
    },
  },
  {
    title: 'Developers',
    description:
      'Build the tools, protocols, and smart contracts that power and expand the ecosystem.',
    cta: {
      href: PATHS.BUILD_ON_FILECOIN.path,
      text: 'Build on Filecoin',
    },
  },
  {
    title: 'Clients',
    description:
      'People or organizations who use Filecoin to store and retrieve data.',
    cta: {
      href: PATHS.STORE_DATA.path,
      text: 'Store your data on Filecoin',
    },
  },
]
