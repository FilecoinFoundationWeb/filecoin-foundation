import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { attributes } from '@/content/pages/security/maturity-model.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { Badge } from '@/components/Badge'
import { BadgeCardGrid } from '@/components/BadgeCardGrid'
import { CardWithBadge } from '@/components/CardWithBadge'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { CoreFunctions } from './components/CoreFunctions'
import { DesktopTableOfContents } from './components/DesktopTableOfContents'
import { DesktopTableOfContentsWrapper } from './components/DesktopTableOfContentsWrapper'
import { MobileTableOfContents } from './components/MobileTableOfContents'
import { MobileTableOfContentsWrapper } from './components/MobileTableOfContentsWrapper'
import { applicationAndUseData } from './data/applicationAndUseData'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = PageFrontmatterSchema.parse(attributes)

export default function MaturityModel() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={{ text: header.description }}
        image={graphicsData.security5}
      />

      <PageSection
        kicker="Tailored Security Maturity"
        title="How to Leverage the Model"
        description={[
          'The Web3 Security Maturity Model is broken up into 9 core functions. Each core function is divided into functional areas that are broken into two streams with control criteria.',
          'This maturity framework does not require all organizations to achieve the maximum maturity level in every category. Instead, it allows organizations to define and measure their security activities in a way that is tailored to their specific needs, and it encourages organizations, projects, and users to adapt the framework based on their unique environment, goals, and existing security maturity.',
        ]}
      >
        <BadgeCardGrid cols="smThree">
          {applicationAndUseData.map((item) => {
            const { step, title, description } = item

            return (
              <CardWithBadge key={step} title={title} description={description}>
                <Badge number={step} />
              </CardWithBadge>
            )
          })}
        </BadgeCardGrid>
      </PageSection>

      <PageSection
        kicker="Building Blocks of Security"
        title="Explore the Core Functions"
      >
        <div className="flex flex-col gap-8 lg:relative lg:flex-row lg:items-start lg:gap-12">
          <div className="grow">
            <CoreFunctions />
          </div>
          <DesktopTableOfContentsWrapper>
            <DesktopTableOfContents />
          </DesktopTableOfContentsWrapper>
          <MobileTableOfContentsWrapper>
            <MobileTableOfContents />
          </MobileTableOfContentsWrapper>
        </div>
      </PageSection>
    </PageLayout>
  )
}

export const metadata = createMetadata({
  title: seo.title,
  description: seo.description,
  image: graphicsData.security5.data.src,
  path: PATHS.MATURITY_MODEL.path,
})
