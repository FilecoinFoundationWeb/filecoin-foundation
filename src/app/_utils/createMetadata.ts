import { Metadata } from 'next'

import { PathValues, DynamicPathValues } from '@/constants/paths'

export function createMetadata(
  seo: Metadata,
  path: PathValues | DynamicPathValues
): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: path,
    },
  }
}
