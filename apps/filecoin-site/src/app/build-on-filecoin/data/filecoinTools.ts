import { FILECOIN_URLS } from '@/constants/siteMetadata'

import type { SimpleCardData } from '@/components/SimpleCard'

export type FilecoinTool = SimpleCardData & {
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
}

const CTA_TEXT = 'View documentation'

export const filecoinTools: Array<FilecoinTool> = [
  {
    title: 'ERC-20 Quickstart',
    description:
      'Deploy your first storage-backed smart contract quickly and securely.',
    difficulty: 'Beginner',
    cta: {
      href: `${FILECOIN_URLS.docs}smart-contracts/quickstarts/erc20-quickstart`,
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
    title: 'Cookbook',
    description:
      'Deep-dive technical recipes for advanced architecture and FVM programming patterns.',
    difficulty: 'Advanced',
    cta: {
      href: `${FILECOIN_URLS.docs}builder-cookbook/overview`,
      text: CTA_TEXT,
    },
  },
]
