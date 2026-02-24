import { type NextRequest } from 'next/server'

import { z } from 'zod'

const MAILCHIMP_JSONP_CALLBACK = 'handle_response'
const ALREADY_SUBSCRIBED_KEYWORD = 'already subscribed'

const RequestSchema = z.object({
  email: z.email(),
})

const MailchimpResponseSchema = z.object({
  result: z.string(),
  msg: z.string().optional(),
  type: z.string().optional(),
  webEngagementCookieValue: z.unknown().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = RequestSchema.parse(body)

    const url = getMailchimpSubscribeUrl(email)

    const response = await fetch(url, { method: 'GET' })
    if (!response.ok) {
      return Response.json({ ok: false }, { status: 502 })
    }

    const text = await response.text()
    const data = parseMailchimpJsonp(text)

    const isAlreadySubscribed =
      data.msg?.toLowerCase().includes(ALREADY_SUBSCRIBED_KEYWORD) ?? false

    return Response.json({ ok: true, isAlreadySubscribed }, { status: 200 })
  } catch (error) {
    return Response.json(
      { ok: false },
      { status: 400, statusText: String(error) },
    )
  }
}

function parseMailchimpJsonp(text: string) {
  const json = text.replace(/^handle_response\(/, '').replace(/\)\s*$/, '')
  return MailchimpResponseSchema.parse(JSON.parse(json))
}

function getMailchimpSubscribeUrl(email: string) {
  const u = process.env.MAILCHIMP_U
  const id = process.env.MAILCHIMP_LIST_ID

  const baseUrl = `https://protocol.us16.list-manage.com/subscribe/post-json?u=${u}&id=${id}`
  const url = new URL(baseUrl)
  url.searchParams.set('EMAIL', email)
  url.searchParams.set('c', MAILCHIMP_JSONP_CALLBACK)
  return url.toString()
}
