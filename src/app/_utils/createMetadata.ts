import { type Metadata as NextMetadata } from 'next'

import { type SeoMetadata } from '@/types/metadataTypes'

import type { DynamicPathValues, PathValues } from '@/constants/paths'
import { FILECOIN_URLS } from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

const DEFAULT_IMAGE = graphicsData.home.data.src

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
  const { title, description } = seo

  const openGraphImage = seo.og?.image || seo.image || DEFAULT_IMAGE

  return {
    title: overrideDefaultTitle ? { absolute: title } : title,
    description,
    openGraph: {
      title: seo.og?.title || title,
      description,
      images: openGraphImage,
    },
    twitter: {
      card: seo.twitter?.card,
      site: seo.twitter?.site || FILECOIN_URLS.social.twitter.handle,
      creator: seo.twitter?.creator || FILECOIN_URLS.social.twitter.handle,
    },
    alternates: {
      canonical: path,
    },
  }
}
