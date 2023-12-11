import { Metadata } from '@/types/metadataTypes'

export type CaseStudyData = {
  title: string
  'created-on'?: string
  'updated-on'?: string
  'published-on'?: string
  f_color?: string
  f_cta?: string
  'f_cta-text'?: string
  f_featured?: boolean
  default: false
  'f_preview-text'?: string
  f_description?: string
  f_image?: {
    url?: string
    alt?: string
  }
  'f_image-background-position'?: string
  tags?: string
  layout?: string
  slug: string
  date?: string
  metadata?: Metadata
}
