import { Metadata } from '@/types/metadataTypes'

export type EventData = {
  title: string
  slug: string
  createdOn: string
  updatedOn?: string
  publishedOn?: string
  description?: string
  location: string
  externalLink?: {
    href: string
    text: string
  }
  startDate: string
  endDate?: string
  image?: {
    url: string
    alt: string
  }
  involvement?: string
  metadata?: Metadata
}
