import type { WebPageGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import type { StructuredDataParams } from '@filecoin-foundation/utils/types/structuredDataParams'

import { PATHS } from '@/constants/paths'

import { generatePageStructuredData } from '@/utils/generatePageStructuredData'

import { filecoinFeatures } from '../data/filecoinFeatures'

export function generateStructuredData(
  seo: StructuredDataParams,
): WebPageGraph {
  return generatePageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.BUILD_ON_FILECOIN.path,
    pageType: 'CollectionPage',
    about: filecoinFeatures.map((feature) => ({
      '@type': 'Thing',
      name: feature.title,
    })),
  })
}
