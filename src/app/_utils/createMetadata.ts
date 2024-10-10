import { type Metadata as NextMetadata } from 'next'

import type { DynamicPathValues, PathValues } from '@/constants/paths'
import { FILECOIN_FOUNDATION_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

import {
  type SeoMetadata,
  SeoMetadataSchema,
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
    openGraph: {
      title: parsedEnrichedSEO['open-graph']?.title,
      description: parsedEnrichedSEO.description,
      images: parsedEnrichedSEO['open-graph']?.image,
    },
    twitter: {
      card: parsedEnrichedSEO.twitter?.card,
      site: parsedEnrichedSEO.twitter?.site,
      creator: parsedEnrichedSEO.twitter?.creator,
    },
    alternates: {
      canonical: path,
    },
  }
}
