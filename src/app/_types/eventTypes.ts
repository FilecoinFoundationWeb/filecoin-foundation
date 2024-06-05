<<<<<<< HEAD
import { type SeoMetadata } from '@/types/metadataTypes'
=======
import { type Metadata } from '@/types/metadataTypes'
>>>>>>> 45074ec (CR)
import { type ImageProps } from '@/types/sharedProps/imageType'

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
  image: ImageProps
  involvement: string
  seo: SeoMetadata
}
