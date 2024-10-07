import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { attributes } from '@/content/pages/governance/govhub.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { CTASection } from '@/components/CTASection'
import { Heading } from '@/components/Heading'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { SplitContentCard } from '@/components/SplitContentCard'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = attributes

export const metadata = createMetadata({
  seo: {
    ...seo,
    image: graphicsData.governance2.data.src,
  },
  path: PATHS.GOVHUB.path,
})

export default function GovHub() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={header.description}
        image={graphicsData.governance2}
      />

      <PageSection kicker="Tools" title="Explore Our Governance Tools">
        <SplitContentCard image={graphicsData.imageFallback} index={0}>
          <div className="space-y-6">
            <div>
              <Heading tag="h3" variant="lg">
                PowerVote
              </Heading>
              <p className="mb-6 mt-3">
                PowerVote is an on-chain voting tool that allows the Filecoin
                community to vote on Filecoin Improvement Proposals (FIPs).
              </p>
              <Heading tag="h4" variant="md">
                Purpose
              </Heading>
              <p className="mt-3">
                Facilitate transparent and secure voting on final-stage FIPs.
              </p>
            </div>
            <TextLink href={FILECOIN_FOUNDATION_URLS.governance.powerVote.href}>
              Explore PowerVote
            </TextLink>
          </div>
        </SplitContentCard>
        <SplitContentCard image={graphicsData.imageFallback} index={1}>
          <div className="space-y-6">
            <div>
              <Heading tag="h3" variant="lg">
                Fil Poll
              </Heading>
              <p>
                Fil Poll is a dynamic discussion and sentiment analysis tool
                integrated with GitHub, designed to engage the community and
                track FIPs through their governance journey. In the coming
                months, a FIPs tracking feature would be deployed on Fil Poll,
                it will visualize community proposals and their statuses.
              </p>
              <Heading tag="h4" variant="md">
                Purpose
              </Heading>
              <ul>
                <li>
                  Engages the Community: Fil Poll allows community members to
                  share their opinions on early-stage FIPs and other important
                  topics through simple polls.
                </li>
                <li>
                  Tracks Proposals: The tool includes a tracker that shows how
                  FIPs are moving through different stages of the governance
                  process, making it easy to see their status at a glance.
                </li>
              </ul>
            </div>
            <TextLink href={FILECOIN_FOUNDATION_URLS.governance.filPoll.href}>
              Explore Fil Poll
            </TextLink>
          </div>
        </SplitContentCard>
      </PageSection>

      <CTASection
        title="Connect With Us"
        description={
          <>
            To get involved, visit the{' '}
            <TextLink
              href={FILECOIN_FOUNDATION_URLS.governance.social.github.href}
            >
              Governance GitHub
            </TextLink>
            , join the conversation in the{' '}
            <TextLink
              href={FILECOIN_FOUNDATION_URLS.governance.social.slack.href}
            >
              #fil-gov Slack channel
            </TextLink>
            , or follow
            <TextLink
              href={FILECOIN_FOUNDATION_URLS.governance.social.twitter.href}
            >
              @fil_gov on X
            </TextLink>
            .
          </>
        }
      />
    </PageLayout>
  )
}
