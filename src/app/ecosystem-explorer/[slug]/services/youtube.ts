import { z } from 'zod'

const videoMetadataSchema = z.object({
  title: z.string(),
  author_name: z.string(),
  author_url: z.string(),
  type: z.string(),
  height: z.number(),
  width: z.number(),
  version: z.string(),
  provider_name: z.string(),
  provider_url: z.string(),
  thumbnail_height: z.number(),
  thumbnail_width: z.number(),
  thumbnail_url: z.string(),
  html: z.string(),
})

export async function fetchYouTubeVideoMetadata(videoId: string) {
  return fetch(
    `https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${videoId}&format=json`,
  )
    .then((response) => response.json())
    .then(videoMetadataSchema.parse)
}
