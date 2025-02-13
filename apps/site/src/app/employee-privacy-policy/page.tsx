import { PATHS } from '@/constants/paths'

import employeePrivacyPolicyMarkdown from '@/content/pages/employee-privacy-policy.md'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownPageSchema } from '@/schemas/PageFrontmatterSchema'

import { MarkdownPage } from '@/components/MarkdownPage'

import { generateStructuredData } from './utils/generateStructuredData'

const { attributes, body } = MarkdownPageSchema.parse(
  employeePrivacyPolicyMarkdown,
)

export const metadata = createMetadata({
  seo: attributes.seo,
  path: PATHS.EMPLOYEE_PRIVACY_POLICY.path,
})

export default function EmployeePrivacyPolicy() {
  return (
    <MarkdownPage
      title={attributes.header.title}
      structuredData={generateStructuredData(attributes.seo)}
    >
      {body}
    </MarkdownPage>
  )
}
