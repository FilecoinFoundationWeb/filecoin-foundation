import {
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
    title: 'AI data storage & processing',
    description:
      'Store and process large-scale AI datasets with cryptographic integrity and global redundancy. Filecoin’s programmable storage layer is designed for data-intensive, high-performance applications.',
    icon: SparkleIcon,
  },
  {
    title: 'Cross-chain data bridges',
    description:
      'Seamlessly bridge and store data across leading blockchain ecosystems. With native interoperability, Filecoin keeps your data accessible, verifiable, and censorship-resistant—no matter where your application operates.',
    icon: IntersectThreeIcon,
  },
  {
    title: 'Storage-enabled dApps',
    description:
      'Build decentralized, resilient applications with permissionless storage and FVM-powered smart contracts. Filecoin empowers developers to create dApps that are verifiable by default and resilient by design.',
    icon: StackSimpleIcon,
  },
] as const
