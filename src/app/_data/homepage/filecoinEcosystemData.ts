import { Code, HardDrives, Money, Person } from '@phosphor-icons/react/dist/ssr'

import { PATHS } from '@/constants/paths'

export const filecoinEcosystemData = [
  {
    heading: {
      title: 'Grants Program',
      icon: Money,
    },
    description:
      'Learn more about support for teams building on the Filecoin network.',
    cta: {
      href: PATHS.GRANTS.path,
      text: 'Read More',
    },
  },
  {
    heading: {
      title: 'Filecoin Events',
      icon: Person,
    },
    description:
      'Connect and collaborate with the Filecoin community around the globe! Get details on the latest Filecoin Foundation, Web3, and community events.',
    cta: {
      href: PATHS.EVENTS.path,
      text: 'Connect',
    },
  },
  {
    heading: {
      title: 'Builder Resources',
      icon: Code,
    },
    description:
      'Join thousands of developers and teams building on the Filecoin network.',
    cta: {
      href: 'https://docs.filecoin.io',
      text: 'Learn More',
    },
  },
  {
    heading: {
      title: 'Storage Resources',
      icon: HardDrives,
    },
    description:
      'Join the Filecoin community as a Storage Provider or leverage the network to store your data with robust and secure storage.',
    cta: {
      href: 'https://destor.com/destor-network/overview',
      text: 'Learn More',
    },
  },
]
