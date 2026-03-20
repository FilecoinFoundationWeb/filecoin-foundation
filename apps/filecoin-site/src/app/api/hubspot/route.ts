import { type NextRequest } from 'next/server'

import { PATHS } from '@/constants/paths'

import { createTalkToExpertFormSchema } from '@/store-data/schema/TalkToExpertFormSchema'

const RequestSchema = createTalkToExpertFormSchema()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = RequestSchema.parse(body)

    const hubspotUrl = process.env.HUBSPOT_STORE_DATA_FORM_URL
    if (!hubspotUrl) {
      throw new Error('HUBSPOT_STORE_DATA_FORM_URL is not set')
    }

    const response = await fetch(hubspotUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: [
          { objectTypeId: '0-1', name: 'firstname', value: data.firstName },
          { objectTypeId: '0-1', name: 'lastname', value: data.lastName },
          { objectTypeId: '0-1', name: 'email', value: data.businessEmail },
          { objectTypeId: '0-1', name: 'company', value: data.companyName },
          {
            objectTypeId: '0-1',
            name: 'additional_info',
            value: `Data volume: ${data.dataVolume}`,
          },
        ],
        legalConsentOptions: {
          communications: [
            {
              value: data.communicationOptIn,
              subscriptionTypeId: 2233676376,
              text: `I ${data.communicationOptIn ? '' : 'do not'} agree to receive other communications from Filecoin.`,
            },
          ],
        },
        context: {
          pageUri: PATHS.STORE_DATA_TALK_TO_EXPERT.path,
          pageName: PATHS.STORE_DATA_TALK_TO_EXPERT.label,
        },
      }),
    })

    if (!response.ok) {
      return Response.json({ ok: false }, { status: 502 })
    }

    return Response.json({ ok: true }, { status: 200 })
  } catch (error) {
    return Response.json(
      { ok: false },
      { status: 400, statusText: String(error) },
    )
  }
}
