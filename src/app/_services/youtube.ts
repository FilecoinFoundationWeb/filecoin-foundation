import { YouTubeVideoMetadataSchema } from '@/schemas/YouTubeVideoMetadataSchema'

export async function fetchYouTubeVideoMetadata(videoId: string) {
  return fetch(
    `https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${videoId}&format=json`,
  )
    .then((response) => response.json())
    .then(YouTubeVideoMetadataSchema.parse)
}
