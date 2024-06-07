import { SeoMetadata } from '@/types/metadataTypes'

export type PageAttributes = {
  header: {
    title: string
    description: string | string[]
  }
  featured_entry?: string
  featured_ecosystem_projects?: string[]
  featured_grant_graduates?: string[]
  seo: SeoMetadata
}
