import {
  BatteryChargingVerticalIcon,
  HardDrivesIcon,
  HeartbeatIcon,
  LockKeyIcon,
  ThermometerIcon,
  WifiHighIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { CardData } from '@/components/Card'

export const dataCenterRequirements: Array<CardData> = [
  {
    title: 'Power',
    description: 'Redundant and stable supply.',
    icon: BatteryChargingVerticalIcon,
  },
  {
    title: 'Cooling',
    description: 'Robust and consistent thermal management.',
    icon: ThermometerIcon,
  },
  {
    title: 'Security',
    description: 'Physical and network-level safeguards.',
    icon: LockKeyIcon,
  },
  {
    title: 'Uptime',
    description: 'Always-on, with backup and failover systems.',
    icon: HeartbeatIcon,
  },
  {
    title: 'Connectivity',
    description:
      'Fiber uplinks and enterprise-grade networking for high throughput.',
    icon: WifiHighIcon,
  },

  {
    title: 'Space',
    description:
      'Adequate cabling, rack space, and room for large JBOD arrays.',
    icon: HardDrivesIcon,
  },
]
