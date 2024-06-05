<<<<<<< HEAD
import { type SeoMetadata } from '@/types/metadataTypes'
=======
import { type Metadata } from '@/types/metadataTypes'
>>>>>>> 45074ec (CR)
import { type ImageProps } from '@/types/sharedProps/imageType'

export type EcosystemProjectData = {
  title: string
  slug: string
  createdOn: string
  updatedOn?: string
  publishedOn?: string
  description: string
  category: string
  subcategories: string[]
  tags: string[]
  tech: string[]
  image: ImageProps
  website: string
  content?: string
  featuredContent?: string
  repo?: string
  twitter?: string
  videoUrl?: string
  yearJoined?: string
  newsUpdate?: string
  seo: SeoMetadata
}
