import { z } from 'zod'

export const RecapSchema = z.strictObject({
  'youtube-embed-url': z.url().optional(),
  'youtube-playlist-url': z.url().optional(),
})
