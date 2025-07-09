import {
  DropIcon,
  BracketsCurly,
  BookIcon,
  PlugIcon,
} from '@phosphor-icons/react/dist/ssr'

type FilecoinFeature = {
  title: string
  description: string
  icon: typeof DropIcon
}

export const developerResources: FilecoinFeature[] = [
  {
    title: 'testFIL Faucet',
    description:
      'Instantly access test tokens for development and experimentation.',
    icon: DropIcon,
  },
  {
    title: 'Filecoin.sol',
    description:
      'Solidity libraries for integration with the Filecoin Virtual Machine.',
    icon: BracketsCurly,
  },
  {
    title: 'RPC Endpoints',
    description:
      'Reliable endpoints for connecting your dApps to the Filecoin network.',
    icon: PlugIcon,
  },
  {
    title: 'Documentation',
    description: 'Comprehensive guides and tutorials to build on Filecoin.',
    icon: BookIcon,
  },
] as const
