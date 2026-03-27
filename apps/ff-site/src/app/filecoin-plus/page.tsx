import { CardGrid } from '@filecoin-foundation/ui/CardGrid'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { buildImageSizeProp } from '@filecoin-foundation/utils/buildImageSizeProp'
import { formatDate } from '@filecoin-foundation/utils/dateUtils'
import { getFeaturedPosts } from '@filecoin-foundation/utils/getFeaturedPosts'

import { PATHS } from '@/constants/paths'
import { FIL_PLUS_URLS } from '@/constants/siteMetadata'

import { attributes } from '@/content/pages/filecoin-plus/filecoin-plus.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { BadgeCardGrid } from '@/components/BadgeCardGrid'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
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
import { getMonthlyUpdatesData } from './monthly-updates/utils/getMonthlyUpdateData'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = PageFrontmatterSchema.parse(attributes)

export default async function FilPlus() {
  const latestUpdates = getFeaturedPosts({
    posts: await getMonthlyUpdatesData(),
    limit: 4,
  })

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
              href: FIL_PLUS_URLS.dataCap.applicationDocs,
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
          href={FIL_PLUS_URLS.dataCap.metrics}
        >
          View Fil+ Dashboard
        </Button>
      </PageSection>

      <FaqSection />

      {latestUpdates.length > 0 && (
        <PageSection
          kicker="Stay Updated"
          title="Monthly Updates"
          description="The latest updates and announcements from the Filecoin Plus program."
        >
          <CardGrid as="section" cols="smTwo">
            {latestUpdates.map(
              ({ slug, title, description, image, publishedOn }) => (
                <Card
                  key={slug}
                  as="article"
                  metaData={[formatDate(publishedOn)]}
                  description={{ text: description, isClamped: true }}
                  cta={{
                    href: `${PATHS.FIL_PLUS_MONTHLY_UPDATES.path}/${slug}`,
                    text: 'Read Update',
                  }}
                  image={{
                    ...(image || graphicsData.imageFallback.data),
                    alt: '',
                    objectFit: 'cover',
                    sizes: buildImageSizeProp({
                      startSize: '100vw',
                      sm: '350px',
                      md: '480px',
                    }),
                  }}
                  title={{
                    text: title,
                  }}
                />
              ),
            )}
          </CardGrid>

          <Button
            className="sm:self-center"
            href={PATHS.FIL_PLUS_MONTHLY_UPDATES.path}
          >
            View All
          </Button>
        </PageSection>
      )}

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
