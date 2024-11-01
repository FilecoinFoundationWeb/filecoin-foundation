import { z } from 'zod'

import { type LumaEventEntry, LumaResponseSchema } from '../schemas/LumaSchema'

export async function getLumaEvents(): Promise<Array<LumaEventEntry>> {
  const apiKey = process.env.NEXT_LUMA_FILECOIN_API_KEY
  if (!apiKey) throw new Error('Luma API key is not configured')

  try {
    const res = await fetch(
      'https://api.lu.ma/public/v1/calendar/list-events',
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          authorization: `Bearer ${apiKey}`,
        },
        next: { revalidate: 3600 },
      },
    )

    if (!res.ok) {
      throw new Error(`Failed to fetch events: ${res.status} ${res.statusText}`)
    }

    const rawData = await res.json()

    const validatedData = LumaResponseSchema.parse(rawData)

    return validatedData.entries
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Invalid API response format:', error.errors)
    } else {
      console.error('Error fetching events:', error)
    }

    return []
  }
}
