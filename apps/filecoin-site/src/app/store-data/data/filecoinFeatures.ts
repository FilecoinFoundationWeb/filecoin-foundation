import {
  CertificateIcon,
  TagIcon,
  LockKeyIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { CardData } from '@/components/Card'

export const filecoinFeatures: Array<CardData> = [
  {
    title: 'Built-in resilience',
    description:
      'Your data is stored across multiple independent providers, reducing risk of loss or downtime.',
    icon: LockKeyIcon,
  },
  {
    title: 'Provably stored & unchanged',
    description:
      "Cryptographic proofs guarantee your data is actually being stored and hasn't been tampered with.",
    icon: CertificateIcon,
  },
  {
    title: 'Censorship-resistant by design',
    description:
      'No single company can take down or block access to your data.',
    icon: TagIcon,
  },
]
