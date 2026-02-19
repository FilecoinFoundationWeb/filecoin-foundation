import { type NextRequest } from 'next/server'

const MAILCHIMP_URL = `https://protocol.us16.list-manage.com/subscribe/post-json?u=${process.env.MAILCHIMP_U}&id=${process.env.MAILCHIMP_ID}`

export async function POST(request: NextRequest) {
  const { email } = await request.json()

  if (!email || typeof email !== 'string') {
    return Response.json(
      { ok: false, message: 'Email is required' },
      { status: 400 },
    )
  }

  const res = await fetch(
    `${MAILCHIMP_URL}&EMAIL=${encodeURIComponent(email)}`,
    { method: 'GET', headers: { Accept: 'application/json' } },
  )
  const data = (await res.json()) as { result?: string; msg?: string }

  if (data.result === 'error') {
    return Response.json(
      { ok: false, message: data.msg ?? 'Subscription failed' },
      { status: 400 },
    )
  }

  return Response.json({ ok: true })
}
