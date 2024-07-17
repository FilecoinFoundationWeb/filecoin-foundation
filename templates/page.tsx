;`import { CTASection } from '@/components/CTASection'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { PageSection } from '@/components/PageSection'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'

import { attributes } from '@/content/pages/__PAGE_NAME__.md'

import { PATHS } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'
import { graphicsData } from '@/data/graphicsData'

import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = attributes

export const metadata = createMetadata({
  seo,
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
