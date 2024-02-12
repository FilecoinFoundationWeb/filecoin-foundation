import StructuredDataScript from '@/components/StructuredDataScript'

import { createMetadata } from '@/utils/createMetadata'
import { generateWebPageStructuredData } from '@/utils/structuredData'

import { attributes, react as Content } from '@/content/pages/terms.md'

const { title, seo } = attributes

import { PATHS } from '@/constants/paths'

export const metadata = createMetadata(seo, PATHS.TERMS)

const termsPageBaseData = generateWebPageStructuredData({
  title: seo.title,
  description: seo.description,
  path: PATHS.TERMS,
})

export default function Terms() {
  return (
    <>
      <StructuredDataScript structuredData={termsPageBaseData} />
      <header>
        <h1>{title}</h1>
      </header>

      <div>
        <Content />
      </div>
    </>
  )
}
