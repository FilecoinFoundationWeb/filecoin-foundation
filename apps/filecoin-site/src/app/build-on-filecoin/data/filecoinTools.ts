import type { SimpleCardProps } from '@/components/SimpleCard'

export type FilecoinTool = Pick<
  SimpleCardProps,
  'title' | 'description' | 'cta' | 'gradient'
> & {
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
}

export const filecoinTools: Array<FilecoinTool> = [
  {
    title: 'ERC-20 Quickstart',
    description:
      'Deploy your first storage-backed smart contract quickly and securely.',
    difficulty: 'Beginner',
    cta: {
      href: '/learn/erc20-quickstart',
      text: 'Learn more',
    },
    gradient: {
      from: 'var(--color-brand-100)',
      to: 'var(--color-brand-300)',
    },
  },
  {
    title: 'FilFrame',
    description: 'React-based template for building FVM frontends fast.',
    difficulty: 'Intermediate',
    cta: {
      href: '/learn/filframe',
      text: 'Learn more',
    },
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
    cta: {
      href: '/learn/cookbooks',
      text: 'Learn more',
    },
    gradient: {
      from: 'var(--color-brand-700)',
      to: 'var(--color-brand-900)',
    },
  },
]
