import {
  BracketsAngleIcon,
  DatabaseIcon,
  HardDriveIcon,
} from '@phosphor-icons/react/dist/ssr'

type NetworkAction = {
  title: string
  description: string
  icon: typeof BracketsAngleIcon
}

export const networkActions: NetworkAction[] = [
  {
    title: 'Build on Filecoin',
    description:
      'Learn how to store AI data, deploy dApps, and integrate smart contracts with guides, tools, and a growing dev community.',
    icon: BracketsAngleIcon,
  },
  {
    title: 'Store your data',
    description:
      'Keep your data secure and verifiable with built-in authenticity and integrity.',
    icon: HardDriveIcon,
  },
  {
    title: 'Become a storage provider',
    description:
      'Connect your data center to global, decentralized infrastructure open to everyone.',
    icon: DatabaseIcon,
  },
] as const
