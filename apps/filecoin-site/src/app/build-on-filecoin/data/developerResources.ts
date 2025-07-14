import {
  DropIcon,
  BracketsCurlyIcon,
  BookIcon,
  PlugIcon,
} from '@phosphor-icons/react/dist/ssr'

import type { LinkCardData } from '@/components/LinkCard'

export const developerResources: LinkCardData[] = [
  {
    title: 'testFIL Faucet',
    description:
      'Instantly access test tokens for development and experimentation.',
    href: '#',
    icon: DropIcon,
  },
  {
    title: 'Filecoin.sol',
    description:
      'Solidity libraries for integration with the Filecoin Virtual Machine.',
    href: 'https://docs.filecoin.io/smart-contracts/developing-contracts/filecoin.sol',
    icon: BracketsCurlyIcon,
  },
  {
    title: 'RPC Endpoints',
    description:
      'Reliable endpoints for connecting your dApps to the Filecoin network.',
    href: 'https://docs.filecoin.io/networks/calibration/rpcs',
    icon: PlugIcon,
  },
  {
    title: 'Documentation',
    description: 'Comprehensive guides and tutorials to build on Filecoin.',
    href: 'https://docs.filecoin.io/',
    icon: BookIcon,
  },
] as const
