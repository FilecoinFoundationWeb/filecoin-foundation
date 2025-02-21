import { YOUTUBE_BASE_URL, YOUTUBE_EMBED_BASE_URL } from '../constants'

type YoutubeUrlTransformOptions = {
  to: 'embed' | 'base'
}

export function formatYoutubeUrl(
  url: string,
  { to }: YoutubeUrlTransformOptions,
) {
  const urlIsEmbedFormat = url.startsWith(YOUTUBE_EMBED_BASE_URL)
  const urlIsBaseFormat = url.startsWith(YOUTUBE_BASE_URL)

  if (!urlIsEmbedFormat && !urlIsBaseFormat) {
    throw new Error(`Invalid Youtube URL: ${url}`)
  }

  if (urlIsEmbedFormat && to === 'embed') {
    return url
  }

  if (urlIsBaseFormat && to === 'base') {
    return url
  }

  if (to === 'embed') {
    return url.replace(YOUTUBE_BASE_URL, YOUTUBE_EMBED_BASE_URL)
  }

  return url.replace(YOUTUBE_EMBED_BASE_URL, YOUTUBE_BASE_URL)
}
