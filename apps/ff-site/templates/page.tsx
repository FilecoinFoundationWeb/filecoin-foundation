;`import { PageHeader } from '@filecoin-foundation/ui/PageHeader'
import { PageLayout } from '@filecoin-foundation/ui/PageLayout'
import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { PATHS } from '@/constants/paths'

import { attributes } from '@/content/pages/__PATH_NAME__.md'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { PageFrontmatterSchema } from '@/schemas/PageFrontmatterSchema'

import { CTASection } from '@/components/CTASection'
import { PageSection } from '@/components/PageSection'

import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = PageFrontmatterSchema.parse(attributes)

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
}

export const metadata = createMetadata({
  title: { absolute: seo.title },
  description: seo.description,
  image: graphicsData.imageFallback.data.src,
  path: PATHS.__PATH_NAME__.path,
})`
