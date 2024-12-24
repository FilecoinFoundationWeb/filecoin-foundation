import { type NextRequest } from 'next/server'

const NEWSLETTER_API_URL = `${process.env.NEWSLETTER_SUBSCRIPTION_API_URL}/publications/${process.env.NEWSLETTER_SUBSCRIPTION_PUBLICATION_ID}/subscriptions`
const AUTHORIZATION_HEADER = `Bearer ${process.env.NEWSLETTER_SUBSCRIPTION_API_KEY}`

export async function POST(request: NextRequest) {
  const { email } = await request.json()

  const response = await fetch(NEWSLETTER_API_URL, {
    method: 'POST',
    headers: {
      Authorization: AUTHORIZATION_HEADER,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, reactivate_existing: true }),
  })

  if (!response.ok) {
    return new Response('Failed to subscribe', { status: 400 })
  }

  return new Response('Successfully subscribed', { status: 200 })
}
