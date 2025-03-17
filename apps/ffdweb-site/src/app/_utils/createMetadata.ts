import type { AbsoluteString } from 'next/dist/lib/metadata/types/metadata-types'

import type { Metadata } from 'next'

import {
  BASE_URL,
  FFDW_URLS,
  ORGANIZATION_NAME,
} from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

export type MetadataParams = {
  path: `/${string}`
  title: string | AbsoluteString
  description: string
  image?: string
  openGraph?: {
    type?: 'website' | 'article'
  }
  twitter?: {
    card?: 'summary' | 'summary_large_image'
  }
}

export function createMetadata({
  path,
  title,
  description,
  image,
  openGraph = {},
  twitter = {},
}: MetadataParams) {
  const { type = 'website' } = openGraph
  const { card = 'summary_large_image' } = twitter

  const images = [image || graphicsData.imageFallback.data.src]

  return {
    title,
    description,
    openGraph: {
      type,
      title,
      description,
      images,
      siteName: ORGANIZATION_NAME,
      url: BASE_URL,
    },
    twitter: {
      title,
      description,
      card,
      site: FFDW_URLS.social.twitter.handle,
      creator: FFDW_URLS.social.twitter.handle,
      images,
    },
    alternates: {
      canonical: path,
    },
  } as const satisfies Metadata
}
