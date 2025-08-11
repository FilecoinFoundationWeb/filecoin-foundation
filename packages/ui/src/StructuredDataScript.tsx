import type {
  BreadcrumbList,
  Blog,
  Organization,
  Service,
  Thing,
  WebPage,
  WebSite,
  WithContext,
  ItemList,
} from 'schema-dts'

import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'

export type WebPageGraph = {
  '@context': typeof SCHEMA_CONTEXT_URL
  '@graph': [WebPage, BreadcrumbList]
}

export type ServicePageGraph = {
  '@context': typeof SCHEMA_CONTEXT_URL
  '@graph': Array<Service | BreadcrumbList>
}

export type BlogPageGraph = {
  '@context': typeof SCHEMA_CONTEXT_URL
  '@graph': Array<Blog | ItemList | BreadcrumbList>
}

export type OrganizationGraph = {
  '@context': typeof SCHEMA_CONTEXT_URL
  '@graph': readonly [Organization, WebSite]
}

type StructuredDataScriptProps = {
  structuredData:
    | WithContext<Thing>
    | WebPageGraph
    | ServicePageGraph
    | BlogPageGraph
    | OrganizationGraph
}

export function StructuredDataScript({
  structuredData,
}: StructuredDataScriptProps) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
      type="application/ld+json"
    />
  )
}
