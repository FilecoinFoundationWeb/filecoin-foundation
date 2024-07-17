import { Button } from '@/components/Button'
import { CardGrid } from '@/components/CardGrid'
import { CTASection } from '@/components/CTASection'
import { FocusAreaCard } from '@/components/FocusAreaCard'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'

import { attributes } from '@/content/pages/fil-plus.md'

import { PATHS } from '@/constants/paths'
import { FIL_PLUS_URLS } from '@/constants/siteMetadata'
import { graphicsData } from '@/data/graphicsData'

import { aboutData } from './data/aboutData'
import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = attributes

export const metadata = createMetadata({
  seo,
  path: PATHS.FIL_PLUS.path,
})

export default function FilPlus() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={header.description}
        image={graphicsData.imageFallback}
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
          <Button href="#" variant="primary">
            Learn More About Fil+ Participants
          </Button>
        </div>
      </PageSection>

      <CTASection title="" description="" />
    </PageLayout>
  )
}
