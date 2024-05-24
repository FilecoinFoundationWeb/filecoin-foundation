import { Heading } from '@/components/Heading'
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
  const { title } = header

  return (
    <article>
      <StructuredDataScript structuredData={termsPageBaseData} />
      <Heading tag="h1" variant="4xl">
        {title}
      </Heading>

      <section className="prose mt-6">
        <Content />
      </section>
    </article>
  )
}
