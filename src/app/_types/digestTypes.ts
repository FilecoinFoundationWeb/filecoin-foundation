import { type SeoMetadata } from '@/types/metadataTypes'
import { type ImageProps } from '@/types/sharedProps/imageType'

export type DigestData = {
  slug: string
  title: string
  description: string
  issueNumber: number
  articleNumber: number
  publicationDate: string
  content?: string
  image: ImageProps
  seo: SeoMetadata
}
