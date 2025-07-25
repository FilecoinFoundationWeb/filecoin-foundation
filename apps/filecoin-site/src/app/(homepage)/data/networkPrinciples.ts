import {
  GlobeIcon,
  PuzzlePieceIcon,
  ShareNetworkIcon,
  ShieldCheckIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { CardData } from '@/components/Card'

export const networkPrinciples: Array<CardData> = [
  {
    title: 'Decentralized & permissionless',
    description:
      'Anyone can store or provide data — no central gatekeepers, no barriers to entry.',
    icon: ShareNetworkIcon,
  },
  {
    title: 'Verifiable storage',
    description:
      'Cryptographic proofs ensure your data remains accessible and with onchain audits that guarantee authenticity and integrity.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Composable & open‑source',
    description:
      'Integrated with IPFS and EVM-compatible chains. Build and innovate freely in an open, developer-first ecosystem.',
    icon: PuzzlePieceIcon,
  },
  {
    title: 'Global reach, local resilience',
    description:
      'Growing storage capacity across a global network of independent data centers ensures accessibility, redundancy, and resilience.',
    icon: GlobeIcon,
  },
]
