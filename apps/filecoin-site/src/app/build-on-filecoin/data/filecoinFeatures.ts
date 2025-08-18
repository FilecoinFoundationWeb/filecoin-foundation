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
    title: 'Persistent, verifiable storage',
    description:
      "Your users' data is cryptographically proven to be stored and retrievable.",
    icon: SparkleIcon,
  },
  {
    title: 'Native IPFS integration',
    description: 'Store and retrieve with IPFS-compatible tools.',
    icon: StackSimpleIcon,
  },
  {
    title: 'Scales with your app',
    description: 'From MBs to petabytes, with predictable costs.',
    icon: IntersectThreeIcon,
  },
  {
    title: 'Cross-chain ready',
    description: 'Bridges and SDKs for multi-chain workflows.',
    icon: BridgeIcon,
  },
]
