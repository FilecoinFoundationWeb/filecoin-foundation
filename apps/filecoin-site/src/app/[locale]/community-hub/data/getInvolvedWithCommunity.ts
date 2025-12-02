import type { SimpleCardData } from '@filecoin-foundation/ui-filecoin/SimpleCard'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'


export const getInvolvedWithCommunity = [
  {
    title: 'Events & meetups',
    description: 'Attend upcoming hackathons, summits, and meetups.',
    cta: {
      href: FILECOIN_FOUNDATION_URLS.events.href,
      text: 'Explore future events',
    },
  },
  {
    title: 'Orbit Ambassadors',
    description:
      'Advocate for Filecoin, host events, and grow the ecosystem around the world.',
    cta: {
      href: FILECOIN_FOUNDATION_URLS.orbit.href,
      text: 'Learn more about Orbit',
    },
  },
  {
    title: 'Community calls',
    description:
      'Join recurring community calls to hear updates, meet contributors and start contributing.',
    cta: {
      href: '#todo',
      text: 'Join community calls',
    },
  },
] as const satisfies Array<SimpleCardData>
