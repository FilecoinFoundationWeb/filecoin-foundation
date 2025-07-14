import {
  BatteryChargingVerticalIcon,
  ThermometerIcon,
  WifiHighIcon,
  LockKeyIcon,
  HeartbeatIcon,
  HardDriveIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { CardData } from '@/components/Card'

export const dataCenterRequirements: CardData[] = [
  {
    title: 'Power',
    description:
      'Ensure 24/7 redundant power to keep your nodes running without interruption.',
    icon: BatteryChargingVerticalIcon,
  },
  {
    title: 'Cooling',
    description:
      'Maintain stable temperatures with proper HVAC systems for continuous operation.',
    icon: ThermometerIcon,
  },
  {
    title: 'Connectivity',
    description:
      'Use fiber uplinks and enterprise-grade networking for high throughput.',
    icon: WifiHighIcon,
  },
  {
    title: 'Security',
    description:
      'Protect your setup with physical access controls and monitoring systems.',
    icon: LockKeyIcon,
  },
  {
    title: 'Uptime',
    description:
      'Guarantee at least 99.9% uptime to meet network reliability standards.',
    icon: HeartbeatIcon,
  },
  {
    title: 'Space',
    description:
      'Provide adequate rack space, cabling, and room for large JBOD arrays.',
    icon: HardDriveIcon,
  },
] as const
