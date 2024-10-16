import dynamic from 'next/dynamic'

import { PATHS } from '@/constants/paths'

import { attributes } from '@/content/pages/maturity-model.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { Badge } from '@/components/Badge'
import { BadgeCardGrid } from '@/components/BadgeCardGrid'
import { CardWithBadge } from '@/components/CardWithBadge'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { CoreFunctions } from './components/CoreFunctions'
import { applicationAndUseData } from './data/applicationAndUseData'
import { generateStructuredData } from './utils/generateStructuredData'

const DesktopTableOfContents = dynamic(
  () =>
    import('./components/TableOfContents').then(
      (module) => module.DesktopTableOfContents,
    ),
  { ssr: false },
)

const MobileTableOfContents = dynamic(
  () =>
    import('./components/TableOfContents').then(
      (module) => module.MobileTableOfContents,
    ),
  { ssr: false },
)

const { header, seo } = attributes

export const metadata = createMetadata({
  seo: {
    ...seo,
    image: graphicsData.security5.data.src,
  },
  path: PATHS.MATURITY_MODEL.path,
})

export default function MaturityModel() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        description={header.description}
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
          <div className="hidden lg:sticky lg:top-12 lg:order-last lg:block lg:w-72">
            <DesktopTableOfContents />
          </div>
          <div className="sticky top-2 z-10 order-first block lg:hidden">
            <MobileTableOfContents />
          </div>
        </div>
      </PageSection>
    </PageLayout>
  )
}
