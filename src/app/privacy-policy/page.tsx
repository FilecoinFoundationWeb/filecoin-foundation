import { Heading } from '@/components/Heading'
import { PageLayout } from '@/components/PageLayout'
import { StructuredDataScript } from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes, react as Content } from '@/content/pages/privacy-policy.md'

const { header, seo } = attributes
import { PATHS } from '@/constants/paths'

export const metadata = createMetadata(seo, PATHS.PRIVACY_POLICY.path)

const policyPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.PRIVACY_POLICY.path,
})

export default function PrivacyPolicy() {
  const { title } = header

  return (
    <PageLayout>
      <StructuredDataScript structuredData={policyPageBaseData} />
      <Heading tag="h1" variant="4xl">
        {title}
      </Heading>

      <div className="prose">
        <Content />
      </div>
    </PageLayout>
  )
}
