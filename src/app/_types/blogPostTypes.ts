import { Metadata } from '@/types/metadataTypes'

export type BlogPostData = {
  body?: string
  title: string
  'created-on'?: string
  'updated-on'?: string
  'published-on'?: string
  f_author?: string
  f_description: string
  f_featured?: boolean
  f_image: {
    url: string
    alt?: string
  }
  'f_recommended-posts'?: Array<{
    value: string
  }>
  'f_post-date'?: string
  tags?: string
  layout?: string
  slug: string
  date: string
  metadata?: Metadata
}
