import {
  CpuIcon,
  GaugeIcon,
  HandshakeIcon,
  LockKeyIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { CardData } from '@filecoin-foundation/ui-filecoin/Card'

export const scalingOperations = [
  {
    title: 'Dedicated sealing hardware (CPU/GPU)',
    description:
      'High-performance machines designed to handle sealing workloads reliably and at scale.',
    icon: CpuIcon,
  },
  {
    title: 'High-performance storage pipelines',
    description:
      'Optimized data paths that maintain consistent throughput and stable thermal performance.',
    icon: GaugeIcon,
  },
  {
    title: 'Distributed sealing systems',
    description:
      'Run parallelized sealing workflows with networked workers and production-grade tooling.',
    icon: LockKeyIcon,
  },
  {
    title: 'Deep support from Filecoin solution architects',
    description:
      'Get expert guidance on architecture, scaling strategy, and best practices for large deployments.',
    icon: HandshakeIcon,
  },
] as const satisfies Array<CardData>
