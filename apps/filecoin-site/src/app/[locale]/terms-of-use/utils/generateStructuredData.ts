import type { WebPageGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import type { StructuredDataParams } from '@filecoin-foundation/utils/types/structuredDataParams'

import { generatePageStructuredData } from '@/utils/generatePageStructuredData'

export function generateStructuredData(
  seo: StructuredDataParams,
): WebPageGraph {
  return generatePageStructuredData({
    title: seo.title,
    description: seo.description,
    path: '/terms-of-use',
    pageType: 'WebPage',
  })
}
