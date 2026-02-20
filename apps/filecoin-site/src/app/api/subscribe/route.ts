import { type NextRequest } from 'next/server'

import * as Sentry from '@sentry/nextjs'

const MAILCHIMP_JSONP_CALLBACK = 'handle_response'

export async function POST(request: NextRequest) {
  let body: { email?: unknown }

  try {
    body = await request.json()
  } catch {
    return Response.json({ ok: false }, { status: 400 })
  }

  const { email } = body

  if (!email || typeof email !== 'string') {
    return Response.json({ ok: false }, { status: 400 })
  }

  const baseUrl = getMailchimpSubscribeUrl()
  if (!baseUrl) {
    return Response.json({ ok: false }, { status: 503 })
  }

  const response = await fetch(
    `${baseUrl}&EMAIL=${encodeURIComponent(email)}&c=${MAILCHIMP_JSONP_CALLBACK}`,
    { method: 'GET' },
  )

  if (!response.ok) {
    return Response.json({ ok: false }, { status: 502 })
  }

  const text = await response.text()

  let data: { result?: string; msg?: string }
  try {
    const json = text.replace(/^[^(]+\(/, '').replace(/\)$/, '')
    data = JSON.parse(json)
  } catch {
    Sentry.captureException(
      new Error(
        'Failed to parse Mailchimp response as JSON from Mailchimp API',
      ),
    )
    console.error(
      'Failed to parse Mailchimp response as JSON from Mailchimp API',
    )
    return Response.json({ ok: false }, { status: 502 })
  }

  if (data.result === 'error') {
    return Response.json(
      { ok: false, ...(data.msg && { message: data.msg }) },
      { status: 400 },
    )
  }

  const isAlreadySubscribed = data.msg
    ?.toLowerCase()
    .includes('already subscribed')

  return Response.json({ ok: true, isAlreadySubscribed })
}

function getMailchimpSubscribeUrl() {
  const u = process.env.MAILCHIMP_U
  const id = process.env.MAILCHIMP_LIST_ID
  if (!u || !id) return null
  return `https://protocol.us16.list-manage.com/subscribe/post-json?u=${u}&id=${id}`
}
