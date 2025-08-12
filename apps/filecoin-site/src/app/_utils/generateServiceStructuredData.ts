import type { Service } from 'schema-dts'

import type { ServicePageGraph } from '@filecoin-foundation/ui/StructuredDataScript'
import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'
import type { StructuredDataParams } from '@filecoin-foundation/utils/types/structuredDataParams'

import type { PathValues } from '@/constants/paths'
import { BASE_URL } from '@/constants/siteMetadata'

import { generateBreadcrumbList } from './generateBreadcrumbsList'

type ServiceProps = StructuredDataParams & {
  path: PathValues
  serviceType: Service['serviceType']
  providerId?: string
  areaServed?: Service['areaServed']
  termsOfService?: Service['termsOfService']
  serviceOutput?: Service['serviceOutput']
  offers?: Service['offers']
  audience?: Service['audience']
}

export function generateServiceStructuredData({
  path,
  title,
  description,
  serviceType,
  providerId = `${BASE_URL}/#org`,
  areaServed,
  termsOfService,
  serviceOutput,
  offers,
  audience,
}: ServiceProps): ServicePageGraph {
  const fullUrl = `${BASE_URL}${path}`

  const pageSchema: Service = {
    '@type': 'Service',
    '@id': `${fullUrl}#service`,
    url: fullUrl,
    name: title,
    description,
    serviceType,
    provider: { '@id': providerId },
    ...(areaServed && { areaServed }),
    ...(termsOfService && { termsOfService }),
    ...(serviceOutput && { serviceOutput }),
    ...(offers && { offers }),
    ...(audience && { audience }),
  }

  return {
    '@context': SCHEMA_CONTEXT_URL,
    '@graph': [pageSchema, generateBreadcrumbList({ path, title })],
  }
}
