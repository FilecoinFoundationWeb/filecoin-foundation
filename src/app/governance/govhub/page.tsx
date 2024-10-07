import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { attributes } from '@/content/pages/governance/govhub.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { SplitContentCard } from '@/components/SplitContentCard'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { ToolsCardContent } from './components/ToolsCardContent'
import { toolsData } from './data/ToolsData'
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
        {toolsData.map((tool, index) => (
          <SplitContentCard key={index} image={tool.image} index={index}>
            <ToolsCardContent
              title={tool.title}
              description={tool.description}
              purposeList={tool.purposeList}
              cta={tool.cta}
            />
          </SplitContentCard>
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
