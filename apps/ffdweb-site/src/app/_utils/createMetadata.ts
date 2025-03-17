import type { AbsoluteString } from 'next/dist/lib/metadata/types/metadata-types'

import type { Metadata } from 'next'

import { FFDW_URLS } from '@/constants/siteMetadata'

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
    site?: string
    creator?: string
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

  const {
    card = 'summary_large_image',
    site = FFDW_URLS.social.twitter.handle,
    creator = FFDW_URLS.social.twitter.handle,
  } = twitter

  const images = [image || graphicsData.imageFallback.data.src]

  return {
    title,
    description,
    openGraph: {
      type,
      title,
      description,
      images,
    },
    twitter: {
      title,
      description,
      card,
      site,
      creator,
      images,
    },
    alternates: {
      canonical: path,
    },
  } as const satisfies Metadata
}
