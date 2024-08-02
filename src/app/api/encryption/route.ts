import { type NextRequest } from 'next/server'

import { z } from 'zod'

import { encrypt, decrypt } from '@/utils/encryption'

const payloadSchema = z.object({
  value: z.string(),
  operation: z.enum(['encrypt', 'decrypt']),
})

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json()
    const { value, operation } = payloadSchema.parse(payload)

    if (operation === 'encrypt') {
      return Response.json({ result: encrypt(value) })
    }

    if (operation === 'decrypt') {
      return Response.json({ result: decrypt(value) })
    }

    return new Response('Invalid request', { status: 400 })
  } catch (error) {
    return new Response(String(error), { status: 400 })
  }
}
