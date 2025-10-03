import {
  IntersectThreeIcon,
  StackIcon,
  SquaresFourIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { CardData } from '@/components/Card'

export const filecoinFeatures = [
  {
    title: 'Large archival storage',
    description:
      'Archive large datasets, like AI datasets, with cryptographic integrity and global redundancy.',
    icon: StackIcon,
  },
  {
    title: 'Cross-chain data bridges',
    description:
      'Easily write data bridges that store data from other chains on Filecoin.',
    icon: IntersectThreeIcon,
  },
  {
    title: 'Storage-enabled dApps',
    description:
      'Build decentralized, resilient applications with permissionless storage and FVM-powered smart contracts.',
    icon: SquaresFourIcon,
  },
] as const satisfies Array<CardData>
