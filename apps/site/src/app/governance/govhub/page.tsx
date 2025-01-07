import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { getFrontmatter } from '@/utils/getFrontmatter'

import { BaseFrontmatterSchema } from '@/schemas/FrontmatterSchema'

import { AlternatingImageCard } from '@/components/AlternatingImageCard'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { CTAPageSection } from '../components/CTAPageSection'

import { ToolsCardContent } from './components/ToolsCardContent'
import { toolsData } from './data/toolsData'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = getFrontmatter({
  path: PATHS.GOVHUB,
  zodParser: BaseFrontmatterSchema.parse,
})

export const metadata = createMetadata({
  seo: {
    ...seo,
    image: graphicsData.governanceGovHub.data.src,
  },
  path: PATHS.GOVHUB.path,
  overrideDefaultTitle: true,
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

      <CTAPageSection />
    </PageLayout>
  )
}
