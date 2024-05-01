import { GithubLogo, File } from '@phosphor-icons/react/dist/ssr'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

export const governanceDocsData = [
  {
    heading: {
      title: 'GovDocs',
      icon: File,
    },
    description:
      'Discover the fundamentals of Filecoin network governance and how the community drives the evolution of the network.',
    cta: {
      href: FILECOIN_FOUNDATION_URLS.social.github.href,
      text: 'Learn More',
    },
  },
  {
    heading: {
      title: 'Governance GitHub',
      icon: GithubLogo,
    },
    description:
      'Deep dive into the Filecoin Improvement Proposal (FIP) process, including proposals, discussions, and technical documentation.',
    cta: {
      href: FILECOIN_FOUNDATION_URLS.social.github.href,
      text: 'Learn More',
    },
  },
]
