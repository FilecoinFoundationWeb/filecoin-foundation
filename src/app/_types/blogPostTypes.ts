import { type Metadata } from '@/types/metadataTypes'
import { type ImageProps } from '@/types/sharedProps/imageType'

export type BlogPostData = {
  slug: string
  title: string
  createdOn?: string
  updatedOn?: string
  publishedOn?: string
  featured?: boolean
  category?: string
  description: string
  image: ImageProps
  content?: string
  recommendedPosts?: string[]
  metadata?: Metadata
}
