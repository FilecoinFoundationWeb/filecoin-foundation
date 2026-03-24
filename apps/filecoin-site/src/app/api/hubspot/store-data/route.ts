import { type NextRequest } from 'next/server'

import { PATHS } from '@/constants/paths'

import {
  getContext,
  getFields,
  getHubspotFormsUrl,
  getLegalConsentOptions,
  getSubmittedAt,
} from '../config'

import { createStoreDataFormSchema } from '@/store-data/talk-to-expert/schema/StoreDataFormSchema'

const RequestSchema = createStoreDataFormSchema()

const hubspotFormsUrl = getHubspotFormsUrl(
  process.env.HUBSPOT_STORE_DATA_FORM_ID,
)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = RequestSchema.parse(body)

    const response = await fetch(hubspotFormsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        submittedAt: getSubmittedAt(),
        fields: getFields({
          firstname: data.firstName,
          lastname: data.lastName,
          email: data.businessEmail,
          company: data.companyName,
          how_much_data_are_you_looking_to_store: data.dataVolume,
        }),
        legalConsentOptions: getLegalConsentOptions(data.communicationOptIn),
        context: getContext(PATHS.STORE_DATA_TALK_TO_EXPERT),
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
