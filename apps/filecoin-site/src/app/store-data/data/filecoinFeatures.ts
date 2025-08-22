import {
  CertificateIcon,
  LockKeyIcon,
  ChartBarIcon,
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
    title: 'Outage proof resilience',
    description:
      'Data is distributed across independent data centers worldwide. If a data center goes offline, information remains available and verifiable.',
    icon: CertificateIcon,
  },
  {
    title: 'Scalable for big data',
    description:
      "Filecoin's decentralized infrastructure supports exabyte-scale datasets and long-term archival, with built-in redundancy and global distribution.",
    icon: ChartBarIcon,
  },
]
