type CommunityHub = {
  name: string
  description: string
  href: string
  //   logo: string
}

export const communityHubs: CommunityHub[] = [
  {
    name: 'Filecoin Foundation',
    description: 'Network governance.',
    href: 'https://fil.org/',
  },
  {
    name: 'FIDL',
    description: 'Research and protocol design.',
    href: 'https://fidl.network/',
  },
  {
    name: 'FilOz',
    description: 'Core software development.',
    href: 'https://filoz.dev/',
  },
  {
    name: 'Fil-B',
    description: 'Builder community and education.',
    href: 'https://fil-b.dev/',
  },
  {
    name: 'ANSA',
    description: 'Applied research and investor relations.',
    href: 'https://ansa.network/',
  },
] as const
