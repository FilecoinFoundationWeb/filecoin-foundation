import type { Service } from 'schema-dts'

import type { ServicePageGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'
import type { StructuredDataParams } from '@filecoin-foundation/utils/types/structuredDataParams'

import type { NextRouteWithoutLocale } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'
import { STRUCTURED_DATA_IDS } from '@/constants/structuredDataConstants'

import { generateBreadcrumbList } from './generateBreadcrumbsList'

export type ServiceDetails = {
  serviceType: Service['serviceType']
  provider: Service['provider']
  areaServed: Service['areaServed']
  serviceOutput?: Service['serviceOutput']
  audience?: Service['audience']
  termsOfService: Service['termsOfService']
  offers: Service['offers']
}

type ServiceProps = StructuredDataParams & {
  path: NextRouteWithoutLocale
  service: ServiceDetails
}

export function generateServiceStructuredData({
  title,
  description,
  path,
  service,
}: ServiceProps): ServicePageGraph {
  const pageSchema: Service = {
    '@type': 'Service',
    '@id': STRUCTURED_DATA_IDS.getServiceId(path),
    serviceType: service.serviceType,
    name: title,
    url: `${BASE_URL}${path}`,
    provider: service.provider,
    areaServed: service.areaServed,
    description,
    audience: service.audience,
    termsOfService: service.termsOfService,
    serviceOutput: service.serviceOutput,
    offers: service.offers,
  }

  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@graph': [pageSchema, generateBreadcrumbList({ path, title })],
  }
}
