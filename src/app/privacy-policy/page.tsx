import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes, react as Content } from '@/content/pages/privacy-policy.md'

const { title, seo } = attributes

import { PATHS } from '@/constants/paths'

export const metadata = createMetadata(seo, PATHS.PRIVACY_POLICY.path)

const policyPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.PRIVACY_POLICY.path,
})

export default function PrivacyPolicy() {
  return (
    <>
      <StructuredDataScript structuredData={policyPageBaseData} />
      <header>
        <h1>{title}</h1>
      </header>

      <div>
        <Content />
      </div>
    </>
  )
}
