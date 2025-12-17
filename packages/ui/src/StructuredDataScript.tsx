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
  BlogPosting,
  CollectionPage,
} from 'schema-dts'

import { SCHEMA_CONTEXT_URL } from '@filecoin-foundation/utils/constants/structuredDataConstants'

export type BlogPageGraph = {
  '@context': typeof SCHEMA_CONTEXT_URL
  '@graph': Array<Blog | ItemList | BreadcrumbList>
}

export type BlogPostPageGraph = {
  '@context': typeof SCHEMA_CONTEXT_URL
  '@graph': Array<BlogPosting | BreadcrumbList>
}

export type CollectionPageGraph = {
  '@context': typeof SCHEMA_CONTEXT_URL
  '@graph': Array<CollectionPage | ItemList | BreadcrumbList>
}

export type OrganizationGraph = {
  '@context': typeof SCHEMA_CONTEXT_URL
  '@graph': readonly [Organization, WebSite]
}

export type ServicePageGraph = {
  '@context': typeof SCHEMA_CONTEXT_URL
  '@graph': Array<Service | BreadcrumbList>
}

export type WebPageGraph = {
  '@context': typeof SCHEMA_CONTEXT_URL
  '@graph': Array<WebPage | BreadcrumbList>
}

type StructuredDataScriptProps = {
  structuredData:
    | BlogPageGraph
    | BlogPostPageGraph
    | CollectionPageGraph
    | OrganizationGraph
    | ServicePageGraph
    | WebPageGraph
    | WithContext<Thing>
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
