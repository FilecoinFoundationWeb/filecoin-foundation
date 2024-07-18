import { type SeoMetadata } from '@/types/metadataTypes'
import { type ImageProps } from '@/types/sharedProps/imageType'

export type EventData = {
  title: string
  slug: string
  createdOn: string
  updatedOn?: string
  publishedOn?: string
  category: string
  description?: string
  location: string
  externalLink?: string
  startDate: string
  endDate?: string
  image: ImageProps
  seo: SeoMetadata
}
