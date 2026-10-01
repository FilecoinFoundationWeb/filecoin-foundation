import { PATHS } from '@/constants/paths'

import { coordinatedDisclosurePolicyPageItem } from '@/qino/items/coordinatedDisclosurePolicyPage'

import { graphicsData } from '@/data/graphicsData'

import { createMetadata } from '@/utils/createMetadata'

import { MarkdownPage } from '@/components/MarkdownPage'

import { generateStructuredData } from './utils/generateStructuredData'

export default async function CoordinatedDisclosurePolicy() {
  const { header, seo, markdown } =
    await coordinatedDisclosurePolicyPageItem.getEntry()

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
  const { seo } = await coordinatedDisclosurePolicyPageItem.getEntry()

  return createMetadata({
    title: { absolute: seo.title },
    description: seo.description,
    image: graphicsData.securityCoordinatedDisclosurePolicy.data.src,
    path: PATHS.COORDINATED_DISCLOSURE_POLICY.path,
  })
}
