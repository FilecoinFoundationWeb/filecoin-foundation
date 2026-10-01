import { PATHS } from '@/constants/paths'

import { employeePrivacyPolicyPageItem } from '@/qino/items/employeePrivacyPolicyPage'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownPage } from '@/components/MarkdownPage'

import { generateStructuredData } from './utils/generateStructuredData'

export default async function EmployeePrivacyPolicy() {
  const { header, seo, markdown } =
    await employeePrivacyPolicyPageItem.getEntry()

  return (
    <MarkdownPage
      title={header.title}
      structuredData={generateStructuredData(seo)}
    >
      {markdown}
    </MarkdownPage>
  )
}

export async function generateMetadata() {
  const { seo } = await employeePrivacyPolicyPageItem.getEntry()

  return createMetadata({
    title: seo.title,
    description: seo.description,
    path: PATHS.EMPLOYEE_PRIVACY_POLICY.path,
  })
}
