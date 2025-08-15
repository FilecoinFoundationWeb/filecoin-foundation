import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'
import { STRUCTURED_DATA_IDS } from '@/constants/structuredDataConstants'

import type { ServiceDetails } from '@/utils/generateServiceStructuredData'

export const SERVICE_STRUCTURED_DATA: ServiceDetails = {
  serviceType: 'Decentralized data storage',
  provider: { '@id': STRUCTURED_DATA_IDS.ORGANIZATION },
  areaServed: 'Global',
  termsOfService: `${BASE_URL}/${PATHS.TERMS_OF_USE.path}`,
  serviceOutput: 'Tamper-evident, verifiable data storage',
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'FIL',
    },
    url: `${BASE_URL}${PATHS.STORE_DATA.path}`,
  },
} as const
