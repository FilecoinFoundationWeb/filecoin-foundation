type FilecoinTool = {
  title: string
  description: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  href: string
}

export const filecoinTools: FilecoinTool[] = [
  {
    title: 'ERC-20 Quickstart',
    description:
      'Deploy your first storage-backed smart contract quickly and securely.',
    difficulty: 'Beginner',
    href: '/learn/erc20-quickstart',
  },
  {
    title: 'FilFrame',
    description: 'React-based template for building FVM frontends fast.',
    difficulty: 'Intermediate',
    href: '/learn/filframe',
  },
  {
    title: 'Cookbooks',
    description:
      'Deep-dive technical recipes for advanced architecture and FVM programming patterns.',
    difficulty: 'Advanced',
    href: '/learn/cookbooks',
  },
] as const
