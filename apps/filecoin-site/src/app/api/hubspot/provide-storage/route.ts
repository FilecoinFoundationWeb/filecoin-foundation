import { type NextRequest } from 'next/server'

import { PATHS } from '@/constants/paths'

import {
  getContext,
  getFields,
  getHubspotFormsUrl,
  getLegalConsentOptions,
  getSubmittedAt,
} from '../config'

import { createProvideStorageFormSchema } from '@/provide-storage/onboarding/schema/ProvideStorageFormSchema'

const RequestSchema = createProvideStorageFormSchema()

const hubspotFormsUrl = getHubspotFormsUrl({
  portalId: process.env.HUBSPOT_PORTAL_ID,
  formId: process.env.HUBSPOT_PROVIDE_STORAGE_FORM_ID,
})

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
          additional_info: data.additionalInfo,
        }),
        legalConsentOptions: getLegalConsentOptions(data.communicationOptIn),
        context: getContext(PATHS.PROVIDE_STORAGE_ONBOARDING),
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
