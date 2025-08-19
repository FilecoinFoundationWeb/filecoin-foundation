import {
  BridgeIcon,
  IntersectThreeIcon,
  SparkleIcon,
  StackSimpleIcon,
} from '@phosphor-icons/react/dist/ssr'

type FilecoinFeature = {
  title: string
  description: string
  icon: typeof IntersectThreeIcon
}

export const filecoinFeatures: FilecoinFeature[] = [
  {
    title: 'AI data storage',
    description:
      "Store AI datasets with cryptographic integrity and global redundancy. Filecoin's programmable storage layer is designed for data-intensive and large-scale data storage.",
    icon: SparkleIcon,
  },
  {
    title: 'Large archival storage',
    description:
      'Archive large datasets, especially datasets that would be good for AI training.',
    icon: StackSimpleIcon,
  },
  {
    title: 'Cross-chain data bridges',
    description:
      'Easily write data bridges that store data from other chains on Filecoin. With native interoperability, Filecoin keeps your data accessible and verifiable.',
    icon: IntersectThreeIcon,
  },
  {
    title: 'Storage-enabled dApps',
    description:
      'Build decentralized, resilient applications with permissionless storage and FVM-powered smart contracts.',
    icon: BridgeIcon,
  },
]
