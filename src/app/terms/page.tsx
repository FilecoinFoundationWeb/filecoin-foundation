import { MarkdownContent } from '@/components/MarkdownContent'
import { PageHeader } from '@/components/PageHeader'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'
import { getTermsData } from '@/utils/getTermsData'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes } from '@/content/pages/terms.md'

const { header, seo } = attributes
import { PATHS } from '@/constants/paths'

export const metadata = createMetadata(seo, PATHS.TERMS.path)

const termsPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.TERMS.path,
})

export default function Terms() {
  const { content } = getTermsData()
  return (
    <PageLayout>
      <StructuredDataScript structuredData={termsPageBaseData} />
      <PageHeader title={header.title} />
      {content && <MarkdownContent>{content}</MarkdownContent>}
    </PageLayout>
  )
}
