import type { Metadata } from 'next'

import type { AbsoluteString } from 'next/dist/lib/metadata/types/metadata-types'

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
    locale?: string
  }
  twitter?: SharedSocialMetadata & {
    card?: 'summary' | 'summary_large_image' | 'player'
    site?: string
    creator?: string
  }
  fallbackImage: string
  orgName: string
  orgHandle: string
}

export function createMetadata({
  path,
  title,
  description,
  image,
  openGraph = {},
  twitter = {},
  fallbackImage,
  orgName,
  orgHandle,
}: MetadataParams) {
  const imageArray = [image || fallbackImage]

  const {
    type = 'website',
    locale = 'en_US',
    image: openGraphImage = imageArray,
  } = openGraph

  const {
    card = 'summary_large_image',
    site = orgHandle,
    creator = orgHandle,
    image: twitterImage = imageArray,
  } = twitter

  return {
    title,
    description,
    openGraph: {
      type,
      locale,
      images: openGraphImage,
      siteName: orgName,
      url: path,
    },
    twitter: {
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
