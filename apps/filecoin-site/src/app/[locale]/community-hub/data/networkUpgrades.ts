import nv27GoldenWeekImage from '@/assets/images/filecoin-governance-nv27-upgrade.webp'
import nv28GoldenWeekImage from '@/assets/images/filecoin-governance-nv28-upgrade.webp'

import type { SimpleCardWithImageProps } from '@/components/SimpleCardWithImage'

export type NetworkUpgrades = Pick<
  SimpleCardWithImageProps,
  'title' | 'description' | 'cta' | 'image'
> & {
  label: 'Current upgrade' | 'Upcoming upgrade'
}

export const networkUpgrades = [
  {
    title: 'NV27 Golden Week',
    description:
      'This upgrade delivered protocol cleanups and enhancements, including cryptographic precompiles for the Filecoin Ethereum Virtual Machine (FEVM), smart contract notifications for Direct Data Onboarding, Fast Finality on Filecoin (F3)-compatible snapshot formatting, and a new deposit requirement for storage provider (SP) creation.',
    label: 'Current upgrade',
    cta: {
      href: 'https://fil.org/blog/announcing-the-filecoin-network-v27-golden-week-upgrade',
      text: 'Read the NV27 upgrade overview',
    },
    image: {
      src: nv27GoldenWeekImage,
      alt: 'Filecoin Network Upgrade announcement for nv27 Golden Week, with gold-texture background artwork.',
    },
  },
  {
    title: 'NV28 Upcoming',
    description:
      "NV28 is expected to deliver continued protocol improvements and ecosystem enhancements, focusing on core network operations, developer experience, and storage provider functionality while supporting Filecoin's broader roadmap for scalability and security.",
    label: 'Upcoming upgrade',
    cta: {
      href: 'https://github.com/filecoin-project/core-devs/discussions/205',
      text: 'Learn more about NV28',
    },
    image: {
      src: nv28GoldenWeekImage,
      alt: 'Filecoin Network Upgrade announcement for nv28, with cosmic background artwork.',
    },
  },
] as const satisfies Array<NetworkUpgrades>
