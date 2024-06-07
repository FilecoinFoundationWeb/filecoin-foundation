import { type Metadata as NextMetadata } from 'next'

import { type SeoMetadata } from '@/types/metadataTypes'

import { PathValues, DynamicPathValues } from '@/constants/paths'

type CreateMetadataProps = {
  seo: SeoMetadata
  path: PathValues | DynamicPathValues
  useAbsoluteTitle?: boolean
}

export function createMetadata({
  seo,
  path,
  useAbsoluteTitle = false,
}: CreateMetadataProps): NextMetadata {
  const { title, description } = seo

  return {
    title: useAbsoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: path,
    },
  }
}
