import { type Metadata as NextMetadata } from 'next'

import { type SeoMetadata } from '@/types/metadataTypes'

import type { DynamicPathValues, PathValues } from '@/constants/paths'

import { graphicsData } from '@/data/graphicsData'

const DEFAULT_IMAGE = graphicsData.home.data.src

type CreateMetadataProps = {
  seo: SeoMetadata
  path: PathValues | DynamicPathValues
  image?: { src?: string }
  overrideDefaultTitle?: boolean
}

export function createMetadata({
  seo,
  path,
  image,
  overrideDefaultTitle = false,
}: CreateMetadataProps): NextMetadata {
  const { title, description } = seo

  const openGraphImage = seo.og?.image || image?.src || DEFAULT_IMAGE

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
      site: seo.twitter?.site || '@FilFoundation',
      creator: seo.twitter?.creator || '@FilFoundation',
    },
    alternates: {
      canonical: path,
    },
  }
}
