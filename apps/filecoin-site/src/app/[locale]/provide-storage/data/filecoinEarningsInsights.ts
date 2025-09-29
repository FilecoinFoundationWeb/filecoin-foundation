import { FILECOIN_DOCS_URLS } from '@/constants/siteMetadata'

import type { SimpleCardData } from '@/components/SimpleCard'

export const filecoinEarningsInsights = [
  {
    title: 'Earn FIL and Fiat',
    description:
      "Providers are compensated for reliable storage via the network's reward system.",
    cta: {
      href: FILECOIN_DOCS_URLS.storageProviderBlockRewards,
      text: 'See how rewards work',
    },
  },
  {
    title: 'More storage, more rewards',
    description:
      "Growing your storage capacity unlocks greater block rewards, reflecting your increased contribution to the network's foundation.",
    cta: {
      href: FILECOIN_DOCS_URLS.storageProviderBlockRewardsImpact,
      text: 'Learn how storage boosts rewards',
    },
  },
  {
    title: 'Recover hardware costs',
    description:
      'Historically, some storage providers have recouped their costs within 30 months, depending on uptime and operational efficiency.',
    cta: {
      href: FILECOIN_DOCS_URLS.storageProviderReturnOnInvestment,
      text: 'Understand provider ROI',
    },
  },
] as const satisfies Array<SimpleCardData>
