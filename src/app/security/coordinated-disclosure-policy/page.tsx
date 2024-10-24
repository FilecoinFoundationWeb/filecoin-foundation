import { PATHS } from '@/constants/paths'

import {
  attributes,
  react as Content,
} from '@/content/pages/security/coordinated-disclosure-policy.md'

import { createMetadata } from '@/utils/createMetadata'

import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = attributes

export const metadata = createMetadata({
  seo,
  path: PATHS.COORDINATED_DISCLOSURE_POLICY.path,
  overrideDefaultTitle: true,
})

export default function CoordinatedDisclosurePolicy() {
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
