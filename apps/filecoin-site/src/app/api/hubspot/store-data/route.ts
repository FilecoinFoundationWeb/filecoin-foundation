import type { NextRequest } from 'next/server'

import { PATHS } from '@/constants/paths'

import {
  getContext,
  getFields,
  getHubSpotFormsUrl,
  getLegalConsentOptions,
  getSubmittedAt,
  withHubSpotResponseHandler,
} from '../config'

import { createStoreDataFormSchema } from '@/store-data/talk-to-expert/schema/StoreDataFormSchema'

const RequestSchema = createStoreDataFormSchema()

const hubspotFormsUrl = getHubSpotFormsUrl(
  process.env.HUBSPOT_STORE_DATA_FORM_ID,
)

export const POST = withHubSpotResponseHandler(async (request: NextRequest) => {
  const body = await request.json()
  const data = RequestSchema.parse(body)
  const mappedData = {
    firstname: data.firstName,
    lastname: data.lastName,
    email: data.businessEmail,
    company: data.companyName,
    how_much_data_are_you_looking_to_store: data.dataVolume,
  }

  return fetch(hubspotFormsUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      submittedAt: getSubmittedAt(),
      fields: getFields(mappedData),
      legalConsentOptions: getLegalConsentOptions(data.communicationOptIn),
      context: getContext(PATHS.STORE_DATA_TALK_TO_EXPERT),
    }),
  })
})
