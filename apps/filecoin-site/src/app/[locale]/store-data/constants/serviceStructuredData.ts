import { BASE_URL } from '@/constants/siteMetadata'
import { STRUCTURED_DATA_IDS } from '@/constants/structuredDataConstants'

import type { ServiceDetails } from '@/utils/generateServiceStructuredData'

export const SERVICE_STRUCTURED_DATA: ServiceDetails = {
  serviceType: 'Decentralized data storage',
  provider: { '@id': STRUCTURED_DATA_IDS.ORGANIZATION },
  areaServed: 'Global',
  termsOfService: `${BASE_URL}/terms-of-use`,
  serviceOutput: 'Tamper-evident, verifiable data storage',
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: 'FIL',
    },
    url: `${BASE_URL}/store-data`,
  },
}
