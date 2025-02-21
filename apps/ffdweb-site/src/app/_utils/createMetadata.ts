import { type Metadata as NextMetadata } from 'next'

type MetadataParams = {
  metaTitle: string
  metaDescription: string
  overrideTitle?: boolean
}

export function createMetadata({
  metaTitle,
  metaDescription,
  overrideTitle = false,
}: MetadataParams): NextMetadata {
  return {
    title: overrideTitle ? { absolute: metaTitle } : `${metaTitle}`,
    description: metaDescription,
  }
}
