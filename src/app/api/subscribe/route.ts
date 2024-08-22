import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const AUTHORIZATION_HEADER = `Bearer ${process.env.NEWSLETTER_SUBSCRIPTION_API_KEY}`
  const NEWSLETTER_URL = `${process.env.NEWSLETTER_SUBSCRIPTION_API_URL}/publications/${process.env.NEWSLETTER_SUBSCRIPTION_PUBLICATION_ID}/subscriptions`

  const { email } = await request.json()

  const response = await fetch(NEWSLETTER_URL, {
    method: 'POST',
    headers: {
      Authorization: AUTHORIZATION_HEADER,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, reactivate_existing: true }),
  })

  if (!response.ok) {
    return new Response('Failed to subscribe', { status: 500 })
  }

  return new Response('Successfully subscribed', { status: 200 })
}
