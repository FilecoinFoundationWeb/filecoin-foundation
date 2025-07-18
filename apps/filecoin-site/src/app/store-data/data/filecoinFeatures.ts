import {
  CertificateIcon,
  CurrencyCircleDollarIcon,
  LockKeyIcon,
  GlobeHemisphereWestIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { CardData } from '@/components/Card'

export const filecoinFeatures: Array<CardData> = [
  {
    title: 'Data integrity and security',
    description:
      'All storage is verifiable, tamper-resistant, and secured end-to-end, ensuring your data remains intact, safe, and auditable over time.',
    icon: LockKeyIcon,
  },
  {
    title: 'Compliance',
    description:
      'Meet enterprise and industry requirements with storage providers that adhere to leading standards—including SOC 2 compliance and Tier III data center certifications.',
    icon: CertificateIcon,
  },
  {
    title: 'Predictable pricing',
    description:
      'Store and retrieve data on your terms, with clear and competitive rates. No hidden pricing or unpredictable egress fees.',
    icon: CurrencyCircleDollarIcon,
  },
  {
    title: 'Infinitely  scalable for big data',
    description:
      'Filecoin’s decentralized infrastructure supports exabyte-scale datasets, high-throughput workloads, and long-term archival—with built-in redundancy and global distribution.',
    icon: GlobeHemisphereWestIcon,
  },
] as const
