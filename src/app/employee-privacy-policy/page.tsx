import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'

import {
  attributes,
  react as Content,
} from '@/content/pages/employee-privacy-policy.md'

import { PATHS } from '@/constants/paths'

import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = attributes

export const metadata = createMetadata({ seo, path: PATHS.EMPLOYEE_PRIVACY_POLICY.path })

export default function EmployeePrivacyPolicy() {
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
