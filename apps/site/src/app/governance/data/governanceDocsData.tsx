import { ChatCircleDots, GithubLogo } from '@phosphor-icons/react/dist/ssr'

import type { CTAProps } from '@/types/ctaType'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import type { IconProps } from '@/components/Icon'

type GovernanceDocsData = {
  heading: {
    title: string
    icon: IconProps['component']
  }
  description: string
  cta: CTAProps
}

export const governanceDocsData: Array<GovernanceDocsData> = [
  {
    heading: {
      title: 'GovHub',
      icon: ChatCircleDots,
    },
    description:
      'Participate in the governance of the Filecoin network, by contributing to meaningful discussions and vote on critical proposals.',
    cta: {
      href: PATHS.GOVHUB.path,
      text: 'Explore GovHub',
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
      href: FILECOIN_FOUNDATION_URLS.governance.social.github.href,
      text: 'Learn More',
    },
  },
]
