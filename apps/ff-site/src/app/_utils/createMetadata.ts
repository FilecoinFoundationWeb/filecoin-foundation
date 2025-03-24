import {
  type SeoMetadata,
  SeoMetadataSchema,
} from '@filecoin-foundation/utils/schemas/SeoMetadataSchema'
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
}: CreateMetadataProps): NextMetadata {
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
  }

  const parsedEnrichedSEO = SeoMetadataSchema.parse(enrichedSEO)

  return {
    title: overrideDefaultTitle
      ? { absolute: parsedEnrichedSEO.title }
      : parsedEnrichedSEO.title,
    description: parsedEnrichedSEO.description,
    twitter: { ...parsedEnrichedSEO.twitter },
    openGraph: {
      images: parsedEnrichedSEO.image,
    },
    alternates: {
      canonical: path,
    },
  }
}
