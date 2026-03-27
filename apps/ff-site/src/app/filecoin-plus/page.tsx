import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'
import { FIL_PLUS_URLS } from '@/constants/siteMetadata'

import { attributes as allocatorsAttributes } from '@/content/pages/filecoin-plus/allocators.md'
import { attributes } from '@/content/pages/filecoin-plus/filecoin-plus.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { BadgeCardGrid } from '@/components/BadgeCardGrid'
import { Button } from '@/components/Button'
import { CTAButtonGroup } from '@/components/CTAButtonGroup'
import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageSection } from '@/components/PageSection'
import { BasicStatisticCard } from '@/components/StatisticCard/BasicStatisticCard'

import { AboutCard } from './components/AboutCard'
import { FaqSection } from './components/FaqSection'
import { ImpactCard } from './components/ImpactCard'
import { aboutData } from './data/aboutData'
import { impactData } from './data/impactData'
import { statisticsData } from './data/statisticsData'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = PageFrontmatterSchema.parse(attributes)

export default function FilPlus() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={{ text: header.description }}
        image={graphicsData.filPlus}
      >
        <CTAButtonGroup
          cta={[
            {
              href: FIL_PLUS_URLS.dataCapApplication,
              text: 'Apply for DataCap',
            },
            {
              href: FIL_PLUS_URLS.documentation,
              text: 'Learn More About Filecoin Plus',
            },
          ]}
        />
      </PageHeader>

      <PageSection kicker="How It Works" title="The Filecoin Plus Process">
        <BadgeCardGrid cols="smThree">
          {aboutData.map((item) => (
            <AboutCard key={item.step} {...item} />
          ))}
        </BadgeCardGrid>
      </PageSection>

      <PageSection kicker="Impact" title="Impact of Fil+">
        {impactData.map((item, index) => (
          <ImpactCard key={index} index={index} {...item} />
        ))}
      </PageSection>

      <PageSection kicker="Metrics" title="Fil+ by the Numbers">
        <CardGrid as="ul" cols="smThree">
          {statisticsData.map((statistic, index) => (
            <BasicStatisticCard key={index} {...statistic} />
          ))}
        </CardGrid>

        <Button
          variant="ghost"
          className="sm:self-center"
          href={FIL_PLUS_URLS.dataCapMetrics}
        >
          View Fil+ Dashboard
        </Button>
      </PageSection>

      <FaqSection />

      <CTASection
        title="Get Started"
        description="Find the right Allocator to support your storage needs or learn more about Filecoin Plus."
        cta={[
          { text: 'Find an Allocator', href: PATHS.ALLOCATORS.path },
          { text: 'Learn More', href: FIL_PLUS_URLS.documentation },
        ]}
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
