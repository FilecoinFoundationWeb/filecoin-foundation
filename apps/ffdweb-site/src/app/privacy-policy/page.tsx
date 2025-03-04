import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'

import { generateStructuredData } from '@/blog/utils/generateStructuredData'

export default function PrivacyPolicy() {
  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <h1>Privacy Policy</h1>
    </>
  )
}

const seo = {
  metaTitle: 'Privacy Policy',
  metaDescription:
    'Discover how Filecoin Foundation safeguards your data. Read our comprehensive Privacy Policy for detailed information.',
}

export const metadata = createMetadata({
  ...seo,
})
