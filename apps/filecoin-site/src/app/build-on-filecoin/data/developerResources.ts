import {
  DropIcon,
  BracketsCurlyIcon,
  BookIcon,
  PlugIcon,
} from '@phosphor-icons/react/dist/ssr'

import { FILECOIN_URLS } from '@/constants/siteMetadata'

import type { LinkCardData } from '@/components/LinkCard'

export const developerResources: Array<LinkCardData> = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides and tutorials to build on Filecoin.',
    href: FILECOIN_URLS.docs,
    icon: BookIcon,
  },
  {
    title: 'testFIL Faucet',
    description:
      'Instantly access test tokens for development and experimentation.',
    href: 'https://faucet.calibnet.chainsafe-fil.io/',
    icon: DropIcon,
  },
  {
    title: 'Filecoin.sol',
    description:
      'Solidity libraries for integration with the Filecoin Virtual Machine.',
    href: `${FILECOIN_URLS.docs}smart-contracts/developing-contracts/filecoin.sol`,
    icon: BracketsCurlyIcon,
  },
  {
    title: 'RPC Endpoints',
    description:
      'Reliable endpoints for connecting your dApps to the Filecoin network.',
    href: `${FILECOIN_URLS.docs}networks/mainnet/rpcs`,
    icon: PlugIcon,
  },
]
