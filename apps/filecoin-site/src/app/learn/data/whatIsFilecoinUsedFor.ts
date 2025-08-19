import {
  BatteryChargingVerticalIcon,
  LockKeyIcon,
  ThermometerColdIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { CardData } from '@/components/Card'

export const whatIsFilecoinUsedFor: Array<CardData> = [
  {
    title: 'Web3 apps & AI datasets',
    description:
      'Powering the data layer for NFTs, video streaming, AI training datasets, and dApps.',
    icon: LockKeyIcon,
  },
  {
    title: 'Backups & archival storage',
    description: 'Secure, long-term storage for mission-critical data.',
    icon: ThermometerColdIcon,
  },
  {
    title: 'Cultural archives',
    description:
      "Preserving humanity's most important knowledge and records for the long term.",
    icon: BatteryChargingVerticalIcon,
  },
  {
    title: 'Scientific datasets',
    description:
      'Enabling resilient access to genomics, public research, and large-scale scientific data.',
    icon: BatteryChargingVerticalIcon,
  },
]
