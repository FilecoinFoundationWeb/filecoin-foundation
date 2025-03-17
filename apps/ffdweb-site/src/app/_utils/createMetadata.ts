import type { AbsoluteString } from 'next/dist/lib/metadata/types/metadata-types'

import type { Metadata } from 'next'

import {
  BASE_URL,
  FFDW_URLS,
  ORGANIZATION_NAME,
} from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'

type SharedSocialMetadata = {
  title?: string
  description?: string
  image?: string
}

export type MetadataParams = {
  path: `/${string}`
  title: string | AbsoluteString
  description: string
  image?: string
  openGraph?: SharedSocialMetadata & {
    type?: 'website' | 'article'
  }
  twitter?: SharedSocialMetadata & {
    card?: 'summary' | 'summary_large_image' | 'player'
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
  const imageArray = [image || graphicsData.homepage.data.src]

  const {
    type = 'website',
    title: openGraphTitle = title,
    description: openGraphDescription = description,
    image: openGraphImage = imageArray,
  } = openGraph

  const {
    card = 'summary',
    title: twitterTitle = title,
    description: twitterDescription = description,
    site = FFDW_URLS.social.twitter.handle,
    creator = FFDW_URLS.social.twitter.handle,
    image: twitterImage = imageArray,
  } = twitter

  return {
    title,
    description,
    openGraph: {
      type,
      title: openGraphTitle,
      description: openGraphDescription,
      images: openGraphImage,
      siteName: ORGANIZATION_NAME,
      url: BASE_URL,
    },
    twitter: {
      title: twitterTitle,
      description: twitterDescription,
      card,
      site,
      creator,
      images: twitterImage,
    },
    alternates: {
      canonical: path,
    },
  } as const satisfies Metadata
}
