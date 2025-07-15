import type { SimpleCardProps } from '@/components/SimpleCard'

type FilecoinTool = {
  title: SimpleCardProps['title']
  description: SimpleCardProps['description']
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  href: SimpleCardProps['cta']['href']
  gradient?: SimpleCardProps['gradient']
}

export const filecoinTools: FilecoinTool[] = [
  {
    title: 'ERC-20 Quickstart',
    description:
      'Deploy your first storage-backed smart contract quickly and securely.',
    difficulty: 'Beginner',
    href: '/learn/erc20-quickstart',
    gradient: {
      from: 'var(--color-brand-100)',
      to: 'var(--color-brand-300)',
    },
  },
  {
    title: 'FilFrame',
    description: 'React-based template for building FVM frontends fast.',
    difficulty: 'Intermediate',
    href: '/learn/filframe',
    gradient: {
      from: 'var(--color-brand-400)',
      to: 'var(--color-brand-600)',
    },
  },
  {
    title: 'Cookbooks',
    description:
      'Deep-dive technical recipes for advanced architecture and FVM programming patterns.',
    difficulty: 'Advanced',
    href: '/learn/cookbooks',
    gradient: {
      from: 'var(--color-brand-700)',
      to: 'var(--color-brand-900)',
    },
  },
] as const
