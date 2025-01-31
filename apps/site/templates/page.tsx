;`import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { attributes } from '@/content/pages/__PATH_NAME__.md'

import { createMetadata } from '@/utils/createMetadata'

import { BaseFrontmatterSchema } from '@/schemas/PageDataSchema'

import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = BaseFrontmatterSchema.parse(attributes)

export const metadata = createMetadata({
  seo: {
    ...seo,
    image: graphicsData.imageFallback.data.src,
  },
  path: PATHS.__PATH_NAME__.path,
})

export default function __PAGE_NAME_PASCAL_CASE__() {
  return (
    <PageLayout>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <PageHeader
        title={header.title}
        image={graphicsData.imageFallback}
      />

      <PageSection kicker="New kicker" title="New title"></PageSection>

      <CTASection
        title=""
        description=""
      />
    </PageLayout>
  )
}`
