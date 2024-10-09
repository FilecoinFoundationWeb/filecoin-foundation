import type { CTAProps } from '@/types/sharedProps/ctaType'
import type { StaticImageProps } from '@/types/sharedProps/imageType'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

type ToolsData = {
  title: string
  description: string
  purposeList: Array<string>
  cta: CTAProps
  image: StaticImageProps
}

export const toolsData: Array<ToolsData> = [
  {
    title: 'PowerVote',
    description:
      'PowerVote is an on-chain voting tool that allows the Filecoin community to vote on Filecoin Improvement Proposals (FIPs).',
    purposeList: [
      'Facilitate transparent and secure voting on final-stage FIPs.',
    ],
    cta: {
      href: FILECOIN_FOUNDATION_URLS.governance.powerVote.href,
      text: `Explore ${FILECOIN_FOUNDATION_URLS.governance.powerVote.label}`,
    },
    image: graphicsData.governancePowerVote,
  },
  {
    title: 'Fil Poll',
    description:
      'Fil Poll is a dynamic discussion and sentiment analysis tool integrated with GitHub, designed to engage the community and track FIPs through their governance journey. In the coming months, a FIPs tracking feature would be deployed on Fil Poll, it will visualize community proposals and their statuses.',
    purposeList: [
      'Engages the Community: Fil Poll allows community members to share their opinions on early-stage FIPs and other important topics through simple polls.',
      'Tracks Proposals: The tool includes a tracker that shows how FIPs are moving through different stages of the governance process, making it easy to see their status at a glance.',
    ],
    cta: {
      href: FILECOIN_FOUNDATION_URLS.governance.filPoll.href,
      text: `Explore ${FILECOIN_FOUNDATION_URLS.governance.filPoll.label}`,
    },
    image: graphicsData.governanceFilPoll,
  },
]
