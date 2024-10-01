import { type Metadata as NextMetadata } from 'next'

import type { DynamicPathValues, PathValues } from '@/constants/paths'

import type { SeoMetadata } from '@/schemas/seoMetadataSchema'

type CreateMetadataProps = {
  seo: SeoMetadata
  path: PathValues | DynamicPathValues
  overrideDefaultTitle?: boolean
}

export function createMetadata({
  seo,
  path,
  overrideDefaultTitle = false,
}: CreateMetadataProps): NextMetadata {
  const { title, description, image } = seo

  return {
    title: overrideDefaultTitle ? { absolute: title } : title,
    description,
    openGraph: {
      title: seo.og?.title || title,
      description,
      images: seo.og?.image || image,
    },
    twitter: {
      card: seo.twitter?.card,
      site: seo.twitter?.site,
      creator: seo.twitter?.creator,
    },
    alternates: {
      canonical: path,
    },
  }
}
