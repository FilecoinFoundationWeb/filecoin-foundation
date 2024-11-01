import { LumaResponseSchema } from '../schemas/LumaSchema'

const apiKey = process.env.LUMA_FILECOIN_API_KEY

export async function fetchAndParseLumaEvents() {
  if (!apiKey) throw new Error('Luma API key is not configured')

  const res = await fetch('https://api.lu.ma/public/v1/calendar/list-events', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${apiKey}`,
    },
    next: { revalidate: 3600 },
  })

  const rawData = await res.json()
  const validatedData = LumaResponseSchema.parse(rawData)
  return validatedData.entries
}
