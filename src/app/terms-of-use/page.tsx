import { PATHS } from '@/constants/paths'

import { attributes, react as Content } from '@/content/pages/terms-of-use.md'

import { createMetadata } from '@/utils/createMetadata'


import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'




import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = attributes

export const metadata = createMetadata({ seo, path: PATHS.TERMS_OF_USE.path })

export default function Terms() {
  const { title } = header

  return (
    <article>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <header>
        <PageHeader.Title>{title}</PageHeader.Title>
      </header>
      <section className="prose mt-6">
        <Content />
      </section>
    </article>
  )
}
