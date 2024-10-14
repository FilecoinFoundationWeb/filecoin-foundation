import { YOUTUBE_BASE_URL, YOUTUBE_EMBED_BASE_URL } from '../constants'

export function formatYoutubeEmbedUrl(youtubeUrl?: string) {
  return youtubeUrl?.replace(YOUTUBE_BASE_URL, YOUTUBE_EMBED_BASE_URL)
}

export function formatYoutubeUrl(youtubeEmbedUrl?: string) {
  return youtubeEmbedUrl?.replace(YOUTUBE_EMBED_BASE_URL, YOUTUBE_BASE_URL)
}
