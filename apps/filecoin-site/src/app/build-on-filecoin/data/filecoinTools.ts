import type { SimpleCardData } from '@/components/SimpleCard'

export type FilecoinTool = SimpleCardData & {
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
}

const CTA_TEXT = 'Learn more'

export const filecoinTools: Array<FilecoinTool> = [
  {
    title: 'ERC-20 Quickstart',
    description:
      'Deploy your first storage-backed smart contract quickly and securely.',
    difficulty: 'Beginner',
    cta: {
      href: '#todo',
      text: CTA_TEXT,
    },
  },
  {
    title: 'FilFrame',
    description: 'React-based template for building FVM frontends fast.',
    difficulty: 'Intermediate',
    cta: {
      href: 'https://github.com/FIL-Builders/fil-frame',
      text: CTA_TEXT,
    },
  },
  {
    title: 'Cookbooks',
    description:
      'Deep-dive technical recipes for advanced architecture and FVM programming patterns.',
    difficulty: 'Advanced',
    cta: {
      href: '#todo',
      text: CTA_TEXT,
    },
  },
]
