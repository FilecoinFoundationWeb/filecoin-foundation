import type { AbsoluteString } from 'next/dist/lib/metadata/types/metadata-types'

import type { Metadata } from 'next'

import { graphicsData } from '@/data/graphicsData'

export type MetadataParams = {
  path: `/${string}`
  title: string | AbsoluteString
  image?: string
  openGraph?: {
    type?: 'website' | 'article'
  }
  description: string
}

export function createMetadata({
  path,
  title,
  description,
  image,
  openGraph = {},
}: MetadataParams) {
  const { type = 'website' } = openGraph

  return {
    title,
    description,
    openGraph: {
      type,
      title,
      description,
      images: [image || graphicsData.imageFallback.data.src],
    },
    alternates: {
      canonical: path,
    },
  } as const satisfies Metadata
}
