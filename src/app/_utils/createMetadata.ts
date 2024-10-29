import { type Metadata as NextMetadata } from 'next'

import type { DynamicPathValues, PathValues } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import {
  type SeoMetadata,
  SeoMetadataWithOptionalTitleSchema,
} from '@/schemas/SeoMetadataSchema'

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
    'open-graph': {
      title: seo['open-graph']?.title || seo.title,
      description: seo['open-graph']?.description || seo.description,
      image:
        seo['open-graph']?.image || seo.image || graphicsData.home.data.src,
    },
    twitter: {
      card: seo.twitter?.card,
      site: seo.twitter?.site,
      creator: seo.twitter?.creator,
    },
  }

  const parsedEnrichedSEO =
    SeoMetadataWithOptionalTitleSchema.parse(enrichedSEO)

  return {
    title: overrideDefaultTitle
      ? { absolute: parsedEnrichedSEO.title as string }
      : parsedEnrichedSEO.title,
    description: parsedEnrichedSEO.description,
    openGraph: {
      title: parsedEnrichedSEO['open-graph']?.title,
      description: parsedEnrichedSEO.description,
      images: parsedEnrichedSEO['open-graph']?.image,
    },
    twitter: {
      card: parsedEnrichedSEO.twitter?.card || 'summary',
      site:
        parsedEnrichedSEO.twitter?.site ||
        FILECOIN_FOUNDATION_URLS.social.twitter.handle,
      creator:
        parsedEnrichedSEO.twitter?.creator ||
        FILECOIN_FOUNDATION_URLS.social.twitter.handle,
    },
    alternates: {
      canonical: path,
    },
  }
}
