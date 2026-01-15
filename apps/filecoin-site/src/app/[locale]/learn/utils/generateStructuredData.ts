import type { CollectionPageGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import type { StructuredDataParams } from '@filecoin-foundation/utils/types/structuredDataParams'

import { generateLearnStructuredData } from './generateLearnStructuredData'

export function generateStructuredData(
  seo: StructuredDataParams,
): CollectionPageGraph {
  return generateLearnStructuredData({
    name: seo.title,
    description: seo.description,
    about: [
      'Filecoin',
      'Decentralized storage',
      'Verifiable data',
      'Web3 infrastructure',
    ],
  })
}
