import type { Metadata } from 'next'

export type MetadataParams = {
  path: `/${string}`
  metaTitle: string
  metaDescription: string
  overrideTitle?: boolean
}

export function createMetadata({
  path,
  metaTitle,
  metaDescription,
  overrideTitle = false,
}: MetadataParams): Metadata {
  return {
    title: overrideTitle ? { absolute: metaTitle } : `${metaTitle}`,
    description: metaDescription,
    alternates: {
      canonical: path,
    },
  }
}
