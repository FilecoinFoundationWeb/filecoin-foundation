import {
  BatteryChargingVerticalIcon,
  LockKeyIcon,
  ThermometerColdIcon,
} from '@phosphor-icons/react/dist/ssr'

type WhatIsFilecoinUsedFor = {
  title: string
  description: string
  icon: typeof BatteryChargingVerticalIcon
}

export const whatIsFilecoinUsedFor: Array<WhatIsFilecoinUsedFor> = [
  {
    title: 'Cultural archives',
    description:
      'Critical historical records safeguarded for long-term preservation.',
    icon: BatteryChargingVerticalIcon,
  },
  {
    title: 'Scientific datasets',
    description: 'Genomics, public research, open data.',
    icon: BatteryChargingVerticalIcon,
  },

  {
    title: 'Enterprise backups & archival storage',
    description: 'Secure, long-term storage for critical business data.',
    icon: ThermometerColdIcon,
  },
  {
    title: 'Web3 & AI apps',
    description: 'SNFTs, video streaming, training datasets, dApps.',
    icon: LockKeyIcon,
  },
]
