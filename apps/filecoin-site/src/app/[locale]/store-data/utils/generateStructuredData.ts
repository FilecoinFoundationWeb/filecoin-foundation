import type { ServicePageGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import type { StructuredDataParams } from '@filecoin-foundation/utils/types/structuredDataParams'

import { generateServiceStructuredData } from '@/utils/generateServiceStructuredData'

import { SERVICE_STRUCTURED_DATA } from '../constants/serviceStructuredData'

export function generateStructuredData(
  seo: StructuredDataParams,
): ServicePageGraph {
  return generateServiceStructuredData({
    title: seo.title,
    description: seo.description,
    path: '/store-data',
    service: SERVICE_STRUCTURED_DATA,
  })
}
