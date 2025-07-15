import { PATHS } from '@/constants/paths'

import type { SimpleCardProps } from '@/components/SimpleCard'

export type FilecoinRole = Pick<
  SimpleCardProps,
  'title' | 'description' | 'cta'
>

export const filecoinParticipants: FilecoinRole[] = [
  {
    title: 'Protocol layer',
    description:
      'The foundation of the network. It manages storage deals, verifies data, and ensures everything runs securely.',
    cta: {
      text: 'Learn more',
      href: '#',
    },
  },
  {
    title: 'Storage providers',
    description:
      'Individuals or organizations that offer storage space and earn rewards for storing data reliably.',
    cta: {
      text: 'Become a storage provider',
      href: PATHS.OFFER_STORAGE.path,
    },
  },
  {
    title: 'Storage solutions',
    description:
      'Interfaces like apps, websites, or integrations that connect users and providers to the network.',
    cta: {
      text: 'Find a storage solution',
      href: '#',
    },
  },
  {
    title: 'Developers',
    description:
      'Build the tools, protocols, and smart contracts that power and expand the ecosystem.',
    cta: {
      text: 'Build on Filecoin',
      href: PATHS.BUILD_ON_FILECOIN.path,
    },
  },
  {
    title: 'Clients',
    description:
      'People or organizations who use Filecoin to store and retrieve data.',
    cta: {
      text: 'Store your data on Filecoin',
      href: PATHS.STORE_DATA.path,
    },
  },
] as const
