import { z } from 'zod'

export const RecapSchema = z
  .object({
    'youtube-embed-url': z.string().url().optional(),
    'youtube-playlist-url': z.string().url().optional(),
  })
  .strict()
