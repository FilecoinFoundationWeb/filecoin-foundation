import { FILECOIN_URLS } from '@/constants/siteMetadata'

import type { SimpleCardData } from '@/components/SimpleCard'

const CTA_TEXT = 'Learn more'

export const filecoinEarningsInsights: Array<SimpleCardData> = [
  {
    title: 'Earning filecoin and fiat',
    description:
      "Providers are compensated for reliable storage via the network's programmable reward system.",
    cta: {
      href: '#todo',
      text: CTA_TEXT,
    },
  },
  {
    title: 'More storage, more rewards',
    description:
      "Growing your storage capacity unlocks greater block rewards, reflecting your increased contribution to the network's foundation.",
    cta: {
      href: `${FILECOIN_URLS.docs}storage-providers/filecoin-economics/block-rewards#impact-of-storage-capacity-on-block-rewards`,
      text: CTA_TEXT,
    },
  },
  {
    title: 'Recover hardware costs',
    description:
      'Historically, some storage providers have recouped their costs within 30 months, depending on uptime and operational efficiency.',
    cta: {
      href: '#todo',
      text: 'Learn more',
    },
  },
]
