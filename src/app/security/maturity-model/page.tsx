import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'

import { graphicsData } from '@/data/graphicsData'

import { attributes } from '@/content/pages/maturity-model.md'

import { PATHS } from '@/constants/paths'

import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = attributes

export const metadata = createMetadata({
  seo,
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
        kicker="Application and Use"
        title="Use the Model"
        description="The Web3 Maturity Model for Security is broken up into 9 core functions –– from leadership and organizational principles to asset management and incident response. Each core function is divided into functional areas, which are each broken into two streams with control criteria. The control criteria must be met in order for the functional area to be measured."
      />
    </PageLayout>
  )
}
