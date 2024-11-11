;`import { PATHS } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'
import { getFrontmatter } from '@/utils/getFrontmatter'

import { BaseFrontmatterSchema } from '@/schemas/PageDataSchema'

import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = getFrontmatter({
  path: PATHS.__PATH_NAME__,
  zodParser: BaseFrontmatterSchema.parse,
})

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
