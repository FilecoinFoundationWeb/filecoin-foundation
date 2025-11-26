import type { SimpleCardData } from '@filecoin-foundation/ui-filecoin/SimpleCard'

import { FILECOIN_DOCS_URLS } from '@/constants/siteMetadata'


export type FilecoinTool = SimpleCardData & {
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
}

const CTA_TEXT = 'View documentation'

export const filecoinTools = [
  {
    title: 'ERC-20 Quickstart',
    description:
      'Deploy your first storage-backed smart contract quickly and securely.',
    difficulty: 'Beginner',
    cta: {
      href: FILECOIN_DOCS_URLS.smartContractFundamentalsErc20,
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
      href: FILECOIN_DOCS_URLS.builderCookbook,
      text: CTA_TEXT,
    },
  },
] as const satisfies Array<FilecoinTool>
