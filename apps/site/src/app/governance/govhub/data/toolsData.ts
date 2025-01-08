import type { CTAProps } from '@/types/ctaType'
import type { StaticImageProps } from '@/types/imageType'

import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

type ToolsData = {
  cta: CTAProps,
  description: string
  image: StaticImageProps,
  purposeList: Array<string>,
  title: string
}

export const toolsData: Array<ToolsData> = [
  {
    title: 'PowerVote',
    description:
      'PowerVote is an on-chain voting tool that allows the Filecoin community to vote on Filecoin Improvement Proposals (FIPs).',
    purposeList: [
      'Facilitates transparent and secure voting on eligible FIPs.',
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
      'Fil Poll is a dynamic discussion and crowdsourced sentiment analysis tool integrated with GitHub designed to engage the community and track FIPs through their governance journey. Additional features enabling visualization of FIP progress, status, and timeline will be deployed soon.',
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
