import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { attributes } from '@/content/pages/governance/govhub.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { AlternatingImageCard } from '@/components/AlternatingImageCard'
import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { ToolsCardContent } from './components/ToolsCardContent'
import { toolsData } from './data/toolsData'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = attributes

export const metadata = createMetadata({
  seo: {
    ...seo,
    image: graphicsData.governanceGovHub.data.src,
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
        image={graphicsData.governanceGovHub}
        cta={[
          {
            href: FILECOIN_FOUNDATION_URLS.governance.powerVote.href,
            text: `Explore ${FILECOIN_FOUNDATION_URLS.governance.powerVote.label}`,
          },
          {
            href: FILECOIN_FOUNDATION_URLS.governance.filPoll.href,
            text: `Explore ${FILECOIN_FOUNDATION_URLS.governance.filPoll.label}`,
          },
        ]}
      />

      <PageSection kicker="Tools" title="Explore Our Governance Tools">
        {toolsData.map((tool, index) => (
          <AlternatingImageCard key={index} image={tool.image} index={index}>
            <ToolsCardContent
              title={tool.title}
              description={tool.description}
              listItems={tool.purposeList}
              cta={tool.cta}
            />
          </AlternatingImageCard>
        ))}
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
