import type { NextRequest } from 'next/server'

import { PATHS } from '@/constants/paths'

import {
  getContext,
  getFields,
  getHubspotFormsUrl,
  getLegalConsentOptions,
  getSubmittedAt,
  withHubSpotResponseHandler,
} from '../config'

import { createProvideStorageFormSchema } from '@/provide-storage/onboarding/schema/ProvideStorageFormSchema'

const RequestSchema = createProvideStorageFormSchema()

const hubspotFormsUrl = getHubspotFormsUrl(
  process.env.HUBSPOT_PROVIDE_STORAGE_FORM_ID,
)

export const POST = withHubSpotResponseHandler(async (request: NextRequest) => {
  const body = await request.json()
  const data = RequestSchema.parse(body)
  const mappedData = {
    firstname: data.firstName,
    lastname: data.lastName,
    email: data.businessEmail,
    company: data.companyName,
    ...(data.additionalInfo ? { additional_info: data.additionalInfo } : {}),
  }

  return fetch(hubspotFormsUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      submittedAt: getSubmittedAt(),
      fields: getFields(mappedData),
      legalConsentOptions: getLegalConsentOptions(data.communicationOptIn),
      context: getContext(PATHS.PROVIDE_STORAGE_ONBOARDING),
    }),
  })
})
