import type { SeoMetadata } from '@/schemas/SeoMetadataSchema'

export type PageAttributes = {
  header: {
    description: string | Array<string>,
    title: string
  }
  seo: SeoMetadata,
  featured_ecosystem_projects?: Array<string>
  featured_entry?: string,
  featured_grant_graduates?: Array<string>
}

export type SecurityMaturityModelAttributes = {
  order: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  title: string
}
