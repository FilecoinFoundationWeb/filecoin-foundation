import { SeoMetadata } from '@/types/metadataTypes'

export type PageAttributes = {
  header: {
    title: string
    description: string | string[]
  }
  seo: Pick<SeoMetadata, 'title' | 'description'>
  featured_entry?: string
  featured_ecosystem_projects?: string[]
  grant_graduates?: string[]
}
