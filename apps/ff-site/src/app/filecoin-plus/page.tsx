import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { ExternalTextLink } from '@filecoin-foundation/ui/TextLink/ExternalTextLink'

import { PATHS } from '@/constants/paths'
import { FIL_PLUS_URLS } from '@/constants/siteMetadata'

import { attributes as allocatorsAttributes } from '@/content/pages/filecoin-plus/allocators.md'
import { attributes } from '@/content/pages/filecoin-plus/filecoin-plus.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { extractDomain } from '@/utils/extractDomain'

import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { Badge } from '@/components/Badge'
import { BadgeCardGrid } from '@/components/BadgeCardGrid'
import { Button } from '@/components/Button'
import { CardWithBadge } from '@/components/CardWithBadge'
import { CTASection } from '@/components/CTASection'
import { FocusAreaCard } from '@/components/FocusAreaCard'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'

import { aboutData } from './data/aboutData'
import { applicationData } from './data/applicationData'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = PageFrontmatterSchema.parse(attributes)
const { header: allocatorsHeader } =
  PageFrontmatterSchema.parse(allocatorsAttributes)

export default function FilPlus() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={{ text: header.description }}
        image={graphicsData.filPlus}
      >
        <Button href={FIL_PLUS_URLS.documentation}>
          Learn More About Fil+
        </Button>
      </PageHeader>

      <PageSection kicker="About" title="How Fil+ Works">
        <CardGrid as="ul" cols="lgThree">
          {aboutData.map((data) => (
            <FocusAreaCard key={data.title} {...data} />
          ))}
        </CardGrid>

        <Button
          className="sm:self-center"
          href={FIL_PLUS_URLS.filPlusParticipants}
        >
          Learn More About Fil+ Participants
        </Button>
      </PageSection>

      <PageSection
        kicker="Allocators"
        title={allocatorsHeader.title}
        description={allocatorsHeader.description}
        image={graphicsData.filPlusAllocators}
        cta={{
          href: PATHS.ALLOCATORS.path,
          text: 'Allocators List',
        }}
      />

      <PageSection kicker="Allocator Application" title="Become an Allocator">
        <p className="max-w-readable mb-2">
          An allocator’s primary responsibilities include allocating DataCap,
          ensuring trust and compliance, and participating in community
          governance. For a full list of instructions on how to become an
          allocator, please visit{' '}
          <ExternalTextLink href={FIL_PLUS_URLS.allocators.blog}>
            {extractDomain(FIL_PLUS_URLS.allocators.blog)}
          </ExternalTextLink>
          . We are currently prioritizing new allocators that are developing
          pathways according to our{' '}
          <ExternalTextLink href={FIL_PLUS_URLS.allocators.rfa}>
            Request for Allocators (RFA)
          </ExternalTextLink>
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

export const metadata = createMetadata({
  title: seo.title,
  description: seo.description,
  image: graphicsData.filPlus.data.src,
  path: PATHS.FIL_PLUS.path,
})
