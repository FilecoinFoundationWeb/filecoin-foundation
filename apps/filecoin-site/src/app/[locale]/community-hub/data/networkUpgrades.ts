import type { SimpleCardData } from '@filecoin-foundation/ui-filecoin/SimpleCard'

export type NetworkUpgrades = SimpleCardData & {
  difficulty: 'Current upgrade' | 'Upcoming upgrade'
}

export const networkUpgrades = [
  {
    title: 'NV27 Golden Week',
    description:
      'This upgrade delivered protocol cleanups and enhancements, including cryptographic precompiles for the Filecoin Ethereum Virtual Machine (FEVM), smart contract notifications for Direct Data Onboarding, Fast Finality on Filecoin (F3)-compatible snapshot formatting, and a new deposit requirement for storage provider (SP) creation.',
    difficulty: 'Current upgrade',
    cta: {
      href: 'https://fil.org/blog/announcing-the-filecoin-network-v27-golden-week-upgrade',
      text: 'Learn more',
    },
  },
  {
    title: 'NV28 Upcoming',
    description: '',
    difficulty: 'Upcoming upgrade',
    cta: {
      href: 'https://github.com/filecoin-project/core-devs/discussions/205',
      text: 'Learn more',
    },
  },
] as const satisfies Array<NetworkUpgrades>
