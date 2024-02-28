import { Metadata } from '@/types/metadataTypes'

export type CaseStudyData = {
  title: string
  slug: string
  'published-on'?: string
  featured?: boolean
  description?: string
  image?: {
    url: string
    alt: string
  }
  cta?: {
    url: string
    text: string
  }
  'created-on'?: string
  'updated-on'?: string
  metadata?: Metadata
}
