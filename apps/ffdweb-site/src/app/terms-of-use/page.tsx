import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'

import { generateStructuredData } from '@/blog/utils/generateStructuredData'

export default function TermsOfUse() {
  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(seo)} />
      <h1>Terms of Use</h1>
    </>
  )
}

const seo = {
  metaTitle: 'Terms of Use',
  metaDescription:
    'Understand the terms and conditions of using Filecoin Foundation services. Read our detailed Terms of Use for more information.',
}

export const metadata = createMetadata({
  ...seo,
})
