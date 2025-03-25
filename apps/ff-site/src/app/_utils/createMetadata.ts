import { type SeoMetadata } from '@filecoin-foundation/utils/schemas/SeoMetadataSchema'
import { type Metadata as NextMetadata } from 'next'

import type { DynamicPathValues, PathValues } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

type CreateMetadataProps = {
  seo: SeoMetadata
  path: PathValues | DynamicPathValues
  overrideDefaultTitle?: boolean
}

export function createMetadata({
  seo,
  path,
  overrideDefaultTitle = false,
}: CreateMetadataProps) {
  const enrichedSEO = {
    title: seo.title,
    description: seo.description,
    image: seo.image || graphicsData.home.data.src,
    twitter: {
      card: seo.twitter?.card || 'summary',
      site: seo.twitter?.site || FILECOIN_FOUNDATION_URLS.social.twitter.handle,
      creator:
        seo.twitter?.creator || FILECOIN_FOUNDATION_URLS.social.twitter.handle,
    },
  } as const

  return {
    title: overrideDefaultTitle
      ? { absolute: enrichedSEO.title }
      : enrichedSEO.title,
    description: enrichedSEO.description,
    twitter: {
      ...enrichedSEO.twitter,
      images: enrichedSEO.image,
    },
    openGraph: {
      images: enrichedSEO.image,
    },
    alternates: {
      canonical: path,
    },
  } as const satisfies NextMetadata
}
