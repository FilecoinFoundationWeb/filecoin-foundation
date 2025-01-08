import * as Sentry from '@sentry/node'

import { graphicsData } from '@/data/graphicsData'

import { checkLocalAsset } from './checkLocalImage'

type ImageProps = {
  src: string
  alt?: string
}

const fallbackImage = {
  src: graphicsData.imageFallback.data.src,
  alt: '',
}

export function injectFallbackIfLocalImageIsInvalid(data: ImageProps) {
  try {
    const imageExists = checkLocalAsset(data.src)

    if (!imageExists) {
      console.log(`Image "${data.src}" not found in assets, using fallback`)
      Sentry.captureMessage(`Image "${data.src}" not found in assets`)
      return fallbackImage
    }

    return data
  } catch (error) {
    console.log(`Error validating image "${data.src}", using fallback`)
    Sentry.captureException(error)
    return fallbackImage
  }
}

export function injectFallbackIfNoLocalImage(data?: ImageProps) {
  if (!data) {
    return fallbackImage
  }

  return data
}
