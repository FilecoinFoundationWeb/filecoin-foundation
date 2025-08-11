import { PATHS } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'
import { WEBSITE_SCHEMA } from '@/constants/structuredDataConstants'

export const SERVICE_STRUCTURED_DATA = {
  serviceType: 'Decentralized data storage',
  providerId: WEBSITE_SCHEMA.publisher['@id'],
  areaServed: 'Global',
  termsOfService: `${BASE_URL}/terms`,
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
