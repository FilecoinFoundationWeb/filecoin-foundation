import {
  CloudArrowDownIcon,
  CoinsIcon,
  HandshakeIcon,
  ShieldCheckIcon,
  StackIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { CardData } from '@filecoin-foundation/ui-filecoin/Card'

export const howFilecoinWorks = [
  {
    title: 'Storage deals',
    description:
      'When you store data on Filecoin, you make a deal with a provider who commits to hold it for an agreed time and price. To prove they’re doing so correctly, they generate regular cryptographic proofs that are verified on the Filecoin blockchain.',
    icon: HandshakeIcon,
  },
  {
    title: 'Verifiable security',
    description:
      'These proofs — Proof of Replication and Proof of Spacetime — show your data is stored as agreed. If providers fail, they lose collateral, ensuring security and resilience over time.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Retrieval on demand',
    description:
      'When you need your data, you make a retrieval deal with providers who can deliver it quickly. This creates a competitive marketplace that rewards fast, reliable access.',
    icon: CloudArrowDownIcon,
  },
  {
    title: 'Built for scale',
    description:
      'Filecoin’s infrastructure is designed for exabyte-scale datasets and long-term archival. With built-in redundancy and global distribution, it meets the needs of everything from personal storage to cultural archives and large-scale scientific datasets.',
    icon: StackIcon,
  },
  {
    title: 'Powered by incentives',
    description:
      'The Filecoin token (FIL) underpins the network’s economics. Clients pay in FIL to store and retrieve data, while providers earn FIL by offering reliable services and staking collateral that keeps the system accountable.',
    icon: CoinsIcon,
  },
] as const satisfies Array<CardData>
