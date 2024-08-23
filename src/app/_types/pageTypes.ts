import { SeoMetadata } from '@/types/metadataTypes'

export type PageAttributes = {
  header: {
    title: string
    description: string | Array<string>
  }
  featured_entry?: string
  featured_ecosystem_projects?: Array<string>
  featured_grant_graduates?: Array<string>
  seo: SeoMetadata
}
