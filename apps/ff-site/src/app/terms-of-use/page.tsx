import { PATHS } from '@/constants/paths'

import { termsOfUsePageItem } from '@/qino/items/termsOfUsePage'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownPage } from '@/components/MarkdownPage'

import { generateStructuredData } from './utils/generateStructuredData'

export default async function TermsOfUse() {
  const { header, seo, markdown } = await termsOfUsePageItem.getEntry()

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
  const { seo } = await termsOfUsePageItem.getEntry()

  return createMetadata({
    title: seo.title,
    description: seo.description,
    path: PATHS.TERMS_OF_USE.path,
  })
}
