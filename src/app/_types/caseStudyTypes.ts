import { Metadata } from '@/types/metadataTypes'

export type CaseStudyData = {
  title: string
  slug: string
  createdOn?: string
  updatedOn?: string
  publishedOn?: string
  featured?: boolean
  description?: string
  cta?: {
    url: string
    text: string
  }
  image: {
    url: string
    alt: string
  }
  metadata?: Metadata
}
