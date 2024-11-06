import { PATHS } from '@/constants/paths'

import { attributes, body } from '@/content/pages/employee-privacy-policy.md'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownContent } from '@/components/MarkdownContent'
import { PageHeader } from '@/components/PageHeader'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { generateStructuredData } from './utils/generateStructuredData'

const { header, seo } = attributes

export const metadata = createMetadata({
  seo,
  path: PATHS.EMPLOYEE_PRIVACY_POLICY.path,
})

export default function EmployeePrivacyPolicy() {
  const { title } = header

  return (
    <article>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <header className="mb-6">
        <PageHeader.Title>{title}</PageHeader.Title>
      </header>
      <MarkdownContent>{body}</MarkdownContent>
    </article>
  )
}
