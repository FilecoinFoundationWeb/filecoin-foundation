import { Metadata } from 'next'

import { SeoMetadata } from '@/types/metadataTypes'

import { PathValues } from '@/constants/paths'

export function createMetadata(seo: SeoMetadata, path: PathValues): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: path,
    },
  }
}
