import path from 'node:path'

import type { NextRequest } from 'next/server'

import type { PathConfig } from '@/constants/paths'

/**
 * Read the HubSpot documentation for more information.
 *
 * @see https://developers.hubspot.com/docs/api-reference/legacy/forms-v3-legacy/post-submissions-v3-integration-submit-portalId-formGuid
 */

const HUBSPOT_FORM_API_BASE_URL =
  'https://api.hsforms.com/submissions/v3/integration/submit'

type fetcherFn = (request: NextRequest) => Promise<Response>

export function withHubSpotResponseHandler(fetcherFn: fetcherFn) {
  return async function handler(request: NextRequest) {
    try {
      const response = await fetcherFn(request)
      const responseBody = await response.json()

      if (!response.ok) {
        return Response.json(
          { error: responseBody?.errors?.toString() },
          { status: response.status, statusText: response.statusText },
        )
      }

      return Response.json(
        { data: responseBody?.inlineMessage },
        { status: 200, statusText: response.statusText },
      )
    } catch (error) {
      return Response.json(
        { error: String(error) },
        { status: 500, statusText: String(error) },
      )
    }
  }
}

export function getHubspotFormsUrl(formId?: string) {
  if (!process.env.HUBSPOT_PORTAL_ID) {
    throw new Error('HUBSPOT_PORTAL_ID is not set')
  }

  if (!formId) {
    throw new Error('formId is missing in getHubspotFormsUrl')
  }

  return path.join(
    HUBSPOT_FORM_API_BASE_URL,
    process.env.HUBSPOT_PORTAL_ID,
    formId,
  )
}

export function getFields(obj: Record<string, string>) {
  return Object.entries(obj).map(([name, value]) => ({
    objectTypeId: '0-1',
    name,
    value,
  }))
}

export function getLegalConsentOptions(optIn: boolean) {
  return {
    consent: {
      consentToProcess: true,
      text: 'I agree to allow Filecoin to store and process my personal data.',
      communications: [
        {
          value: optIn,
          subscriptionTypeId: 2233676376,
          text: `I ${optIn ? '' : 'do not'} agree to receive other communications from Filecoin.`,
        },
      ],
    },
  }
}

export function getContext(path: PathConfig) {
  return {
    pageUri: path.path,
    pageName: path.label,
  }
}

export function getSubmittedAt() {
  return Date.now().toString()
}
