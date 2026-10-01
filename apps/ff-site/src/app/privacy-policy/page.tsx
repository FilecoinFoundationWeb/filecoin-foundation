import { PATHS } from '@/constants/paths'

import { privacyPolicyPageItem } from '@/qino/items/privacyPolicyPage'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownPage } from '@/components/MarkdownPage'

import { generateStructuredData } from './utils/generateStructuredData'

export default async function PrivacyPolicy() {
  const { header, seo, markdown } = await privacyPolicyPageItem.getEntry()

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
  const { seo } = await privacyPolicyPageItem.getEntry()

  return createMetadata({
    title: seo.title,
    description: seo.description,
    path: PATHS.PRIVACY_POLICY.path,
  })
}
