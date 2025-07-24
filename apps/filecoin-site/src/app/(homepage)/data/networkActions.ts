import {
  BracketsAngleIcon,
  DatabaseIcon,
  HardDriveIcon,
} from '@phosphor-icons/react/dist/ssr'

import { PATHS } from '@/constants/paths'

import type { LinkCardData } from '@/components/LinkCard'

export const networkActions: Array<LinkCardData> = [
  {
    title: 'Build on Filecoin',
    description:
      'Learn how to store AI data, deploy dApps, and integrate smart contracts with guides, tools, and a growing dev community.',
    href: PATHS.BUILD_ON_FILECOIN.path,
    icon: BracketsAngleIcon,
  },
  {
    title: 'Store your data',
    description:
      'Keep your data secure and verifiable with built-in authenticity and integrity.',
    href: PATHS.STORE_DATA.path,
    icon: HardDriveIcon,
  },
  {
    title: 'Become a storage provider',
    description:
      'Connect your data center to global, decentralized infrastructure open to everyone.',
    href: PATHS.OFFER_STORAGE.path,
    icon: DatabaseIcon,
  },
]
