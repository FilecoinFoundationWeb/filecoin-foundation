import type { IconProps } from '@filecoin-foundation/ui/Icon'
import type { CTAProps } from '@filecoin-foundation/utils/types/ctaType'
import { GithubLogo } from '@phosphor-icons/react/dist/ssr'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

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
