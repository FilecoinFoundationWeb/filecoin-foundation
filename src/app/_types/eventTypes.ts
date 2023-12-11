import { Metadata } from '@/types/metadataTypes'

export type EventData = {
  title: string
  'created-on'?: string
  'updated-on'?: string
  'published-on'?: string
  f_featured?: boolean
  f_description?: string
  f_cta?: string
  'f_cta-text'?: string
  'f_start-date': string
  'f_end-date'?: string
  'f_event-date'?: string
  'f_ff-involvement'?: string
  f_image?: {
    url: string
    alt?: string
  }
  'f_image-background-position'?: string
  'f_icon-type'?: string
  tags?: string
  layout?: string
  date?: string
  slug: string
  metadata?: Metadata
}
