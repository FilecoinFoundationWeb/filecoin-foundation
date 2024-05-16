import { type Metadata } from '@/types/metadataTypes'
import { type ImageProps } from '@/types/sharedProps/imageType'

export type EcosystemProjectData = {
  title: string
  slug: string
  createdOn?: string
  updatedOn?: string
  publishedOn?: string
  featured?: boolean
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
  metadata?: Metadata
}
