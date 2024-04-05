import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes, react as Content } from '@/content/pages/terms.md'

const { header, seo } = attributes
import { PATHS } from '@/constants/paths'

export const metadata = createMetadata(seo, PATHS.TERMS.path)

const termsPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.TERMS.path,
})

export default function Terms() {
  return (
    <>
      <StructuredDataScript structuredData={termsPageBaseData} />
      <PageHeader title={header.title} description={header.description} />
      <Content />
    </>
  )
}
