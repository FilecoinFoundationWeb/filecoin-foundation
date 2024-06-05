import { SeoMetadata } from '@/types/metadataTypes'

export type PageAttributes = {
  header: {
    title: string
    description: string | string[]
  }
<<<<<<< HEAD
  seo: Pick<SeoMetadata, 'title' | 'description'>
  featured_entry?: string
  featured_ecosystem_projects?: string[]
  featured_grant_graduates?: string[]
=======
  seo: Metadata
  featured_entry?: string
  featured_ecosystem_projects?: string[]
  grant_graduates?: string[]
>>>>>>> 45074ec (CR)
}
