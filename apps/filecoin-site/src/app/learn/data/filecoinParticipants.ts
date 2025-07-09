import { PATHS } from '@/constants/paths'

type FilecoinRole = {
  title: string
  description: string
  cta: {
    label: string
    href: string
  }
}

export const filecoinParticipants: FilecoinRole[] = [
  {
    title: 'Protocol layer',
    description:
      'The foundation of the network. It manages storage deals, verifies data, and ensures everything runs securely.',
    cta: {
      label: 'Learn more',
      href: '#',
    },
  },
  {
    title: 'Storage providers',
    description:
      'Individuals or organizations that offer storage space and earn rewards for storing data reliably.',
    cta: {
      label: 'Become a storage provider',
      href: PATHS.OFFER_STORAGE.path,
    },
  },
  {
    title: 'Storage solutions',
    description:
      'Interfaces like apps, websites, or integrations that connect users and providers to the network.',
    cta: {
      label: 'Find a storage solution',
      href: '#',
    },
  },
  {
    title: 'Developers',
    description:
      'Build the tools, protocols, and smart contracts that power and expand the ecosystem.',
    cta: {
      label: 'Build on Filecoin',
      href: PATHS.BUILD_ON_FILECOIN.path,
    },
  },
  {
    title: 'Clients',
    description:
      'People or organizations who use Filecoin to store and retrieve data.',
    cta: {
      label: 'Store your data on Filecoin',
      href: PATHS.STORE_DATA.path,
    },
  },
] as const
