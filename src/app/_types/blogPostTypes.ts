import { Metadata } from '@/types/metadataTypes'

export type BlogPostData = {
  slug: string
  title: string
  createdOn?: string
  updatedOn?: string
  publishedOn?: string
  featured?: boolean
  category?: string
  description: string
  image: {
    url: string
    alt: string
  }
  content?: string
  recommendedPosts?: string[]
  metadata?: Metadata
}
