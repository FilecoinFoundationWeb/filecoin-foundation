import type { WebPageGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import type { StructuredDataParams } from '@filecoin-foundation/utils/types/structuredDataParams'

import { PATHS } from '@/constants/paths'

import { generatePageStructuredData } from '@/utils/generatePageStructuredData'

type Feature = {
  title: string
}

export function generateStructuredData(
  seo: StructuredDataParams,
  features: Array<Feature>,
): WebPageGraph {
  return generatePageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.BUILD_ON_FILECOIN.path,
    pageType: 'CollectionPage',
    about: features.map((feature) => ({
      '@type': 'Thing',
      name: feature.title,
    })),
  })
}
