import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes, react as Content } from '@/content/pages/terms.md'

import { PATHS } from '@/constants/paths'

const { header, seo } = attributes

export const metadata = createMetadata({ seo, path: PATHS.TERMS.path })

const termsPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.TERMS.path,
})

export default function Terms() {
  const { title } = header

  return (
    <article>
      <StructuredDataScript structuredData={termsPageBaseData} />
      <PageHeader.Title>{title}</PageHeader.Title>
      <section className="prose mt-6">
        <Content />
      </section>
    </article>
  )
}
