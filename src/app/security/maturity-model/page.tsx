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
    </PageLayout>
  )
}
