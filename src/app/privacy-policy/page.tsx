import { PATHS } from '@/constants/paths'

import { attributes, react as Content } from '@/content/pages/privacy-policy.md'

import { createMetadata } from '@/utils/createMetadata'

import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { generateStructuredData } from '@/privacy-policy/utils/generateStructuredData'

const { header, seo } = attributes

export const metadata = createMetadata({ seo, path: PATHS.PRIVACY_POLICY.path })

export default function PrivacyPolicy() {
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
