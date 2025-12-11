import {
  CloudArrowDownIcon,
  CoinsIcon,
  HandshakeIcon,
  ShieldCheckIcon,
  StackIcon,
} from '@phosphor-icons/react/dist/ssr'

import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink'
import type { CardData } from '@filecoin-foundation/ui-filecoin/Card'

export const howFilecoinWorks = [
  {
    title: 'Storage deals',
    description:
      'The Filecoin economy runs on deals where a client and provider agree on how much data will be stored, for how long, and at what price.',
    icon: HandshakeIcon,
  },
  {
    title: 'Cryptographic proofs',
    description:
      'After the client sends the data, the provider must regularly generate blockchain-verified cryptographic proofs so clients can confirm their data is stored as promised.',
    icon: CloudArrowDownIcon,
  },
  {
    title: 'Verifiable security',
    description: (
      <>
        Filecoin uses two proofs to ensure data integrity:{' '}
        <ExternalTextLink href="https://docs.filecoin.io/basics/the-blockchain/proofs#proof-of-replication-porep">
          Proof of Replication
        </ExternalTextLink>
        , which verifies a provider has stored a unique copy of the data, and{' '}
        <ExternalTextLink href="https://docs.filecoin.io/basics/the-blockchain/proofs#proof-of-spacetime-post">
          Proof of Spacetime
        </ExternalTextLink>
        , which confirms data is continuously stored over time. Providers who
        fail these requirements forfeit collateral.
      </>
    ),
    icon: ShieldCheckIcon,
  },
  {
    title: 'Retrieval on demand',
    description: (
      <>
        With{' '}
        <ExternalTextLink href="https://docs.filecoin.cloud/introduction/about/">
          Filecoin Onchain Cloud
        </ExternalTextLink>
        , retrievals can be automatic, service-based, or integrated directly
        into workflows. They are as verifiable as storage, enabling a
        performance-driven market where speed and quality determine rewards.
      </>
    ),
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
    description: (
      <>
        The{' '}
        <ExternalTextLink href="https://docs.filecoin.io/basics/what-is-filecoin/crypto-economics#native-currency">
          Filecoin token (FIL)
        </ExternalTextLink>
        underpins the network’s economy. Clients pay in FIL to store and
        retrieve data, while providers earn FIL by offering reliable services
        and locking collateral that keeps the system honest and secure.
      </>
    ),
    icon: CoinsIcon,
  },
] as const satisfies Array<CardData>
