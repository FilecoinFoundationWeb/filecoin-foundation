import { GithubLogo } from '@phosphor-icons/react/dist/ssr'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

export const governanceDocsData = [
  {
    heading: {
      title: 'Governance GitHub',
      icon: GithubLogo,
    },
    description:
      'Deep dive into the Filecoin Improvement Proposal (FIP) process, including proposals, discussions, and technical documentation.',
    cta: {
      href: FILECOIN_FOUNDATION_URLS.governance.social.github.href,
      text: 'Learn More',
    },
  },
]
