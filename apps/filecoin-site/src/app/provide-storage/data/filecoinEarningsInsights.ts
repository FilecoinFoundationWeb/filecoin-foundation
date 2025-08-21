import { FILECOIN_DOCS_URLS } from '@/constants/siteMetadata'

import type { SimpleCardData } from '@/components/SimpleCard'

const CTA_TEXT = 'Learn more'

export const filecoinEarningsInsights: Array<SimpleCardData> = [
  {
    title: 'Earn Filecoin and Fiat',
    description:
      "Providers are compensated for reliable storage via the network's reward system.",
    cta: {
      href: FILECOIN_DOCS_URLS.storageProviderBlockRewards,
      text: CTA_TEXT,
    },
  },
  {
    title: 'More storage, more rewards',
    description:
      "Growing your storage capacity unlocks greater block rewards, reflecting your increased contribution to the network's foundation.",
    cta: {
      href: FILECOIN_DOCS_URLS.storageProviderBlockRewardsImpact,
      text: CTA_TEXT,
    },
  },
  {
    title: 'Recover hardware costs',
    description:
      'Historically, some storage providers have recouped their costs within 30 months, depending on uptime and operational efficiency.',
    cta: {
      href: FILECOIN_DOCS_URLS.storageProviderReturnOnInvestment,
      text: CTA_TEXT,
    },
  },
]
