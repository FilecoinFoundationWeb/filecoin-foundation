import { PATHS } from '@/constants/paths'

import employeePrivacyPolicyMarkdown from '@/content/pages/employee-privacy-policy.md'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownPageSchema } from '@/schemas/PageFrontmatterSchema'

import { MarkdownPage } from '@/components/MarkdownPage'

import { generateStructuredData } from './utils/generateStructuredData'

const { attributes, body } = MarkdownPageSchema.parse(
  employeePrivacyPolicyMarkdown,
)

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

export const metadata = createMetadata({
  title: attributes.seo.title,
  description: attributes.seo.description,
  image: attributes.seo.image,
  path: PATHS.EMPLOYEE_PRIVACY_POLICY.path,
})
