import type { SimpleCardData } from '@filecoin-foundation/ui-filecoin/SimpleCard'

import { FILECOIN_DOCS_URLS } from '@/constants/siteMetadata'

export type NetworkUpgrades = SimpleCardData & {
  difficulty: 'Current upgrade' | 'Upcoming upgrade'
}

// TODO: Add actual data
export const networkUpgrades = [
  {
    title: 'Lorem ipsum',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    difficulty: 'Current upgrade',
    cta: {
      href: FILECOIN_DOCS_URLS.basicsWhatIsFilecoin,
      text: 'Learn more',
    },
  },
  {
    title: 'Lorem ipsum',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    difficulty: 'Upcoming upgrade',
    cta: {
      href: 'https://github.com/FIL-Builders/fil-frame',
      text: 'Learn more',
    },
  },
] as const satisfies Array<NetworkUpgrades>
