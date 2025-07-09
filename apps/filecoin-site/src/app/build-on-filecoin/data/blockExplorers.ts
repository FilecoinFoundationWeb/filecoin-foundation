type BlockExplorer = {
  name: string
  description: string
  href: string
}

export const blockExplorers: BlockExplorer[] = [
  {
    name: 'Filfox',
    description:
      'Popular explorer for viewing messages, addresses, and network stats.',
    href: 'https://filfox.info/',
  },
  {
    name: 'Beryx',
    description:
      'A real-time explorer built for developers, featuring FEVM insights.',
    href: 'https://beryx.xyz/',
  },
  {
    name: 'Blockscout (FEVM)',
    description: 'EVM-compatible explorer to view smart contracts activity.',
    href: 'https://filecoin.blockscout.com/',
  },
  {
    name: 'Filscan',
    description: 'Overview of storage deals, messages, and chain activity.',
    href: 'https://filscan.io/',
  },
  {
    name: 'Filutils',
    description:
      'A feature-rich tool for querying actors and accessing onchain data.',
    href: 'https://filutils.com/',
  },
] as const
