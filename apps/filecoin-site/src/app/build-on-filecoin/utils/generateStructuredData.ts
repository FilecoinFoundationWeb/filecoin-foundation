import type { WebPageGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import type { StructuredDataParams } from '@filecoin-foundation/utils/types/structuredDataParams'

import { PATHS } from '@/constants/paths'

import { generatePageStructuredData } from '@/utils/generatePageStructuredData'

export function generateStructuredData(
  seo: StructuredDataParams,
): WebPageGraph {
  return generatePageStructuredData({
    title: seo.title,
    description: seo.description,
    path: PATHS.BUILD_ON_FILECOIN.path,
    pageType: 'CollectionPage',
    about: [
      { '@type': 'Thing', name: 'AI data storage & processing' },
      { '@type': 'Thing', name: 'Cross-chain data bridges' },
      { '@type': 'Thing', name: 'Storage-enabled dApps' },
    ],
  })
}
