import { type NextRequest } from 'next/server'

const MAILCHIMP_JSONP_CALLBACK = 'handle_response'

export async function POST(request: NextRequest) {
  const { email } = await request.json()

  if (!email || typeof email !== 'string') {
    return Response.json(
      { ok: false, message: 'Email is required' },
      { status: 400 },
    )
  }

  const baseUrl = getMailchimpSubscribeUrl()
  if (!baseUrl) {
    return Response.json(
      { ok: false, message: 'Subscription service unavailable' },
      { status: 503 },
    )
  }

  const res = await fetch(
    `${baseUrl}&EMAIL=${encodeURIComponent(email)}&c=${MAILCHIMP_JSONP_CALLBACK}`,
    { method: 'GET' },
  )

  if (!res.ok) {
    return Response.json(
      { ok: false, message: 'Subscription service unavailable' },
      { status: 502 },
    )
  }

  const text = await res.text()

  let data: { result?: string; msg?: string }
  try {
    const json = text.replace(/^[^(]+\(/, '').replace(/\)$/, '')
    data = JSON.parse(json)
  } catch {
    console.error(
      'Failed to parse Mailchimp response as JSON from Mailchimp API',
    )
    return Response.json(
      { ok: false, message: 'Subscription service unavailable' },
      { status: 502 },
    )
  }

  if (data.result === 'error') {
    return Response.json(
      { ok: false, message: data.msg ?? 'Subscription failed' },
      { status: 400 },
    )
  }

  return Response.json({ ok: true })
}

function getMailchimpSubscribeUrl(): string | null {
  const u = process.env.MAILCHIMP_U
  const id = process.env.MAILCHIMP_LIST_ID
  if (!u || !id) return null
  return `https://protocol.us16.list-manage.com/subscribe/post-json?u=${u}&id=${id}`
}
