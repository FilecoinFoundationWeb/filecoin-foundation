import {
  BookIcon,
  BracketsCurlyIcon,
  DropIcon,
  PlugIcon,
} from '@phosphor-icons/react/dist/ssr'

import { FILECOIN_DOCS_URL, FILECOIN_DOCS_URLS } from '@/constants/siteMetadata'

import type { LinkCardData } from '@/components/LinkCard'

export const developerResources = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides and tutorials to build on Filecoin.',
    href: FILECOIN_DOCS_URL,
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
    title: 'RPC Endpoints',
    description:
      'Reliable endpoints for connecting your dApps to the Filecoin network.',
    href: FILECOIN_DOCS_URLS.networksMainnetRCPs,
    icon: PlugIcon,
  },
  {
    title: 'Filecoin.sol',
    description:
      'Solidity libraries for seamless integration with the Filecoin Virtual Machine.',
    href: FILECOIN_DOCS_URLS.smartContractDevelopingFilecoinSol,
    icon: BracketsCurlyIcon,
  },
] as const satisfies Array<LinkCardData>
