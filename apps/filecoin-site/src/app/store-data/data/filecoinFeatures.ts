import {
  CertificateIcon,
  TagIcon,
  LockKeyIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { CardData } from '@/components/Card'

export const filecoinFeatures: Array<CardData> = [
  {
    title: 'Data security',
    description:
      'All storage is tamper-proof and verifiable. Regular health checks mathematically prove that your data is stored correctly and securely over time.',
    icon: LockKeyIcon,
  },
  {
    title: 'Compliance',
    description:
      'Meet enterprise and industry requirements with storage providers that adhere to leading standards, including SOC 2 compliance and Tier III data center certifications.',
    icon: CertificateIcon,
  },
  {
    title: 'Scalable for big data',
    description:
      "Filecoin's decentralized infrastructure supports exabyte-scale datasets and long-term archival, with built-in redundancy and global distribution.",
    icon: TagIcon,
  },
]
