import {
  ShieldCheckIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
  GlobeIcon,
  ScalesIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { CardData } from '@/components/Card'

export const filecoinValues: Array<CardData> = [
  {
    title: 'Preservation first',
    description:
      'The Filecoin network is built to safeguard culturally and scientifically significant data against loss, censorship, or corporate control through cryptographic verification and redundancy.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Cryptographic integrity',
    description:
      'The network offers unmatched cryptographic storage at scale, enabling transparent, verifiable storage without reliance on institutional trust.',
    icon: MagnifyingGlassIcon,
  },
  {
    title: 'Open innovation',
    description:
      'Filecoin is built on open-source protocols and transparent development, empowering a global community to build and advance decentralized infrastructure.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Democratized access',
    description:
      'The network empowers users to bypass centralized gatekeepers, ensuring data infrastructure belongs to everyone and embedding civil liberties into the fabric of the internet.',
    icon: GlobeIcon,
  },
  {
    title: 'Economic sustainability',
    description:
      'Network health is aligned by economic incentives, transforming a network of independent contributors into essential infrastructure and supporting a self-sustaining, participant-driven economy.',
    icon: ScalesIcon,
  },
]
