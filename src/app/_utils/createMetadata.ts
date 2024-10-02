import { type Metadata as NextMetadata } from 'next'

import type { DynamicPathValues, PathValues } from '@/constants/paths'

import {
  type SeoMetadata,
  SeoMetadataSchema,
} from '@/schemas/seoMetadataSchema'

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
  const parsedSEO = SeoMetadataSchema.parse(seo)

  const enrichedSEO = {
    title: parsedSEO.title,
    description: parsedSEO.description,
    og: {
      title: parsedSEO.og?.title || parsedSEO.title,
      image: parsedSEO.og?.image || parsedSEO.image,
    },
    twitter: {
      card: parsedSEO.twitter?.card,
      site: parsedSEO.twitter?.site,
      creator: parsedSEO.twitter?.creator,
    },
  }

  const parsedEnrichedSEO = SeoMetadataSchema.parse(enrichedSEO)

  const meta = {
    title: overrideDefaultTitle
      ? { absolute: parsedEnrichedSEO.title }
      : parsedEnrichedSEO.title,
    description: parsedEnrichedSEO.description,
    openGraph: {
      title: parsedEnrichedSEO.og?.title,
      description: parsedEnrichedSEO.description,
      images: parsedEnrichedSEO.og?.image,
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

  console.log({ seo, parsedSEO, enrichedSEO, parsedEnrichedSEO, meta })
  return meta
}
