import type { Metadata } from 'next'

type MetadataParams = {
  metaTitle: string
  metaDescription: string
  overrideTitle?: boolean
}

export function createMetadata({
  metaTitle,
  metaDescription,
  overrideTitle = false,
}: MetadataParams): Metadata {
  return {
    title: overrideTitle ? { absolute: metaTitle } : `${metaTitle}`,
    description: metaDescription,
  }
}
