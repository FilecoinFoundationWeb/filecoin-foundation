import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'

import { attributes, react as Content } from '@/content/pages/privacy-policy.md'

import { PATHS } from '@/constants/paths'

import { generatePrivacyPolicyStructuredData } from './utils/structuredData'

const { header, seo } = attributes

export const metadata = createMetadata({ seo, path: PATHS.PRIVACY_POLICY.path })

export default function PrivacyPolicy() {
  const { title } = header

  return (
    <article>
      <StructuredDataScript
        structuredData={generatePrivacyPolicyStructuredData(seo)}
      />
      <PageHeader.Title>{title}</PageHeader.Title>
      <section className="prose mt-6">
        <Content />
      </section>
    </article>
  )
}
