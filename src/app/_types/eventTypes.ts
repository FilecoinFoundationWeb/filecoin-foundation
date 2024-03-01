import { Metadata } from '@/types/metadataTypes'

export type EventData = {
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
  startDate: string
  endDate?: string
  image?: {
    url: string
    alt: string
  }
  eventType?: string
  involvement?: string
  metadata?: Metadata
}
