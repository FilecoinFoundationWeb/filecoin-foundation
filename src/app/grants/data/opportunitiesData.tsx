import { Megaphone, Coins, Coin } from '@phosphor-icons/react/dist/ssr'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

export const opportunitiesData = [
  {
    title: 'Open Grants',
    description:
      "Open Grants support projects that drive the Filecoin ecosystem forward, including projects that enhance the network's utility or improve Filecoin functionality. Refer to GitHub for more details.",
    icon: Coins,
    cta: {
      href: FILECOIN_FOUNDATION_URLS.grants.documents.openGrants,
      text: 'Learn More',
    },
  },
  {
    title: 'Documentation Grants',
    description:
      'Grants are available to support the creation of new resources related to the Filecoin network or the improvement of existing documentation. Refer to GitHub for more details.',
    icon: Coin,
    cta: {
      href: FILECOIN_FOUNDATION_URLS.grants.documents.documentationGrants,
      text: 'Learn More',
    },
  },
  {
    title: 'Requests for Proposals',
    description:
      'Request for Proposals (RFP) grants have clearly scoped deliverables, milestones, and funding limits. Refer to GitHub for any ongoing RFPs.',
    icon: Megaphone,
    cta: {
      href: FILECOIN_FOUNDATION_URLS.grants.documents.requestsForProposals,
      text: 'Learn More',
    },
  },
]
