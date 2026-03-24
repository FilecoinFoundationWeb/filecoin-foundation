import path from 'node:path'

import type { PathConfig } from '@/constants/paths'

/**
 * Read the HubSpot documentation for more information.
 *
 * @see https://developers.hubspot.com/docs/api-reference/legacy/forms-v3-legacy/post-submissions-v3-integration-submit-portalId-formGuid
 */

const HUBSPOT_FORM_API_BASE_URL =
  'https://api.hsforms.com/submissions/v3/integration/submit'

export function getHubspotFormsUrl(formId?: string) {
  if (!process.env.HUBSPOT_PORTAL_ID) {
    throw new Error('HUBSPOT_PORTAL_ID  is not set')
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

export function getFields(obj: Record<string, unknown>) {
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
