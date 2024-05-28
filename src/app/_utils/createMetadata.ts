import { Metadata } from 'next'

import { PathValues, DynamicPathValues } from '@/constants/paths'

interface CreateMetadataProps {
  seo?: Partial<Metadata>
  title?: string
  description?: string | string[]
  path: PathValues | DynamicPathValues
}

export function createMetadata({
  seo = {},
  title,
  description,
  path,
}: CreateMetadataProps): Metadata {
  const metaTitle = seo.title || title
  const metaDescription = seo.description || description?.toString()

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: path,
    },
  }
}
