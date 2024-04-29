import { GithubLogo, File } from '@phosphor-icons/react/dist/ssr'

import { PATHS } from '@/_constants/paths'

export const governanceDocs = [
  {
    heading: {
      title: 'GovDocs',
      icon: File,
    },
    description:
      'Discover the fundamentals of Filecoin network governance and how the community drives the evolution of the network.',
    cta: {
      href: PATHS.ECOSYSTEM.path,
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
      href: 'https://docs.filecoin.io',
      text: 'Learn More',
    },
  },
]
