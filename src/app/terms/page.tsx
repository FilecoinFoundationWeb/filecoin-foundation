import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'
import { generateTermsStructuredData } from '@/utils/structuredData'

import { attributes, react as Content } from '@/content/pages/terms.md'

import { PATHS } from '@/constants/paths'

const { header, seo } = attributes

export const metadata = createMetadata({ seo, path: PATHS.TERMS.path })

export default function Terms() {
  const { title } = header

  return (
    <article>
      <StructuredDataScript structuredData={generateTermsStructuredData(seo)} />
      <PageHeader.Title>{title}</PageHeader.Title>
      <section className="prose mt-6">
        <Content />
      </section>
    </article>
  )
}
