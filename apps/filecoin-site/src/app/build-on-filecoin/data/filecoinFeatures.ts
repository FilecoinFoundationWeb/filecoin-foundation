import {
  BridgeIcon,
  IntersectThreeIcon,
  StackSimpleIcon,
} from '@phosphor-icons/react/dist/ssr'

type FilecoinFeature = {
  title: string
  description: string
  icon: typeof IntersectThreeIcon
}

export const filecoinFeatures: FilecoinFeature[] = [
  {
    title: 'Large archival storage',
    description:
      'Archive large datasets, like AI datasets, with cryptographic integrity and global redundancy.',
    icon: StackSimpleIcon,
  },
  {
    title: 'Cross-chain data bridges',
    description:
      'Easily write data bridges that store data from other chains on Filecoin.',
    icon: IntersectThreeIcon,
  },
  {
    title: 'Storage-enabled dApps',
    description:
      'Build decentralized, resilient applications with permissionless storage and FVM-powered smart contracts.',
    icon: BridgeIcon,
  },
]
