import path from 'node:path'

import { type NextRequest } from 'next/server'

import { PATHS } from '@/constants/paths'

import { HUBSPOT_FORM_API_BASE_URL } from '../config'

import { createStoreDataFormSchema } from '@/store-data/talk-to-expert/schema/StoreDataFormSchema'

const RequestSchema = createStoreDataFormSchema()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = RequestSchema.parse(body)

    const portalId = process.env.HUBSPOT_PORTAL_ID
    const formId = process.env.HUBSPOT_STORE_DATA_FORM_ID
    if (!portalId || !formId) {
      throw new Error(
        'HUBSPOT_PORTAL_ID or HUBSPOT_STORE_DATA_FORM_ID is not set',
      )
    }

    const hubspotUrl = path.join(HUBSPOT_FORM_API_BASE_URL, portalId, formId)

    const response = await fetch(hubspotUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: [
          { name: 'firstname', value: data.firstName },
          { name: 'lastname', value: data.lastName },
          { name: 'email', value: data.businessEmail },
          { name: 'company', value: data.companyName },
          { name: 'additional_info', value: `Data volume: ${data.dataVolume}` },
        ],
        legalConsentOptions: {
          consent: {
            consentToProcess: true,
            text: 'I agree to allow Filecoin to store and process my personal data.',
            communications: [
              {
                value: data.communicationOptIn,
                subscriptionTypeId: 2233676376,
                text: `I ${data.communicationOptIn ? '' : 'do not'} agree to receive other communications from Filecoin.`,
              },
            ],
          },
        },
        context: {
          pageUri: PATHS.STORE_DATA_TALK_TO_EXPERT.path,
          pageName: PATHS.STORE_DATA_TALK_TO_EXPERT.label,
        },
      }),
    })

    const responseBody = await response.json()

    if (!response.ok) {
      return Response.json(
        { ok: false, error: responseBody?.errors?.toString() },
        { status: 400 },
      )
    }

    return Response.json({
      status: 200,
      data: responseBody?.inlineMessage,
    })
  } catch (error) {
    return Response.json(
      { ok: false },
      { status: 400, statusText: String(error) },
    )
  }
}
