import { FILECOIN_URLS } from '@/constants/siteMetadata'

import type { SimpleCardData } from '@/components/SimpleCard'

const CTA_TEXT = 'Learn more'

export const filecoinEarningsInsights: Array<SimpleCardData> = [
  {
    title: 'Earn rewards',
    description:
      "Providers are compensated for reliable storage via the Filecoin network's reward system.",
    cta: {
      href: `${FILECOIN_URLS.docs}storage-providers/filecoin-economics/block-rewards#block-rewards`,
      text: CTA_TEXT,
    },
  },
  {
    title: 'More storage, more rewards',
    description:
      'Growing your storage capacity unlocks greater block rewards, reflecting your increased contribution to the network’s foundation.',
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
      href: `${FILECOIN_URLS.docs}storage-providers/filecoin-economics/block-rewards#block-rewards`,
      text: 'Learn more',
    },
  },
]
