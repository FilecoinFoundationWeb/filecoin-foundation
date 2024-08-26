import { type NextRequest } from 'next/server'

import { z } from 'zod'

import { getCollectionConfig } from '@/utils/cmsConfigUtils'
import { decrypt, encrypt, PREFIX } from '@/utils/encryption'

const payloadSchema = z.object({
  value: z.string(),
  operation: z.enum(['encrypt', 'decrypt']),
})

async function handleRequest(request: NextRequest) {
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
    const errorMessage =
      error instanceof z.ZodError
        ? `Validation failed: ${error.message}`
        : `An error occurred: ${error}`

    return new Response(errorMessage, { status: 400 })
  }
}

export async function POST(request: NextRequest) {
  return handleRequest(request)
}

export async function GET() {
  const { fields } = getCollectionConfig('ecosystem_projects')

  const emailFieldConfig = fields.find((field) => field.name === 'email')
  const fullNameFieldConfig = fields.find((field) => field.name === 'full-name')

  if (!emailFieldConfig || !fullNameFieldConfig) {
    return new Response("Couldn't find relevant field config", {
      status: 400,
    })
  }

  const config = {
    encryptionPrefix: PREFIX,
    emailCMSName: emailFieldConfig.name,
    fullNameCMSName: fullNameFieldConfig.name,
  }

  return Response.json(config)
}
