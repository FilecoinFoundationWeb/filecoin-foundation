import { PATHS } from '@/constants/paths'
import { FIL_PLUS_URLS } from '@/constants/siteMetadata'

import { attributes as allocatorsAttributes } from '@/content/pages/filecoin-plus/allocators.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { extractDomain } from '@/utils/extractDomain'
import { getFrontmatter } from '@/utils/getFrontmatter'

import { BaseFrontmatterSchema } from '@/schemas/FrontmatterSchema'

import { Badge } from '@/components/Badge'
import { BadgeCardGrid } from '@/components/BadgeCardGrid'
import { Button } from '@/components/Button'
import { CardGrid } from '@/components/CardGrid'
import { CardWithBadge } from '@/components/CardWithBadge'
import { CTASection } from '@/components/CTASection'
import { FocusAreaCard } from '@/components/FocusAreaCard'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'
import { TextLink } from '@/components/TextLink'

import { aboutData } from './data/aboutData'
import { applicationData } from './data/applicationData'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = getFrontmatter({
  path: PATHS.FIL_PLUS,
  zodParser: BaseFrontmatterSchema.parse,
})

export const metadata = createMetadata({
  seo: {
    ...seo,
    image: graphicsData.filPlus.data.src,
  },
  path: PATHS.FIL_PLUS.path,
})

export default function FilPlus() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={header.description}
        image={graphicsData.filPlus}
        cta={{
          href: FIL_PLUS_URLS.documentation,
          text: 'Learn More About Fil+',
        }}
      />

      <PageSection kicker="About" title="How Fil+ Works">
        <CardGrid cols="lgThree">
          {aboutData.map((data) => (
            <FocusAreaCard key={data.title} {...data} />
          ))}
        </CardGrid>

        <div className="mt-2 flex flex-col sm:flex-row sm:justify-center">
          <Button href={FIL_PLUS_URLS.filPlusParticipants}>
            Learn More About Fil+ Participants
          </Button>
        </div>
      </PageSection>

      <PageSection
        kicker="Allocators"
        title={allocatorsAttributes.header.title}
        description={allocatorsAttributes.header.description}
        image={graphicsData.filPlusAllocators}
        cta={{
          href: PATHS.ALLOCATORS.path,
          text: 'Allocators List',
        }}
      />

      <PageSection kicker="Allocator Application" title="Become an Allocator">
        <p className="mb-2 max-w-readable">
          An allocator’s primary responsibilities include allocating DataCap,
          ensuring trust and compliance, and participating in community
          governance. For a full list of instructions on how to become an
          allocator, please visit{' '}
          <TextLink href={FIL_PLUS_URLS.allocators.blog}>
            {extractDomain(FIL_PLUS_URLS.allocators.blog)}
          </TextLink>
          . We are currently prioritizing new allocators that are developing
          pathways according to our{' '}
          <TextLink href={FIL_PLUS_URLS.allocators.rfa}>
            Request for Allocators (RFA)
          </TextLink>
          .
        </p>

        <BadgeCardGrid cols="smThree">
          {applicationData.map((item) => {
            const { step, title, description } = item

            return (
              <CardWithBadge key={step} title={title} description={description}>
                <Badge number={step} />
              </CardWithBadge>
            )
          })}
        </BadgeCardGrid>
      </PageSection>

      <CTASection
        title="Explore DataCap Projects"
        description="Discover the projects that apply for and receive DataCap, review the details of their applications, and find out who the allocators are."
        cta={{
          text: 'DataCap Metrics for Allocators',
          href: FIL_PLUS_URLS.dataCapMetrics,
        }}
      />
    </PageLayout>
  )
}
